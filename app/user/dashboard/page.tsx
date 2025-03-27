import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, Calendar, MessageSquare, Bell, BookOpen, Zap } from "lucide-react"
import Link from "next/link"

export default function UserDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400">Welcome back, John Doe</p>
        </div>
        <Button className="bg-primary text-black hover:bg-primary/90">
          <Bell className="mr-2 h-4 w-4" /> Latest Announcements
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">5</div>
            <p className="text-xs text-gray-400">Next event in 2 days</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">New Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">3</div>
            <p className="text-xs text-gray-400">2 unread</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Mentorship Sessions</CardTitle>
            <BookOpen className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2</div>
            <p className="text-xs text-gray-400">Next session tomorrow</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Progress Score</CardTitle>
            <Zap className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">78%</div>
            <p className="text-xs text-gray-400">+5% from last week</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="announcements" className="space-y-4">
        <TabsList className="glass-card-light">
          <TabsTrigger
            value="announcements"
            className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
          >
            Announcements
          </TabsTrigger>
          <TabsTrigger value="events" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
            Upcoming Events
          </TabsTrigger>
          <TabsTrigger
            value="mentorship"
            className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
          >
            Mentorship
          </TabsTrigger>
        </TabsList>

        <TabsContent value="announcements" className="space-y-4">
          {/* Announcements */}
          <Card className="glass-card">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-white">Upcoming Hackathon</CardTitle>
                  <CardDescription className="text-gray-400">Posted 2 days ago by Admin</CardDescription>
                </div>
                <Badge className="bg-primary text-black">New</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                We're excited to announce our upcoming 48-hour hackathon focused on AI and machine learning solutions.
                Join us for a chance to win exciting prizes and showcase your skills!
              </p>
              <div className="mt-4">
                <Link href="/user/announcements/1">
                  <Button variant="link" className="text-primary p-0 hover:text-primary/80">
                    Read more <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-white">New Mentors Onboarded</CardTitle>
                  <CardDescription className="text-gray-400">Posted 5 days ago by Admin</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                We've added 5 new industry experts to our mentorship program. They bring expertise in web development,
                blockchain, AI, product management, and UX design. Book your sessions now!
              </p>
              <div className="mt-4">
                <Link href="/user/announcements/2">
                  <Button variant="link" className="text-primary p-0 hover:text-primary/80">
                    Read more <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="space-y-4">
          {/* Events */}
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
              <div className="mt-4">
                <Link href="/user/events/1">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    RSVP Now
                  </Button>
                </Link>
              </div>
            </CardContent>
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
              <div className="mt-4">
                <Link href="/user/events/2">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Register
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mentorship" className="space-y-4">
          {/* Mentorship */}
          <Card className="glass-card">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-white">Upcoming Session: Web Development</CardTitle>
                  <CardDescription className="text-gray-400">Tomorrow at 4:30 PM</CardDescription>
                </div>
                <Badge className="bg-green-500 text-black">Confirmed</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Your mentorship session with Sarah Johnson on advanced React patterns is confirmed for tomorrow. Please
                prepare your questions and any code you'd like to review.
              </p>
              <div className="mt-4">
                <Link href="/user/mentorship/1">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    View Details
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-white">Available Mentors</CardTitle>
                  <CardDescription className="text-gray-400">Book a new session</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                We have 15 mentors available across various technology domains. Book a 1:1 session to get personalized
                guidance and feedback on your projects.
              </p>
              <Link href="/user/mentorship">
                <Button className="bg-primary text-black hover:bg-primary/90">Browse Mentors</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

