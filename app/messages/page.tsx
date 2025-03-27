"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search } from "lucide-react"

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(0)

  const conversations = [
    {
      id: 0,
      name: "Admin Support",
      avatar: "AD",
      avatarColor: "bg-cyan-500",
      lastMessage:
        "Hello John, I've reviewed your application for the upcoming funding round and have some feedback to share.",
      time: "2h ago",
      unread: true,
      messages: [
        {
          sender: "admin",
          content:
            "Hello John, I've reviewed your application for the upcoming funding round and have some feedback to share. Could we schedule a call to discuss?",
          time: "2:45 PM",
        },
        {
          sender: "user",
          content: "Hi there! Yes, I'd be very interested in getting your feedback. When would be a good time for you?",
          time: "2:48 PM",
        },
        {
          sender: "admin",
          content:
            "Great! How about tomorrow at 2 PM? We can go through your pitch deck and discuss some improvements.",
          time: "2:52 PM",
        },
        {
          sender: "user",
          content: "Tomorrow at 2 PM works perfectly for me. Should I prepare anything specific for the call?",
          time: "2:55 PM",
        },
        {
          sender: "admin",
          content:
            "Just have your pitch deck and any questions ready. I'll send you a calendar invite with the meeting link shortly.",
          time: "3:00 PM",
        },
      ],
    },
    {
      id: 1,
      name: "Technical Support",
      avatar: "TS",
      avatarColor: "bg-purple-500",
      lastMessage:
        "Your request regarding API access has been processed. You now have full access to our developer platform.",
      time: "Yesterday",
      unread: false,
      messages: [
        {
          sender: "user",
          content:
            "Hello, I'm having trouble accessing the developer API. I've completed the registration but still getting access denied errors.",
          time: "10:15 AM",
        },
        {
          sender: "admin",
          content: "Hi John, I'll look into this right away. Can you provide your developer account ID?",
          time: "10:20 AM",
        },
        { sender: "user", content: "Sure, my developer ID is DEV-12345-JD.", time: "10:22 AM" },
        {
          sender: "admin",
          content: "Thanks! I see the issue. Your account was pending approval. I've approved it now.",
          time: "10:30 AM",
        },
        {
          sender: "admin",
          content:
            "Your request regarding API access has been processed. You now have full access to our developer platform. Let me know if you need any assistance getting started.",
          time: "10:32 AM",
        },
        {
          sender: "user",
          content: "Perfect! Thank you for the quick help. I'll try accessing it now.",
          time: "10:35 AM",
        },
      ],
    },
    {
      id: 2,
      name: "Event Coordinator",
      avatar: "EC",
      avatarColor: "bg-cyan-500",
      lastMessage:
        "We've confirmed your speaking slot at the upcoming Tech Pitch Night. Please prepare a 10-minute presentation.",
      time: "Mar 20",
      unread: false,
      messages: [
        {
          sender: "admin",
          content:
            "Hello John, I'm reaching out regarding the upcoming Tech Pitch Night. Would you be interested in presenting your AI analytics platform?",
          time: "9:00 AM",
        },
        {
          sender: "user",
          content: "Hi! Yes, I'd definitely be interested in presenting. When is the event?",
          time: "9:15 AM",
        },
        {
          sender: "admin",
          content:
            "Great! The event is on March 15th, starting at 6 PM. We can offer you a 10-minute slot to present your platform.",
          time: "9:20 AM",
        },
        {
          sender: "user",
          content: "That sounds perfect. I'll prepare a presentation highlighting the key features and benefits.",
          time: "9:25 AM",
        },
        {
          sender: "admin",
          content:
            "We've confirmed your speaking slot at the upcoming Tech Pitch Night. Please prepare a 10-minute presentation. Let me know if you need any technical requirements for your demo.",
          time: "9:30 AM",
        },
      ],
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Messages</h1>
          <p className="text-gray-400">Chat with admins and support team</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card className="backdrop-blur-md bg-white/5 border border-white/10 h-[600px] flex flex-col">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-white">Conversations</CardTitle>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  + New
                </Button>
              </div>
              <div className="relative mt-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search messages..."
                  className="pl-10 bg-white/5 border-white/10 text-white focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-0">
              <div className="divide-y divide-white/10">
                {conversations.map((conversation, index) => (
                  <div
                    key={conversation.id}
                    className={`p-4 cursor-pointer ${selectedConversation === index ? "bg-purple-500/10 border-l-4 border-purple-500" : "hover:bg-white/5"}`}
                    onClick={() => setSelectedConversation(index)}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt={conversation.name} />
                        <AvatarFallback className={`${conversation.avatarColor} text-white`}>
                          {conversation.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-white">{conversation.name}</p>
                        <p className="text-sm text-gray-400 truncate">{conversation.lastMessage}</p>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                      {conversation.unread && <Badge className="bg-red-500 text-white">New</Badge>}
                      <span className="text-xs text-gray-400">{conversation.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card className="backdrop-blur-md bg-white/5 border border-white/10 h-[600px] flex flex-col">
            <CardHeader className="pb-2 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt={conversations[selectedConversation].name}
                  />
                  <AvatarFallback className={`${conversations[selectedConversation].avatarColor} text-white`}>
                    {conversations[selectedConversation].avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-white">{conversations[selectedConversation].name}</CardTitle>
                  <p className="text-sm text-gray-400">Online • Last active 5m ago</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto py-4">
              <div className="space-y-4">
                {conversations[selectedConversation].messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 ${message.sender === "user" ? "justify-end" : ""}`}
                  >
                    {message.sender !== "user" && (
                      <Avatar className="mt-1">
                        <AvatarImage
                          src="/placeholder.svg?height=32&width=32"
                          alt={conversations[selectedConversation].name}
                        />
                        <AvatarFallback className={`${conversations[selectedConversation].avatarColor} text-white`}>
                          {conversations[selectedConversation].avatar}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`${message.sender === "user" ? "bg-purple-500/20" : "bg-white/5"} rounded-lg p-3 max-w-[80%]`}
                    >
                      <p className="text-white">{message.content}</p>
                      <p className="text-xs text-gray-400 mt-1">{message.time}</p>
                    </div>
                    {message.sender === "user" && (
                      <Avatar className="mt-1">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="You" />
                        <AvatarFallback className="bg-purple-500 text-white">JD</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
            <div className="border-t border-white/10 p-4">
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Type your message..."
                  className="bg-white/5 border-white/10 text-white focus:border-purple-500 focus:ring-purple-500"
                />
                <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white">
                  Send
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

