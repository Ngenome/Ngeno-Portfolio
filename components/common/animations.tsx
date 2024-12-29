// File: components/common/animations.tsx
import React from "react";
import { motion } from "framer-motion";

// Text that reveals character by character
export const RevealText = ({ text, className = "" }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`inline-block ${className}`}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.5,
            delay: i * 0.03,
            ease: [0.19, 1, 0.22, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Smooth underline animation
export const AnimatedUnderline = ({ children, className = "" }) => {
  return (
    <span className={`relative inline-block group ${className}`}>
      {children}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-px bg-lime-light"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      />
    </span>
  );
};

// Fade up animation for content blocks
export const FadeUpDiv = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.19, 1, 0.22, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Magnetic animation for buttons and interactive elements
export const MagneticButton = ({ children, className = "" }) => {
  const magneticRef = React.useRef(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      magneticRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={magneticRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Staggered list animation
export const StaggeredList = ({ children, staggerDelay = 0.1 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {React.Children.map(children, (child) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Split text animation for headings
interface SplitHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const SplitHeading = ({
  children,
  className = "",
}: SplitHeadingProps) => {
  // Convert children to string and handle nested elements
  const text = React.Children.toArray(children)
    .map((child) => {
      if (typeof child === "string") return child;
      if (
        React.isValidElement(child) &&
        typeof child.props.children === "string"
      ) {
        return child.props.children;
      }
      return "";
    })
    .join(" ")
    .split(" ")
    .filter((word) => word.length > 0);

  return (
    <h2 className={className}>
      {text.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block overflow-hidden mr-2"
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: i * 0.1,
            ease: [0.19, 1, 0.22, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
};

// Word by word reveal animation
export const WordReveal = ({ text, className = "" }) => {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            ease: [0.19, 1, 0.22, 1],
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </span>
  );
};
