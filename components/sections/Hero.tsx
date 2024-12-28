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

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-dark pt-32"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Accent circles */}
      <div className="absolute top-1/4 -right-1/4 w-[40vw] h-[40vw] rounded-full bg-lime-DEFAULT/10 blur-3xl" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[40vw] h-[40vw] rounded-full bg-yellow-DEFAULT/10 blur-3xl" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Name with creative treatment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-display bg-gradient-to-r from-lime-light via-yellow-light to-lime-light bg-clip-text text-transparent">
              Kelvin Ng'eno
            </h2>
          </motion.div>

          {/* Role/Position */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lime-light font-mono text-sm tracking-wider mb-6"
          >
            FULL STACK DEVELOPER & AI ENGINEER
          </motion.p>

          {/* Main heading */}
          <div className="mb-8">
            <SplitHeading className="font-display text-display text-balance leading-none text-white mb-4">
              Crafting Digital Excellence
            </SplitHeading>
            <RevealText
              text="Where Code Meets Creativity"
              className="text-yellow-light font-display text-h2 text-balance"
            />
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-body max-w-2xl mx-auto mb-12"
          >
            Building tomorrow's digital landscape with innovative solutions in
            web development, mobile applications, and artificial intelligence.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton>
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className="inline-flex items-center gap-2 px-8 py-4 bg-lime-DEFAULT text-surface-dark 
                         font-medium rounded-full hover:bg-lime-light transition-colors duration-300 cursor-pointer"
              >
                View My Work
              </ScrollLink>
            </MagneticButton>

            <MagneticButton>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className="inline-flex items-center gap-2 px-8 py-4 border border-lime-DEFAULT/30 
                         text-lime-light font-medium rounded-full hover:bg-lime-DEFAULT/10 
                         transition-colors duration-300 cursor-pointer"
              >
                Let's Connect
              </ScrollLink>
            </MagneticButton>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="text-gray-400 text-sm">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-lime-light"
        >
          <FaArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
