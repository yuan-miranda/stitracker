"use client"

import * as React from "react"
import {
    Calendar,
    Info,
} from "lucide-react"

import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"

const data = {
    user: {
        name: "nauy",
        email: "nauy@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navSecondary: [
        {
            title: "About",
            url: "#",
            icon: Info,
        },
    ],
    projects: [
        {
            name: "On Due",
            url: "ondue",
            icon: Calendar,
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar
            className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
            {...props}
        >
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="dashboard">
                                <div className="bg-yellow-300 text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-full">
                                    {/* <Command className="size-4" /> */}
                                    <Image
                                        src="/Systems_Technology_Institute.png"
                                        alt="STI Tracker Logo"
                                        width={28}
                                        height={28}
                                    />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-bold">stitracker<span>.vercel.app</span></span>
                                    <span className="truncate text-xs">STI College Student Tool</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavProjects projects={data.projects} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    )
}
