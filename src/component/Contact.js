import React, { useRef, useState } from "react";
import axios from 'axios';
import emailjs from "@emailjs/browser";
import { Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import PrimaryButton from "./Globals/PrimaryButton";
import SecondaryButton from "./Globals/SecondaryButton";

const Contact = () => {
  const form = useRef();

  // storing form data into mongodb
  const [nameS, setName] = useState("");
  const [roleS, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      fullName: nameS,
      email: roleS,
      location: location,
      msg: message,
    };

    axios.post('http://localhost:4000/insert', formData)
      .then((response) => {
        console.log('Data sent successfully:', response.data);
        document.getElementById('thank').style.display = "flex";
        document.getElementById('formm').style.display = "none";
      })
      .catch((error) => {
        console.error('There was an error sending the data!', error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Contact page</title>
        <meta
          name="description"
          content="This is the contact page of my portfolio. You can write an email to me and I will respond it."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
     
      {/* <div className="grid grid-cols-1 place-items-center rounded-xl md:flex md:gap-16 md:justify-center md:items-center h-full mx-auto">
        <div className="container md:flex hidden">
          <div className="flex gap-2 flex-col">
            <p className="text-5xl dark:text-[#18224b] text-white font-semibold">Got Something to say? Let's Chat</p>
            <p className="text-2xl dark:text-[#18224b] text-white font-medium">I am all ears!</p>
          </div>
        </div>
        <div className="block p-6 rounded-lg shadow-lg bg-transparent dark:bg-[linear-gradient(#0a173f,#414c6e)] border w-md md:w-[450px] m-4">
          <form ref={form} onSubmit={handleSubmit} id="formm" className="flex flex-col justify-center">
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-3 text-md font-normal text-[#18224b] bg-[linear-gradient(#dde5fa,#dadeec)] bg-clip-padding border-none backdrop-blur-md opacity-60 focus:opacity-100 border-gray-400 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="name"
                placeholder="Name"
                name="from_name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="email"
                className="form-control block w-full px-4 py-3 text-md font-normal text-[#18224b] bg-[linear-gradient(#dde5fa,#dadeec)] bg-clip-padding border-none backdrop-blur-md opacity-60 focus:opacity-100 border-gray-400 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="mail"
                placeholder="Email address"
                name="email"
                required
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-3 text-md font-normal text-[#18224b] bg-[linear-gradient(#dde5fa,#dadeec)] bg-clip-padding border-none backdrop-blur-md opacity-60 focus:opacity-100 border-gray-400 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="loc"
                placeholder="Where are you from?"
                name="from_name"
                required
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="form-group mb-6">
              <textarea
                className="form-control block w-full px-4 py-3 text-md font-normal text-[#18224b] bg-[linear-gradient(#dde5fa,#dadeec)] bg-clip-padding border-none backdrop-blur-md opacity-60 focus:opacity-100 border-gray-400 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="textarea"
                rows="3"
                placeholder="Message"
                name="message"
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <SecondaryButton
              type="submit"
              additionalClasses="w-20 mx-auto flex justify-center"
              
            >
              Send
            </SecondaryButton>
          </form>
          <div className="hidden" id="thank">
            <p>This means a lot 💜. Have a nice day!</p>
          </div>
        </div>
      </div> */}
      <div className="md:w-[1100px] md:mt-24 group w-[370px] rounded-[64px] overflow-hidden mx-auto relative h-[400px] bg-blue-200">
        <div className="rounded-[80px] absolute md:left-[83%] left-[80%] md:-top-28 -top-[84px] bg-blue-900  w-[150px] md:w-[500px] md:h-[300px] h-[200px] group-hover:scale-[1.05] transition ease-in-out duration-500"></div>
        <div className="rounded-[80px] absolute md:right-[83%] right-[80%] md:-top-28 -top-[84px] bg-blue-600 w-[150px] md:w-[500px] md:h-[300px] h-[200px] group-hover:scale-[1.05] transition ease-in-out duration-500"></div>
        <div className="rounded-[80px] absolute md:left-[83%] left-[80%] md:-bottom-28 -bottom-20 bg-blue-700 w-[150px]  md:w-[500px] md:h-[300px] h-[200px] group-hover:scale-[1.05] transition ease-in-out duration-500"></div>
        <div className="rounded-[80px] absolute md:right-[83%] right-[80%] md:-bottom-28 -bottom-20 bg-blue-300 w-[150px] md:w-[500px] md:h-[300px] h-[200px] group-hover:scale-[1.05] transition ease-in-out duration-500"></div>
        <div className="flex flex-col items-center my-auto justify-center gap-4" style={{height:"inherit"}}>
          <h1 className="text-3xl text-center  font-bold text-[#18224b] ">Got Something to say? Let's Chat</h1>
          <p className="text-2xl dark:text-[#18224b] text-[#18224b] font-medium">I am all ears!</p>
          <PrimaryButton text="Drop me an email" href={"mailto:sneha06.work@gmail.com"}/>

        </div>
      </div>
    </>
  );
};
export default Contact;
