import { motion } from "framer-motion";
import React from "react";

export default function Education() {
  return (
    <div className="text-white bg-[url('./back.jpg')] min-h-[100vh] bg-cover bg-top bg-no-repeat w-full bg-fixed flex flex-col justify-center items-center">
      <div className="flex justify-center items-center flex-col lg:flex-row w-[90%] gap-10 p-5">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "linear" }}
          className="lg:w-[50%] md:w-[80%] w-[100%] flex justify-center flex-col items-center"
        >
          <h2 className="lg:text-3xl text-xl font-bold text-center">
            Bachelor of Science in Computer Science & Information Technology
          </h2>
          <p className={customerStyle.customP}>sinai university 2018 - 2022</p>
          <p className={customerStyle.customP}>
            Relevant Coursework: Data Structures, Algorithms, Web Development,
            Database Management
          </p>
        </motion.div>
        {/* left and right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "linear" }}
          className="lg:w-[50%] md:w-[80%] w-[95%]  h-[70vh] flex justify-center flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "linear" }}
            className="w-full h-full flex justify-center items-center"
          >
            <iframe
              className="w-full h-[60vh]  rounded-md outline-none"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27327.77767633096!2d33.68410175164061!3d31.11050443099369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fc299dea1f80cf%3A0x801951620eae76fa!2sSinai%20University%20(Arish%20Branch)!5e0!3m2!1sen!2seg!4v1744807899874!5m2!1sen!2seg"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

const customerStyle = {
  customP: "lg:text-lg mt-4 capitalize md:text-md text-sm text-center",
};
