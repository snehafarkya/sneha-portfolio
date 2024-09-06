import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Heading } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import Tailwind from '../assets/tailwind.webp'
import freelance from '../assets/freelance.webp'

// UCNizQ0yVEPOm3-QJBKcG5Nw
const Playlist = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = [
    {
      vid: 'https://youtu.be/h1oYVlC7hVQ',
      title: 'Integrate Tailwind CSS with React - A beginner tutorial',
      date:'06 Aug 2023',
      image:Tailwind,
    },
    {
      vid: 'https://youtu.be/XmcpPuQxJZU',
      title: 'How I made money by freelancing | Tips and Tricks | Answering your queries',
      date:'12 July 2023',
      image:freelance,

    },
    {
      vid: 'https://youtu.be/ueTpuUtCOY8',
      title: 'A Gentle Introduction to React Redux Library',
      date:'12 July 2023',
      image:Tailwind,

    },
    
    // Add more video URLs as needed
  ];

  const handleVideoClick = (index) => {
    setCurrentVideoIndex(index);
  };

  return (
    <>
      <Helmet>
        <title>Youtube Playlist</title>
        <meta
          name="description"
          content="This is the blogs page of my portfolio. I am a technical writer and I write about tech and travel."
        />
        <link rel="canonical" href="/blogs" />
      </Helmet>

      <div className='md:mx-28'>
      <Heading
              size="xl"
              as="h2"
              width="fit-content"
              textAlign={{}}
              fontFamily='Orbitron'
              paddingBottom="4px"
              letterSpacing='1px'
              marginX={{base:'24px',md:'0px'}}
              borderBottom="2px solid"
              borderBottomWidth="3px"
              textColor="white"
              marginBottom="20px"
              paddingX={{base:"16px",md:"4px"}}
              paddingTop={{base:'28', md:'0'}}

            >
              Playlist ✨
            </Heading>
        <div className="flex md:flex-row flex-col md:gap-24 md:justify-between justify-center">
        <div className="video-player" style={{position:'sticky'}} >
          <ReactPlayer url={videos[currentVideoIndex].vid}  controls playing />
        </div>
        <div className="video-list">
          
          {videos.map((video, index) => (
            <div key={index} className="video-item flex md:flex-row flex-col mx-6  gap-4  md:w-[470px] my-6 cursor-pointer rounded-lg text-gray-800  bg-white order-2 expcard" onClick={() => handleVideoClick(index)}>
              <img src={video.image} className='md:w-56 z-10 md:rounded-tl-lg md:rounded-tr-none  md:rounded-bl-lg rounded-t-lg'  />
              <div className="flex flex-col px-4">
                <p className='text-ellipsis line-clamp-2 my-4 text-base font-bold'>{video.title}</p>
              
              <p className='text-xs mb-10 md:mb-0 font-medium'>Date: {video.date}</p>
              </div>
            </div>

          ))}
        </div>
        
      </div>
      </div>
    </>
  );
};

export default Playlist;
