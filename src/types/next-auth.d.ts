// next-auth.d.ts

import 'next-auth'
import NextAuth from 'next-auth'
import * as auth from 'next-auth'
// import * as client from 'next-auth/client' 
// import 'next-auth/client' 

declare module 'next-auth' {
  export * from 'next-auth'
  export type InitOptions = auth.InitOptions
  export default NextAuth
  interface Session {
    user: {
      id: string,
      email: string,
      password: string,
      birthday: string,
      username: string,
      phone: string
    }
  }
}

declare module 'next-auth/client' {
  export * from 'next-auth/client'

  export interface Session {
    user: {
      id: string,
      email: string,
      password: string,
      birthday: string,
      username: string,
      phone: string
    }
  }
}

