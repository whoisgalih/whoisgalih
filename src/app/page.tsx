import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dashboard')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to AuthJS Demo
          </h1>
          <p className="text-gray-600">
            Authentication with Firebase Admin
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/auth/signin"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 block text-center"
          >
            Sign In
          </Link>
          
          <Link
            href="/auth/signup"
            className="w-full border border-blue-600 text-blue-600 py-2 px-4 rounded-md hover:bg-blue-50 transition duration-200 block text-center"
          >
            Sign Up
          </Link>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Demo of AuthJS integration with Firebase Admin SDK for secure
            email/password authentication.
          </p>
        </div>
      </div>
    </main>
  )
}