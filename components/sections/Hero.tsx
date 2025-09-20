// File: components/sections/Hero.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  SplitHeading,
  RevealText,
  MagneticButton,
} from "@/components/common/animations";
import { FaArrowDown } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-surface-dark pt-24 pb-32"
    >
      {/* Minimal background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[30vh] rounded-full bg-lime-default/5 blur-3xl" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-6"
      >
        <div className="max-w-5xl mx-auto">
          {/* Clean, minimal layout */}
          <div className="space-y-8">
            {/* Name - Clean typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white leading-none tracking-tight">
                Kelvin Ng'eno
              </h1>
            </motion.div>

            {/* Role - Simplified */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-8 h-px bg-lime-default" />
              <p className="text-lg text-gray-200">
                Full Stack Dev, AI Engineer, React Native Mobile App Developer
              </p>
            </motion.div>

            {/* Description - Clean and concise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl"
            >
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                Cracked founder mode engineer.{" "}
                <span className="text-white">Building scalable solutions</span> that solve real problems
                with frontier technology.
              </p>
            </motion.div>

            {/* CTA - Minimal buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <MagneticButton>
                <ScrollLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-lime-default text-surface-dark
                           font-medium hover:bg-lime-light transition-colors duration-300 cursor-pointer"
                >
                  View Work
                </ScrollLink>
              </MagneticButton>

              <MagneticButton>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                  className="inline-flex items-center gap-2 px-6 py-3 border-b border-lime-default/50
                           text-lime-light hover:border-lime-light transition-colors duration-300 cursor-pointer"
                >
                  Get In Touch
                </ScrollLink>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Minimal scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-transparent via-lime-default to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
