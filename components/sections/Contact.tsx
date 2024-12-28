// File: components/sections/Contact.tsx
import React from "react";
import { motion } from "framer-motion";
import { SplitHeading, MagneticButton } from "@/components/common/animations";
import { socialLinks } from "@/data/social";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFileDownload,
} from "react-icons/fa";

const ContactLink = ({ icon: Icon, label, value, href, delay = 0 }) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className="group relative flex items-start gap-4 p-6 rounded-xl bg-surface-light border border-lime-DEFAULT/10
               hover:border-lime-DEFAULT/30 transition-all duration-300"
  >
    <div
      className="relative p-3 rounded-full bg-surface-dark text-lime-light group-hover:scale-110 
                   transition-transform duration-300"
    >
      <Icon className="w-6 h-6" />
    </div>
    <div className="relative">
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <p className="text-white font-medium group-hover:text-lime-light transition-colors duration-300">
        {value}
      </p>
    </div>
  </motion.a>
);

const SocialLink = ({ link, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative"
  >
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block p-4 rounded-full bg-surface-light border border-lime-DEFAULT/10
                hover:border-lime-DEFAULT/30 transition-all duration-300 group z-10"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <link.icon className="w-6 h-6 text-gray-400 group-hover:text-lime-light transition-colors duration-300" />

      {/* Improved tooltip positioning and visibility */}
      <span
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 text-sm 
                    bg-surface-dark border border-lime-DEFAULT/10 rounded-md
                    opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap"
      >
        {link.name}
      </span>
    </motion.a>
  </motion.div>
);

const ContactSection = () => {
  const contactInfo = [
    {
      icon: FaPhone,
      label: "Phone",
      value: "+254 726 299 179",
      href: "tel:+254726299179",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "interstellarcg@gmail.com",
      href: "mailto:interstellarcg@gmail.com",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "https://maps.google.com/?q=Nairobi,Kenya",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-section bg-surface-dark overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
                     from-lime-DEFAULT/5 via-transparent to-transparent"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px)] 
                     bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lime-light font-mono text-sm tracking-wider mb-4"
          >
            GET IN TOUCH
          </motion.p>
          <SplitHeading className="text-h1 font-display text-white mb-6">
            Let's Create
            <br />
            Something Amazing
          </SplitHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-body max-w-2xl mx-auto"
          >
            Have a project in mind or want to explore possibilities? I'm always
            open to discussing new opportunities and innovative ideas.
          </motion.p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {contactInfo.map((info, index) => (
            <ContactLink key={info.label} {...info} delay={index * 0.2} />
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => (
            <SocialLink key={link.id} link={link} index={index} />
          ))}
        </motion.div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center relative z-10"
        >
          <motion.a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-lime-default text-surface-dark 
                     font-medium rounded-full hover:bg-lime-light transition-colors duration-300
                     shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFileDownload className="w-5 h-5 animate-bounce" />
            <span className="font-medium">Download Resume</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
