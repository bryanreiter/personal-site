import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-zinc-700 py-4 fixed top-0 left-0 right-0 z-10">
      <div className="w-full h-full clear-both flex items-center justify-between py-0 px-[20px]">
        <div className="flex items-center">
          <a href="#intro" className="text-white text-xl font-bold">
            Bryan Reiter
          </a>
        </div>
        <div className="flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} size="2x" className="transition duration-300 ease-in-out transform hover:scale-125 hover:text-midnightPurple" />
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-screen w-48 bg-zinc-700 transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faTimes} size="2x" className="transition duration-300 ease-in-out transform hover:scale-125 hover:text-midnightPurple" />
        </button>
        <ul className="mt-16 space-y-4 text-xl font-bold">
          <li>
            <a
              href="#about"
              className="block text-white hover:text-midnightPurple px-6 py-2 "
              onClick={() => toggleSidebar()}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block text-white hover:text-midnightPurple px-6 py-2"
              onClick={() => toggleSidebar()}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block text-white hover:text-midnightPurple px-6 py-2"
              onClick={() => toggleSidebar()}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-white hover:text-midnightPurple px-6 py-2"
              onClick={() => toggleSidebar()}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}