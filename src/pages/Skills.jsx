import { motion } from "framer-motion";
import React from "react";

export default function Skills() {
  return (
    <div className="w-full  min-h-[100vh] text-white bg-[url('./back.jpg')]  bg-cover bg-fixed bg-top">
      <div className="w-[90%] min-h-screen m-auto flex gap-9 flex-col items-center justify-center">
        <h1 className=" capitalize font-bold text-2xl">
          programming skills <hr className="mt-1"></hr>
        </h1>
        {/* skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full flex justify-center items-center flex-col gap-5"
        >
          {/* skill */}
          <div className={customerStyle.customProgress}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "98%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={customerStyle.customProgressBar}
            >
              <span className={customerStyle.customProgressLanguage}>html</span>
              <span className={customerStyle.customProgressPercentage}>
                98%
              </span>
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
              <span className={customerStyle.customProgressPercentage}>
                95%
              </span>
            </motion.div>
          </div>
          {/* skill */}
          <div className={customerStyle.customProgress}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "97%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={customerStyle.customProgressBar}
            >
              <span className={customerStyle.customProgressLanguage}>
                java script
              </span>
              <span className={customerStyle.customProgressPercentage}>
                97%
              </span>
            </motion.div>
          </div>
        </motion.div>
        {/* end of skills */}
      </div>
    </div>
  );
}

const customerStyle = {
  customProgress: "h-fit w-full bg-gray-50/15 rounded-md",
  customProgressBar: "bg-[#32163f] p-2 w-[90%] rounded-md flex justify-between",
  customProgressLanguage: "font-bold capitalize",
  customProgressPercentage: "font-bold",
};
