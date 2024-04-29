"use client"
import BrandingComponent from "@/components/landing/branding-page";
import FooterPage from "@/components/landing/footer-page";
import FAQ from "@/components/landing/frequenty-asked-question";
import { LandingHero } from "@/components/landing/landing-hero";
import { getUserInfo, isLoggedIn } from "@/lib/auth-service";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    const userInfo = getUserInfo();
    console.log(userInfo);
  }, []); 


  return (
 <>
    <main className="mx-auto max-w-screen-2xl h-full">
      <div className="h-full">
        <LandingHero />
        <BrandingComponent />
        <FAQ />
        <FooterPage />
      </div>
    </main>
    
    </>
  );
};

export default LandingPage;
