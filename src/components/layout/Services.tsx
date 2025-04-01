'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ChevronsRight, Code, Lightbulb } from "lucide-react";

const services = [
  {
    title: "AI Strategy & Advisory",
    description: "Navigate the AI landscape with confidence through expert guidance tailored to your business objectives.",
    icon: Lightbulb,
    features: [
      "AI Readiness Assessment",
      "Use Case Prioritization",
      "Strategic Roadmap Creation",
      "Business Impact Analysis",    
    ]
  },
  {
    title: "AI Workflow Acceleration",
    description: "Transform your team's productivity with AI tools and training designed to enhance existing workflows.",
    icon: ChevronsRight,
    features: [
      "Expert-Led Workshops",
      "Tailored Tool Recommendations",
      "Workflow Optimization",
      "Team Enablement Programs"
    ]
  },
  {
    title: "AI Solution Development",
    description: "Unlock powerful capabilities with bespoke AI solutions built specifically for your unique business challenges.",
    icon: Code,
    features: [
      "AI Agents for your workflows",
      "SoTA ML Models for bespoke tasks",
      "Seamless Enterprise Integrations",
      "Custom AI-Powered Analytics"
    ]
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Radial background similar to Hero */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/30 rounded-full blur-[100px] opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-accent/20 rounded-full blur-[80px] opacity-10" />
      </div>
      
      <div className="container relative">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored AI Solutions for Every Stage of Your Journey
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full border-2 hover:border-accent/50 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:bg-white group">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-accent/10 text-accent">
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 