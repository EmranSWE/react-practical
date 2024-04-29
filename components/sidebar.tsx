"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { UserPlus, Users, UserCheck, UserX,LayoutDashboard, ImageIcon, VideoIcon, Music, Code, Settings, MessageSquare, SquareGanttIcon, LibraryBig, Scroll, Receipt, ShoppingBag, Plus } from "lucide-react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

type Route = {
  label: string;
  icon: React.ComponentType<any>;
  href: string;
  color?: string;
};

type Routes = Record<string, Route[]>;

const routes: Routes = {
  admin: [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      color: "text-violet-500",
    },
    {
      label: "Overview",
      icon: SquareGanttIcon,
      href: "/admin/overview",
      color: "text-sky-500",
    },
    {
      label: "Summary",
      icon: LibraryBig ,
      href: "/admin/summary",
      color: "text-lime-500",
    },
    {
      label: "Customers List",
      icon: Users,
      href: "/admin/customers",
      color: "text-purple-500",
    },
    {
      label: "Customer Detail View",
      icon: UserCheck,
      href: "/admin/customer/:id",
      color: "text-blue-500",
    },
    {
      label: "Add Customer",
      icon: UserPlus,
      href: "/admin/customer/add",
      color: "text-orange-500",
    },
    {
      label: "Order List",
      icon: Scroll,
      href: "/admin/orders",
      color: "text-green-500",
    },
    {
      label: "Admin Order Detail View",
      icon: Receipt,
      href: "/admin/order/:id",
      color: "text-violet-500",
    },
    {
      label: "Product List",
      icon: ShoppingBag,
      href: "/admin/products",
      color: "text-purple-500",
    },
    {
      label: "Add Product",
      icon: Plus,
      href: "/admin/product/add",
      color: "text-orange-500",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/admin/settings",
      color: "text-gray-500",
    },
  ],
  customer: [
    {
      label: "Customers List",
      icon: Users,
      href: "/customer/customers",
      color: "text-purple-500",
    },
    {
      label: "Customer Detail View",
      icon: UserCheck,
      href: "/customer/customer/:id",
      color: "text-blue-500",
    },
    {
      label: "Add Customer",
      icon: UserPlus,
      href: "/customer/customer/add",
      color: "text-orange-500",
    },
    {
      label: "Delete Customer",
      icon: UserX,
      href: "/customer/customer/delete",
      color: "text-red-500",
    },
  ],
};

type SidebarProps = {
  role: keyof Routes;
};

const Sidebar: React.FC<SidebarProps> = ({ role = "customer" }) => {
  const pathName = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const userRoutes = routes["admin"];

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#000000] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <Link href="/">
            <h1 className={cn("text-2xl font-bold", montserrat.className)}>
              E-Shop BD
            </h1>
          </Link>
        </Link>
        <div className="space-y-1">
          {userRoutes.map((route) => (
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