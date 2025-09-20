// File: components/Footer.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { socialLinks } from "@/data/social";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", to: "home" },
    { label: "Work", to: "projects" },
    { label: "Skills", to: "skills" },
    { label: "Experience", to: "experience" },
    { label: "Contact", to: "contact" },
  ];

  // Separate component for footer link to improve interactivity
  const FooterLink = ({ to, label }) => (
    <li>
      <ScrollLink
        to={to}
        spy={true}
        smooth={true}
        offset={-100}
        duration={1000}
        className="block py-2 text-gray-400 hover:text-lime-light transition-colors cursor-pointer"
        activeClass="text-lime-light"
      >
        {label}
      </ScrollLink>
    </li>
  );

  // Separate component for contact link
  const ContactLink = ({ href, children }) => (
    <li>
      <motion.a
        href={href}
        whileHover={{ x: 5 }}
        className="block py-2 text-gray-400 hover:text-lime-light transition-colors"
      >
        {children}
      </motion.a>
    </li>
  );

  return (
    <footer className="relative bg-surface-dark py-16 overflow-hidden z-10">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-DEFAULT/20 to-transparent" />

      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,.02)_1px,transparent_1px)] 
                   bg-[size:4rem_4rem] opacity-20"
      />

      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <motion.a
              href="/"
              className="inline-block text-2xl font-display font-bold text-lime-light mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              KN
            </motion.a>
            <p className="text-gray-400 max-w-md">
              Cracked, Founder mode engineer
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-medium mb-4">Quick Links</h3>
              <ul className="space-y-1">
                {footerLinks.map((link) => (
                  <FooterLink key={link.to} {...link} />
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Contact</h3>
              <ul className="space-y-1">
                <ContactLink href="tel:+254726299179">
                  +254 726 299 179
                </ContactLink>
                <ContactLink href="mailto:hello@ngenondumia.com">
                  hello@ngenondumia.com
                </ContactLink>
                <ContactLink href="https://maps.google.com/?q=Nairobi,Kenya">
                  Nairobi, Kenya
                </ContactLink>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {socialLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface-light border border-lime-DEFAULT/10
                       hover:border-lime-DEFAULT/30 text-gray-400 hover:text-lime-light 
                       transition-all duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-lime-DEFAULT/10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 md:mb-0">
            <span>© {currentYear}</span>
            <span className="text-lime-light">Kelvin Ng'eno</span>
            <span className="flex items-center gap-1">
              Made with <FaHeart className="text-red-500 animate-pulse" />
            </span>
          </div>

          <div className="flex items-center gap-6"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
