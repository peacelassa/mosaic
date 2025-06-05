// app/welcome/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function WelcomePage() {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push('/dashboard') // Change to your actual dashboard path
  }

  return (
    <main className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Welcome to Fintech  Dashboard</h1>
        <p className="text-lg text-gray-400">Your all-in-one analytics platform</p>
        <button
          onClick={handleGetStarted}
          className="px-6 py-3 text-lg font-medium bg-purple-600 hover:bg-purple-700 rounded-xl shadow-md transition"
        >
          Get Started
        </button>
      </div>
    </main>
  )
}
