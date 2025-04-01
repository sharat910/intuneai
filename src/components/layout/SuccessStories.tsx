'use client';

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Building2, LayoutGrid, Bot, BarChart3, GraduationCap } from "lucide-react";

const successStories = [
  {
    title: "Enterprise AI Foundations",
    subtitle: "For a Fortune 500 company",
    description: "Working with a major airline to build robust GenAI foundations through technical and governance frameworks, enabling responsible AI solutions at scale with Databricks and Copilot Studio.",
    icon: Building2,
    className: "md:col-span-1 row-span-1",
    size: "small"
  },
  {
    title: "AI-Powered Workflows",
    subtitle: "75% Time Reduction",
    description: "Implemented intelligent workflow automation solutions that integrate seamlessly with existing systems for enterprise teams, reducing process completion time while increasing accuracy.",
    icon: LayoutGrid,
    className: "md:col-span-1 row-span-1",
    size: "small"
  },
  {
    title: "Complex Task Delegation",
    subtitle: "Agentic Automation",
    description: "Designed and deployed autonomous AI agents capable of independently analyzing business requirements, navigating code and completing complex tasks with human-in-the-loop review.",
    icon: Bot,
    className: "md:col-span-1 row-span-1",
    size: "small"
  },
  {
    title: "Millions Served Daily",
    subtitle: "ML at Scale",
    description: "Developed and deployed classification models that serve millions of users in production environments with robust monitoring and observability. Enterprise-grade solutions built for scale and reliability.",
    icon: BarChart3,
    className: "md:col-span-2 md:row-span-1",
    size: "wide"
  },
  {
    title: "AI Workshops",
    subtitle: "Technical Enablement",
    description: "Delivered hands-on workshops around AI agents to technical audiences, helping teams navigate the complex and continuously evolving landscape while building practical implementation skills.",
    icon: GraduationCap,
    className: "md:col-span-1 row-span-1",
    size: "small"
  },
];

export function SuccessStories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section id="success-stories" className="py-24 bg-white relative overflow-hidden">
      {/* Abstract decorative elements */}
      <div className="absolute w-96 h-96 -right-48 top-24 rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute w-64 h-64 -left-32 bottom-12 rounded-full bg-accent/5 blur-3xl"></div>
      
      <div className="container relative z-10 max-w-6xl">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results our team is delivering
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-8 bg-white border border-zinc-200 shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-300 flex flex-col ${story.className}`}
            >
              {/* Circle icon at top left */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-accent/10">
                  <story.icon className="w-7 h-7 text-accent" />
                </div>
              </div>
              
              {/* Content based on card size */}
              {story.size === "small" && (
                <>
                  <h3 className="text-2xl font-bold mb-2">{story.title}</h3>
                  <p className="text-sm font-medium text-accent mb-3">{story.subtitle}</p>
                </>
              )}
              
              {story.size === "wide" && (
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-1">{story.title}</h3>
                    <p className="text-sm font-medium text-accent">{story.subtitle}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-3 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full">Enterprise-grade</span>
                  </div>
                </div>
              )}
              
              {/* Description */}
              <p className="text-zinc-600 mt-auto">{story.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 