import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            AI That's <span className="text-accent">In Tune</span> With Your Business Goals
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Empowering businesses to unlock transformative growth with tailored AI solutions.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 h-auto text-lg">
            Book Your Free Consultation Today
          </Button>
        </div>
      </div>
    </section>
  );
} 