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
      router.push("/profile")
    }, 1500)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Link href="/profile" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Profile
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="md:w-1/3">
          <Card className="backdrop-blur-md bg-white/5 border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Profile Picture</CardTitle>
              <CardDescription className="text-gray-400">Update your profile picture</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Avatar className="h-32 w-32 border-4 border-purple-500">
                <AvatarImage src="/placeholder.svg?height=128&width=128" alt="John Doe" />
                <AvatarFallback className="bg-purple-500 text-white text-2xl">JD</AvatarFallback>
              </Avatar>
              <Button className="mt-6 bg-white/10 hover:bg-white/20 text-white">
                <Upload className="mr-2 h-4 w-4" /> Upload New Image
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:w-2/3">
          <Card className="backdrop-blur-md bg-white/5 border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Edit Profile</CardTitle>
              <CardDescription className="text-gray-400">Update your profile information</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Tabs defaultValue="basic" className="space-y-6">
                  <TabsList className="bg-white/5 border border-white/10">
                    <TabsTrigger
                      value="basic"
                      className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
                    >
                      Basic Info
                    </TabsTrigger>
                    <TabsTrigger
                      value="experience"
                      className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
                    >
                      Experience
                    </TabsTrigger>
                    <TabsTrigger
                      value="skills"
                      className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
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
                          className="bg-white/5 border-white/10 text-white focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-300">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          defaultValue="Doe"
                          className="bg-white/5 border-white/10 text-white focus:border-purple-500 focus:ring-purple-500"
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
                        className="bg-white/5 border-white/10 text-white focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-gray-300">
                        Location
                      </Label>
                      <Input
                        id="location"
                        defaultValue="San Francisco, CA"
                        className="bg-white/5 border-white/10 text-white focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website" className="text-gray-300">
                        Website
                      </Label>
                      <Input
                        id="website"
                        defaultValue="johndoe.com"
                        className="bg-white/5 border-white/10 text-white focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio" className="text-gray-300">
                        Bio
                      </Label>
                      <Textarea
                        id="bio"
                        rows={4}
                        defaultValue="Full Stack Developer with expertise in AI and blockchain technologies. Passionate about building innovative solutions that solve real-world problems."
                        className="bg-white/5 border-white/10 text-white focus:border-purple-500 focus:ring-purple-500"
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
                          className="bg-white/5 border-white/10 text-white focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position1" className="text-gray-300">
                          Position
                        </Label>
                        <Input
                          id="position1"
                          defaultValue="Senior Developer"
                          className="bg-white/5 border-white/10 text-white focus:border-purple-500 focus:ring-purple-500"
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
                            className="bg-white/5 border-white/10 text-white focus:border-purple-500 focus:ring-purple-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="endDate1" className="text-gray-300">
                            End Date
                          </Label>
                          <Input
                            id="endDate1"
                            defaultValue="Present"
                            className="bg-white/5 border-white/10 text-white focus:border-purple-500 focus:ring-purple-500"
                          />
                        </div>
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
                          className="bg-white/5 border-white/10 text-white focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position2" className="text-gray-300">
                          Position
                        </Label>
                        <Input
                          id="position2"
                          defaultValue="Full Stack Developer"
                          className="bg-white/5 border-white/10 text-white focus:border-purple-500 focus:ring-purple-500"
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
                            className="bg-white/5 border-white/10 text-white focus:border-purple-500 focus:ring-purple-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="endDate2" className="text-gray-300">
                            End Date
                          </Label>
                          <Input
                            id="endDate2"
                            defaultValue="2023"
                            className="bg-white/5 border-white/10 text-white focus:border-purple-500 focus:ring-purple-500"
                          />
                        </div>
                      </div>
                    </div>

                    <Button
                      type="button"
                      variant="outline"
                      className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                    >
                      + Add More Experience
                    </Button>
                  </TabsContent>

                  <TabsContent value="skills" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="skills" className="text-gray-300">
                        Skills (comma separated)
                      </Label>
                      <Input
                        id="skills"
                        defaultValue="JavaScript, React, Node.js, Python, AI, Blockchain, Solidity, TensorFlow"
                        className="bg-white/5 border-white/10 text-white focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interests" className="text-gray-300">
                        Interests (comma separated)
                      </Label>
                      <Input
                        id="interests"
                        defaultValue="Artificial Intelligence, Web3, Machine Learning, Decentralized Finance"
                        className="bg-white/5 border-white/10 text-white focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="languages" className="text-gray-300">
                        Programming Languages
                      </Label>
                      <Input
                        id="languages"
                        defaultValue="JavaScript, TypeScript, Python, Solidity, C++"
                        className="bg-white/5 border-white/10 text-white focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 flex justify-end gap-4">
                  <Link href="/profile">
                    <Button type="button" variant="outline" className="border-white/10 text-gray-400 hover:bg-white/5">
                      Cancel
                    </Button>
                  </Link>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white"
                    disabled={isLoading}
                  >
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

