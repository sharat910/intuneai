import { StealthHero } from "@/components/layout/StealthHero";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { Services } from "@/components/layout/Services";
import { Engagement } from "@/components/layout/Engagement";
import { SuccessStories } from "@/components/layout/SuccessStories";
import { CTA } from "@/components/layout/CTA";
import { FAQ } from "@/components/layout/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* <StealthHero /> */}
        <Hero />
        <Services />
        <Engagement />
        <SuccessStories />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
