import Typewriter from "typewriter-effect";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Intro() {
  const [showGithub, setShowGithub] = useState(false);
  const [showLinkedin, setShowLinkedin] = useState(false);
  const [showInstagram, setShowInstagram] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center py-16 relative"
    >
      <div className="container mx-auto px-4 content-center">
        <h1 className="text-4xl font-bold mb-8">
          <div style={{ fontFamily: "monospace" }}>
            <Typewriter
              options={{
                delay: 50,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `Hey, I'm <span style="color: #6d28d9;">Bryan Reiter</span>,<br />a Senior Computer Science Major<br />at Temple University.<br /><span style="font-size: 1.5rem;">I'm a software developer, video game nerd,<br/ >and a huge fan of all things tech.<br /><br />Click the arrow below to learn a little bit more about me!<br /><br />Wanna connect right away? Choose how:</span>`
                  )
                  .callFunction(() => {
                    setTimeout(() => setShowGithub(true), 1000);
                    setTimeout(() => setShowLinkedin(true), 2000);
                    setTimeout(() => setShowInstagram(true), 3000);
                    setTimeout(() => setShowEnvelope(true), 4000);
                    setTimeout(() => setShowPhone(true), 5000);
                  })
                  .start();
              }}
            />
          </div>
        </h1>
        <div className="flex row items-center gap-5">
          <div className={`icon ${showGithub ? "show" : ""}`}>
            <a
              href="https://github.com/bryanreiter"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" className="transition duration-300 ease-in-out transform hover:scale-125 hover:text-purple-600"/>
            </a>
          </div>
          <div className={`icon ${showLinkedin ? "show" : ""}`}>
            <a
              href="https://www.linkedin.com/in/bryanreiter/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="transition duration-300 ease-in-out transform hover:scale-125 hover:text-purple-600" />
            </a>
          </div>
          <div className={`icon ${showInstagram ? "show" : ""}`}>
            <a
              href="https://www.instagram.com/bryanreiter_/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" className="transition duration-300 ease-in-out transform hover:scale-125 hover:text-purple-600" />
            </a>
          </div>
          <div className={`icon ${showEnvelope ? "show" : ""}`}>
            <a href="mailto:bryanreiter2002@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="transition duration-300 ease-in-out transform hover:scale-125 hover:text-purple-600" />
            </a>
          </div>
          <div className={`icon ${showPhone ? "show" : ""}`}>
            <a href="tel:484-268-4900">
              <FontAwesomeIcon icon={faPhone} size="2x" className="transition duration-300 ease-in-out transform hover:scale-125 hover:text-purple-600" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="text-white hover:text-gray-300">
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
