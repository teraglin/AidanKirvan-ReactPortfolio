'use client';

import { Icon } from "@iconify/react";
import homeFilled from '@iconify-icons/ant-design/home-filled';

const scrollToSection = (selector: string) => {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
};

const Nav = () => {
  return (
    <nav className="w-screen h-12 flex justify-evenly bg-black z-10 fixed top-0 left-0">
      {/* TOP */}
      <button
        aria-label="Home button"
        onClick={() => scrollToSection('#top')}
        className="h-full text-white font-bold bg-transparent border-none cursor-pointer p-0 mx-4 w-6"
      >
        <Icon
          style={{ width: "100%", height: "100%" }}
          icon={homeFilled}
        />
      </button>
      {/* ABOUT */}
      <button
        onClick={() => scrollToSection('#about')}
        className="h-full text-white font-bold px-4 bg-transparent border-none cursor-pointer"
      >
        ABOUT
      </button>
      {/* PROJECTS */}
      <button
        onClick={() => scrollToSection('#projects')}
        className="h-full text-white font-bold px-4 bg-transparent border-none cursor-pointer"
      >
        PROJECTS
      </button>
      {/* CONTACT */}
      <button
        onClick={() => scrollToSection('#contact')}
        className="h-full text-white font-bold px-4 bg-transparent border-none cursor-pointer"
      >
        CONTACT
      </button>
    </nav>
  );
};

export default Nav;
