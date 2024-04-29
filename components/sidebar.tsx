"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });
import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  Languages,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-violet-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-sky-500",
  },
  {
    label: "Learn English",
    icon: Languages,
    href: "/english",
    color: "text-lime-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-purple-500",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-blue-500",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-orange-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

type SidebarProps = {
  apiLimitCount: number;
  isPro: boolean;
};
const Sidebar = ({ apiLimitCount = 0, isPro = false }: SidebarProps) => {
  const pathName = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#0e0118] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            {/* <Image fill alt="logo" src=""></Image> */}

            <Link href="/">
              <h1 className={cn("text-2xl font-bold", montserrat.className)}>
                HelpMate
              </h1>
            </Link>
          </div>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathName === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
