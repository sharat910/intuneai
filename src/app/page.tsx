import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { Services } from "@/components/layout/Services";
import { Engagement } from "@/components/layout/Engagement";
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
