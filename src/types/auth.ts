import { User } from "next-auth"

export interface AuthUser {
  id: string
  email: string
  name?: string
  image?: string
}

export interface SignInCredentials {
  email: string
  password: string
}

export interface SignUpCredentials {
  email: string
  password: string
  name?: string
}

export interface AuthError {
  message: string
  code?: string
}

declare module "next-auth" {
  interface Session {
    user: AuthUser
  }

  interface User extends AuthUser {}
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    email: string
    name?: string
    image?: string
  }
}