import React, { useState } from "react";
import Data from "./Data";
import Card from "./Card";
import Buttons from "./Buttons";
import {Heading} from '@chakra-ui/react'
import { Helmet } from "react-helmet-async";
const Blogs = () => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  // const menuDesc = [...new Set(Data.map((Val) => Val.categoryDesc))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    
    <><Helmet>
    <title>Blogs page</title>
    <meta name="description" content="This is the blogs page of my portfolio. I am a technical writer and I write about tech and travel." />
    <link rel="canonical" href="/blogs" />
 </Helmet>
      <div className="bg-screen md:mx-28">
      <Heading
              size="xl"
              as="h2"
              width="fit-content"
              textAlign={{}}
              fontFamily='Orbitron'
              paddingBottom="4px"
              letterSpacing='1px'
              borderBottom="2px solid"
              borderBottomWidth="3px"
              paddingX={{base:"16px",md:"4px"}}
              marginX={{base:'24px',md:'0px'}}
              marginBottom="20px"
              paddingTop={{base:'28', md:'0'}}
              className="text-white dark:text-[#18224b]"
            >
              Blogs 📝
            </Heading>
            <div className="flex md:flex-row flex-col md:gap-8  gap-4 justify-start">
        <Buttons
          filterItem={filterItem}
          setItem={setItem}
          menuItems={menuItems}
          // menuDesc = {menuDesc}
        />
        <Card item={item}  />
        </div>
        <div class=" text-center md:py-4 lg:px-4 w-max m-auto md:mt-20 mt-6 ">
          <div
            class="p-2 bg-transparent items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
            role="alert"
          >
            <span class="pl-3 font-semibold mr-2 text-gray-400 text-left flex-auto">
              Read my work <a href="" className="moreWorkLink text-gray-100 text-underline font-bold">here</a>
            </span>
            <svg
              class="fill-current opacity-75 h-4 w-4 font-bold text-gray-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blogs;
