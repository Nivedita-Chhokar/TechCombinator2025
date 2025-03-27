"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Zap,
  LayoutDashboard,
  User,
  Bell,
  Calendar,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  BookOpen,
  Users,
} from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

interface SidebarProps {
  isAdmin?: boolean
}

export default function Sidebar({ isAdmin = false }: SidebarProps) {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const basePath = isAdmin ? "/admin" : "/user"

  const navigation = isAdmin
    ? [
        { name: "Dashboard", href: `${basePath}/dashboard`, icon: LayoutDashboard },
        { name: "Users", href: `${basePath}/users`, icon: Users },
        { name: "Announcements", href: `${basePath}/announcements`, icon: Bell },
        { name: "Events", href: `${basePath}/events`, icon: Calendar },
        { name: "Messages", href: `${basePath}/messages`, icon: MessageSquare },
        { name: "Mentorship", href: `${basePath}/mentorship`, icon: BookOpen },
        { name: "Settings", href: `${basePath}/settings`, icon: Settings },
      ]
    : [
        { name: "Dashboard", href: `${basePath}/dashboard`, icon: LayoutDashboard },
        { name: "Profile", href: `${basePath}/profile`, icon: User },
        { name: "Announcements", href: `${basePath}/announcements`, icon: Bell },
        { name: "Events", href: `${basePath}/events`, icon: Calendar },
        { name: "Messages", href: `${basePath}/messages`, icon: MessageSquare },
        { name: "Mentorship", href: `${basePath}/mentorship`, icon: BookOpen },
        { name: "Settings", href: `${basePath}/settings`, icon: Settings },
      ]

  const isActive = (path: string) => {
    return pathname === path
  }

  const sidebarContent = (
    <>
      <div className="flex items-center gap-2 px-6 py-4">
        <Zap className="h-6 w-6 text-yellow-400" />
        <h1 className="text-xl font-bold text-white">
          Tech<span className="text-yellow-400">Combinator</span>
        </h1>
        {isMobile && (
          <Button variant="ghost" size="icon" className="ml-auto" onClick={toggleSidebar}>
            <X className="h-5 w-5 text-gray-400" />
          </Button>
        )}
      </div>

      <div className="px-3 py-2">
        <nav className="space-y-1">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  isActive(item.href)
                    ? "bg-yellow-400/20 text-yellow-400"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
                onClick={() => isMobile && setIsOpen(false)}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Button>
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto px-3 py-4">
        <Link href="/login">
          <Button variant="ghost" className="w-full justify-start text-gray-400 hover:bg-white/5 hover:text-white">
            <LogOut className="mr-3 h-5 w-5" />
            Sign Out
          </Button>
        </Link>
      </div>
    </>
  )

  if (isMobile) {
    return (
      <>
        <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50 md:hidden" onClick={toggleSidebar}>
          <Menu className="h-6 w-6 text-gray-400" />
        </Button>

        {isOpen && <div className="fixed inset-0 z-40 bg-black/50" onClick={toggleSidebar} />}

        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-black/80 backdrop-blur-md transition-transform duration-300 ease-in-out border-r border-white/10 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col">{sidebarContent}</div>
        </div>
      </>
    )
  }

  return (
    <div className="hidden md:flex h-screen w-64 flex-col bg-black/80 backdrop-blur-md border-r border-white/10">
      {sidebarContent}
    </div>
  )
}

