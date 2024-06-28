import Typewriter from "typewriter-effect";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Intro() {
  const [showGithub, setShowGithub] = useState(false);
  const [showLinkedin, setShowLinkedin] = useState(false);
  const [showInstagram, setShowInstagram] = useState(false);
  const [showDiscord, setShowDiscord] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <section
      id="intro"
      className="flex flex-col justify-center py-16 px-4 relative"
    >
      <div className="container mx-auto text-center">
        <div className="max-w-m mx-auto">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-8">
            <div style={{ fontFamily: "monospace" }}>
              <Typewriter
                options={{
                  delay: 30,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      `Hey, I'm <span style="color: #6d28d9;">Bryan Reiter</span>,<br />a Computer Science Graduate<br />from Temple University.<br /><span style="font-size: 1rem md:font-size: 1.5rem;"><br /><br /><span style="color: #6d28d9;">Scroll</span> to get started<br />or <span style="color: #6d28d9;">choose how to connect</span> below:</span>`
                    )
                    .callFunction(() => {
                      setTimeout(() => setShowGithub(true), 500);
                      setTimeout(() => setShowLinkedin(true), 1000);
                      setTimeout(() => setShowInstagram(true), 1500);
                      setTimeout(() => setShowDiscord(true), 2000);
                      setTimeout(() => setShowEnvelope(true), 2500);
                      setTimeout(() => setShowPhone(true), 3000);
                    })
                    .start();
                }}
              />
            </div>
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <div className={`icon ${showGithub ? "show" : ""}`}>
            <a
              href="https://github.com/bryanreiter"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="transition duration-300 ease-in-out transform hover:scale-125 hover:text-midnightPurple"
              />
            </a>
          </div>
          <div className={`icon ${showLinkedin ? "show" : ""}`}>
            <a
              href="https://www.linkedin.com/in/bryanreiter/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="transition duration-300 ease-in-out transform hover:scale-125 hover:text-midnightPurple"
              />
            </a>
          </div>
          <div className={`icon ${showInstagram ? "show" : ""}`}>
            <a
              href="https://www.instagram.com/bryanreiter_/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="transition duration-300 ease-in-out transform hover:scale-125 hover:text-midnightPurple"
              />
            </a>
          </div>
          <div className={`icon ${showDiscord ? "show" : ""}`}>
            <a
              href="https://discordapp.com/users/271769741457227776"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon
                icon={faDiscord}
                size="2x"
                className="transition duration-300 ease-in-out transform hover:scale-125 hover:text-midnightPurple"
              />
            </a>
          </div>
          <div className={`icon ${showEnvelope ? "show" : ""}`}>
            <a href="mailto:bryanreiter2002@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                className="transition duration-300 ease-in-out transform hover:scale-125 hover:text-midnightPurple"
              />
            </a>
          </div>
          <div className={`icon ${showPhone ? "show" : ""}`}>
            <a href="tel:484-268-4900">
              <FontAwesomeIcon
                icon={faPhone}
                size="2x"
                className="transition duration-300 ease-in-out transform hover:scale-125 hover:text-midnightPurple"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
