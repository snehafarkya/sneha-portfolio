import React from "react";
import { motion } from "framer-motion"; // Import framer-motion

const Card = ({ item }) => {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 place-items-center md:grid-cols-3 md:m-auto gap-10">
          {item.map((Val, index) => {
            return (
              <motion.a
                href={Val.link}
                target="_blank"
                key={index}
                initial={{ opacity: 0, y: 50 }} // Starting state
                whileInView={{ opacity: 1, y: 0 }} // Animation when scrolled into view
                transition={{ duration: 0.5, delay: index * 0.1 }} // Animation duration and delay
                viewport={{ once: true }} // Runs animation only once
              >
                <div className="blogcard text-[#18244b] md:max-w-[340px] w-[340px] group rounded-xl transition ease-in-out overflow-hidden border-transparent z-50 shadow-lg bg-[linear-gradient(40deg,#ffffff,#c8d2ee)] m-auto h-full">
                  <img
                    className="blogimg w-full h-48 rounded-t-xl group-hover:scale-[1.05] overflow-hidden transition ease-in-out duration-700 z-10"
                    src={Val.image}
                    alt={Val.title}
                  />
                  <div className="px-6 py-4 z-30 overflow-hidden relative">
                    <div className="font-bold text-[#18244b] text-base mb-2 text-ellipsis line-clamp-2">
                      {Val.title}
                    </div>
                    <p className="text-[#18244b] text-sm text-ellipsis line-clamp-3">
                      {Val.desc}
                    </p>
                  </div>
                  <button
                    className="bg-transparent pb-4 text-[#670B8A] font-bold px-6 text-sm group-hover:underline underline-offset-2"
                    margin="0em 1.3em 1em"
                  >
                    <a href={Val.link} target="_blank" className="text-sm">
                      Read it here
                    </a>
                  </button>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
