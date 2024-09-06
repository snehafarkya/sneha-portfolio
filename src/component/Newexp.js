import React from "react";
import experienceData from "./experienceData.json";
import { motion } from "framer-motion"; // Import framer-motion
import PrimaryButton from "./Globals/PrimaryButton";
import SecondaryButton from "./Globals/SecondaryButton";

export default function Newexp() {
  return (
    <section>
      <div className="text-white md:py-8 pt-8 pb-0">
        <div className="mx-auto flex flex-col items-start md:flex-row gap-4 md:gap-0 md:my-12 mb-0 md:mb-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-6">
            <p className="text-[#ffa700] font-medium uppercase tracking-loose">
              Experience
            </p>
            <p className="text-3xl md:text-4xl text-white dark:text-[#18224b] leading-normal md:leading-relaxed mb-2">
              Working Since 2021
            </p>
            <p className="text-sm md:text-base text-gray-50 dark:text-[#18224b] mb-4">
              Nurturing Growth and Learning - My Journey of Gaining Professional Experience Since Freshman Year in College
            </p>
            <SecondaryButton
              text={"Explore Now"}
              href={"work"}
              additionalClasses="dark:bg-[linear-gradient(40deg,#ffffff,#c8d2ee)]"
            />
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden md:p-10 p-4 h-full">
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border hidden md:flex"
                  style={{
                    right: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border hidden md:flex"
                  style={{
                    left: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                {experienceData.map((experience, index) => (
                  <motion.div
                    key={index}
                    className={`mb-8 flex justify-between items-center w-full ${
                      index % 2 === 0 ? "flex-row-reverse" : ""
                    }`}
                    initial={{ opacity: 0, y: 50 }} // Initial state
                    whileInView={{ opacity: 1, y: 0 }} // Animation when in view
                    transition={{ duration: 0.5, delay: index * 0.2 }} // Timing
                    viewport={{ once: true }} // Play animation only once
                  >
                    <div className="order-1 md:flex hidden w-5/12 "></div>
                    <div
                      className={`order-1 md:w-5/12 px-4 rounded-lg py-4 text-${
                        index % 2 === 0 ? "right" : "left"
                      } expcard`}
                      style={{
                        backgroundColor: experience.bgColor,
                        color: experience.textColor, // Apply text color dynamically
                      }}
                    >
                      <p
                        className={`mb-3 text-base font-medium`}
                        style={{ color: experience.textColorHighlight }}
                      >
                        {experience.duration}
                      </p>
                      <h4 className={`mb-3 font-bold text-lg md:text-2xl`}>
                        {experience.company}
                      </h4>
                      <p
                        className={`text-sm md:text-base leading-snug text-opacity-100`}
                      >
                        {experience.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <img
                className="mx-auto md:-mt-20 md:flex hidden animate-bounce"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                alt="Decoration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
