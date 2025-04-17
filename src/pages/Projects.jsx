import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// icons
import { MdOutlineCardTravel } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";

export default function Projects() {
  return (
    <div className="w-full  min-h-[100vh] text-white bg-[#040428] ">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:text-5xl md:text-4xl text-3xl lg:text-center md:pl-0 pl-5 py-10 "
      >
        Projects
      </motion.h1>
      <VerticalTimeline lineColor="white" className="w-full h-full">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="First project"
          iconStyle={{
            background: "#eb944c",
          }}
          icon={<MdOutlineCardTravel />}
        >
          <div className={customerStyle.customOuterDiv}>
            <div>
              <h3 className={customerStyle.customHead3}>Travel & Tour</h3>
              <hr className={customerStyle.customLine} />
              <img
                loading="lazy"
                src="/projects/pro_one.png"
                alt="travel"
                className={customerStyle.customImage}
              />
            </div>
            <div className={customerStyle.customInnerDiv}>
              <a
                href="https://adelabdullah207.github.io/travel-app/"
                target="_blank"
              >
                <button className={customerStyle.customButton}>
                  live preview
                </button>
              </a>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Second project"
          iconStyle={{
            background: "#eb944c",
          }}
          icon={<FiShoppingBag />}
        >
          <div className={customerStyle.customOuterDiv}>
            <div>
              <h3 className={customerStyle.customHead3}>E-commerce</h3>
              <hr className={customerStyle.customLine} />

              <img
                loading="lazy"
                src="/projects/e-commerce.png"
                alt="E-commerce"
                className={customerStyle.customImage}
              />
            </div>
            <div className={customerStyle.customInnerDiv}>
              <a
                href="https://adelabdullah207.github.io/ecommerce-app"
                target="_blank"
              >
                <button className={customerStyle.customButton}>
                  live preview
                </button>
              </a>
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

const customerStyle = {
  customHead3:
    "text-2xl font-bold text-gray-950 group-hover:scale-95 duration-200 transition-all",
  customImage:
    "w-full h-full rounded-lg group-hover:scale-95 duration-200 transition-all",
  customLine: "text-black opacity-10",
  customOuterDiv: "group w-full h-full relative overflow-hidden rounded-md",
  customInnerDiv:
    "flex justify-center items-center -z-30 group-hover:z-50 cursor-pointer absolute -bottom-10 left-0 w-full h-full bg-black/25 group-hover:bottom-0 opacity-25 group-hover:opacity-100 transition-all duration-200",
  customButton:
    " capitalize cursor-pointer bg-[#eb944c] p-2 rounded-md hover:scale-125 transition-all duration-200",
};
