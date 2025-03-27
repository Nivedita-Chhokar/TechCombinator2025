import { Card } from "@/components/ui/card"

export default function EventsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Events Calendar</h1>
      <p className="text-gray-400 mb-6">Discover upcoming events and opportunities</p>

      <div className="flex justify-between items-center mb-6">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search events..."
            className="w-full bg-black/40 border border-white/10 rounded px-4 py-2 text-white"
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
        <Card className="bg-black/40 border border-white/10 p-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-medium">Web3 Workshop</h3>
              <p className="text-sm text-gray-400">April 15, 2025</p>
            </div>
            <span className="text-xs bg-yellow-400/80 text-black px-2 py-1 rounded">Upcoming</span>
          </div>
          <p className="mt-2 text-gray-300">
            Join us for an interactive workshop on Web3 technologies. Learn about blockchain, smart contracts, and
            decentralized applications from industry experts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">📅</span>
              <span className="text-gray-300">April 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">🕒</span>
              <span className="text-gray-300">6:00 PM - 9:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">📍</span>
              <span className="text-gray-300">Tech Hub, San Francisco</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-400">👥</span>
            <span className="text-gray-300">24 people attending</span>
          </div>
          <a
            href="/user/events/1"
            className="inline-block bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
          >
            RSVP Now
          </a>
        </Card>

        <Card className="bg-black/40 border border-white/10 p-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-medium">AI Hackathon</h3>
              <p className="text-sm text-gray-400">April 20-22, 2025</p>
            </div>
            <span className="text-xs bg-yellow-400/80 text-black px-2 py-1 rounded">Upcoming</span>
          </div>
          <p className="mt-2 text-gray-300">
            A 48-hour hackathon focused on building innovative AI solutions. Form teams, code, and present your projects
            to a panel of judges for a chance to win prizes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">📅</span>
              <span className="text-gray-300">April 20-22, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">🕒</span>
              <span className="text-gray-300">10:00 AM - 10:00 AM (48h)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">📍</span>
              <span className="text-gray-300">Innovation Center</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-400">👥</span>
            <span className="text-gray-300">42 people attending</span>
          </div>
          <a
            href="/user/events/2"
            className="inline-block bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
          >
            Register
          </a>
        </Card>
      </div>
    </div>
  )
}

