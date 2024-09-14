"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import iphone from '../../images/iPhone-15-Plus-_4_-7443-removebg-preview.png'

import samsung from '../../images/Samsung-S24-Ultra-Titanium-Grey-removebg-preview.png'
import ear from '../../images/J66-7-removebg.png'
import watch from '../../images/Screenshot 2024-09-10 152959.png'
import tablet from '../../images/Screenshot 2024-09-10 152934.png'
import head from '../../images/Screenshot 2024-09-10 152947.png'

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';


const Category = () => {
    return (
        <>
        <div >
        <Swiper 
         pagination={{ clickable: true }}
         breakpoints={{
          380: {
            slidesPerView: 2,  // 1 slide for devices ≥ 640px
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,  // 1 slide for devices ≥ 640px
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,  // 2 slides for devices ≥ 768px
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,  // 3 slides for devices ≥ 1024px
            spaceBetween: 20,
          },
        }}
         modules={[Pagination]}
           className="mySwiper  "
         >
          <SwiperSlide className=''>
         <div className='flex shadow-xl bg-white justify-center items-center px-5 py-3 gap-1 md:gap-5 mb-10 rounded-md'>
           <Image src={iphone} className='h-16 w-16' alt='image'></Image>
           <h1>Phone</h1>
         </div>
          </SwiperSlide>
          <SwiperSlide className=''>
         <div className='flex shadow-xl bg-white justify-center items-center px-5 gap-1 md:gap-5 py-3 mb-10 rounded-md'>
           <Image src={tablet} className='h-16 w-16' alt='image'></Image>
           <h1>Tablet</h1>
         </div>
          </SwiperSlide>
          <SwiperSlide className=''>
         <div className='flex shadow-xl bg-white justify-center items-center gap-1 md:gap-5 px-5 py-3 mb-10 rounded-md'>
           <Image src={watch} className='h-16 w-16' alt='image'></Image>
           <h1>SmartWatch</h1>
         </div>
          </SwiperSlide>
          <SwiperSlide className=''>
         <div className='flex shadow-xl bg-white justify-center items-center gap-1 md:gap-5 px-5 py-3 mb-10 rounded-md'>
           <Image src={ear} className='h-16 w-16' alt='image'></Image>
           <h1>EarBuds</h1>
         </div>
          </SwiperSlide>
          <SwiperSlide className=''>
         <div className='flex shadow-xl bg-white justify-center items-center gap-1 md:gap-5 px-0 py-3 mb-10 rounded-md'>
           <Image src={head} className='h-16 w-16' alt='image'></Image>
           <h1>HeadPhone</h1>
         </div>
          </SwiperSlide>
          
          

        </Swiper>
        </div>
      </>
    );
};

export default Category;