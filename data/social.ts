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
    name: "Twitter",
    url: "https://twitter.com/devngeno",
    icon: FaTwitter,
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
    personal: "interstellarcg@gmail.com",
    business: "kelvin@dissolvesoftware.com",
  },
  phone: {
    primary: "+254 726 299 179",
    secondary: "+254 736 886 886",
  },
  location: "Nairobi, Kenya",
  availability: "Open to new opportunities and collaborations",
  preferredContact: "Email or LinkedIn",
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
        "Innovative and results-driven Full Stack Developer with over 3 years of experience in web and mobile app development, and 4 years in front-end development. Adept at designing scalable APIs, integrating backends with intuitive front-ends, and delivering user-centric digital solutions. Passionate about leveraging cutting-edge technologies to create impactful software.",
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
