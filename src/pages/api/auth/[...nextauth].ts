import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { compare } from 'bcrypt';
import prisma from '@/utils/db/prisma';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60
  },
  jwt: {
    maxAge: 24 * 60 * 60
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email Anda" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: any) {
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
          return user; // Return full user object
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
    async jwt({ token, account, user }: any) {
      if (account?.provider === 'credentials' && user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.username;
        token.phone = user.phone;
        token.type = user.type;
        token.image = user.image;
        token.birthday = user.birthday;
        token.createdAt = user.createdAt;
        token.updatedAt = user.updatedAt;
        token.emailVerified = user.emailVerified
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
          token.email = user.email;
          token.phone = user.phone;
          token.type = user.type;
          token.image = user.image;
          token.birthday = user.birthday;
          token.createdAt = user.createdAt;
          token.updatedAt = user.updatedAt;
          token.emailVerified = user.emailVerified
        } else {
          // Menyimpan pengguna baru ke dalam database
          const newUser = await prisma.user.create({
            data: {
              email: user.email || '',
              username: user.name || '',
              image: user.image || '',
              type: 'google',
              phone: "",
              birthday: "",
              password: "",
              emailVerified: true
            }
          });
          token.id = newUser.id;
          token.name = newUser.username;
          token.email = newUser.email;
          token.phone = newUser.phone;
          token.type = newUser.type;
          token.image = newUser.image;
          token.birthday = newUser.birthday;
          token.createdAt = newUser.createdAt;
          token.updatedAt = newUser.updatedAt;
          token.emailVerified = newUser.emailVerified
        }
      }

      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user = {
          id: token.id,
          email: token.email,
          name: token.name,
          phone: token.phone,
          type: token.type,
          image: token.image,
          birthday: token.birthday,
          createdAt: token.createdAt,
          updatedAt: token.updatedAt,
          emailVerified: token.emailVerified
        } as any;
      }

      return session;
    }
  }
};

export default NextAuth(authOptions);
