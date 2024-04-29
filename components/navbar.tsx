import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import MobileSidebar from "@/components/mobile-sidebar";

const Navbar = async () => {
  const role = "customer";
  return (
    <div className="flex items-center p-4">
      <MobileSidebar role={role} />
      <div className="flex w-full justify-end"></div>
    </div>
  );
};

export default Navbar;
