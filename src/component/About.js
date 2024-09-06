import React, { forwardRef } from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import myImg from "../assets/workwomen1.png";
import Skills from "./Skills";
import "../App.css";
import Newexp from "./Newexp";
import Projects from "./Projects";
// import Calendly from 'react-calendly'

const About = forwardRef((props, ref) => {
  return (
    <>
      <div className="w-xl border-none md:mx-28 " id="about" ref={ref}>
        {/* <section className="bg-section border-none"> */}
        <Heading
          size="xl"
          as="h2"
          width="fit-content"
          fontFamily="Orbitron"
          paddingBottom="4px"
          letterSpacing="1px"
          borderBottom="2px solid"
          borderBottomWidth="3px"
          marginX={{ base: "24px", md: "0px" }}
          marginTop={{ base: "24px", md: "80px" }}
          paddingX={{ base: "16px", md: "4px" }}
          paddingTop={{ base: "28", md: "0" }}
          className="text-white dark:text-[#18224b]"
        >
          {/* Wondering about me? 👩‍💻 */}
          Wondering more 'bout me? 👩‍💻 
        </Heading>
        {/*  */}
        <Card
          className="md:flex w-xl md:gap-20 md:mt-8 mt-6 text-white dark:text-[#18224b] grid gap:20 grid-rows-2 justify-center border-none"
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          // variant='outline'
          border="none"
          background="transparent"
          shadow={"none"}
        >
          <Stack className=" bg-transparent order-last md:order-first">
            <CardBody>
              <Text
                py="4"
                letterSpacing="1px"
                className="text-white dark:text-[#18224b]"
              >
                Hello and welcome! I’m Sneha Farkya, a Frontend Developer and
                Technical Writer with a solid background in creating intuitive
                user interfaces. I hold a BCA degree from Medicaps University,
                India, which provided me with a strong foundation in computer
                science and equipped me with the technical skills required for
                effective frontend development.
                <br />
                <br />
                In my role, I focus on understanding project requirements
                thoroughly and conducting detailed research to deliver
                high-quality outcomes. My experience spans building scalable and
                efficient code solutions, ensuring that every project meets both
                functional and aesthetic standards.
                <br />
                <br />
                My involvement in various hackathons and projects has honed my
                ability to write clean, maintainable code and produce
                comprehensive documentation. A highlight of my career was
                receiving a special mention at the SheBuilds hackathon, which
                underscores my capability to deliver innovative and impactful
                solutions.
                <br />
              </Text>
            </CardBody>

            <CardFooter></CardFooter>
          </Stack>
          <Image
            objectFit="cover"
            src={myImg}
            marginTop="4"
            marginRight={{md:'8', base:'0'}}
            alt="Sneha Farkya"
            height={{ base: "auto", md: "350px" }}
            justifyContent={{ sm: "center" }}
            // border='1px'
          />
        </Card>
        
        {/* </section> */}
        <Skills />
        {/* <Experience/> */}
        <Newexp />
      </div>
    </>
  );
});
export default About;
