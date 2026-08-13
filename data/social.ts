// src/data/social.ts
import { SocialLink } from "../types";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/ngenome",
    icon: FaGithub,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/kelvin-ngeno",
    icon: FaLinkedin,
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/darlstellar",
    icon: FaInstagram,
  },
  {
    id: "twitter",
    name: "X",
    url: "https://twitter.com/_ngenome",
    icon: FaXTwitter,
  },
  {
    id: "company",
    name: "Dissolve Software",
    url: "https://www.dissolvesoftware.com",
    icon: FaGlobe,
  },
];

export const contactInfo = {
  email: {
    personal: "hello@ngenondumia.com",
    business: "kelvin@dissolvesoftware.com",
  },
  phone: {
    primary: "+254 726 299 179",
    secondary: "+254 736 886 886",
  },
  location: "Nairobi, Kenya",
  availability: "Open to new opportunities & collaborations to solve problems",
  preferredContact: "Email,LinkedIn",
  timeZone: "EAT (UTC+3)",
  languages: [
    {
      language: "English",
      proficiency: "Fluent",
    },
    {
      language: "Kiswahili",
      proficiency: "Fluent",
    },
  ],
};

export const resumeData = {
  downloadUrl: "/resume.pdf",
  lastUpdated: "2024-03",
  sections: {
    profile: {
      title: "Professional Summary",
      content:
        "Innovative and results-driven Full Stack Developer with over 3 years of experience in web and mobile app development, and 4 years in front-end development. Adept at designing scalable APIs, integrating backends with intuitive front-ends, and delivering user-centric digital solutions. Passionate about leveraging cutting-edge technologies to create impactful software that solves REAL problems.",
    },
    expertise: [
      "Full Stack Development",
      "Mobile App Development",
      "AI/ML Integration",
      "Cloud Architecture",
      "UI/UX Design",
      "System Architecture",
      "Technical Leadership",
    ],
  },
};
