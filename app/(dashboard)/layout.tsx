import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { isLoggedIn } from "@/lib/auth-service";

import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
const loggedInUser = isLoggedIn()
const role = "customer"
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex  md:w-72  md:flex-col md:fixed md:inset-y-0  ">
        <Sidebar role={role} />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
