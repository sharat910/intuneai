import Image from "next/image";

export function Clients() {
  return (
    <section className="py-16 border-y border-border/40">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-10">
          Trusted By Leading Innovators
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="relative h-12 w-32 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold">Virgin Airlines</span>
            </div>
          </div>
          <div className="relative h-12 w-32 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold">[Client 2]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 