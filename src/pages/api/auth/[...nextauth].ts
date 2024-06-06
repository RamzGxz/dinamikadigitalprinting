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
        };

        // Here you should verify the user's credentials with your database
        const user: any = { id: 1, email: email, password: password };

        if (user) {
          console.log(user);
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  callbacks: {
    jwt({ token, account, profile, user }) {
      if (account?.provider === 'credentials' && user) {
        token.email = user.email;
      }
      console.log(token, account, user);
      return token;
    },
    async session({ session, token }) {
      if (token?.email) {
        session.user = session.user || {};
        session.user.email = token.email;
      }
      console.log(session, token);
      return session;
    }
  }
}

export default NextAuth(authOptions);
