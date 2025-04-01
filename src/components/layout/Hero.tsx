import { Button } from "@/components/ui/button";

const testimonial = {
  quote: "InTune AI revolutionized our accounting workflows by integrating AI tools that automated our disconnected systems. Their custom integrations reduced manual data entry by 90% and helped double our client capacity.",
  author: "Sri",
  role: "OzLedger",
  link: "https://www.ozledger.com.au"
};

export function Hero() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to-background" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/30 rounded-full blur-[100px] opacity-20" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-accent/20 rounded-full blur-[80px] opacity-20" />
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main content with increased emphasis */}
          <div className="space-y-6 mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              AI That&apos;s <span className="text-accent">In Tune</span> With Your<br />Business Goals
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-2xl mx-auto">
              Empowering businesses to unlock transformative growth with tailored AI solutions.
            </p>
          </div>

          {/* Subtle testimonial */}
          <div className="max-w-2xl mx-auto mb-12 opacity-85">
            <p className="text-base md:text-lg italic text-muted-foreground">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-2 mt-3 text-sm text-muted-foreground/75">
              <span className="font-medium">{testimonial.author}</span>
              <span>•</span>
              <a href={testimonial.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{testimonial.role}</a>
            </div>
          </div>

          {/* Emphasized CTA */}
          <div className="relative inline-block">
            <div className="absolute -inset-3 bg-accent/10 blur-lg rounded-lg"></div>
            <Button className="relative bg-accent hover:bg-accent/90 text-white px-8 py-6 h-12 text-lg font-medium">
              Book Your Free Consultation Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 