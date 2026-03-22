"use client";

import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaBrain } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center w-full overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full mix-blend-screen filter blur-[128px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-secondary font-semibold tracking-wider uppercase mb-4 text-sm md:text-base">
              Hello World, I am
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold font-outfit mb-6 text-white">
              Sriram Pendem
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 font-medium mb-6 font-outfit"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">
              Computer Science Student
            </span>{' '}
            | Software Developer | DSA Enthusiast
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed"
          >
            Passionate about building secure systems and exploring AI-driven technologies. Strong algorithmic problem solver with 90+ LeetCode problems solved. I thrive on creating robust data-driven solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:scale-105 transition-transform shadow-[0_0_20px_rgba(79,70,229,0.4)]">
              View Projects
            </a>
            <a href="https://drive.google.com/file/d/1FAzKS6XuGsJ9fxEoBlG9LqyNPSeG_8XO/view?usp=sharing" target="_blank" className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
              Download Resume
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full text-gray-300 hover:text-white border border-transparent font-medium hover:border-white/10 transition-colors">
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-md relative"
        >
          <div className="relative aspect-square rounded-full border border-white/10 p-4 bg-white/5 backdrop-blur-sm shadow-2xl">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden border border-white/5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-secondary/40 animate-pulse rounded-full blur-2xl -z-10" />
              <img src="/profile.jpg" alt="Sriram Pendem" className="w-full h-full object-cover z-20" />
            </div>

            {/* Floating Icons */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-background border border-white/10 p-4 rounded-2xl shadow-xl shadow-primary/20 backdrop-blur-md"
            >
              <FaCode className="text-3xl text-primary" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-1/2 -right-10 bg-background border border-white/10 p-4 rounded-2xl shadow-xl shadow-secondary/20 backdrop-blur-md"
            >
              <FaBrain className="text-3xl text-secondary" />
            </motion.div>

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-8 left-1/4 bg-background border border-white/10 p-4 rounded-2xl shadow-xl shadow-primary/20 backdrop-blur-md"
            >
              <FaDatabase className="text-3xl text-blue-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
