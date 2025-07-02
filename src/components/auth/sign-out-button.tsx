'use client'

import { signOut } from 'next-auth/react'

export function SignOutButton() {
  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <button
      onClick={handleSignOut}
      className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200"
    >
      Sign Out
    </button>
  )
}