"use client"
import React from 'react';
import Image from "next/image";
import lofo from '../../images/Screenshot 2024-09-09 192439.png'
import lofo1 from '../../images/Samsung-S24-Ultra-Titanium-Grey-removebg-preview.png'
import drone from '../../images/Screenshot 2024-09-11 015109.png'
import pc from '../../images/Screenshot 2024-09-11 015123.png'
import { useState } from "react";
const Other = () => {
    const colors = ["#EC4899", "#8B5CF6", "#3B82F6", "#22C55E", "#FACC15"]; // Example color array
  const [selectedColor, setSelectedColor] = useState("");

  const handleChange = (color) => {
    setSelectedColor(color);
  };
    return (
        <>
        <div className='my-10 px-5'>
            <div className='flex flex-col lg:flex-row'>
                <div className='w-full lg:w-1/2'>
                <Image src={lofo} alt='lofo'></Image>
                </div>
                <div className='w-full lg:w-1/2 flex flex-col justify-center items-center gap-4 px-10 py-10 bg-slate-100'> 
                    <h3>Trending now</h3>
                    <h1>Speakers Of The House</h1>
                    <p className='text-center'>With HomePod or HomePod mini, amplify all the listening experiences you love. And enjoy an effortlessly connected smart home — with Siri built in — thats private and secure.</p>
                    <div className='w-[90%] lg:w-[70%] mt-6 flex justify-around items-center shadow-slate-300 shadow-lg bg-white rounded-md p-3'>
                        <Image className='h-20 w-20' src={lofo1} alt='lofo1'></Image>
                        <div>
                            <h2>Galaxy S24 Ultra</h2>
                            <h4>Samsung</h4>
                        </div>
                        <h1>$990.00</h1>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col lg:flex-row gap-10  py-10'>
      <div className='w-full lg:w-1/2 shadow-2xl flex flex-col md:flex-row bg-[#f6f5f8] justify-around items-center gap-1 md:gap-5 px-5 py-8  rounded-md'>
        <div className='space-y-3'>
           <h1 className='text-cyan-500 tracking-widest font-medium'>New Arrival</h1>
           <h1 className='text-xl font-semibold'>Galaxy S24 Series</h1>
           <h1 className='pt-3 font-bold'>Shop Now ?</h1>
           </div>
           <Image src={drone} className='h-52 w-64' alt='image'></Image>
         </div>

         <div className='w-full lg:w-1/2 shadow-2xl flex flex-col md:flex-row bg-[#f6f5f8] justify-around items-center gap-1 md:gap-5 px-5 py-8  rounded-md'>
        <div className='space-y-3'>
           <h1 className='text-cyan-500 tracking-widest font-medium'>New Arrival</h1>
           <h1 className='text-xl font-semibold'>iPhone 15 Series</h1>
           <h1 className='pt-3 font-bold'>Shop Now ?</h1>
           </div>
           <Image src={pc} className='h-52 w-64' alt='image'></Image>
         </div>

        
      </div>

        </div>

<div className="flex space-x-4">
{colors.map((color, index) => (
  <label key={index} className="cursor-pointer">
    <input
      type="radio"
      name="color"
      value={color}
      onChange={() => handleChange(color)}
      className="hidden"
    />
    <div
      className={`w-10 h-10 rounded-full border-4 transition-transform ${
        selectedColor === color ? "scale-105 border-gray-200" : "border-white"
      }`}
      style={{ backgroundColor: color }}
    ></div>
  </label>
))}
</div>
</>
    );
};

export default Other;