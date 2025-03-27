import { createServerSupabaseClient } from "@/lib/supabase/server"
import Link from "next/link"

export default async function HomePage() {
  const supabase = createServerSupabaseClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold mb-6">
        Tech<span className="text-yellow-400">Combinator</span>
      </h1>
      <p className="text-xl mb-8 max-w-md">A platform for tech collaboration, mentorship, and innovation</p>
      <div className="flex gap-4">
        {session ? (
          <Link href="/dashboard" className="bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-500">
            Dashboard
          </Link>
        ) : (
          <>
            <Link href="/login" className="bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-500">
              Login
            </Link>
            <Link
              href="/register"
              className="bg-white/10 text-white px-6 py-2 rounded-md hover:bg-white/20 border border-white/20"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

