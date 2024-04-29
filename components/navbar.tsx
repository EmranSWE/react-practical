import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import MobileSidebar from "@/components/mobile-sidebar";


const Navbar = async () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar isPro={false} apiLimitCount={1} />
      <div className="flex w-full justify-end">
      </div>
    </div>
  );
};

export default Navbar;
