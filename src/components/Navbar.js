import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <nav
      className={`navbar absolute w-full z-50 flex flex-col lg:flex-row justify-around items-center astro-space ${
        hamburger ? "bg-black/90" : "bg-transparent"
      } lg:bg-transparent`}
    >
      <div className="nav-div flex justify-around items-center w-full lg:w-fit py-3">
        <div className="flex items-center justify-center">
          <img
            src={require("../assets/logo.png")}
            className="mr-3 h-12 md:h-18 lg:h-20"
            alt="Logo"
          />
          <div className="sm:text-lg md:text-xl lg:text-2xl font-semibold astro-space">
            CSI-DMCE
          </div>
        </div>
        <button
          className="lg:hidden"
          id="ham-btn"
          onClick={() => setHamburger(!hamburger)}
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
          </svg>
        </button>
      </div>
      <div
        className={`${
          hamburger ? "flex p-5" : "hidden"
        } lg:flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6 xl:gap-8 w-full lg:max-w-xl text-sm`}
        onBlur={() => setHamburger(false)}
      >
        <Link to="/" spy={true} smooth={true} offset={50} duration={100}>
          <button className="text-white tracking-widest">Home</button>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-20} duration={100}>
          <button className="text-white tracking-widest">About</button>
        </Link>
        <Link to="events" spy={true} smooth={true} offset={-50} duration={100}>
          <button className="text-white tracking-widest">Events</button>
        </Link>
        <Link to="leads" spy={true} smooth={true} offset={-100} duration={100}>
          <button className="text-white tracking-widest">Leads</button>
        </Link>
        <a
          href="https://logithon.ai/"
          className="text-white tracking-widest"
          target="_blank"
        >
          LogiTHON
        </a>

        {/* <Link
          to="timeline"
          spy={true}
          smooth={true}
          offset={-50}
          duration={100}
        >
          <button className="text-white tracking-widest">Timeline</button>
        </Link>
        <Link
          to="sponsors"
          spy={true}
          smooth={true}
          offset={-100}
          duration={100}
        >
          <button className="text-white tracking-widest">Sponsors</button>
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
