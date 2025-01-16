// File: app/page.tsx
"use client";

import React, { useEffect } from "react";
import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/sections/Hero";
import SkillsSection from "@/components/sections/Skills";
import ProjectsSection from "@/components/sections/Projects";
import ExperienceSection from "@/components/sections/Experience";
import ContactSection from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/useScrollSmooth";
import { motion, useScroll, useTransform } from "framer-motion";
import { socialLinks } from "@/data/social";
import localFont from "next/font/local";
import CanvasCursor from "@/components/Cursor";
import { useMouse } from "@/hooks/useMouse";

export default function Home() {
  // Initialize smooth scrolling
  // useSmoothScroll();
  // useMouse();

  return (
    <main className={`bg-surface-dark min-h-screen`}>
      {/* Navigation */}
      <Navigation />
      <CanvasCursor />

      {/* Page Content */}
      <div className="relative">
        {/* Hero Section */}
        <Hero />

        {/* Main Content */}
        <div className="relative">
          {/* Skills Section - Overlapping previous section */}

          <SkillsSection />

          {/* Projects Section - Shifting up slightly */}
          <div className="relative -mt-16">
            <ProjectsSection />
          </div>

          {/* Experience Section */}
          <div className="relative">
            <ExperienceSection />
          </div>

          {/* Contact Section - Overlapping previous section */}
          <div className="relative -mt-32 z-20">
            <ContactSection />
          </div>
        </div>

        {/* Footer */}
        <Footer />

        {/* Fixed Elements */}
        <SideElements />
      </div>
    </main>
  );
}

// Side elements component for additional visual flair
const SideElements = () => {
  return (
    <>
      {/* Email on right side */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed right-8 bottom-0 hidden lg:flex flex-col items-center gap-6 z-50"
      >
        <a
          href="mailto:hello@ngenondumia.com"
          className="text-gray-400 hover:text-lime-light transition-colors duration-300 vertical-text"
        >
          hello@ngenondumia.com
        </a>
        <div className="w-px h-24 bg-lime-default/20" />
      </motion.div>

      {/* Social links on left side */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed left-8 bottom-0 hidden lg:flex flex-col items-center gap-6 z-50"
      >
        <div className="space-y-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-400 hover:text-lime-light transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
        <div className="w-px h-24 bg-lime-default/20" />
      </motion.div>

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-lime-default origin-left z-50"
        style={{
          scaleX: useTransform(useScroll().scrollYProgress, [0, 1], [0, 1]),
        }}
      />

      {/* Mouse follower effect */}
      <MouseFollower />
    </>
  );
};

// Custom mouse follower effect
const MouseFollower = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      }}
      transition={{
        type: "spring",
        damping: 50,
        stiffness: 500,
        mass: 0.1,
      }}
    >
      <div className="w-full h-full rounded-full border border-lime-light opacity-50" />
      <div className="absolute inset-2 rounded-full bg-lime-light blur-sm opacity-20" />
    </motion.div>
  );
};
