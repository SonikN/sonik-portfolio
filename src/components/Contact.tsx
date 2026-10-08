"use client";

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto w-full flex flex-col gap-16 mb-24">

      <motion.h2
        className="text-3xl md:text-5xl font-bold tracking-tight border-b border-gray-800 pb-4 text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        Contact
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-16 lg:gap-32 md:justify-center">

        {/* Representation & Links */}
        <motion.div
          className="flex flex-col md:flex-row gap-16 lg:gap-32 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col gap-8 flex-1">
            <h3 className="text-xl font-light text-gray-400 uppercase tracking-widest">Representation</h3>

            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-[#f5f5f5]">Theatrical</h4>
              <p className="text-gray-400 text-sm">Creative Artists Agency (CAA)</p>
              <p className="text-gray-500 text-sm">agent@agency.com | (555) 123-4567</p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-[#f5f5f5]">Commercial</h4>
              <p className="text-gray-400 text-sm">CESD Talent Agency</p>
              <p className="text-gray-500 text-sm">commercial@cesd.com | (555) 987-6543</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
             <h3 className="text-xl font-light text-gray-400 uppercase tracking-widest">Profiles</h3>
             <a
               href="#"
               className="flex items-center gap-2 text-[#f5f5f5] hover:text-gray-400 transition-colors w-fit border-b border-transparent hover:border-gray-400 pb-1"
             >
               IMDb Pro <ExternalLink size={14} />
             </a>
             <a
               href="#"
               className="flex items-center gap-2 text-[#f5f5f5] hover:text-gray-400 transition-colors w-fit border-b border-transparent hover:border-gray-400 pb-1"
             >
               Actors Access <ExternalLink size={14} />
             </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
