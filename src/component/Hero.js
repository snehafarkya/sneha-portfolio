import React, { useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import myImg from "../assets/profile.jpg";
import SecondaryButton from "./Globals/SecondaryButton";
import Calendly from "./Globals/Calendly";
import About from "./About";
import Banner from "./Banner";
import Projects from "./Projects";

export default function Hero() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Sneha Farkya Portfolio</title>
        <meta
          name="description"
          content="This is the home page of my portfolio. It contains my designation and all the other internal links to my portfolio."
        />
        <link rel="canonical" href="/" />
        
      </Helmet>
      <div className="grid grid-cols-1 md:gap-10 md:my-8 pt-20 md:pt-0 md:mt-16 place-items-center">
        <div className="order-last md:order-first">
          <Card
            w={{ md: "3xl" }}
            m="auto"
            background="transparent"
            border={"none"}
            shadow={"none"}
            className="w-lg shadow-none flex justify-center items-center flex-col border-none"
          >
            <CardHeader className="text-center">
              <Heading
                as="h2"
                size={{ md: "2xl", base: "xl" }}
                className="dark:text-[#18244b] text-white"
                fontWeight="bold"
                letterSpacing={"wide"}
                fontFamily={"Orbitron,sans-serif"}
              >
                I'm Sneha Farkya,
                <span className="font-bold text-[#FE74FF] md:text-2xl text-xl leading-3">
                  <br />
                  Front-end Developer and Technical Writer.
                </span>
              </Heading>
            </CardHeader>
            <CardBody>
              <div className="w-fit flex md:flex-row flex-col md:gap-8 gap-4 justify-center p-2 border dark:border-[#18244b] rounded-xl items-center">
                <Image
                  src={myImg}
                  alt="Sneha Farkya"
                  height={{ base: "auto", md: "200px" }}
                  width="200px"
                  className="myimage"
                  justifyContent={{ sm: "center" }}
                />
                <Text
                  className="dark:text-[#18244b] text-white"
                  textAlign={{md:'left',base:'center'}}
                >
                  Hello and Namaste! I’m Sneha from Indore, India. With over 2
                  years of experience, I specialize in developing user-friendly
                  digital experiences that blend functionality with aesthetic
                  appeal. My passion lies in crafting beautiful and intuitive
                  interfaces, making complex ideas accessible and engaging.{" "}
                  <br /> <b>Welcome to my space where creativity meets technology!</b>
                </Text>
              </div>
            </CardBody>
            <CardFooter className="flex justify-center items-center gap-2 md:gap-4">
              <SecondaryButton
                additionalClasses="dark:bg-[linear-gradient(40deg,#ffffff,#c8d2ee)]"
                onClick={scrollToAbout}
                text={"Know more about me"}
              />
              <Calendly />
            </CardFooter>

          </Card>
          <div className="md:mt-4">
          <Banner/>
          </div>
          <Projects/>
          <About ref={aboutRef} />
        </div>
      </div>
    </>
  );
}
