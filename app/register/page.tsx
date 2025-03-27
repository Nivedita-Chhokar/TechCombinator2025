import { createServerSupabaseClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import RegisterForm from "./register-form"

export default async function RegisterPage() {
  const supabase = createServerSupabaseClient()
  const {
    data: { session },
  } = await (await supabase).auth.getSession()

  if (session) {
    redirect("/dashboard")
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <Link
        href="/"
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        ← Back to Home
      </Link>

      <div className="flex items-center gap-2 mb-8">
        <h1 className="text-2xl font-bold text-white">
          Tech<span className="text-yellow-400">Combinator</span>
        </h1>
      </div>

      <div className="w-full max-w-md bg-black/40 border border-white/10 p-8 rounded-lg">
        <h2 className="text-2xl text-center text-white mb-2">Create an Account</h2>
        <p className="text-center text-gray-400 mb-6">Join our tech platform today</p>

        <RegisterForm />

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-yellow-400 hover:text-yellow-300">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

