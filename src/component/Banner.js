import React from 'react';
// import './styles.css'; // Ensure the custom styles are imported
// import logo from '../../public/logo192.png'
export default function Banner() {
const images = [
  {image:"React js"},
  {image:"Next js"},
  {image:"Tailwind CSS"},
  {image:"Firebase Authentication"},
  {image:"GitHub"},
  {image:"Vercel"},
  {image:"Responsive development"},

]

  return (
    <div
    className='flex md:w-[1200px] w-[370px] mt-4 mx-auto items-center gap-2 overflow-hidden'
    // style={{ width: '-webkit-fill-available' }}
  >
    <div className=' marquee  '>
      <ul className='marquee-text  '>
        {images.map((item) => {
          return (
            <>
              <li>
                {' '}
                <p className='textt text-white dark:text-black font-semibold text-lg' >{item.image}</p>
              </li>
            </>
          );
        })}
      </ul>
      <ul className='marquee-text '>
        {images.map((item) => {
          return (
            <>
              <li>
                {' '}
                                <p className=' text-white dark:text-black font-semibold text-lg' >{item.image}</p>

              </li>
            </>
          );
        })}
      </ul>
      <ul className='marquee-text '>
        {images.map((item) => {
          return (
            <>
              <li>
                {' '}
                                <p className=' text-white dark:text-black font-semibold text-lg' >{item.image}</p>

              </li>
            </>
          );
        })}
      </ul>
      <div className="absolute left-0 top-0 bottom-0 w-12 opacity-65 gradient-left " />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l pointer-events-none gradient-right" />
    </div>
    
  </div>
  );
}
