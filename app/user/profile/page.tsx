import { Card } from "@/components/ui/card"

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Sidebar */}
        <div className="md:w-1/3">
          <Card className="bg-black/40 border border-white/10 p-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center text-black text-2xl font-bold">
                JD
              </div>
              <h2 className="mt-4 text-2xl font-bold">John Doe</h2>
              <p className="text-gray-400">Full Stack Developer</p>
              <div className="flex gap-2 mt-2">
                <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded">JavaScript</span>
                <span className="bg-yellow-400/80 text-black text-xs px-2 py-1 rounded">React</span>
                <span className="bg-yellow-400/60 text-black text-xs px-2 py-1 rounded">Node.js</span>
              </div>
              <a
                href="/user/profile/edit"
                className="w-full mt-6 bg-yellow-400 text-black text-center py-2 rounded hover:bg-yellow-500"
              >
                Edit Profile
              </a>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-yellow-400">📍</span>
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-yellow-400">🔗</span>
                <a href="#" className="text-yellow-400 hover:underline">
                  johndoe.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-yellow-400">📅</span>
                <span>Joined April 2025</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:w-2/3">
          <div className="mb-4 border-b border-white/10 pb-2">
            <button className="text-yellow-400 border-b-2 border-yellow-400 pb-2 mr-4">Projects</button>
            <button className="text-gray-400 hover:text-white pb-2 mr-4">Activity</button>
            <button className="text-gray-400 hover:text-white pb-2">Skills</button>
          </div>

          <div className="space-y-6">
            <Card className="bg-black/40 border border-white/10 p-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">AI-Powered Analytics Dashboard</h3>
                  <p className="text-sm text-gray-400">Machine Learning • Data Visualization</p>
                </div>
                <span className="text-xs bg-green-500 text-black px-2 py-1 rounded">Active</span>
              </div>
              <p className="mt-2 text-gray-300">
                An analytics dashboard that uses machine learning to provide predictive insights from business data.
                Built with Python, TensorFlow, and React.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="border border-yellow-400 text-yellow-400 text-xs px-2 py-1 rounded">AI</span>
                <span className="border border-yellow-400 text-yellow-400 text-xs px-2 py-1 rounded">Python</span>
                <span className="border border-yellow-400 text-yellow-400 text-xs px-2 py-1 rounded">React</span>
              </div>
            </Card>

            <Card className="bg-black/40 border border-white/10 p-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">Blockchain Voting System</h3>
                  <p className="text-sm text-gray-400">Web3 • Smart Contracts</p>
                </div>
                <span className="text-xs bg-yellow-500 text-black px-2 py-1 rounded">In Progress</span>
              </div>
              <p className="mt-2 text-gray-300">
                A secure voting system built on blockchain technology to ensure transparency and prevent fraud.
                Implemented using Solidity and Ethereum.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="border border-yellow-400 text-yellow-400 text-xs px-2 py-1 rounded">Blockchain</span>
                <span className="border border-yellow-400 text-yellow-400 text-xs px-2 py-1 rounded">Solidity</span>
                <span className="border border-yellow-400 text-yellow-400 text-xs px-2 py-1 rounded">Ethereum</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

