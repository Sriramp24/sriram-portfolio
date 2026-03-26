"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaHandsHelping, FaExternalLinkAlt } from "react-icons/fa";

export default function Extracurriculars() {
  return (
    <section id="extracurriculars" className="py-24 w-full relative bg-white/[0.02]">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            Extracurricular <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Activities</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden group"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 text-green-500">
            <FaLeaf size={200} />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-20 h-20 bg-green-500/20 rounded-2xl flex items-center justify-center shrink-0 border border-green-500/30 text-green-400 text-4xl">
              <FaHandsHelping />
            </div>
            
            <div className="text-center md:text-left">
              <a href="https://drive.google.com/file/d/1pR9hENrNCXw2R0V5mJoEQMhcnSQ8echA/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-2 justify-center md:justify-start cursor-pointer w-fit mx-auto md:mx-0">
                <h3 className="text-2xl font-bold text-white font-outfit mb-2 group-hover/link:text-green-400 transition-colors">
                  Dhruvansh NGO Volunteer
                </h3>
                <FaExternalLinkAlt size={16} className="text-green-400 opacity-0 group-hover/link:opacity-100 transition-opacity mb-2" />
              </a>
              <p className="text-green-400 font-medium mb-4 flex items-center gap-2 justify-center md:justify-start">
                <FaLeaf className="text-sm" /> Community Greening Initiative
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                Actively contributed to local environmental sustainability by organizing and participating in tree planting drives. Successfully mapped and planted <strong className="text-white">150 saplings</strong> across <strong className="text-white">20 different plant species</strong> to promote biodiversity and community greening.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
