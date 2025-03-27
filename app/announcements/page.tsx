import { createServerSupabaseClient } from "@/lib/supabase/server"
import Link from "next/link"
import Header from "@/components/header"

export default async function AnnouncementsPage() {
  const supabase = createServerSupabaseClient()

  // Get announcements
  const { data: announcements } = await supabase
    .from("announcements")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-2">Announcements</h1>
        <p className="text-gray-400 mb-6">Stay updated with the latest news and information</p>

        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Search announcements..."
              className="w-full bg-black border border-white/10 rounded px-4 py-2 text-white"
            />
          </div>
          <button className="border border-white/10 text-gray-400 px-4 py-2 rounded">Filter</button>
        </div>

        <div className="space-y-6">
          {announcements && announcements.length > 0 ? (
            announcements.map((announcement) => (
              <div key={announcement.id} className="bg-black border border-white/10 p-4 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{announcement.title}</h3>
                    <p className="text-sm text-gray-400">
                      Posted {new Date(announcement.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  {announcement.priority === "high" && (
                    <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded">Important</span>
                  )}
                </div>
                <p className="mt-2 text-gray-300">{announcement.content}</p>
                <div className="mt-4">
                  <Link href={`/announcements/${announcement.id}`} className="text-yellow-400 hover:underline">
                    Read more →
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-black border border-white/10 p-4 rounded-lg text-center">
              <p className="text-gray-400">No announcements found</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

