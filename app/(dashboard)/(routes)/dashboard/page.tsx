"use client";
import { useRouter } from "next/navigation";
import React from "react";


const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="txt-2xl md:text-4xl font-bold text-center">
          Explore <span className="text-fuchsia-700"> the New </span> Era of Shopping
        </h2>
        
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
         
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
