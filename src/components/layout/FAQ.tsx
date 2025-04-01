import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How can AI transform my business operations?",
    answer: "Our solutions can automate routine tasks, extract insights from your data, and optimize decision-making processes—reducing costs by up to 30% while increasing productivity across departments."
  },
  {
    question: "What's your approach to AI implementation?",
    answer: "We follow a four-step process: assessment of your current capabilities, strategy development, phased implementation, and continuous optimization—ensuring minimal disruption and maximum ROI."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients see initial benefits within 4-6 weeks of implementation. For more complex solutions, comprehensive ROI typically manifests within 3-6 months."
  },
  {
    question: "Do you offer ongoing support after implementation?",
    answer: "Absolutely. We provide comprehensive training for your team, regular performance reviews, and dedicated support channels to ensure your AI solutions continue to deliver value as your business evolves."
  },
  {
    question: "How do you handle data privacy and security requirements?",
    answer: "We'll work with you to understand your specific requirements and implement technical solutions that adhere to those requirements. Our approach ensures your data privacy and security needs are met with precision and expertise."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-background to-background/60">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 md:sticky md:top-24">
            <h2 className="text-5xl font-bold tracking-tight">
              Frequently
              <br />
              Asked
              <br />
              Questions
            </h2>
            <p className="mt-6 text-muted-foreground">
              Get answers to common questions about our AI services and implementation process.
            </p>
          </div>
          
          <div className="md:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-muted py-2"
                >
                  <AccordionTrigger className="text-left font-medium text-lg py-4 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
} 