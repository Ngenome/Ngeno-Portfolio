import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/Contact";
import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";

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

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
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
  time,
}: {
  image: string;
  links: string[];
  title: string;
  description: string;
  time: string;
}) => {
  return (
    <div className="bg-white w-72 m-4  shadow overflow-hidden rounded-lg hover:bg-gray-50 duration-100 transition">
      <img
        className="w-full h-64 object-cover object-center"
        src={image}
        alt={title}
      />
      <div className="px-4 py-5">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="flex justify-between mt-4">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="text-gray-600">{time}</div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const projects = [
    {
      image: "https://www.wera.app/logo.png",

      links: [
        "https://www.wera.app/",
        "https://play.google.com/store/apps/details?id=com.wera.app",
      ],
      title: "Wera app",
      description:
        "A Service and Job procurement and Ecommerce app. This is an app where you can sell and buy goods, as well as provide and / or procure services. You can also procure services too. Download on Playstore.",
      time: "May 2023",
    },
    {
      image: "/jobzy-2.png",
      links: [
        "https://www.jobzy.africa/",
        "https://play.google.com/store/apps/details?id=africa.jobzy.client",
        "https://play.google.com/store/apps/details?id=africa.jobzy.provider",
      ],

      title: "Jobzy Apps",
      description:
        "Jobzy is a revolutionary platform that makes it easy for people to procure services and for service providers to offer their services. With two separate apps, one for clients and another for providers, Jobzy has become the go-to solution for anyone looking for a reliable and efficient way to get things done.",
      time: "May 2023",
    },
    {
      image:
        "https://play-lh.googleusercontent.com/YtnzNcR_FpRrvxjbmIgUj9QX8G6JMnwm5qExaSJwR5Cscj2RZr6wknxcjzg2qBvVV1Bp=w416-h235-rw",

      links: ["https://play.google.com/store/apps/details?id=com.fnotely.app"],
      title: "Fnotely app",
      description:
        "Simple but efficient note taking app made with react native Expo. Download on Playstore.",
      time: "May 2023",
    },
    {
      image: "/mjenzi.png",
      links: ["https://mjenzivendordashboard.netlify.app/"],
      title: "MJENZI VENDOR DASHBOARD",
      description:
        "Vendor Management Dashboard. A platform where vendors can register, and manage the products they sell. View Website.",
      time: "May 2023",
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
      <Hero />
      <AboutMe />
      <div>
        <div className="ml-4">
          <h2 className="text-2xl font-bold leading-7 hover:text-green-600 text-white sm:text-3xl sm:truncate">
            My Projects
          </h2>
          <div className="flex flex-wrap mt-1">
            <p className="text-sm text-gray-400">
              Here are some of the projects I have worked on.
            </p>
          </div>
        </div>

        <div className="flex flex-row flex-wrap ">
          {projects.map((e, i) => {
            return <ProjectView {...e} />;
          })}
        </div>
      </div>
      <ContactMe />
    </main>
  );
}
