import React, { useState, useEffect } from "react";
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { NavLink } from "react-router-dom";
import PrimaryButton from "./Globals/PrimaryButton";
import { useTheme } from "../ThemeContext";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer
      {...props}
      className={`fixed md:w-fit w-[100%]  md:mx-auto md:rounded-[50px] px-4 backdrop-blur-sm transition-all ease-in-out duration-300 md:sticky md:top-0 z-50 ${
        scrolling ? "bg-[#f0f4ffe3]" : "bg-[#f0f4ff]"
      } dark:bg-[linear-gradient(#0a173f,#414c6e)]`}
    >
      <MenuToggle
        toggle={toggle}
        isOpen={isOpen}
        colorMode={darkMode}
        toggleColorMode={toggleDarkMode}
      />
      <MenuLinks
        isOpen={isOpen}
        colorMode={darkMode}
        toggleColorMode={toggleDarkMode}
      />
    </NavBarContainer>
  );
};

const CloseIcon = ({ colorMode }) => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill={colorMode ? "#ffffff" : "#18224b"}
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = ({ colorMode }) => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill={colorMode ? "#ffffff" : "#18224b"}
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen, colorMode, toggleColorMode }) => {
  return (
    <Box
      display={{ base: "flex", md: "none" }}
      className="h-8 z-10 flex w-full justify-between items-center"
    >
      <div className=" z-10" onClick={toggle}>
        {isOpen ? (
          <CloseIcon colorMode={colorMode} />
        ) : (
          <MenuIcon colorMode={colorMode} />
        )}
      </div>
      <div
        className=" z-50 bg-[linear-gradient(#0a173f,#414c6e)] dark:bg-[linear-gradient(#dde5fa,#dadeec)] rounded-full p-2 transition-all ease-in-out duration-700 active:animate-spin active:duration-[12000ms] cursor-pointer"
        onClick={toggleColorMode}
      >
        {!colorMode ? (
          <MdOutlineDarkMode
            size={20}
            className="text-white dark:text-[#18224b]"
          />
        ) : (
          <MdOutlineLightMode
            size={20}
            className="text-white dark:text-[#18224b]"
          />
        )}
      </div>
    </Box>
  );
};

const MenuItem = ({ children, to = "/", ...rest }) => {
  return (
    <NavLink
      to={to}
      exact
      activeClassName="nav-link-active"
      className="nav-link dark:text-white"
      {...rest}
    >
      {children}
    </NavLink>
  );
};

const MenuLinks = ({ isOpen, colorMode, toggleColorMode }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <div className="flex md:flex-row  flex-col justify-between items-center md:w-[1250px]">
        <div className="flex md:justify-center items-center md:mt-0 mt-2 md:flex-row md:h-10 flex-col  h-screen gap-4">
          <MenuItem to="/">Home</MenuItem>
          {/* <MenuItem to="/about">About Me</MenuItem> */}
          <MenuItem to="/blogs">Blogs</MenuItem>
          <MenuItem to="/work">Work</MenuItem>
          <MenuItem to="/playlist">Playlist</MenuItem>
          <MenuItem to="/contact">Contact</MenuItem>
          <PrimaryButton
            additionalClasses="text-white dark:text-[#18224b] w-[200px] md:hidden md:w-auto bg-[linear-gradient(#0a173f,#414c6e)] dark:bg-[linear-gradient(#dde5fa,#dadeec)]"
            href="https://drive.google.com/file/d/1Omf9cN9670y4x0X6UP7OAB22QqxPzcF-/view?usp=drive_link"
            text="Resume"
          />
        </div>
        <div className="md:flex justify-center hidden items-center gap-4">
          <Box
            className="bg-[linear-gradient(#0a173f,#414c6e)] hidden md:flex dark:bg-[linear-gradient(#dde5fa,#dadeec)] rounded-full p-3 transition-all ease-in-out duration-700 active:animate-spin active:duration-[12000ms] cursor-pointer"
            onClick={toggleColorMode}
          >
            {!colorMode ? (
              <MdOutlineDarkMode
                size={26}
                className="text-white dark:text-[#18224b]"
              />
            ) : (
              <MdOutlineLightMode
                size={26}
                className="text-white dark:text-[#18224b]"
              />
            )}
          </Box>
          <PrimaryButton
            additionalClasses="text-white dark:text-[#18224b] w-[200px] md:w-auto bg-[linear-gradient(#0a173f,#414c6e)] dark:bg-[linear-gradient(#dde5fa,#dadeec)]"
            href="https://drive.google.com/file/d/1TTyX8rNdJWVpEY32b6yaMwCJCf6AKkmT/view?usp=sharing"
            text="Resume"
          />
        </div>
      </div>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      mb={8}
      py={3}
      px={{ base: "6", xl: "6" }}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
