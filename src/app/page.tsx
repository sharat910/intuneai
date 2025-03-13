import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { Clients } from "@/components/layout/Clients";
import { Services } from "@/components/layout/Services";
import { HowWeWork } from "@/components/layout/HowWeWork";
import { SuccessStories } from "@/components/layout/SuccessStories";
import { FAQ } from "@/components/layout/FAQ";
import { CTA } from "@/components/layout/CTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Services />
        <HowWeWork />
        <SuccessStories />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
