import { motion } from "framer-motion";
import React from "react";

export default function Skills() {
  return (
    <div className="w-full  min-h-[100vh] text-white bg-[#040428]">
      <div className="w-[90%] min-h-screen m-auto flex justify-center items-center flex-col gap-5">
        <h1 className=" capitalize font-bold text-2xl ">
          programming skills <hr className="mt-1"></hr>
        </h1>

        {/* skill */}
        <div className={customerStyle.customProgress}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "98%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={customerStyle.customProgressBar}
          >
            <span className={customerStyle.customProgressLanguage}>html</span>
            <span className={customerStyle.customProgressPercentage}>98%</span>
          </motion.div>
        </div>
        {/* skill */}
        <div className={customerStyle.customProgress}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "95%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={customerStyle.customProgressBar}
          >
            <span className={customerStyle.customProgressLanguage}>css</span>
            <span className={customerStyle.customProgressPercentage}>95%</span>
          </motion.div>
        </div>
        {/* skill */}
        <div className={customerStyle.customProgress}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "97%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={customerStyle.customProgressBar}
          >
            <span className={customerStyle.customProgressLanguage}>
              java script
            </span>
            <span className={customerStyle.customProgressPercentage}>97%</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const customerStyle = {
  customProgress: "h-fit w-full bg-gray-50/15 rounded-md",
  customProgressBar: "bg-[#eb944c] p-2 w-[90%] rounded-md flex justify-between",
  customProgressLanguage: "font-bold capitalize",
  customProgressPercentage: "font-bold",
};
