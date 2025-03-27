"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Calendar,
  Users,
  MessageSquare,
  Settings,
  PlusCircle,
  Search,
  Filter,
  MoreHorizontal,
  BookOpen,
} from "lucide-react"

export default function AdminDashboard() {
  const [newAnnouncementOpen, setNewAnnouncementOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-gray-400">Manage your tech platform</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Settings className="mr-2 h-4 w-4" /> Settings
          </Button>
          <Button className="bg-primary text-black hover:bg-primary/90" onClick={() => setNewAnnouncementOpen(true)}>
            <PlusCircle className="mr-2 h-4 w-4" /> New Announcement
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Users</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">248</div>
            <p className="text-xs text-gray-400">+18 this month</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Active Events</CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">5</div>
            <p className="text-xs text-gray-400">Next event in 2 days</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Mentorship Sessions</CardTitle>
            <BookOpen className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12</div>
            <p className="text-xs text-gray-400">4 pending approval</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Support Tickets</CardTitle>
            <MessageSquare className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">7</div>
            <p className="text-xs text-gray-400">3 unresolved</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="announcements" className="space-y-6">
        <TabsList className="glass-card-light">
          <TabsTrigger
            value="announcements"
            className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
          >
            Announcements
          </TabsTrigger>
          <TabsTrigger value="users" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
            Users
          </TabsTrigger>
          <TabsTrigger value="events" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
            Events
          </TabsTrigger>
          <TabsTrigger
            value="mentorship"
            className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
          >
            Mentorship
          </TabsTrigger>
        </TabsList>

        <TabsContent value="announcements">
          {newAnnouncementOpen ? (
            <Card className="glass-card mb-6">
              <CardHeader>
                <CardTitle className="text-white">Create New Announcement</CardTitle>
                <CardDescription className="text-gray-400">
                  This will be sent to all users on the platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-gray-300">
                      Title
                    </Label>
                    <Input
                      id="title"
                      placeholder="Announcement title"
                      className="glass-input text-white focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content" className="text-gray-300">
                      Content
                    </Label>
                    <Textarea
                      id="content"
                      placeholder="Write your announcement here..."
                      rows={5}
                      className="glass-input text-white focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300">Priority</Label>
                    <div className="flex gap-4">
                      <div className="flex items-center">
                        <input type="radio" id="normal" name="priority" className="mr-2" />
                        <Label htmlFor="normal" className="text-gray-300">
                          Normal
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="high" name="priority" className="mr-2" />
                        <Label htmlFor="high" className="text-gray-300">
                          High
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="urgent" name="priority" className="mr-2" />
                        <Label htmlFor="urgent" className="text-gray-300">
                          Urgent
                        </Label>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end gap-4">
                <Button
                  variant="outline"
                  className="border-white/10 text-gray-400 hover:bg-white/5"
                  onClick={() => setNewAnnouncementOpen(false)}
                >
                  Cancel
                </Button>
                <Button className="bg-primary text-black hover:bg-primary/90">Publish Announcement</Button>
              </CardFooter>
            </Card>
          ) : null}

          <div className="flex justify-between items-center mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search announcements..."
                className="glass-input text-white focus:border-primary focus:ring-primary pl-10"
              />
            </div>
            <Button variant="outline" className="border-white/10 text-gray-400 hover:bg-white/5">
              <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
          </div>

          <div className="space-y-4">
            <Card className="glass-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white">Upcoming Hackathon</CardTitle>
                    <CardDescription className="text-gray-400">Published on April 10, 2025</CardDescription>
                  </div>
                  <Badge className="bg-primary text-black">Published</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We're excited to announce our upcoming 48-hour hackathon focused on AI and machine learning solutions.
                  Join us for a chance to win exciting prizes and showcase your skills!
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-gray-400">Sent to: All Users</div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-white/10 text-gray-400 hover:bg-white/5">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/10 text-gray-400 hover:bg-white/5">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white">New Mentors Onboarded</CardTitle>
                    <CardDescription className="text-gray-400">Published on April 7, 2025</CardDescription>
                  </div>
                  <Badge className="bg-primary text-black">Published</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We've added 5 new industry experts to our mentorship program. They bring expertise in web development,
                  blockchain, AI, product management, and UX design. Book your sessions now!
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-gray-400">Sent to: All Users</div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-white/10 text-gray-400 hover:bg-white/5">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/10 text-gray-400 hover:bg-white/5">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white">Platform Maintenance</CardTitle>
                    <CardDescription className="text-gray-400">Draft - Not Published</CardDescription>
                  </div>
                  <Badge className="bg-yellow-500 text-black">Draft</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We will be performing scheduled maintenance on our servers this weekend. The platform may be
                  unavailable for a few hours during this time. We apologize for any inconvenience.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-gray-400">Target: All Users</div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-white/10 text-gray-400 hover:bg-white/5">
                    Edit
                  </Button>
                  <Button size="sm" className="bg-primary text-black hover:bg-primary/90">
                    Publish
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users">
          <div className="flex justify-between items-center mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search users..."
                className="glass-input text-white focus:border-primary focus:ring-primary pl-10"
              />
            </div>
            <Button variant="outline" className="border-white/10 text-gray-400 hover:bg-white/5">
              <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
          </div>

          <Card className="glass-card">
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-gray-400 font-medium">User</th>
                    <th className="text-left p-4 text-gray-400 font-medium">Status</th>
                    <th className="text-left p-4 text-gray-400 font-medium">Joined</th>
                    <th className="text-left p-4 text-gray-400 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="John Doe" />
                          <AvatarFallback className="bg-primary text-black">JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-white">John Doe</p>
                          <p className="text-sm text-gray-400">john.doe@example.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge className="bg-green-500 text-black">Active</Badge>
                    </td>
                    <td className="p-4 text-gray-300">Apr 10, 2025</td>
                    <td className="p-4">
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Jane Smith" />
                          <AvatarFallback className="bg-primary text-black">JS</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-white">Jane Smith</p>
                          <p className="text-sm text-gray-400">jane.smith@example.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge className="bg-green-500 text-black">Active</Badge>
                    </td>
                    <td className="p-4 text-gray-300">Apr 5, 2025</td>
                    <td className="p-4">
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Alex Johnson" />
                          <AvatarFallback className="bg-primary text-black">AJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-white">Alex Johnson</p>
                          <p className="text-sm text-gray-400">alex.johnson@example.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge className="bg-yellow-500 text-black">Pending</Badge>
                    </td>
                    <td className="p-4 text-gray-300">Apr 12, 2025</td>
                    <td className="p-4">
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events">
          <div className="flex justify-between items-center mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search events..."
                className="glass-input text-white focus:border-primary focus:ring-primary pl-10"
              />
            </div>
            <Button className="bg-primary text-black hover:bg-primary/90">
              <PlusCircle className="mr-2 h-4 w-4" /> Create Event
            </Button>
          </div>

          <div className="space-y-4">
            <Card className="glass-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white">Web3 Workshop</CardTitle>
                    <CardDescription className="text-gray-400">April 15, 2025 • 6:00 PM</CardDescription>
                  </div>
                  <Badge className="bg-primary/80 text-black">Upcoming</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Join us for an interactive workshop on Web3 technologies. Learn about blockchain, smart contracts, and
                  decentralized applications from industry experts.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">24 RSVPs</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" size="sm" className="border-white/10 text-gray-400 hover:bg-white/5">
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="border-white/10 text-gray-400 hover:bg-white/5">
                  Cancel Event
                </Button>
                <Button size="sm" className="bg-primary text-black hover:bg-primary/90">
                  View RSVPs
                </Button>
              </CardFooter>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white">AI Hackathon</CardTitle>
                    <CardDescription className="text-gray-400">April 20-22, 2025 • 10:00 AM</CardDescription>
                  </div>
                  <Badge className="bg-primary/80 text-black">Upcoming</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  A 48-hour hackathon focused on building innovative AI solutions. Form teams, code, and present your
                  projects to a panel of judges for a chance to win prizes.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">42 RSVPs</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" size="sm" className="border-white/10 text-gray-400 hover:bg-white/5">
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="border-white/10 text-gray-400 hover:bg-white/5">
                  Cancel Event
                </Button>
                <Button size="sm" className="bg-primary text-black hover:bg-primary/90">
                  View RSVPs
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="mentorship">
          <div className="flex justify-between items-center mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search sessions..."
                className="glass-input text-white focus:border-primary focus:ring-primary pl-10"
              />
            </div>
            <Button variant="outline" className="border-white/10 text-gray-400 hover:bg-white/5">
              <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
          </div>

          <div className="space-y-4">
            <Card className="glass-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white">Web Development Session</CardTitle>
                    <CardDescription className="text-gray-400">Tomorrow at 4:30 PM</CardDescription>
                  </div>
                  <Badge className="bg-green-500 text-black">Confirmed</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="John Doe" />
                    <AvatarFallback className="bg-primary text-black">JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-white">John Doe (Student)</p>
                    <p className="text-sm text-gray-400">Advanced React Patterns</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Sarah Johnson" />
                    <AvatarFallback className="bg-primary text-black">SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-white">Sarah Johnson (Mentor)</p>
                    <p className="text-sm text-gray-400">Senior Frontend Developer</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" size="sm" className="border-white/10 text-gray-400 hover:bg-white/5">
                  Reschedule
                </Button>
                <Button variant="outline" size="sm" className="border-white/10 text-gray-400 hover:bg-white/5">
                  Cancel
                </Button>
                <Button size="sm" className="bg-primary text-black hover:bg-primary/90">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white">AI & Machine Learning Session</CardTitle>
                    <CardDescription className="text-gray-400">April 16, 2025 at 2:00 PM</CardDescription>
                  </div>
                  <Badge className="bg-yellow-500 text-black">Pending</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Jane Smith" />
                    <AvatarFallback className="bg-primary text-black">JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-white">Jane Smith (Student)</p>
                    <p className="text-sm text-gray-400">Neural Networks Implementation</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Michael Chen" />
                    <AvatarFallback className="bg-primary text-black">MC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-white">Michael Chen (Mentor)</p>
                    <p className="text-sm text-gray-400">AI Research Scientist</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" size="sm" className="border-white/10 text-gray-400 hover:bg-white/5">
                  Reject
                </Button>
                <Button size="sm" className="bg-primary text-black hover:bg-primary/90">
                  Approve
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

