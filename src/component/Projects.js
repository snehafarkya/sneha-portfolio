import React from "react";
import contextapi from "../assets/contextapi.png";
import dragdrop from "../assets/drag&drop.png";
import translatelingo from "../assets/translatelingo.png";
import SecondaryButton from "./Globals/SecondaryButton";
import work from "./WorkInfo";
import { Heading } from "@chakra-ui/react";
export default function Projects() {
  return (
    <div>
      <Heading
        size="xl"
        as="h2"
        width="fit-content"
        fontFamily="Orbitron"
        paddingBottom="4px"
        letterSpacing="1px"
        borderBottom="2px solid"
        borderBottomWidth="3px"
        marginX={{ base: "24px", md: "110px" }}
        marginTop={{ base: "24px", md: "80px" }}
        paddingX={{ base: "16px", md: "4px" }}
        paddingTop={{ base: "28", md: "0" }}
        className="text-white dark:text-[#18224b]"
      >
        {/* Wondering about me? 👩‍💻 */}
        Work that I am <i>Proud</i> of 👇
      </Heading>
      <article className="md:w-[1200px] md:mt-20 mt-20 w-[380px] mx-auto  text-black box-border">
        {work.slice(0, 5).map((item, index) => {
          return (
            <figure
              key={index}
              className="relative group mb-8 bg-gray-200 dark:bg-[#18224b] cursor-pointer rounded-lg w-full flex items-center md:h-[600px] sticky top-28 overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="md:w-[1100px] mx-auto group-hover:scale-105 transition-transform ease-in-out duration-500 md:rounded-xl rounded-lg border-4 border-black border-solid object-cover object-center"
              />

              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-4 justify-center items-center text-white">
                <h1 className="text-4xl hidden md:flex font-bold decoration-dashed underline underline-offset-4">
                  {item.title}
                </h1>
                <p className="text-center hidden md:flex px-36 text-lg">
                  {item.desc}
                </p>
                <div className="hidden md:flex gap-12">
                  <div className="block">
                    <h3 className="text-lg">Role</h3>
                    <p className="font-semibold text-[#ffa700]">
                      Frontend Developer
                    </p>
                  </div>
                  <div className="block">
                    <h3 className="text-lg">Tools</h3>
                    <p className="font-semibold text-[#ffa700]">
                      {item.tags[0].one},{item.tags[0].two},{item.tags[0].three}
                    </p>
                  </div>
                </div>
                <SecondaryButton href={item.link} text="Visit website" />
              </div>
            </figure>
          );
        })}
      </article>
    </div>
  );
}
