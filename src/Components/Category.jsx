"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';


const Category = () => {
    return (
        <>
        <Swiper  navigation={true} modules={[Navigation]} className="mySwiper h-screen">
          <SwiperSlide className='h-screen' >Slide 1</SwiperSlide>
          <SwiperSlide className='h-screen' >Slide 2</SwiperSlide>
         
          
        </Swiper>
      </>
    );
};

export default Category;