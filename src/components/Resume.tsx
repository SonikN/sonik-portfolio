"use client";

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const resumeData = [
  {
    category: "Film",
    items: [
      { year: "2023", title: "The Silent Echo", role: "Lead", director: "Jane Smith / Indie Prod" },
      { year: "2021", title: "Midnight Sun", role: "Supporting", director: "John Doe / Studio A" },
    ]
  },
  {
    category: "Television",
    items: [
      { year: "2022", title: "City Lights (Ep 104)", role: "Guest Star", director: "Alice Roe / Network TV" },
      { year: "2020", title: "The Precinct", role: "Co-Star", director: "Bob Brown / Streaming Plus" },
    ]
  },
  {
    category: "Theater",
    items: [
      { year: "2019", title: "Hamlet", role: "Ophelia", director: "Downtown Stage Co." },
    ]
  }
];

export default function Resume() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto w-full flex flex-col gap-12">

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-800 pb-4">
        <motion.h2
          className="text-3xl md:text-5xl font-bold tracking-tight"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h2>

        <motion.button
          className="flex items-center gap-2 text-sm uppercase tracking-widest border border-gray-600 px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300 w-fit"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Download size={16} />
          <span>Download One-Page PDF</span>
        </motion.button>
      </div>

      <div className="flex flex-col gap-16">
        {resumeData.map((section) => (
          <div key={section.category} className="flex flex-col gap-6">
            <motion.h3
              className="text-xl md:text-2xl font-light text-gray-400 tracking-wide uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {section.category}
            </motion.h3>

            <div className="flex flex-col border-t border-gray-900">
              {section.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 py-4 border-b border-gray-900 hover:bg-gray-900/30 transition-colors px-2 -mx-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                >
                  <div className="md:col-span-2 text-gray-500 font-mono text-sm">{item.year}</div>
                  <div className="md:col-span-4 font-medium text-[#f5f5f5]">{item.title}</div>
                  <div className="md:col-span-3 text-gray-400 italic">{item.role}</div>
                  <div className="md:col-span-3 text-gray-500 text-sm md:text-right">{item.director}</div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
