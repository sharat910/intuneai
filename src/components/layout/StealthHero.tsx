"use client";
import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useSpring } from "react-spring";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function StealthHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.2,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.8, 0.8, 0.8],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [],
      onRender: (state) => {
        state.phi = phi + r.get();
        phi += 0.005;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [r]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white text-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
            contain: "layout paint size",
            opacity: 0,
            transition: "opacity 1s ease",
          }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="mb-8">
          <Image
            src="/icons/intuneai_logo_h.svg"
            alt="InTune AI Logo"
            width={240}
            height={72}
            priority
            className="mb-6"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Building the Future with AI
        </h1>
        <p className="text-lg md:text-xl max-w-3xl text-neutral-600 mb-8">
          We are crafting intelligent products that transform the way you study and work.
        </p>
        <Button asChild size="lg" style={{ backgroundColor: '#0096A9' }} className="text-white hover:bg-opacity-90 font-bold py-3 px-6 rounded-lg text-lg">
          <Link href="https://cal.mixmax.com/intuneai/initial-chat">
            Get in touch!
          </Link>
        </Button>
      </div>
    </div>
  );
}
