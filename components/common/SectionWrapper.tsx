// File: components/common/SectionWrapper.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  effect?: "fade" | "slide" | "parallax" | "scale" | "none";
  index?: number; // For staggered animations
  zIndex?: number;
  overlap?: "top" | "bottom" | "none";
}

const SectionWrapper = ({
  children,
  className = "",
  effect = "fade",
  index = 0,
  zIndex = 0,
  overlap = "none",
}: SectionWrapperProps) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Overlap classes
  const overlapClasses = {
    top: "-mb-32 relative",
    bottom: "-mt-32 relative",
    none: "",
  };

  // Different animation variants
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slide: {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    none: {
      hidden: {},
      visible: {},
    },
  };

  // Parallax effect
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    effect === "parallax" ? ["0%", "100%"] : ["0%", "0%"]
  );

  // Opacity based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      className={`relative  ${className}`}
      style={{ zIndex }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants[effect]}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      <motion.div style={{ y, opacity }}>{children}</motion.div>
    </motion.section>
  );
};

export default SectionWrapper;
