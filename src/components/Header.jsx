import React, { useState, lazy, useRef } from "react";
import { Link } from "react-router-dom";
// framer-motion
import { motion } from "framer-motion";
// icons
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
// react-scroll
import { Link as LinkTo } from "react-scroll";
import { div, u } from "framer-motion/client";
// components
const Sidebar = lazy(() => import("./Sidebar"));

export default function Header() {
  const [sideBar, setSidebar] = useState(false);
  const ref = useRef();

  const handle = (e) => {
    if (e.target === ref.current) {
      setSidebar(!sideBar);
    }
  };
  

  return (
    <motion.div
      ref={ref}
      
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="overflow-hidden w-full h-[10vh] flex justify-between items-center p-3"
    >
      <Link to="/">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={customerStyle.customLogo}
        >
          adel.
        </motion.h1>
      </Link>
      <ul className="w-full md:flex justify-end gap-3 pr-3 hidden">
        <Link to="/">
          <li className={customerStyle.customLi}>home</li>
        </Link>
        <LinkTo to="projects" smooth={true} duration={500}>
          <li className={customerStyle.customLi}>projects</li>
        </LinkTo>
        <LinkTo to="education" smooth={true} duration={1000}>
          <li className={customerStyle.customLi}>education</li>
        </LinkTo>
        <LinkTo to="skills" smooth={true} duration={1500}>
          <li className={customerStyle.customLi}>skills</li>
        </LinkTo>
      </ul>

      {/* mobile icon */}
      <div className="text-white flex md:hidden cursor-pointer">
        {sideBar ? (
          <FaWindowClose
            className="hover:text-red-500 transition-all duration-150"
            onClick={() => setSidebar(!sideBar)}
            size={35}
          />
        ) : (
          <AiOutlineMenuUnfold
            className="text-gray-400 hover:text-white transition-all duration-150"
            onClick={() => setSidebar(!sideBar)}
            size={35}
          />
        )}
        {sideBar && <Sidebar />}
      </div>
    </motion.div>
  );
}

const customerStyle = {
  customLogo: "text-3xl font-bold text-white capitalize",
  customLi:
    "capitalize text-white hover:opacity-50 duration-150 transition-all cursor-pointer",
};
