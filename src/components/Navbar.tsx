"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="text-2xl font-outfit font-bold tracking-tighter">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            SRIRAM
          </span>
          <span className="text-white">.DEV</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1FAzKS6XuGsJ9fxEoBlG9LqyNPSeG_8XO/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full font-medium text-sm text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Resume
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1FAzKS6XuGsJ9fxEoBlG9LqyNPSeG_8XO/view?usp=sharing"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="text-center px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-primary to-secondary"
            >
              Download Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
