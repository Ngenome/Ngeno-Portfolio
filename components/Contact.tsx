import {
  FaPhone,
  FaEnvelope,
  FaLocationArrow,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="flex flex-col text-white items-start justify-center h-screen">
      <h1 className="text-4xl  font-bold mb-8">Get in touch</h1>
      <div className="flex items-center mb-4">
        <FaPhone className="text-3xl mr-4" />
        <span className="text-lg">+254 726 299 179</span>
      </div>
      <div className="flex items-center mb-4">
        <FaEnvelope className="text-3xl mr-4" />
        <a
          href="mailto:interstellarcg@gmail.com"
          className="text-lg hover:text-green-600 transition-colors"
        >
          interstellarcg@gmail.com
        </a>
      </div>
      <div className="flex items-center mb-4">
        <FaGithub className="text-3xl mr-4" />
        <a
          href="https://github.com/ngenome"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg hover:text-green-600 transition-colors"
        >
          github.com/ngenome
        </a>
      </div>
      <div className="flex items-center mb-4">
        <FaInstagram className="text-3xl mr-4" />
        <a
          href="https://instagram.com/cginfinite"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg hover:text-green-600 transition-colors"
        >
          instagram.com/cginfinite
        </a>
      </div>
      <div className="flex items-center mb-4">
        <FaLocationArrow className="text-3xl mr-4" />
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg hover:text-green-600 transition-colors"
        >
          Nairobi, Kenya
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
