/* eslint-disable @next/next/no-img-element */
 "use client" 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay} from 'swiper/modules';
import { getServices } from '../../services/getItems';
import { useEffect, useState } from 'react';
import axios from 'axios';



const Items =  ()  => {
    
    const [latest, setLatest] = useState([]);
    const [bg, setBg]= useState([]);
    useEffect(() => {
        const getData = async () => {
            const { services } = await getServices();
          setLatest(services);
        }
        getData()
      }, [])
      //console.log("datasss",latest);

      const phones = latest.filter(item=> item.category == 'Smartphone');
      
      useEffect(() => {
        // Filter the latest array for smartphones when latest updates
        const phone = latest.filter(item => item.category === 'Smartphone');
        setBg(phone);  // Set bg state to the filtered phones
      }, [latest]);  // Re-run when `latest` changes
     
      const [bgs, setBgs]= useState('phone');
 
      const handle=()=> {
        setBg(phones);
        
        setBgs('phone');
   }

     const handle1=()=> {
        const watch = latest.filter(item=> item.category == 'Smartwatch');
          setBg(watch);
          
          setBgs('watch');
     }

     const handle2=()=> {
        const headphone = latest.filter(item=> item.category == 'Headphones');
        setBg(headphone);
        
        setBgs('headphone');
   }

   const handle3=()=> {
    const earbuds = latest.filter(item=> item.category == 'Earbuds');
    setBg(earbuds);
   
    setBgs('earbuds');
}


    return (
        <>
        <h1>{bg.length}</h1>
        {/* <h1>{phone.length}</h1> */}
      {/* <h1>{load.length}</h1>
        <h1>{phone.length}</h1>
        <h1>{watch.length}</h1>
        <h1>{earbuds.length}</h1>  */}
        <h1 className='text-center text-5xl font-semibold my-14 text-blue-500'>New Arrivals</h1>
          <div className='flex gap-2 md:gap-3 w-full px-1 md:px-5 mb-5'>
             <button onClick={handle}  className={`${
        bgs === 'phone' ? 'bg-blue-500 text-white ' : ''
      } w-44 border shadow-xl py-3 rounded-md font-semibold`}>Phone</button>
             <button onClick={handle1} className={`${
        bgs === 'watch' ? 'bg-blue-500 text-white ' : ''
      } w-44 border shadow-xl py-3 rounded-md font-semibold`}>SmartWatch</button>
             <button onClick={handle2} className={`${
        bgs === 'headphone' ? 'bg-blue-500 text-white ' : ''
      } w-44 border shadow-xl py-3 rounded-md font-semibold`}>HeadPhone</button>
             <button onClick={handle3} className={`${
        bgs === 'earbuds' ? 'bg-blue-500 text-white ' : ''
      } w-44 border shadow-xl py-3 rounded-md font-semibold`}>EarBuds</button>

          </div>
        <div className='py-10 px-2 md:px-5'>
      <Swiper   autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          slidesPerView:2
        }} 
        breakpoints={{
          320: {
            slidesPerView: 2,  // 1 slide for devices ≥ 640px
            spaceBetween: 10,
          },
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
         modules={[Autoplay]}  className=" py-10 px-5">
            
            {bg?.map(latest => (
                <SwiperSlide key={latest._id} className=' relative card border rounded-md group overflow-hidden'>
        {/* <div
          
          className="relative card  rounded-md group overflow-hidden"
        > */}
          <div className="relative w-full h-60 md:h-64">
            <img
              className="absolute inset-0 w-full h-full object-cover  transition-transform delay-1000 duration-1000 ease-in-out transform group-hover:opacity-0"
              src={latest.image1}
              alt="Shoes"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform delay-1000 duration-1000 ease-in-out transform opacity-0 group-hover:opacity-100"
              src={latest.image2}
              alt="Shoes"
            />
          </div>
          <div className="card-body p-3 md:p-5">
            <h2 className="card-title text-base">{latest.title}</h2>
            <p>${latest.price}</p>
          </div>
        {/* </div> */}
        </SwiperSlide>
      ))}
      
        
      </Swiper>
      </div>

    </>
    );
};

export default Items;
