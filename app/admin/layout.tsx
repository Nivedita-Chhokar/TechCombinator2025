import type React from "react"
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-black/60 backdrop-blur-sm border-b border-white/10 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Tech<span className="text-yellow-400">Combinator</span>{" "}
            <span className="text-sm text-yellow-400">Admin</span>
          </h1>
          <nav className="hidden md:flex gap-6">
            <a href="/admin/dashboard" className="text-white hover:text-yellow-400">
              Dashboard
            </a>
            <a href="/admin/users" className="text-white hover:text-yellow-400">
              Users
            </a>
            <a href="/admin/events" className="text-white hover:text-yellow-400">
              Events
            </a>
            <a href="/admin/announcements" className="text-white hover:text-yellow-400">
              Announcements
            </a>
            <a href="/admin/mentorship" className="text-white hover:text-yellow-400">
              Mentorship
            </a>
            <a href="/admin/messages" className="text-white hover:text-yellow-400">
              Messages
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
              AD
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4">{children}</main>
    </div>
  )
}

