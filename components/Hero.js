import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Hero() {
  return (
    <>
      <div className="p-5 flex flex-col lg:flex-row lg:justify-around lg:items-center">
        <img
          data-aos="fade-right"
          data-aos-duration="2000"
          src="/undraw_the_astronomer.svg"
          className="w-full lg:w-1/3 "
        />
        <div className="" data-aos="fade-left" data-aos-duration="2000">
          <p className="text-2xl text-center mt-5 lg:mt-0 lg:text-4xl lg:font-medium hover:text-gray-300 cursor-pointer">
            Astronomy Cosmos
          </p>
          <p className="text-xl lg:mt-2 cursor-pointer hover:text-gray-300">
            The cosmos is the universe
          </p>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center mt-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <p className="text-center text-xl mb-5 cursor-pointer hover:text-gray-300">
          Reveal the secrets about Astronomy with us !
        </p>
        <Link
          activeClass="active"
          to="planet"
          spy={true}
          smooth={true}
          offset={-30}
          duration={1000}
        >
          <a href="#" className="bg-gray-600 p-3 hover:bg-gray-700 rounded">
            Show me the secrets
          </a>
        </Link>
      </div>
    </>
  );
}

export default Hero;
