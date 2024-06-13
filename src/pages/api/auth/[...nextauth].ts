import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { compare } from 'bcrypt';
import prisma from '@/utils/db/prisma';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email Anda" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error('No credentials provided');
        }

        const { email, password } = credentials;

        // Mencari pengguna berdasarkan email
        const users = await prisma.user.findMany({
          where: { email }
        });

        // Memeriksa apakah ada pengguna dengan email yang sama
        if (users.length === 0) {
          throw new Error('Invalid email or password');
        }
        
        // Memeriksa password dengan menggunakan bcrypt
        const user = users[0]; // Ambil pengguna pertama dari array
        const passwordMatch = await compare(password, user.password);

        if (passwordMatch) {
          return { id: user.id, email: user.email, name: user.username };
        } else {
          throw new Error('Invalid email or password');
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account?.provider === 'credentials' && user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }

      if (account?.provider === 'google') {
        // Mencari pengguna berdasarkan email
        const existingUser = await prisma.user.findMany({
          where: { email: user.email || '' }
        });

        if (existingUser.length > 0) {
          const user = existingUser[0]; // Ambil pengguna pertama dari array
          token.id = user.id;
          token.name = user.username;
        } else {
          // Menyimpan pengguna baru ke dalam database
          const newUser = await prisma.user.create({
            data: {
              email: user.email || '',
              username: user.name || '',
              image: user.image || '' ,
              type: 'google',
              phone: "",
              birthday: "",
              password: ""
            }
          });
          token.id = newUser.id;
          token.name = newUser.username;
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          email: token.email,
          name: token.name,
          phone: token.phone,
          type: token.type,
          birthday: token.birthday,
        } as any
      }

      return session;
    }
  }
};

export default NextAuth(authOptions);
