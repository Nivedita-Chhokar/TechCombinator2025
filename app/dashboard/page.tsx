import { createServerSupabaseClient } from "@/lib/supabase/server"
import Link from "next/link"

export default async function DashboardPage() {
  const supabase = await createServerSupabaseClient()

  // Get current user
  const {
    data: { session },
  } = await supabase.auth.getSession()
  const { data: userData } = await supabase.from("users").select("*").eq("id", session?.user?.id).single()

  // Get upcoming events
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .eq("status", "upcoming")
    .order("start_date", { ascending: true })
    .limit(3)

  // Get recent announcements
  const { data: announcements } = await supabase
    .from("announcements")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false })
    .limit(3)

  // Get mentorship sessions
  const { data: mentorshipSessions } = await supabase
    .from("mentorship_sessions")
    .select("*")
    .eq("mentee_id", session?.user?.id)
    .eq("status", "confirmed")
    .order("start_time", { ascending: true })
    .limit(2)

  const isAdmin = userData?.role === "admin"

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400">Welcome back, {userData?.full_name}</p>
        </div>
        {isAdmin && (
          <Link
            href="/admin/announcements/new"
            className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
          >
            + New Announcement
          </Link>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-black border border-white/10 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-300">Upcoming Events</h3>
          <p className="text-2xl font-bold mt-2">{events?.length || 0}</p>
          <p className="text-xs text-gray-400">
            {events && events.length > 0
              ? `Next event on ${new Date(events[0].start_date).toLocaleDateString()}`
              : "No upcoming events"}
          </p>
        </div>

        <div className="bg-black border border-white/10 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-300">Mentorship Sessions</h3>
          <p className="text-2xl font-bold mt-2">{mentorshipSessions?.length || 0}</p>
          <p className="text-xs text-gray-400">
            {mentorshipSessions && mentorshipSessions.length > 0
              ? `Next session on ${new Date(mentorshipSessions[0].start_time).toLocaleDateString()}`
              : "No upcoming sessions"}
          </p>
        </div>

        <div className="bg-black border border-white/10 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-300">New Announcements</h3>
          <p className="text-2xl font-bold mt-2">{announcements?.length || 0}</p>
          <p className="text-xs text-gray-400">
            {announcements && announcements.length > 0
              ? `Latest: ${announcements[0].title}`
              : "No recent announcements"}
          </p>
        </div>

        <div className="bg-black border border-white/10 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-300">Profile Completion</h3>
          <p className="text-2xl font-bold mt-2">75%</p>
          <p className="text-xs text-gray-400">Add skills to complete your profile</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Recent Announcements</h2>
      <div className="space-y-4">
        {announcements && announcements.length > 0 ? (
          announcements.map((announcement) => (
            <div key={announcement.id} className="bg-black border border-white/10 p-4 rounded-lg">
              <div className="flex justify-between">
                <h3 className="font-medium">{announcement.title}</h3>
                {announcement.priority === "high" && (
                  <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded">Important</span>
                )}
              </div>
              <p className="text-sm text-gray-400 mt-1">
                Posted {new Date(announcement.created_at).toLocaleDateString()}
              </p>
              <p className="mt-2 text-gray-300">
                {announcement.content.length > 150
                  ? `${announcement.content.substring(0, 150)}...`
                  : announcement.content}
              </p>
              <div className="mt-4">
                <Link href={`/announcements/${announcement.id}`} className="text-yellow-400 hover:underline">
                  Read more →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-black border border-white/10 p-4 rounded-lg text-center">
            <p className="text-gray-400">No announcements yet</p>
          </div>
        )}
      </div>

      <h2 className="text-xl font-semibold mb-4 mt-8">Upcoming Events</h2>
      <div className="space-y-4">
        {events && events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="bg-black border border-white/10 p-4 rounded-lg">
              <div className="flex justify-between">
                <h3 className="font-medium">{event.title}</h3>
                <span className="text-xs bg-yellow-400/80 text-black px-2 py-1 rounded">Upcoming</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                {new Date(event.start_date).toLocaleDateString()} at{" "}
                {new Date(event.start_date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </p>
              <p className="mt-2 text-gray-300">
                {event.description.length > 150 ? `${event.description.substring(0, 150)}...` : event.description}
              </p>
              <div className="mt-4">
                <Link
                  href={`/events/${event.id}`}
                  className="inline-block bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-black border border-white/10 p-4 rounded-lg text-center">
            <p className="text-gray-400">No upcoming events</p>
          </div>
        )}
      </div>
    </div>
  )
}

