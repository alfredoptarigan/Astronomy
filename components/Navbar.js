import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [open, setOpen] = useState(false);

  function handleToggle(e) {
    e.preventDefault();
    setOpen(!open);
    console.log("Open Navbar");
  }
  return (
    <div className="p-5 flex items-center justify-between">
      <div className="text-xl font-medium">
        <a href="#" className="hover:text-gray-300">
          Astronomy
        </a>
      </div>
      <nav className=" md:flex md:flex-wrap">
        <div className="lg:hidden">
          {!open ? (
            <svg
              viewBox="0 0 100 80"
              width="20"
              height="20"
              className="bg-blue-500"
              onClick={(e) => handleToggle(e)}
            >
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          ) : (
            <svg
              height="20"
              viewBox="0 0 329.26933 329"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-500"
              onClick={(e) => handleToggle(e)}
            >
              <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
            </svg>
          )}
        </div>
        {open === true ? (
          <div className="lg:hidden absolute top-0 left-0 w-full bg-gray-700 flex flex-col h-28">
            <div className="absolute right-0">
              <svg
                height="20"
                viewBox="0 0 329.26933 329"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-500"
                onClick={(e) => handleToggle(e)}
              >
                <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
              </svg>
            </div>
            <ul>
              <li className="text-xl font-medium mb-5">
                <a href="#" className="hover:text-gray-300">
                  Astronomy
                </a>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="planet"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={1000}
                >
                  <a href="#planet" className=" hover:text-gray-400">
                    Planetarium
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1500}
                >
                  <a href="about" className=" hover:text-gray-400">
                    About Me
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
        <ul className="hidden lg:flex  flex flex-grow justify-end flex-wrap items-center">
          <li>
            <Link
              activeClass="active"
              to="planet"
              spy={true}
              smooth={true}
              offset={-30}
              duration={1000}
            >
              <a href="#planet" className="mr-2 ml-2 hover:text-gray-400">
                Planetarium
              </a>
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={1500}
            >
              <a href="about" className="mr-2 ml-2 hover:text-gray-400">
                About Me
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
