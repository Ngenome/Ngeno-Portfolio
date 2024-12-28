// File: components/navigation/Navigation.tsx
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  // Scroll and transform effects
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(18, 18, 18, 0)", "rgba(18, 18, 18, 0.8)"]
  );
  const headerBlur = useTransform(scrollY, [0, 50], [0, 8]);
  const progressBarScale = useTransform(
    scrollY,
    [
      0,
      typeof window !== "undefined"
        ? document.documentElement.scrollHeight - window.innerHeight
        : 1000,
    ],
    [0, 1]
  );

  // Navigation items
  const navItems = [
    { id: "home", label: "HOME" },
    { id: "projects", label: "WORK" },
    { id: "skills", label: "SKILLS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "contact", label: "CONTACT" },
  ];

  // Update dimensions effect
  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== "undefined") {
        setDimensions({
          height: document.documentElement.scrollHeight,
          width: window.innerWidth,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    // Cleanup
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Handle section visibility
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        offset: document.getElementById(item.id)?.offsetTop || 0,
      }));

      const currentPosition = window.scrollY + 100; // Adding offset for header

      const currentSection = sections.reduce((acc, section) => {
        if (currentPosition >= section.offset) {
          return section.id;
        }
        return acc;
      }, sections[0].id);

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // NavLink component
  const NavLink = ({ item, onClick = () => {} }) => (
    <ScrollLink
      to={item.id}
      spy={true}
      smooth={true}
      offset={-100}
      duration={1000}
      className={`relative px-4 py-2 text-sm tracking-wider cursor-pointer transition-colors duration-300
                ${
                  activeSection === item.id
                    ? "text-lime-light"
                    : "text-gray-400 hover:text-white"
                }`}
      onClick={onClick}
    >
      {item.label}
      {activeSection === item.id && (
        <motion.div
          layoutId="activeSection"
          className="absolute bottom-0 left-0 right-0 h-px bg-lime-light"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </ScrollLink>
  );

  return (
    <>
      <motion.header
        style={{
          backgroundColor: headerBg,
          backdropFilter: `blur(${headerBlur}px)`,
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-lime-DEFAULT/10"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-2xl font-display font-bold text-lime-light"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              KN
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <NavLink key={item.id} item={item} />
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="block md:hidden text-lime-light"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{
              height: isMenuOpen ? "auto" : 0,
              opacity: isMenuOpen ? 1 : 0,
            }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  item={item}
                  onClick={() => setIsMenuOpen(false)}
                />
              ))}
            </div>
          </motion.div>
        </nav>
      </motion.header>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-lime-light origin-left z-50"
        style={{ scaleX: progressBarScale }}
      />

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
