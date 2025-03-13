import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "AI Strategy & Advisory",
    description: "Identify high-impact opportunities and develop actionable roadmaps aligned with your goals."
  },
  {
    title: "AI Solution Development",
    description: "Build custom AI systems, from proof-of-concept to production-ready solutions."
  },
  {
    title: "AI Implementation & Integration",
    description: "Seamlessly integrate AI technologies into your workflows with ongoing support."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our Services: Tailored AI Solutions for Every Stage of Your Journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-border hover:border-accent/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 