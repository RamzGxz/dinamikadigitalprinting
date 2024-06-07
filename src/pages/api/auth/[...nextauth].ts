import { User } from "@/components/types/userType";
import retrieveData from "@/utils/db/service";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

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
        const users: User[] = await retrieveData('user');

        const user = users.find(user => user.email === email && user.password === password)
        if (user) {
          const { password, ...userWithoutPassword } = user;
          return userWithoutPassword
        } else {
          return null;
        }
      }
    })
  ],
  callbacks: {
    jwt({ token, account, user }) {
      if (account?.provider === 'credentials' && user) {
        token.id = user.id;
        token.email = user.email;
        token.birthday = user.birthday;
        token.username = user.username;
        token.phone = user.phone;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = session.user || {};
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.birthday = token.birthday;
        session.user.username = token.username;
        session.user.phone = token.phone;
      }
      return session;
    }
  }
}

export default NextAuth(authOptions);
