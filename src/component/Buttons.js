import React,{useRef, useState} from "react";
import Data from "./Data";
import { Button } from "@chakra-ui/react";
import SecondaryButton from "./Globals/SecondaryButton";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
 const ref = useRef(null);
 const ref2 = useRef(null);

 const handleBlur = () => {
  // When the button loses focus, immediately refocus it
  if (ref.current || ref2.current) {
    ref.current.focus();
    ref2.current.focus();
  }
};
const handleBlur2 = () => {
  // When the button loses focus, immediately refocus it
  if (ref2.current) {
    ref2.current.focus();
  }
};
  return (
    <>
      <div
      ref={ref}
      onBlur={handleBlur} className="grid md:sticky mt-4 top-20 h-max grid-cols-2 pb-4 w-max place-items-center gap-x-4 gap-y-4 justify-center mx-auto md:gap-2 md:flex md:flex-col md:justify-start md:items-start">
      {/* <button
        background='#37126D'
        letterSpacing='1px'
        
        marginBottom='1.5em'
        className={` ${activeButtonIndex === 0 ? 'bg-blue-400':''} btnshadow my-2 focus:bg-blue-400 hover:no-underline px-4 text-left font-bold bg-white rounded-md hover:bg-gray-100 text-black w-full transition ease-in-out duration-700 py-2  btn fw-bold`}

          onClick={(index) => {setItem(Data) ; setActiveButtonIndex(0)}}
        >
          All Blogs
        </button>  */}
        <SecondaryButton text={'All Blogs'} onClick={(index) => {setItem(Data) ; setActiveButtonIndex(0)}} className={` ${activeButtonIndex === 0 ? 'bg-blue-400':''} `}/>
        {menuItems.map((Val, id) => {
          return (
            <>
            {/* <button
            // ref={ref2}
              background='#37126D'
              letterSpacing='1px'
              marginBottom='1.5em'

        onBlur={handleBlur2}

              className={` ${activeButtonIndex === id+1? 'bg-blue-300 active':''}  btnshadow focus:bg-blue-400 hover:scale-[1.03] my-2 text-left min-w-max px-4 hover:no-underline font-bold bg-white rounded-md hover:bg-gray-100 text-black w-full transition ease-in-out duration-400 py-2  btn fw-bold`}
              onClick={(index) => {filterItem(Val); setActiveButtonIndex(id+1)}}
              key={id}
            >
              {Val} Blogs
            </button> */}
        <SecondaryButton text={`${Val} Blogs`}
        onClick={(index) => {filterItem(Val); setActiveButtonIndex(id+1)}}
        className={` ${activeButtonIndex === id+1? 'bg-blue-300 active':''}  btnshadow focus:bg-blue-400 hover:scale-[1.03] my-2 text-left min-w-max px-4 hover:no-underline font-bold bg-white rounded-md hover:bg-gray-100 text-black w-full transition ease-in-out duration-400 py-2  btn fw-bold`}
/>
            </>
          );
        })}
            {/* {menuDesc.map(value=>)} */}

        
       </div>
    </>
    
  );
};
 
export default Buttons;