import Image from "next/image";
import React from "react";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/Contact";
import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import WorkExperience from "@/components/WorkExperience";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import ParticlesPage from "@/components/Particles";
interface SkillCardProps {
  name: string;
  level: number;
  icon: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, level }) => {
  return (
    <div className="skill-card">
      <div className="skill-info">
        <div className="skill-icon">
          <img
            className="text-white fill-green-400"
            src={icon}
            alt={name}
            width={50}
            height={50}
          />
        </div>
        <div className="skill-name">{name}</div>
        {/* <div className="skill-level">{level}%</div> */}
      </div>
    </div>
  );
};

function Hero() {
  return (
    <div className="bg-gray-900 h-screen w-screen text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-left">
          <h1 className="text-4xl font-bold leading-tight tracking-tight mb-4">
            Hi, I&apos;m Kelvin Ng&apos;eno
          </h1>
          <p className="text-2xl mb-8">A Full Stack Software Engineer</p>
          <div className="flex justify-start">
            <a
              href="#about-me"
              className="px-6 py-3 rounded-full text-gray-900 font-semibold bg-white hover:bg-gray-200 mr-4"
            >
              About Me
            </a>
            <a
              href="#contact-me"
              className="px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
const ProjectView = ({
  image,
  links,
  title,
  description,
}: {
  image: string;
  links: string[];
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-gray-700 bg-opacity-20 text-green-600 w-72 m-4 shadow-lg overflow-hidden rounded-lg hover:bg-gray-800 duration-100 transition backdrop-blur-md ">
      <img
        className="w-full h-64 object-cover object-center"
        src={image}
        alt={title}
      />
      <div className="px-4 py-5">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-300 text-base">{description}</p>
        <div className="flex justify-between mt-4">
          <div className="flex flex-col">
            {links.map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-blue-300"
              >
                {link.slice(0, 30)}
                {link.length > 30 ? "..." : ""}
              </a>
            ))}
          </div>
        </div>
        {/* <div className="text-gray-400">{time}</div> */}
      </div>
    </div>
  );
};

export default function Home() {
  const projects = [
    {
      image: "/talent-jobzy.png",
      links: [
        "https://app.talent.jobzy.africa/",
        "https://play.google.com/store/apps/details?id=com.enochk.jobzy_talent",
      ],
      title: "Talent App",
      description:
        "Talent is a Jobs platform where job seekers can find jobs and apply for them. Employers can post jobs and find candidates. I worked on the Mobile App using React Native.",
    },
    {
      image: "/mfarmz.png",
      links: ["https://mfarmz.azurewebsites.net/"],
      title: "M-Farmz",
      description:
        "M-Farmz is a custom made farm management software I made for a client. It includes a mobile application and an admin site. It helps my client manage their farm and keep track of their farm activities, expenses, and income.",
    },

    {
      image: "/m-jenzi-web.png",

      links: ["https://www.m-jenzi.com/"],
      title: "M-Jenzi",
      description:
        "M-jenzi  is a platform that connects clients with service providers. It is a platform where clients can request services and service providers can offer their services. ",
    },

    {
      image: "/m-jenzi-app.png",
      links: [
        "https://play.google.com/store/apps/details?id=com.mjenzi.client",
      ],
      title: "M-Jenzi Client App",
      description:
        "M-jenzi  App is a mobile application where customers can purchase construction materials, request services from service providers",
    },
    {
      image: "/mjenzi.png",
      links: [
        "https://vendor.mjenzi.com",
        "https://mjenzivendordashboard.netlify.app/",
      ],
      title: "MJENZI VENDOR DASHBOARD",
      description:
        "Vendor Management Dashboard. A platform where vendors can register, and manage the products they sell. View Website.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-800">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Kodchasan:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>
      <ParticlesPage />
      <Hero />
      <AboutMe />
      <div>
        <div className="ml-4">
          <h2 className="text-2xl font-bold leading-7 hover:text-green-600 text-white sm:text-3xl sm:truncate">
            My Projects 🚀
          </h2>
          <div className="flex flex-wrap mt-1">
            <p className="text-sm text-gray-400">
              Here are some of the projects I have worked on.
            </p>
          </div>
        </div>

        <div className="flex flex-row flex-wrap ">
          {projects.map((e, i) => {
            return <ProjectView key={i} {...e} />;
          })}
        </div>
      </div>
      <WorkExperience />
      <ContactMe />
    </main>
  );
}
