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
        <div className='rounded-sm'>
            <Swiper autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}  modules={[Autoplay]} className="mySwiper">
        <SwiperSlide className='rounded-sm w-full h-[120vh] md:h-[90vh] bg-cover bg-center bg-no-repeat banner1'>
           
            <div className='w-full gap-4 h-[120vh] md:h-[90vh] flex flex-col lg:flex-row justify-around items-center pl-8 bg-[#02020200]'>
          <div className='space-y-5'>  
            <h1 className='  text-white font-medium tracking-[.12em] text-4xl'>Wireless</h1>
            <h1 className='  text-white font-medium tracking-[.12em] text-7xl'>Earbuds </h1>
            <div className='flex flex-col gap-3 md:flex-row'>
            
            <button className='btn bg-black text-white px-8 text-xl'>Shop Now</button>
            </div>
            </div>

             <Image src={ear} alt='phone'></Image>
            </div>
        </SwiperSlide>
        
        <SwiperSlide className='rounded-sm w-full h-[120vh] md:h-[90vh] bg-cover bg-center bg-no-repeat banner2'>
        <div className='w-full gap-4 h-[120vh] md:h-[90vh] flex flex-col lg:flex-row justify-around items-center pl-8 bg-[#02020200]'>
          <div className='space-y-5'>  
            <h1 className='  text-white font-medium tracking-[.12em] text-6xl'>Galaxy S24 Series</h1>
            <h1 className='  text-white font-medium tracking-[.12em] text-3xl'>Galaxy Ai Is Here</h1>
            <div className='flex flex-col gap-3 md:flex-row'>
            
            <button className='btn bg-black text-white px-8 text-xl'>Shop Now</button>
            </div>
            </div>

             <Image src={samsung} alt='phone'></Image>
            </div>
        </SwiperSlide>
        
        <SwiperSlide className='rounded-sm w-full h-[120vh] md:h-[90vh] bg-cover bg-center bg-no-repeat banner3'>
        <div className='w-full gap-4 h-[120vh] md:h-[90vh] flex flex-col lg:flex-row justify-around items-center pl-8 bg-[#02020200]'>
          <div className='space-y-5'>  
            <h1 className='  text-white font-medium tracking-[.12em] text-6xl'>iPhone 15 Series</h1>
            <h1 className='  text-white font-medium tracking-[.12em] text-3xl'>Everything You Need To Know </h1>
            <div className='flex flex-col gap-3 md:flex-row'>
            
            <button className='btn bg-black text-white px-8 text-xl'>Shop Now</button>
            </div>
            </div>

             <Image src={iphone} alt='phone'></Image>
            </div>
        </SwiperSlide>
        
      </Swiper>

      <div className='bg-slate-200 w-full flex flex-col lg:flex-row gap-10 justify-evenlyitems-center py-8 px-6'>
        <div className='w-full lg:w-2/3'>
          <h1 className='font-semibold text-3xl mb-3'>WE ARE HELPING PEOPLE FROM 50 YEARS</h1>
          <p className='text-slate-600 font-medium text-lg'>You can give blood at any of our blood donation venues all over the world. We have total sixty thousands donor centers and visit thousands of other venues on various occasions.</p>

        </div>
        <div className='w-full lg:w-1/3 flex items-center justify-center'>
       
        </div>
      </div>



        </div>
    );
};

export default Banner;