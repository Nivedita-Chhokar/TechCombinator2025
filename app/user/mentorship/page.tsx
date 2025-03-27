import { Card } from "@/components/ui/card"

export default function MentorshipPage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Mentorship</h1>
          <p className="text-gray-400">Book 1:1 sessions with industry experts</p>
        </div>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded">My Sessions</button>
      </div>

      <div className="mb-4 border-b border-white/10 pb-2">
        <button className="text-yellow-400 border-b-2 border-yellow-400 pb-2 mr-4">Upcoming Sessions</button>
        <button className="text-gray-400 hover:text-white pb-2 mr-4">Available Mentors</button>
        <button className="text-gray-400 hover:text-white pb-2">Past Sessions</button>
      </div>

      <div className="space-y-4">
        <Card className="bg-black/40 border border-white/10 p-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-medium">Web Development Session</h3>
              <p className="text-sm text-gray-400">Tomorrow at 4:30 PM</p>
            </div>
            <span className="text-xs bg-green-500 text-black px-2 py-1 rounded">Confirmed</span>
          </div>
          <div className="flex items-center gap-3 my-4">
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
              SJ
            </div>
            <div>
              <p className="font-medium">Sarah Johnson</p>
              <p className="text-sm text-gray-400">Senior Frontend Developer</p>
            </div>
          </div>
          <p className="text-gray-300 mb-4">Topic: Advanced React Patterns</p>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">📅</span>
              <span className="text-gray-300">April 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">🕒</span>
              <span className="text-gray-300">4:30 PM - 5:15 PM</span>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button className="border border-white/10 text-gray-400 px-3 py-1 rounded hover:bg-white/5">
              Reschedule
            </button>
            <button className="border border-white/10 text-gray-400 px-3 py-1 rounded hover:bg-white/5">Cancel</button>
            <button className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500">Join Meeting</button>
          </div>
        </Card>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Recommended Mentors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="bg-black/40 border border-white/10 p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
                  MC
                </div>
                <div>
                  <h3 className="font-medium">Michael Chen</h3>
                  <p className="text-sm text-gray-400">AI Research Scientist</p>
                </div>
              </div>
              <div className="flex items-center gap-1 my-2">
                <span className="text-yellow-400">★★★★☆</span>
                <span className="text-sm text-gray-400 ml-1">(18 reviews)</span>
              </div>
              <p className="text-gray-300 mb-4">
                Specializes in machine learning, neural networks, and AI implementation in products.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-yellow-400/20 text-yellow-400 text-xs px-2 py-1 rounded">Python</span>
                <span className="bg-yellow-400/20 text-yellow-400 text-xs px-2 py-1 rounded">TensorFlow</span>
                <span className="bg-yellow-400/20 text-yellow-400 text-xs px-2 py-1 rounded">ML</span>
              </div>
              <button className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500">Book Session</button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

