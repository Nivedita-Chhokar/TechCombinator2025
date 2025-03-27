export default function AdminPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-black border-b border-white/10 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Tech<span className="text-yellow-400">Combinator</span>{" "}
            <span className="text-sm text-yellow-400">Admin</span>
          </h1>
          <nav className="hidden md:flex gap-6">
            <a href="/" className="text-white hover:text-yellow-400">
              Home
            </a>
            <a href="/admin" className="text-white hover:text-yellow-400">
              Dashboard
            </a>
            <a href="/admin/users" className="text-white hover:text-yellow-400">
              Users
            </a>
            <a href="/admin/events" className="text-white hover:text-yellow-400">
              Events
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-gray-400 mb-8">Manage your tech platform</p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-black border border-white/10 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-300">Total Users</h3>
            <p className="text-2xl font-bold mt-2">248</p>
            <p className="text-xs text-gray-400">+18 this month</p>
          </div>

          <div className="bg-black border border-white/10 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-300">Active Events</h3>
            <p className="text-2xl font-bold mt-2">5</p>
            <p className="text-xs text-gray-400">Next event in 2 days</p>
          </div>

          <div className="bg-black border border-white/10 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-300">Mentorship Sessions</h3>
            <p className="text-2xl font-bold mt-2">12</p>
            <p className="text-xs text-gray-400">4 pending approval</p>
          </div>

          <div className="bg-black border border-white/10 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-300">Support Tickets</h3>
            <p className="text-2xl font-bold mt-2">7</p>
            <p className="text-xs text-gray-400">3 unresolved</p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Announcements</h2>
          <button className="bg-yellow-400 text-black px-3 py-1 rounded text-sm">New Announcement</button>
        </div>

        <div className="space-y-4">
          <div className="bg-black border border-white/10 p-4 rounded-lg">
            <div className="flex justify-between">
              <h3 className="font-medium">Upcoming Hackathon</h3>
              <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded">Published</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Published on April 10, 2025</p>
            <p className="mt-2 text-gray-300">
              We're excited to announce our upcoming 48-hour hackathon focused on AI and machine learning solutions.
            </p>
            <div className="flex justify-between mt-4">
              <span className="text-sm text-gray-400">Sent to: All Users</span>
              <div className="space-x-2">
                <button className="text-sm border border-white/10 px-2 py-1 rounded">Edit</button>
                <button className="text-sm border border-white/10 px-2 py-1 rounded">...</button>
              </div>
            </div>
          </div>

          <div className="bg-black border border-white/10 p-4 rounded-lg">
            <div className="flex justify-between">
              <h3 className="font-medium">Platform Maintenance</h3>
              <span className="text-xs bg-yellow-500 text-black px-2 py-1 rounded">Draft</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Draft - Not Published</p>
            <p className="mt-2 text-gray-300">
              We will be performing scheduled maintenance on our servers this weekend. The platform may be unavailable
              for a few hours during this time.
            </p>
            <div className="flex justify-between mt-4">
              <span className="text-sm text-gray-400">Target: All Users</span>
              <div className="space-x-2">
                <button className="text-sm border border-white/10 px-2 py-1 rounded">Edit</button>
                <button className="text-sm bg-yellow-400 text-black px-2 py-1 rounded">Publish</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

