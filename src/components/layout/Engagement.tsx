"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, CheckCircle, RefreshCw } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Initial Discovery",
    icon: MessageSquare,
    description: "We start by understanding your unique AI challenges and opportunities through a no-obligation consultation."
  },
  {
    id: 2,
    title: "Tailored Engagement",
    icon: CheckCircle,
    description: "Based on your needs, we'll recommend and implement the most suitable engagement model for your business."
  },
  {
    id: 3,
    title: "Ongoing Partnership",
    icon: RefreshCw,
    description: "We provide continuous support and optimization to ensure your AI solutions evolve with your business needs."
  }
];

export function Engagement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section id="engagement" className="py-24">
      <div className="container">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Engagement Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A structured approach to delivering AI solutions that work for you
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative">
                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 z-10">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    >
                      <ArrowRight className="w-6 h-6 text-accent" />
                    </motion.div>
                  </div>
                )}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="h-full"
                >
                  <Card className="h-full border hover:border-accent/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-accent">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="text-sm font-medium text-accent">Step {step.id}</div>
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            );
          })}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 h-auto text-lg rounded-full">
            Schedule Your Free Consultation Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 