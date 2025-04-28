"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToAbout = () => {
    setIsMenuOpen(!isMenuOpen)
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSkills = () => {
    setIsMenuOpen(!isMenuOpen)
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToExperience = () => {
    setIsMenuOpen(!isMenuOpen)
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    setIsMenuOpen(!isMenuOpen)
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  // const scrollToContact = () => {
  //   setIsMenuOpen(!isMenuOpen)
  //   document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <header>
      <div className="fixed top-0 z-50 w-full">
        <div
          className={`flex justify-end items-center mr-6 mt-4.5 ${
            isMenuOpen ? "text-white" : "text-green-500"
          }`}
        >
          <button
            className="z-50 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X size={32} strokeWidth={3} />
            ) : (
              <Menu size={32} strokeWidth={3} />
            )}
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-x-0 top-0 bg-green-500 z-40 transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${
          isMenuOpen
            ? "h-screen transform translate-y-0"
            : "h-screen transform -translate-y-full"
        }`}
      >
        <nav className="text-center font-semibold text-3xl text-white">
          <ul className="space-y-8">
            <li>
              <a
                className="cursor-pointer hover:text-green-700"
                onClick={scrollToAbout}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-green-700"
                onClick={scrollToSkills}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-green-700"
                onClick={scrollToExperience}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-green-700"
                onClick={scrollToProjects}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-green-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
