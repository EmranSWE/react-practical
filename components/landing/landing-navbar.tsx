"use client";

import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { Button } from "../ui/button";
import Cart from "../home/cart";
import { useState } from "react";
import CartPage from "../home/cart";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4"></div>
        <h1 className={cn("text-2xl font-bold text-black", font.className)}>
          E-Shop BD
        </h1>
      </Link>

      <CartPage />

      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
