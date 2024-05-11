import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      company: "Dissolve Software",
      companyUrl: "https://www.dissolvesoftware.com/",
      position: "Founder",
      duration: "January 2024 - Present",
      mode: "_",
      description:
        "Dissolve Software is a software company that builds software for clients. I have worked on a number of projects including a farm management software, a construction company website and mobile app, a job procurement app, and a laundry app. I have also worked on a number of other projects.",
    },
    {
      id: "#2",
      company: "M-jenzi",
      companyUrl: "https://www.mjenzi.com/",
      position: "Front End & Backend Engineer, Mobile App Developer",
      duration: "Jan 2023 - March 2024",
      mode: "FreeLance",
      description:
        "M-jenzi is a construction company that enables  providers in this sector to have their businesses online. I worked on the Django backend API.\n\n I also developed the vendor dashboard where vendors can register, and manage the products they sell. I also developed the main website and the mobile app using React Native. \n",
    },
    {
      id: 2,
      company: "Jobzy",
      companyUrl: "https://www.jobzy.africa/",
      position: "Full Stack Developer",
      duration: "Nov 2022- Present",
      mode: "Freelance",
      description:
        "Jobzy is a revolutionary platform that makes it easy for people to procure services and for service providers to offer their services. With two separate apps, one for clients and another for providers, Jobzy has become the go-to solution for anyone looking for a reliable and efficient way to get things done. I worked on the client and provider apps. - Also made the backend API with Django.",
    },
    {
      id: 3,
      company: "Wera",
      companyUrl: "https://wera.app",
      position: "Full Stack Developer",
      duration: "June 2022- Nov 2022",

      mode: "Freelance",
      description:
        "Wera is a Service and Job procurement and Ecommerce app. This is an app where you can sell and buy goods, as well as provide and / or procure services. I worked this app  - Also made the backend API with Django. I also made their website with Nextjs.",
    },
    {
      id: 4,
      company: "Snobole Software",
      companyUrl: "https://snobole.com",
      position: "Mobile App Developer",
      duration: "Jan 2022 - June 2022",
      mode: "Freelance",
      description:
        "Snobole is a software company that builds software for clients. I worked on a Laundry app for them. ",
    },
  ];

  return (
    <section
      id="work-experience"
      className="bg-gray-900 text-white py-16 w-screen"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-600 mb-8">
          Work Experience
        </h2>
        {experiences.map((experience) => (
          <div key={experience.id} className="mb-8">
            <h3 className="text-xl font-bold">{experience.position}</h3>
            <a href={experience.companyUrl} target="_blank" rel="noreferrer">
              <p className="text-lg hover:text-green-600">
                {experience.company}
              </p>
            </a>
            <p className="text-gray-400">
              {experience.duration} ({experience.mode})
            </p>
            <p className="mt-4">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
