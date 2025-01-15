// File: tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          // From the color scheme image
          light: "#C0FF02",
          DEFAULT: "#32CC32",
          default: "#32CC32",
          dark: "#2BA62B",
        },
        yellow: {
          light: "#FFE20B",
          default: "#F4FF00",
          dark: "#FFE20B",
        },
        surface: {
          light: "#1A1A1A",
          default: "#121212",
          dark: "#0A0A0A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui"],
        display: ["var(--font-monument)", "system-ui"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        // Fluid typography
        display: [
          "clamp(2.5rem, 8vw, 6rem)",
          { lineHeight: "1", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        display2: [
          "clamp(2rem, 6vw, 5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        h1: [
          "clamp(2rem, 5vw, 4rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        h2: [
          "clamp(1.5rem, 4vw, 3rem)",
          { lineHeight: "1.2", letterSpacing: "-0.02em" },
        ],
        h3: [
          "clamp(1.25rem, 3vw, 2.25rem)",
          { lineHeight: "1.2", letterSpacing: "-0.02em" },
        ],
        body: ["clamp(1rem, 1.2vw, 1.125rem)", { lineHeight: "1.5" }],
      },
      spacing: {
        section: "clamp(4rem, 10vw, 8rem)",
      },
      height: {
        "screen-dvh": "100dvh",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "slide-down": "slideDown 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "rotate-in": "rotateIn 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        rotateIn: {
          "0%": { transform: "rotate(-10deg) scale(0.8)", opacity: "0" },
          "100%": { transform: "rotate(0) scale(1)", opacity: "1" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-balance": {
          textWrap: "balance",
        },
        ".text-stroke": {
          "-webkit-text-stroke": "1px currentColor",
          color: "transparent",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
