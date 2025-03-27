import Link from "next/link"
import { createServerSupabaseClient } from "@/lib/supabase/server"
import LogoutButton from "./logout-button"

export default async function Header() {
  const supabase = createServerSupabaseClient()
  const {
    data: { session },
  } = await (await supabase).auth.getSession()

  let user = null
  if (session) {
    const { data } = await (await supabase).from("users").select("*").eq("id", session.user.id).single()

    user = data
  }

  const isAdmin = user?.role === "admin"

  return (
    <header className="bg-black border-b border-white/10 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Tech<span className="text-yellow-400">Combinator</span>
          {isAdmin && <span className="text-sm text-yellow-400 ml-2">Admin</span>}
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/dashboard" className="text-white hover:text-yellow-400">
            Dashboard
          </Link>
          {isAdmin ? (
            <>
              <Link href="/admin/users" className="text-white hover:text-yellow-400">
                Users
              </Link>
              <Link href="/admin/events" className="text-white hover:text-yellow-400">
                Events
              </Link>
              <Link href="/admin/announcements" className="text-white hover:text-yellow-400">
                Announcements
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile" className="text-white hover:text-yellow-400">
                Profile
              </Link>
              <Link href="/events" className="text-white hover:text-yellow-400">
                Events
              </Link>
              <Link href="/announcements" className="text-white hover:text-yellow-400">
                Announcements
              </Link>
              <Link href="/mentorship" className="text-white hover:text-yellow-400">
                Mentorship
              </Link>
            </>
          )}
        </nav>

        {session && (
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold cursor-pointer">
                {user?.full_name?.charAt(0) || "U"}
              </div>
              <div className="absolute right-0 mt-2 w-48 bg-black/80 border border-white/10 rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link href="/profile" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5">
                  Profile
                </Link>
                <Link href="/settings" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5">
                  Settings
                </Link>
                <div className="border-t border-white/10 my-1"></div>
                <LogoutButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

