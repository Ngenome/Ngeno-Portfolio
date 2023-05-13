import React from "react";
import { FaReact, FaMobileAlt, FaLaptopCode } from "react-icons/fa";
import { SiDjango, SiNodedotjs } from "react-icons/si";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io";
import { DiCss3, DiHtml5, DiPostgresql } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import profilePic from "./profile-pic.jpg";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="w-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center">
              <img
                className="h-12 w-12 rounded-full"
                src={"/kelvin.jpg "}
                alt="Kelvin Ng'eno"
              />
              <div className="ml-4">
                <h2 className="text-2xl font-bold leading-7 text-green-600 sm:text-3xl sm:truncate">
                  Kelvin Ng&apos;eno
                </h2>
                <div className="flex flex-wrap mt-1">
                  <div className="flex items-center text-sm mr-4">
                    <FaLaptopCode className="mr-1" />
                    <span>Full Stack Developer</span>
                  </div>
                  <div className="flex items-center text-sm mr-4">
                    <FaMobileAlt className="mr-1" />
                    <span>Mobile Developer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap">
              <div className="flex items-center mr-6">
                <FaReact className="mr-1" />
                <span>React</span>
              </div>
              <div className="flex items-center mr-6">
                <FaReact className="mr-1" />
                <span>React Native</span>
              </div>
              <div className="flex items-center mr-6">
                <IoLogoJavascript className="mr-1" />
                <span>JavaScript</span>
              </div>
              <div className="flex items-center mr-6">
                <IoLogoPython className="mr-1" />
                <span>Python</span>
              </div>
              <div className="flex items-center mr-6">
                <DiCss3 className="mr-1" />
                <span>CSS</span>
              </div>
              <div className="flex items-center mr-6">
                <DiHtml5 className="mr-1" />
                <span>HTML</span>
              </div>
              <div className="flex items-center mr-6">
                <DiPostgresql className="mr-1" />
                <span>PostgreSQL</span>
              </div>
              <div className="flex items-center mr-6">
                <AiOutlineConsoleSql className="mr-1" />
                <span>SQL</span>
              </div>
              <div className="flex items-center mr-6">
                <SiDjango className="mr-1" />
                <span>Django</span>
              </div>
              <div className="flex items-center mr-6">
                <SiNodedotjs className="mr-1" />
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen items-center justify-center w-full md:p-40 ">
        <p className="text-xl ">
          Hi, I&apos;m Kelvin Ng&apos;eno, a skilled full stack software
          engineer with a passion for developing{" "}
          <span className="bg-green-600">innovative solutions</span>. I have a
          deep appreciation for the nuances of software development, and I pride
          myself on my ability to create software that is both{" "}
          <span className="bg-green-600">elegant</span> and{" "}
          <span className="bg-green-600">functional</span>. When it comes to
          software engineering, I&apos;m not afraid of the dark. In fact,
          it&apos;s against a{" "}
          <span className="bg-green-600">dark background</span> that my
          technical skills and creative spirit shine brightly. I navigate the
          complex world of software engineering with ease and precision, and
          I&apos;m always looking for new challenges to tackle. Whether I&apos;m
          working on a mobile app or a web-based project, my commitment to{" "}
          <span className="bg-green-600">excellence</span> and attention to{" "}
          <span className="bg-green-600">detail</span> are evident in every line
          of code I write. I believe that the key to success in software
          development is a combination of{" "}
          <span className="bg-green-600">technical skill</span> and{" "}
          <span className="bg-green-600">creative thinking</span>, and I&apos;m
          constantly pushing myself to develop both. In short, I&apos;m a
          software engineer who is passionate about what I do, and I&apos;m
          committed to delivering the{" "}
          <span className="bg-green-600">best possible results</span> for my
          clients. If you&apos;re looking for a skilled and dedicated developer
          to bring your project to life, I&apos;d love to hear from you.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
