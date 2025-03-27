import { createServerSupabaseClient } from "@/lib/supabase/server"
import Link from "next/link"
import Header from "@/components/header"

export default async function EventsPage() {
  const supabase = await createServerSupabaseClient()

  // Get upcoming events
  const { data: events } = await supabase.from("events").select("*").order("start_date", { ascending: true })

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-2">Events Calendar</h1>
        <p className="text-gray-400 mb-6">Discover upcoming events and opportunities</p>

        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Search events..."
              className="w-full bg-black border border-white/10 rounded px-4 py-2 text-white"
            />
          </div>
          <button className="border border-white/10 text-gray-400 px-4 py-2 rounded">Filter</button>
        </div>

        <div className="mb-4 border-b border-white/10 pb-2">
          <button className="text-yellow-400 border-b-2 border-yellow-400 pb-2 mr-4">Upcoming</button>
          <button className="text-gray-400 hover:text-white pb-2 mr-4">Past Events</button>
          <button className="text-gray-400 hover:text-white pb-2">My Events</button>
        </div>

        <div className="space-y-6">
          {events && events.length > 0 ? (
            events.map((event) => (
              <div key={event.id} className="bg-black border border-white/10 p-4 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm text-gray-400">{new Date(event.start_date).toLocaleDateString()}</p>
                  </div>
                  <span className="text-xs bg-yellow-400/80 text-black px-2 py-1 rounded">{event.status}</span>
                </div>
                <p className="mt-2 text-gray-300">{event.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">📅</span>
                    <span className="text-gray-300">{new Date(event.start_date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">🕒</span>
                    <span className="text-gray-300">
                      {new Date(event.start_date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} -
                      {new Date(event.end_date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">📍</span>
                    <span className="text-gray-300">{event.location || "Online"}</span>
                  </div>
                </div>
                <Link
                  href={`/events/${event.id}`}
                  className="inline-block bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
                >
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <div className="bg-black border border-white/10 p-4 rounded-lg text-center">
              <p className="text-gray-400">No events found</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

