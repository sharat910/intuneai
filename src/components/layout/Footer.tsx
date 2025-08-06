import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/40">
      <div className="container">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-col items-center">
            <Image 
              src="/icons/intuneai_logo_h.svg" 
              alt="InTune AI Logo" 
              width={160} 
              height={40}
            />
            <p className="mt-2 text-sm text-muted-foreground">
              We build helpful AI products 
              {/* Transforming Businesses with Tailored Intelligence */}
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:hello@intuneai.com.au" 
              className="text-muted-foreground hover:text-accent flex items-center gap-2"
            >
              <Mail size={18} />
              hello@intuneai.com.au
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="https://linkedin.com/company/intune-ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-accent flex items-center gap-2"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} InTune AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 