import { Card } from "@/components/ui/card"

export default function MessagesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Messages</h1>
      <p className="text-gray-400 mb-6">Chat with admins and mentors</p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card className="bg-black/40 border border-white/10 h-[600px] flex flex-col">
            <div className="p-4 border-b border-white/10">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">Conversations</h3>
                <button className="text-gray-400 hover:text-white text-sm">+ New</button>
              </div>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full bg-black/40 border border-white/10 rounded px-4 py-2 text-white"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="divide-y divide-white/10">
                <div className="p-4 cursor-pointer bg-yellow-400/10 border-l-4 border-yellow-400">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
                      AD
                    </div>
                    <div>
                      <p className="font-medium">Admin Support</p>
                      <p className="text-sm text-gray-400 truncate">Hello John, I've reviewed your application...</p>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs bg-yellow-400 text-black px-2 py-0.5 rounded">New</span>
                    <span className="text-xs text-gray-400">2h ago</span>
                  </div>
                </div>
                <div className="p-4 cursor-pointer hover:bg-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
                      TS
                    </div>
                    <div>
                      <p className="font-medium">Technical Support</p>
                      <p className="text-sm text-gray-400 truncate">Your API access has been granted...</p>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs text-gray-400">Yesterday</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card className="bg-black/40 border border-white/10 h-[600px] flex flex-col">
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
                  AD
                </div>
                <div>
                  <h3 className="font-medium">Admin Support</h3>
                  <p className="text-sm text-gray-400">Online • Last active 5m ago</p>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold mt-1">
                    AD
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 max-w-[80%]">
                    <p>
                      Hello John, I've reviewed your application for the upcoming hackathon and have some feedback to
                      share. Could we schedule a call to discuss?
                    </p>
                    <p className="text-xs text-gray-400 mt-1">2:45 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-yellow-400/20 rounded-lg p-3 max-w-[80%]">
                    <p>
                      Hi there! Yes, I'd be very interested in getting your feedback. When would be a good time for you?
                    </p>
                    <p className="text-xs text-gray-400 mt-1">2:48 PM</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold mt-1">
                    JD
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold mt-1">
                    AD
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 max-w-[80%]">
                    <p>
                      Great! How about tomorrow at 2 PM? We can go through your project idea and discuss some
                      improvements.
                    </p>
                    <p className="text-xs text-gray-400 mt-1">2:52 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 p-4">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full bg-black/40 border border-white/10 rounded px-4 py-2 text-white"
                />
                <button className="bg-yellow-400 text-black px-4 py-2 rounded">Send</button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

