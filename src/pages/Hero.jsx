import React, { lazy } from "react";
import { motion } from "framer-motion";

// css
import "../styles/hero.css";

// icons
import { ReactTyped } from "react-typed";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link, Element } from "react-scroll";

// components
const Header = lazy(() => import("../components/Header"));
const Education = lazy(() => import("./Education"));
const Projects = lazy(() => import("./Projects"));
const Skills = lazy(() => import("./Skills"));

export default function Hero() {
  const jobs = ["web-developer", "front-end", "software-engineer"];
  return (
    <>
      <div className=" overflow-hidden">
        <div className="min-h-screen bg-[url('https://img.freepik.com/free-vector/gradient-connection-background_23-2150462053.jpg?t=st=1744805977~exp=1744809577~hmac=6de1cb7b6db20c77506b451fc5d039a1d21815154f6e25a33aeef8ecf28c46d0&w=1380')] bg-cover bg-center bg-no-repeat bg-fixed">
          <Header />
          <div className=" bg-cover bg-center   w-full min-h-[90vh] text-white flex md:flex-row flex-col-reverse md:gap-0 gap-5 justify-center items-center">
            {/* left-side */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center capitalize md:p-2 p-1 font-bold text-4xl lg:w-1/2 w-full"
            >
              <p> hi there iam a </p>
              <ReactTyped
                strings={jobs}
                typeSpeed={40}
                backSpeed={50}
                loop
                className="lg:text-5xl text-xl"
              />
              <hr className="opacity-15 w-1/2  m-auto mt-3" />
              <div className="flex gap-3 justify-center mt-5">
                <a
                  href="https://github.com/adelabdullah207"
                  target="_blank"
                  className="opacity-50 hover:opacity-100 duration-150"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.facebook.com/share/18YURc53Hh/?mibextid=qi2Omg"
                  target="_blank"
                  className=" opacity-50 hover:opacity-100 duration-150"
                >
                  <FaFacebook />
                </a>
              </div>
            </motion.div>
            {/* right-side */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="flex justify-center w-1/2"
            >
              <img
                loading="lazy"
                src="./me.jpg"
                alt="adel"
                className="hover:animate-pulse lg:w-96 lg:h-96 w-48 h-48 rounded-full hover:scale-105 duration-200 transition-all"
              />
            </motion.div>
          </div>
        </div>
        <Element name="projects" className="w-full h-full">
          <Projects />
        </Element>
        <Element name="education" className="w-full h-full">
          <Education />
        </Element>
        <Element name="skills" className="w-full h-full">
          <Skills />
        </Element>
      </div>
    </>
  );
}
