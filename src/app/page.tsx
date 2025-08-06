import { StealthHero } from "@/components/layout/StealthHero";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow">
        <StealthHero />
      </main>
      <Footer />
    </div>
  );
}
