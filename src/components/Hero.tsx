"use client";

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">

      {/* Text Overlay */}
      <div className="z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 text-[#f5f5f5]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          JANE DOE
        </motion.h1>

        <motion.div
          className="text-lg md:text-xl lg:text-2xl tracking-widest uppercase text-gray-400 font-light flex gap-4 md:gap-8 flex-wrap justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span>Actor</span>
          <span className="hidden md:inline">•</span>
          <span>Writer</span>
          <span className="hidden md:inline">•</span>
          <span>Creator</span>
        </motion.div>

        <motion.p
          className="text-sm md:text-base text-gray-500 max-w-2xl text-center leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
        >
          A critically acclaimed performer and storyteller bringing raw emotion and meticulous craft to the screen and stage. Dedicated to exploring complex characters and compelling narratives with a grounded, cinematic approach. Based in Los Angeles and New York.
        </motion.p>
      </div>

      {/* Headshot Placeholder */}
      <motion.div
        className="mt-12 md:mt-24 w-full max-w-sm aspect-square rounded-full relative mx-auto overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center text-gray-600 border border-gray-800 rounded-full">
          [Headshot Placeholder]
        </div>
        {/*
        <Image
          src="/headshot.jpg"
          alt="Jane Doe Headshot"
          fill
          className="object-cover object-center"
          priority
        />
        */}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}
