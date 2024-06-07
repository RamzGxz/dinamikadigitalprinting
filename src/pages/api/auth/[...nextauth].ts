import { login, loginWithGoogle, retrieveData } from "@/utils/db/service";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from 'bcrypt'
import GoogleProvider from 'next-auth/providers/google'

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email Anda" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string,
          password: string
        }

        const user: any = await login({ email })
        if (user) {
          const conf = await compare(password, user.password)
          if (conf) {
            return user
          }
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
      if (account?.provider === 'credentials') {
        token.id = user.id;
        token.email = user.email;
        token.birthday = user.birthday;
        token.username = user.username;
        token.phone = user.phone;
      }

      if (account?.provider === 'google') {
        const data = {
          username: user.name,
          email: user.email,
          image: user.image,
          type: 'google',
          phone: "",
          birthday: "",
          password: ""
        }

        await loginWithGoogle(data, (result: any) => {
          if (result.status) {
            token.email = result.data.email;
            token.birthday = result.data.birthday;
            token.username = result.data.username;
            token.phone = result.data.phone;
          }
        })

      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user = session.user || {};
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.birthday = token.birthday;
        session.user.username = token.username || token.name;
        session.user.phone = token.phone;
      }
      return session;
    }
  }
}

export default NextAuth(authOptions);
