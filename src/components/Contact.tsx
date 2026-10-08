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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Contact Form */}
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-xl font-light text-gray-400 uppercase tracking-widest">Send a Message</h3>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-500">Name</label>
              <input
                type="text"
                id="name"
                className="bg-transparent border-b border-gray-800 py-2 text-[#f5f5f5] focus:outline-none focus:border-white transition-colors duration-300"
                placeholder="Your Name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-500">Email</label>
              <input
                type="email"
                id="email"
                className="bg-transparent border-b border-gray-800 py-2 text-[#f5f5f5] focus:outline-none focus:border-white transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-500">Message</label>
              <textarea
                id="message"
                rows={4}
                className="bg-transparent border-b border-gray-800 py-2 text-[#f5f5f5] focus:outline-none focus:border-white transition-colors duration-300 resize-none"
                placeholder="How can we collaborate?"
              />
            </div>

            <button
              type="submit"
              className="mt-4 border border-gray-600 px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 w-fit"
            >
              Send
            </button>
          </form>
        </motion.div>

        {/* Representation & Links */}
        <motion.div
          className="flex flex-col gap-12"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col gap-6">
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
