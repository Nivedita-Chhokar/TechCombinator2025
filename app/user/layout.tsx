import type React from "react"
export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-black/60 backdrop-blur-sm border-b border-white/10 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Tech<span className="text-yellow-400">Combinator</span>
          </h1>
          <nav className="hidden md:flex gap-6">
            <a href="/user/dashboard" className="text-white hover:text-yellow-400">
              Dashboard
            </a>
            <a href="/user/profile" className="text-white hover:text-yellow-400">
              Profile
            </a>
            <a href="/user/events" className="text-white hover:text-yellow-400">
              Events
            </a>
            <a href="/user/announcements" className="text-white hover:text-yellow-400">
              Announcements
            </a>
            <a href="/user/mentorship" className="text-white hover:text-yellow-400">
              Mentorship
            </a>
            <a href="/user/messages" className="text-white hover:text-yellow-400">
              Messages
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
              JD
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4">{children}</main>
    </div>
  )
}

