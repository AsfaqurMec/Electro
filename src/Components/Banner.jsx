/* eslint-disable @next/next/no-img-element */
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay} from 'swiper/modules';
import iphone from '../../images/iPhone-15-Plus-_4_-7443-removebg-preview.png'
import Image from 'next/image';
import samsung from '../../images/Samsung-S24-Ultra-Titanium-Grey-removebg-preview.png'
import ear from '../../images/J66-7-removebg.png'

const Banner = () => {
    return (
      <>
      
        <div className='rounded-sm '>
        <div className='flex flex-col lg:flex-row gap-3'>
            <Swiper autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}  modules={[Autoplay]} className="mySwiper w-full lg:w-[60%] rounded-md">
        <SwiperSlide className='rounded-sm w-full h-[100vh] md:h-[90vh] bg-cover bg-center bg-no-repeat banner1'>
           
            <div className='w-full gap-0 h-[100vh] md:h-[90vh] flex flex-col lg:flex-row justify-around items-center pl-0 md:pl-8 bg-[#02020200]'>
          <div className='space-y-5'>  
            <h1 className='text-center md:text-left  text-white font-medium tracking-[.12em] text-2xl md:text-3xl'>Wireless</h1>
            <h1 className='text-center md:text-left  text-white font-medium tracking-[.12em] text-4xl md:text-5xl'>Earbuds </h1>
            <div className='flex flex-col gap-3 md:flex-row'>
            
            <button className='btn bg-black text-white px-8 text-xl w-52'>Shop Now</button>
            </div>
            </div>

             <Image src={ear} alt='phone'></Image>
            </div>
        </SwiperSlide>
        
        <SwiperSlide className='rounded-sm w-full h-[100vh] md:h-[90vh] bg-cover bg-center bg-no-repeat banner2'>
        <div className='w-full gap-0 h-[100vh] md:h-[90vh] flex flex-col lg:flex-row justify-center items-center pl-0 md:pl-8 bg-[#02020200]'>
          <div className='space-y-5'>  
            <h1 className='text-center md:text-left  text-white font-medium tracking-[.12em] text-3xl md:text-4xl'>Galaxy S24 Series</h1>
            <h1 className='text-center md:text-left  text-white font-medium tracking-[.12em] text-xl md:text-2xl'>Galaxy Ai Is Here</h1>
            <div className='flex flex-col  items-center gap-3 md:flex-row'>
            
            <button className='btn bg-black text-white px-8 text-xl w-52'>Shop Now</button>
            </div>
            </div>

             <Image  src={samsung} alt='phone'></Image>
            </div>
        </SwiperSlide>
        
        <SwiperSlide className='rounded-sm w-full h-[100vh] md:h-[90vh] bg-cover bg-center bg-no-repeat banner3'>
        <div className='w-full gap-0 h-[100vh] md:h-[90vh] flex flex-col lg:flex-row justify-around items-center pl-0 md:pl-8 bg-[#02020200]'>
          <div className='space-y-5'>  
            <h1 className='text-center md:text-left  text-white font-medium tracking-[.12em] text-3xl md:text-4xl'>iPhone 15 Series</h1>
            <h1 className='text-center md:text-left  text-white font-medium tracking-[.12em] text-xl md:text-2xl'>Everything You Need To Know </h1>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
            
            <button className='btn bg-black text-white px-8 text-xl w-52'>Shop Now</button>
            </div>
            </div>

             <Image src={iphone} alt='phone'></Image>
            </div>
        </SwiperSlide>
        
      </Swiper>

      <div className='w-full lg:w-[40%] flex flex-col gap-3'>
        <div className='h-[70vh] md:h-[45vh] banner4 rounded-md w-full flex flex-col justify-center pl-10 text-white'>
           <h1 className='text-5xl font-semibold'>HeadPhones</h1>
           <p className='text-2xl my-2 font-semibold'>starting from $100</p>
           <div className='mt-3'><button className='btn hover:bg-white hover:text-black text-white bg-black font-semibold border-none text-lg'>Shop Now</button></div>
        </div>
        <div className='h-[70vh] md:h-[45vh] banner5 rounded-md w-full flex flex-col justify-center pl-10 text-white'>
           <h1 className='text-5xl font-semibold'>Smart Watch</h1>
           <p className='text-2xl my-2 font-semibold'>starting from $150</p>
           <div className='mt-3'><button className='btn hover:bg-black hover:text-white font-semibold border-none text-lg'>Shop Now</button></div>
        </div>
      </div>
      </div>



      <div className='w-full flex flex-col lg:flex-row gap-10  py-10'>
      <div className='w-full lg:w-1/3 shadow-2xl flex flex-col md:flex-row bg-white justify-center items-center gap-1 md:gap-5 px-5 py-8  rounded-md'>
        <div className='space-y-3'>
           <h1 className='text-cyan-500 tracking-widest font-medium'>New Arrival</h1>
           <h1 className='text-xl font-semibold'>Galaxy S24 Series</h1>
           <h1 className='pt-3 font-bold'>Shop Now ?</h1>
           </div>
           <Image src={samsung} className='h-52 w-56' alt='image'></Image>
         </div>

         <div className='w-full lg:w-1/3 shadow-2xl flex flex-col md:flex-row bg-white justify-center items-center gap-1 md:gap-5 px-5 py-8  rounded-md'>
        <div className='space-y-3'>
           <h1 className='text-cyan-500 tracking-widest font-medium'>New Arrival</h1>
           <h1 className='text-xl font-semibold'>iPhone 15 Series</h1>
           <h1 className='pt-3 font-bold'>Shop Now ?</h1>
           </div>
           <Image src={iphone} className='h-52 w-56' alt='image'></Image>
         </div>

         <div className='w-full lg:w-1/3 shadow-2xl  flex flex-col md:flex-row bg-white justify-center items-center gap-1 md:gap-5 px-5 py-8  rounded-md'>
        <div className='space-y-3'>
           <h1 className='text-cyan-500 tracking-widest font-medium'>New Arrival</h1>
           <h1 className='text-xl font-semibold'>EarBuds</h1>
           <h1 className='pt-3 font-bold'>Shop Now ?</h1>
           </div>
           <Image src={ear} className='h-52 w-56' alt='image'></Image>
         </div>
      </div>
    </div>

    
        </>
    );
};

export default Banner;