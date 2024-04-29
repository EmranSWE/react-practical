import BrandingComponent from "@/components/landing/branding-page";
import FooterPage from "@/components/landing/footer-page";
import FAQ from "@/components/landing/frequenty-asked-question";
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingNavbar } from "@/components/landing/landing-navbar";

const LandingPage = () => {
  return (
    <main className="mx-auto max-w-screen-xl h-full">
      <div className="h-full ">
        <LandingNavbar />
        <LandingHero />
        <BrandingComponent />
        <FAQ />
        <FooterPage />
      </div>
    </main>
  );
};

export default LandingPage;
