import { Button } from "@/components/ui/button";

const engagementModels = [
  {
    title: "Strategic Advisory Sessions",
    description: "Expert guidance to shape your AI strategy and roadmap."
  },
  {
    title: "Specialist Engagement",
    description: "Dedicated expertise for specific projects and challenges."
  },
  {
    title: "End-to-End Build & Deploy",
    description: "Comprehensive service from concept to production deployment."
  }
];

export function HowWeWork() {
  return (
    <section id="how-we-work" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How We Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent, Collaborative, Results-Driven
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">Free Consultation</h3>
            </div>
            <p className="pl-14 text-muted-foreground">
              We start with a thorough consultation to understand your challenges and opportunities.
            </p>
          </div>
          
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">Flexible Engagement Models</h3>
            </div>
            <div className="pl-14 grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {engagementModels.map((model, index) => (
                <div key={index} className="p-4 bg-background rounded-lg border border-border">
                  <h4 className="font-medium mb-2">{model.title}</h4>
                  <p className="text-sm text-muted-foreground">{model.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 h-auto text-lg">
              Schedule Your Free Consultation Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 