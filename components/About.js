import React from "react";
import Link from "next/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPortrait } from "@fortawesome/free-solid-svg-icons";
function About() {
  return (
    <div className="mt-40 p-10" data-aos="fade-right" data-aos-duration="2000">
      <div className="flex flex-col justify-center items-center ">
        <p
          id="about"
          className="text-center text-2xl font-medium cursor-pointer hover:text-gray-300"
        >
          About Me
        </p>
        <div className="mt-5 flex justify-center items-center flex-col">
          <img
            src="/alfredo/me.png"
            alt="Alfredo Patricius Tarigan"
            width="150"
          />
          <p class="mt-3 text-xl font-medium cursor-pointer hover:text-gray-300">
            Alfredo Patricius Tarigan
          </p>
          <p class="text-center font-medium cursor-pointer hover:text-gray-300 leading-relaxed">
            Hi, my name is Alfredo Patricius Tarigan, <br />
            nice to meet you all !
          </p>
          <div className="flex mt-3 items-center">
            <a
              href="https://portfolio.alfredo.id/"
              rel="noreferrer noopener"
              target="_blank"
              className="hover:text-gray-600 ml-2 mr-2"
            >
              <FontAwesomeIcon icon={faPortrait} width="30" />
            </a>
            <a
              href="https://instagram.com/alfredoptr_"
              rel="noreferrer noopener"
              target="_blank"
              className="hover:text-gray-600"
            >
              <FontAwesomeIcon icon={faInstagram} width="30" />
            </a>
            <a
              href="https://github.com/alfredoptarigan"
              rel="noreferrer noopener"
              target="_blank"
              className="hover:text-gray-600 ml-2 mr-2"
            >
              <FontAwesomeIcon icon={faGithub} width="30" />
            </a>
            <a
              href="https://twitter.com/alfredoptarigan"
              rel="noreferrer noopener"
              target="_blank"
              className="hover:text-gray-600 ml-2 mr-2"
            >
              <FontAwesomeIcon icon={faTwitter} width="30" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
