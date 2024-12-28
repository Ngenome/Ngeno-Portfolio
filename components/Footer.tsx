// File: components/Footer.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", to: "home" },
    { label: "Work", to: "projects" },
    { label: "Skills", to: "skills" },
    { label: "Experience", to: "experience" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <footer className="relative bg-surface-dark py-16 overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-DEFAULT/20 to-transparent" />

      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,.02)_1px,transparent_1px)] 
                   bg-[size:4rem_4rem] opacity-20"
      />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <motion.a
              href="#"
              className="inline-block text-2xl font-display font-bold text-lime-light mb-4"
              whileHover={{ scale: 1.05 }}
            >
              KN
            </motion.a>
            <p className="text-gray-400 max-w-md">
              Crafting digital experiences through innovative solutions in web
              development, mobile applications, and artificial intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.to}>
                    <ScrollLink
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={1000}
                      className="text-gray-400 hover:text-lime-light transition-colors cursor-pointer"
                    >
                      {link.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="tel:+254726299179"
                    className="hover:text-lime-light transition-colors"
                  >
                    +254 726 299 179
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:interstellarcg@gmail.com"
                    className="hover:text-lime-light transition-colors"
                  >
                    interstellarcg@gmail.com
                  </a>
                </li>
                <li>Nairobi, Kenya</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-lime-DEFAULT/10">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Kelvin Ng'eno. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/ngenome"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-lime-light transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/kelvin-ngeno"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-lime-light transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
