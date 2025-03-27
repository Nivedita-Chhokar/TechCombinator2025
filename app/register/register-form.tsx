"use client"

import type React from "react"

import { useState } from "react"
import { createClientSupabaseClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

export default function RegisterForm() {
  const router = useRouter()
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setLoading(true)

    try {
      const supabase = createClientSupabaseClient()

      // Sign up the user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })

      if (authError) {
        throw authError
      }

      if (authData.user) {
        // Insert user data into the users table
        const { error: profileError } = await supabase.from("users").insert({
          id: authData.user.id,
          email: email,
          full_name: fullName,
          role: "user",
        })

        if (profileError) {
          throw profileError
        }

        router.push("/dashboard")
        router.refresh()
      }
    } catch (error: any) {
      setError(error.message || "Failed to create account")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded text-sm">{error}</div>}

      <div className="space-y-2">
        <label htmlFor="fullName" className="text-gray-300 block">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
          required
          className="w-full bg-black/40 border border-white/10 rounded px-4 py-2 text-white"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-gray-300 block">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full bg-black/40 border border-white/10 rounded px-4 py-2 text-white"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-gray-300 block">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create a strong password"
          required
          className="w-full bg-black/40 border border-white/10 rounded px-4 py-2 text-white"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="confirmPassword" className="text-gray-300 block">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          required
          className="w-full bg-black/40 border border-white/10 rounded px-4 py-2 text-white"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input type="checkbox" id="terms" required className="rounded border-white/10 bg-black/40" />
        <label htmlFor="terms" className="text-sm text-gray-300">
          I agree to the{" "}
          <a href="/terms" className="text-yellow-400 hover:text-yellow-300">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-yellow-400 hover:text-yellow-300">
            Privacy Policy
          </a>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Creating Account..." : "Create Account"}
      </button>
    </form>
  )
}

