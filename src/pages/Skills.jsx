import { motion } from "framer-motion";
import React from "react";
// icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

export default function Skills() {
  return (
    <div className="w-full  min-h-[100vh] text-white bg-[url('./back.jpg')]  bg-cover bg-fixed bg-top">
      <div className="w-[90%] min-h-screen m-auto flex gap-9 flex-col items-center justify-center">
        <h1 className=" capitalize font-bold text-2xl">
          technical skills <hr className="mt-1"></hr>
        </h1>
        {/* skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full flex justify-center items-center flex-col gap-5"
        >
          {/* skill */}
          <div className={customStyle.customProgress}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "98%" }}
              transition={{ duration: 1, ease: "circInOut" }}
              className={customStyle.customProgressBar}
            >
              <span className={customStyle.customProgressLanguage}>html</span>
              <span className={customStyle.customProgressPercentage}>98%</span>
            </motion.div>
          </div>
          {/* skill */}
          <div className={customStyle.customProgress}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "95%" }}
              transition={{ duration: 1, ease: "circInOut" }}
              className={customStyle.customProgressBar}
            >
              <span className={customStyle.customProgressLanguage}>css</span>
              <span className={customStyle.customProgressPercentage}>95%</span>
            </motion.div>
          </div>
          {/* skill */}
          <div className={customStyle.customProgress}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "97%" }}
              transition={{ duration: 1, ease: "circInOut" }}
              className={customStyle.customProgressBar}
            >
              <span className={customStyle.customProgressLanguage}>
                java script
              </span>
              <span className={customStyle.customProgressPercentage}>97%</span>
            </motion.div>
          </div>
        </motion.div>
        {/* end of skills */}
        <div className="flex  justify-center items-center gap-6">
          <span className="group cursor-pointer relative">
            <FaHtml5 size={iconsSize} />
            <p className={customStyle.customP}>html</p>
          </span>
          <span className="group cursor-pointer relative">
            <FaCss3Alt size={iconsSize} />
            <p className={customStyle.customP}>css</p>
          </span>
          <span className="group cursor-pointer relative">
            <FaReact size={iconsSize} />
            <p className={customStyle.customP}>react</p>
          </span>
          <span className="group cursor-pointer relative">
            <RiTailwindCssFill size={iconsSize} />
            <p className={customStyle.customP}>tailwind</p>
          </span>
          <span className="group cursor-pointer relative">
            <TbBrandFramerMotion size={iconsSize} />
            <p className={customStyle.customP}>framer motion</p>
          </span>
        </div>
      </div>
    </div>
  );
}
const iconsSize = 70;
const customStyle = {
  customProgress: "h-fit w-full bg-gray-50/15 rounded-md",
  customProgressBar: "bg-[#32163f] p-2 w-[90%] rounded-md flex justify-between",
  customProgressLanguage: "font-bold capitalize",
  customProgressPercentage: "font-bold",
  customP:
    "text-sm text-transparent z-20 absolute top-0 w-full h-full group-hover:bg-white font-bold  group-hover:text-[#32163f] text-center capitalize flex justify-center items-center rounded-md transition-all duration-150",
};
