// src/data/social.ts
import { SocialLink } from "../types";
import { createElement } from "react";
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

const HuggingFaceIcon = ({ className }: { className?: string }) =>
  createElement("span", { className, role: "img", "aria-label": "Hugging Face" }, "🤗");

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/ngenome",
    icon: FaGithub,
  },
  {
    id: "hugging-face",
    name: "Hugging Face",
    url: "https://huggingface.co/InterstellarCG/",
    icon: HuggingFaceIcon,
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
  lastUpdated: "2026-08",
  sections: {
    profile: {
      title: "Professional Summary",
      content:
        "AI engineer and full-stack product builder working across agentic systems, secure backend architecture, machine learning, web, and mobile product delivery.",
    },
    expertise: [
      "Full Stack Development",
      "Mobile App Development",
      "AI Engineering",
      "Agentic Workflows",
      "Document Ingestion",
      "Cloud Architecture",
      "UI/UX Design",
      "System Architecture",
      "Technical Leadership",
    ],
  },
};
