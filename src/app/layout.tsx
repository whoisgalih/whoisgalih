import './globals.css'
import type { Metadata } from 'next'
import { AuthProvider } from '@/components/auth/auth-provider'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'

export const metadata: Metadata = {
  title: 'AuthJS Firebase Auth Demo',
  description: 'Authentication demo using AuthJS with Firebase Admin',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className="font-sans">
        <AuthProvider session={session}>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}