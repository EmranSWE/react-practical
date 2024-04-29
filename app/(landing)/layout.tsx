"use client"
import { LandingNavbar } from "@/components/landing/navbar";
import React, { useEffect, useState } from "react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <main className="h-full overflow-auto">
      <LandingNavbar/>
      <div className="mx-auto max-w-screen-xl h-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
