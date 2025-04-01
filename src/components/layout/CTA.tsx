import { Button } from "@/components/ui/button";
import Link from "next/link";
export function CTA() {
  return (
    <section className="py-20 bg-accent text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 text-white/80">
            Take the first step toward smarter, more efficient operations. Let InTune AI guide you through the possibilities of artificial intelligence.
          </p>
          <Button className="bg-white text-accent hover:bg-white/90 px-6 py-4 h-auto text-lg">
            <Link href="https://cal.mixmax.com/intuneai/initial-chat" target="_blank" rel="noopener noreferrer">
              Book Your Free Consultation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 