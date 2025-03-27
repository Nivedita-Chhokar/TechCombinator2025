"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Upload } from "lucide-react"
import Link from "next/link"

export default function EditProfilePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate saving profile
    setTimeout(() => {
      setIsLoading(false)
      router.push("/user/profile")
    }, 1500)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Link href="/user/profile" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Profile
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="md:w-1/3">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-white">Profile Picture</CardTitle>
              <CardDescription className="text-gray-400">Update your profile picture</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Avatar className="h-32 w-32 border-4 border-primary">
                <AvatarImage src="/placeholder.svg?height=128&width=128" alt="John Doe" />
                <AvatarFallback className="bg-primary text-black text-2xl">JD</AvatarFallback>
              </Avatar>
              <Button className="mt-6 bg-white/10 hover:bg-white/20 text-white">
                <Upload className="mr-2 h-4 w-4" /> Upload New Image
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:w-2/3">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-white">Edit Profile</CardTitle>
              <CardDescription className="text-gray-400">Update your profile information</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Tabs defaultValue="basic" className="space-y-6">
                  <TabsList className="glass-card-light">
                    <TabsTrigger
                      value="basic"
                      className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                    >
                      Basic Info
                    </TabsTrigger>
                    <TabsTrigger
                      value="experience"
                      className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                    >
                      Experience
                    </TabsTrigger>
                    <TabsTrigger
                      value="skills"
                      className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                    >
                      Skills & Interests
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="basic" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-300">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          defaultValue="John"
                          className="glass-input text-white focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-300">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          defaultValue="Doe"
                          className="glass-input text-white focus:border-primary focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="title" className="text-gray-300">
                        Professional Title
                      </Label>
                      <Input
                        id="title"
                        defaultValue="Full Stack Developer"
                        className="glass-input text-white focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-gray-300">
                        Location
                      </Label>
                      <Input
                        id="location"
                        defaultValue="San Francisco, CA"
                        className="glass-input text-white focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website" className="text-gray-300">
                        Website
                      </Label>
                      <Input
                        id="website"
                        defaultValue="johndoe.com"
                        className="glass-input text-white focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="github" className="text-gray-300">
                        GitHub
                      </Label>
                      <Input
                        id="github"
                        defaultValue="github.com/johndoe"
                        className="glass-input text-white focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="linkedin" className="text-gray-300">
                        LinkedIn
                      </Label>
                      <Input
                        id="linkedin"
                        defaultValue="linkedin.com/in/johndoe"
                        className="glass-input text-white focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio" className="text-gray-300">
                        Bio
                      </Label>
                      <Textarea
                        id="bio"
                        rows={4}
                        defaultValue="Full Stack Developer with expertise in JavaScript, React, and Node.js. Passionate about building innovative solutions that solve real-world problems."
                        className="glass-input text-white focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="experience" className="space-y-6">
                    <div className="space-y-4 p-4 border border-white/10 rounded-lg">
                      <h3 className="text-lg font-medium text-white">Work Experience 1</h3>
                      <div className="space-y-2">
                        <Label htmlFor="company1" className="text-gray-300">
                          Company
                        </Label>
                        <Input
                          id="company1"
                          defaultValue="TechCorp Inc."
                          className="glass-input text-white focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position1" className="text-gray-300">
                          Position
                        </Label>
                        <Input
                          id="position1"
                          defaultValue="Senior Developer"
                          className="glass-input text-white focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="startDate1" className="text-gray-300">
                            Start Date
                          </Label>
                          <Input
                            id="startDate1"
                            defaultValue="2023"
                            className="glass-input text-white focus:border-primary focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="endDate1" className="text-gray-300">
                            End Date
                          </Label>
                          <Input
                            id="endDate1"
                            defaultValue="Present"
                            className="glass-input text-white focus:border-primary focus:ring-primary"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description1" className="text-gray-300">
                          Description
                        </Label>
                        <Textarea
                          id="description1"
                          rows={3}
                          defaultValue="Led the development of a scalable web application using React, Node.js, and MongoDB. Implemented CI/CD pipelines and improved performance by 40%."
                          className="glass-input text-white focus:border-primary focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-4 p-4 border border-white/10 rounded-lg">
                      <h3 className="text-lg font-medium text-white">Work Experience 2</h3>
                      <div className="space-y-2">
                        <Label htmlFor="company2" className="text-gray-300">
                          Company
                        </Label>
                        <Input
                          id="company2"
                          defaultValue="InnovateTech"
                          className="glass-input text-white focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position2" className="text-gray-300">
                          Position
                        </Label>
                        <Input
                          id="position2"
                          defaultValue="Full Stack Developer"
                          className="glass-input text-white focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="startDate2" className="text-gray-300">
                            Start Date
                          </Label>
                          <Input
                            id="startDate2"
                            defaultValue="2020"
                            className="glass-input text-white focus:border-primary focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="endDate2" className="text-gray-300">
                            End Date
                          </Label>
                          <Input
                            id="endDate2"
                            defaultValue="2023"
                            className="glass-input text-white focus:border-primary focus:ring-primary"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description2" className="text-gray-300">
                          Description
                        </Label>
                        <Textarea
                          id="description2"
                          rows={3}
                          defaultValue="Developed and maintained multiple client projects using JavaScript, React, and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions."
                          className="glass-input text-white focus:border-primary focus:ring-primary"
                        />
                      </div>
                    </div>

                    <Button type="button" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      + Add More Experience
                    </Button>
                  </TabsContent>

                  <TabsContent value="skills" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="programmingLanguages" className="text-gray-300">
                        Programming Languages (comma separated)
                      </Label>
                      <Input
                        id="programmingLanguages"
                        defaultValue="JavaScript, TypeScript, Python, Solidity, Java"
                        className="glass-input text-white focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="frameworks" className="text-gray-300">
                        Frameworks & Libraries (comma separated)
                      </Label>
                      <Input
                        id="frameworks"
                        defaultValue="React, Next.js, Node.js, Express, TensorFlow, PyTorch"
                        className="glass-input text-white focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tools" className="text-gray-300">
                        Tools & Technologies (comma separated)
                      </Label>
                      <Input
                        id="tools"
                        defaultValue="Git, Docker, AWS, Firebase, MongoDB, PostgreSQL"
                        className="glass-input text-white focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="softSkills" className="text-gray-300">
                        Soft Skills (comma separated)
                      </Label>
                      <Input
                        id="softSkills"
                        defaultValue="Team Leadership, Project Management, Problem Solving, Communication, Time Management, Adaptability"
                        className="glass-input text-white focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interests" className="text-gray-300">
                        Interests (comma separated)
                      </Label>
                      <Input
                        id="interests"
                        defaultValue="Artificial Intelligence, Blockchain, Web Development, Open Source, Machine Learning"
                        className="glass-input text-white focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 flex justify-end gap-4">
                  <Link href="/user/profile">
                    <Button type="button" variant="outline" className="border-white/10 text-gray-400 hover:bg-white/5">
                      Cancel
                    </Button>
                  </Link>
                  <Button type="submit" className="bg-primary text-black hover:bg-primary/90" disabled={isLoading}>
                    {isLoading ? "Saving..." : "Save Changes"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

