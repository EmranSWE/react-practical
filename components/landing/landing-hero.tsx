"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { isLoggedIn } from "@/lib/auth-service";

export const LandingHero = () => {
  const loginUser = isLoggedIn();

  return (
    <div className="text-black font-bold py-10 text-center space-y-5">
      <div className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl space-y-5 font-extrabold">
        <h1>Welcome to E-Shop BD</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r text-2xl from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Hassle-Free Shopping",
                "Free Delivery",
                "Customer 100% Satisfied",
                "Easy Online Shopping Experience",
                "Fast and Reliable Delivery",
                "Shop with Confidence",
                "24/7 Customer Support",
                "Secure Payment Options",
                "Wide Range of Products to Choose From",
                "Shop Anytime, Anywhere",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light  ">
        Enjoy Exclusive Deals and Discount
      </div>
      <div>
        <Link href={loginUser ? "/products" : "/login"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            {loginUser ? "Buy Now" : "Login Now"}
          </Button>
        </Link>
      </div>
    </div>
  );
};
