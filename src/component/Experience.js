import React from 'react'
import { Heading } from '@chakra-ui/react'
import exp from './ExpInfo'
export default function Experience() {
  const data = exp.map((item)=>{
    return <>

<ol class="border-l-2 border-purple-600">
  <li>
    <div class="md:flex flex-start ">
      <div class="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
        
      </div>
      <div class="exp-card block p-6 rounded-xl shadow-lg bg-gray-100 md:max-w-lg max-w-xs ml-6 mb-10 " >
        <div class="grid grid-cols-1 justify-between mb-4">
          <p class="font-bold text-purple-700  hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-md" style={{color:'#BA00BB'}}>{item.title}</p>
          <p class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">{item.timeLine}</p>
        </div>
        <p class="text-gray-700 mb-6">{item.desc}</p>

      </div>
    </div>
  </li>
  
</ol>
    </>
  })
  return (
    <>
    
      <Heading
    size="lg"
    as="h2"
    textDecoration="underline"
    textAlign={{}}
    fontFamily='Orbitron'
    letterSpacing='1px'
    color='white'
    marginTop='10' 
    className='p-4 md:mt-16'
  >
    Experience
  </Heading>
  <div className='text-left justify-center place-items-center grid grid-cols-1 my-20 mt-40'>
      {data}
    </div>
    </>
  )
}
