import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What industries do you specialize in?",
    answer: "We've worked across industries like cybersecurity, aviation, and enterprise IT, but our expertise applies to any sector looking to leverage AI."
  },
  {
    question: "How do I know if my business is ready for AI?",
    answer: "Our free consultation helps identify areas where AI can drive measurable improvements, regardless of your current technology stack."
  },
  {
    question: "What makes InTune AI different?",
    answer: "PhD-level expertise combined with real-world implementation experience ensures practical solutions that deliver ROI."
  },
  {
    question: "What happens after the initial consultation?",
    answer: "We'll provide a tailored roadmap and recommend the best engagement model based on your needs."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
} 