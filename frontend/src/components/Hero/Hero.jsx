"use client";

import HeroFirst from './HeroFirst';
import HeroSecond from './HeroSecond';

const Hero = () => {
  return (

    <div className='bg-blue-100 '>
       <div className= "w-[90%]  flex flex-col lg:flex-row  mx-auto mt-4 gap-12 px-4 lg:px-10">
      <div className="w-full lg:w-[60%]">
        <HeroFirst />
      </div>
      <div className="w-full lg:w-[40%]">
        <HeroSecond />
      </div>
    </div>
    </div>
   
  );
};

export default Hero;
