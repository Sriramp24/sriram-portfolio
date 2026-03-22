"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "C++", percent: 90 },
      { name: "C", percent: 85 },
      { name: "Python", percent: 80 },
      { name: "JavaScript", percent: 75 },
    ],
  },
  {
    category: "Technologies / Libraries",
    items: [
      { name: "HTML", percent: 95 },
      { name: "CSS", percent: 90 },
      { name: "NumPy", percent: 80 },
      { name: "Pandas", percent: 85 },
      { name: "Matplotlib", percent: 75 },
      { name: "Seaborn", percent: 70 },
      { name: "Scikit-learn", percent: 65 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "VS Code", percent: 95 },
      { name: "Google Colab", percent: 90 },
      { name: "Power BI", percent: 75 },
      { name: "MS Excel", percent: 85 },
    ],
  },
  {
    category: "Core Strengths",
    items: [
      { name: "Data Structures & Algorithms", percent: 95 },
      { name: "Problem Solving", percent: 90 },
      { name: "Teamwork", percent: 100 },
      { name: "Adaptability", percent: 95 },
      { name: "Time Management", percent: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 w-full relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-secondary/10 rounded-bl-full blur-xl group-hover:opacity-100 opacity-0 transition-opacity" />
              
              <h3 className="text-2xl font-bold text-white font-outfit mb-6 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-gradient-to-b from-primary to-secondary inline-block" />
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: groupIndex * 0.1 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
