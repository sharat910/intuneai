import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const successStories = [
  {
    title: "Scalable ML Models with Observability",
    description: "Developed a transformer-based model classifying millions of encrypted traffic flows daily, complete with drift detection and monitoring tools."
  },
  {
    title: "Production-Grade AI Agents",
    description: "Delivered intelligent automation solutions that enhance security operations by triaging vulnerabilities and suggesting fixes."
  },
  {
    title: "Enterprise AI Foundations",
    description: "Partnered with Virgin Airlines to establish foundational AI capabilities using Generative AI on Databricks."
  }
];

export function SuccessStories() {
  return (
    <section id="success-stories" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real Results from InTune AI's Expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <Card key={index} className="border border-border hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{story.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{story.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 