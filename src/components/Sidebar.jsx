import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Sidebar() {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      exit={{ x: -1000 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      id="sidebar"
      className="w-[70%] h-screen bg-gray-800  fixed top-0 left-0  z-40  flex flex-col justify-between py-3.5"
    >
      <span className="w-full flex flex-col justify-center items-center gap-2">
        <img
          src="./me-image.webp"
          alt="author"
          className="w-24 h-24  rounded-full object-cover hover:scale-95 transition-all duration-150 ease-in-out cursor-pointer"
        />
        <h1 className="text-white capitalize text-4xl">adel abdullah</h1>
        <h2 className="text-white capitalize bg-gray-700 p-2 rounded-md">
          Frontend Developer
        </h2>
      </span>
      <hr className="my-3 text-white opacity-10" />
      {/* about */}
      <span className="flex flex-col items-start gap-5 pl-2 text-white">
        {/* single info */}
        <span className={customerStyle.customSpan}>
          <BiLogoGmail size={30} />
          <span>
            <h2 className={customerStyle.customH2}>email</h2>
            <p className={customerStyle.customP}>vitothediv@gmail.com</p>
          </span>
        </span>
        {/* end of single info */}
        {/* single info */}
        <span className={customerStyle.customSpan}>
          <IoMdPhonePortrait size={30} />
          <span>
            <h2 className={customerStyle.customH2}>phone</h2>
            <p className={customerStyle.customP}>+20 122 717 5614</p>
          </span>
        </span>
        {/* end of single info */}
        {/* single info */}
        <span className={customerStyle.customSpan}>
          <LiaBirthdayCakeSolid size={30} />
          <span>
            <h2 className={customerStyle.customH2}>birthday</h2>
            <p className={customerStyle.customP}>9 / 9 / 1999</p>
          </span>
        </span>
        {/* end of single info */}
        {/* single info */}
        <span className={customerStyle.customSpan}>
          <IoLocationOutline size={30} />
          <span>
            <h2 className={customerStyle.customH2}>location</h2>
            <p className={customerStyle.customP}>cairo, egypt</p>
          </span>
        </span>
        {/* end of single info */}
      </span>
      <hr className="my-3 text-white opacity-10" />
      {/* links */}
      <spn className="w-full flex justify-center">
        <a
          href="https://github.com/adelabdullah207"
          target="_blank"
          className="hover:scale-95 transition-all duration-150 ease-in-out cursor-pointer"
        >
          <FaGithub size={30} className="text-white" />
        </a>
      </spn>
    </motion.div>
  );
}

const customerStyle = {
  customSpan: "flex flex-row gap-1 items-center justify-center text-md",
  customH2: "capitalize font-bold text-sm opacity-20",
  customP: "capitalize  text-xs font-bold",
};
