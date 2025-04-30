import React, { lazy, useEffect, useState } from "react";
import { Element, Link as LinkTo } from "react-scroll";
const Projects = lazy(() => import("../pages/Projects"));

export default function Footer() {
  return (
    <div className="bg-[#040428] text-white text-center p-4 py-7 capitalize font-bold">
      <div className="flex flex-col lg:flex-row  justify-between w-[90%] m-auto lg:gap-0 gap-10">
        <span>
          <h1 className={customCss.Header}>adel's portfolio</h1>
          <p className="text-start">
            this my live preview of my projects
            <br />
            please feel free to check theme all
          </p>
        </span>
        <span>
          <h1 className={customCss.Header}>quick links</h1>
          <ul className="text-start">
            <li className={customCss.Link}>
              <LinkTo to="header" smooth={true} duration={2000}>
                home
              </LinkTo>
            </li>
            <li className={customCss.Link}>
              <LinkTo to="projects" smooth={true} duration={1500}>
                projects
              </LinkTo>
            </li>
            <li className={customCss.Link}>
              <LinkTo to="education" smooth={true} duration={1000}>
                education
              </LinkTo>
            </li>
            <li className={customCss.Link}>
              <LinkTo to="skills" smooth={true} duration={500}>
                skill
              </LinkTo>
            </li>
          </ul>
        </span>
        <span className="flex flex-col justify-center gap-2">
          <h1 className={`${customCss.Header} text-end`}>contact me</h1>
          <input
            className="p-2 outline-none border-1 rounded-md"
            type="email"
            name="email"
            placeholder="email"
            id=""
          />
          <input
            className="bg-white w-fit text-black p-2 rounded-xl capitalize cursor-pointer hover:translate-x-1/6 transition-all duration-300"
            type="button"
            value={"send"}
          />
        </span>
      </div>
    </div>
  );
}

const customCss = {
  Header: " capitalize text-2xl text-start text-gray-500",
  Link: "text-gray-400 hover:text-white duration-all transition-all cursor-pointer",
};
