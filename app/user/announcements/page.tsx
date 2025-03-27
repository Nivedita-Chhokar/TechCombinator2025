import { Card } from "@/components/ui/card"

export default function AnnouncementsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Announcements</h1>
      <p className="text-gray-400 mb-6">Stay updated with the latest news and information</p>

      <div className="flex justify-between items-center mb-6">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search announcements..."
            className="w-full bg-black/40 border border-white/10 rounded px-4 py-2 text-white"
          />
        </div>
        <button className="border border-white/10 text-gray-400 px-4 py-2 rounded">Filter</button>
      </div>

      <div className="space-y-6">
        <Card className="bg-black/40 border border-white/10 p-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-medium">Upcoming Hackathon</h3>
              <p className="text-sm text-gray-400">Posted 2 days ago by Admin</p>
            </div>
            <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded">New</span>
          </div>
          <p className="mt-2 text-gray-300">
            We're excited to announce our upcoming 48-hour hackathon focused on AI and machine learning solutions. Join
            us for a chance to win exciting prizes and showcase your skills!
          </p>
          <div className="mt-4">
            <a href="/user/announcements/1" className="text-yellow-400 hover:underline">
              Read more →
            </a>
          </div>
        </Card>

        <Card className="bg-black/40 border border-white/10 p-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-medium">New Mentors Onboarded</h3>
              <p className="text-sm text-gray-400">Posted 5 days ago by Admin</p>
            </div>
          </div>
          <p className="mt-2 text-gray-300">
            We've added 5 new industry experts to our mentorship program. They bring expertise in web development,
            blockchain, AI, product management, and UX design. Book your sessions now!
          </p>
          <div className="mt-4">
            <a href="/user/announcements/2" className="text-yellow-400 hover:underline">
              Read more →
            </a>
          </div>
        </Card>

        <Card className="bg-black/40 border border-white/10 p-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-medium">Platform Maintenance</h3>
              <p className="text-sm text-gray-400">Posted 1 week ago by Admin</p>
            </div>
          </div>
          <p className="mt-2 text-gray-300">
            We will be performing scheduled maintenance on our servers this weekend. The platform may be unavailable for
            a few hours during this time. We apologize for any inconvenience.
          </p>
          <div className="mt-4">
            <a href="/user/announcements/3" className="text-yellow-400 hover:underline">
              Read more →
            </a>
          </div>
        </Card>
      </div>
    </div>
  )
}

