"use client";

import { motion } from 'framer-motion';

export default function MediaHub() {
  const stills = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full flex flex-col gap-24">

      {/* Reel Section */}
      <div className="flex flex-col gap-8">
        <motion.h2
          className="text-3xl md:text-5xl font-bold tracking-tight border-b border-gray-800 pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Reel
        </motion.h2>

        <motion.div
          className="w-full aspect-video bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-500 overflow-hidden relative group"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Real iframe can be uncommented and configured here */}
          {/* <iframe
            src="https://player.vimeo.com/video/XXXXX?h=XXXXX&color=ffffff&title=0&byline=0&portrait=0"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          <span className="z-10">[Video Embed Placeholder]</span>

          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
        </motion.div>
      </div>

      {/* Gallery Section */}
      <div className="flex flex-col gap-8">
        <motion.h2
          className="text-3xl md:text-5xl font-bold tracking-tight border-b border-gray-800 pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {stills.map((item, index) => (
            <motion.div
              key={item}
              className="aspect-[4/3] bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-600 relative overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-full h-full transition-transform duration-700 group-hover:scale-105 bg-gray-800 flex items-center justify-center">
                 [Still {item}]
              </div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
