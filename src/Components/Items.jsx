/* eslint-disable @next/next/no-img-element */ 
"use client"; 

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getServices } from '../../services/getItems'; // Ensure this returns a promise

const Items = () => {
  const [loading, setLoading] = useState(true);
  const [latest, setLatest] = useState([]);
  const [bg, setBg] = useState([]);
  const [bgs, setBgs] = useState('Smartphone');

 

  useEffect(() => {
    // Define the async function inside useEffect
    const getData = async () => {
      try {
        const { services } = await getServices(); // Ensure getServices is async and returns a promise
        setLatest(services);
        setBg(services.filter(item => item.category === 'Smartphone')); // Initialize bg with smartphones
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch services:", error);
        setLoading(false);
      }
    };

    getData(); // Call the async function
  }, []);

  const handleCategoryChange = (category) => {
    const filteredItems = latest.filter(item => item.category === category);
    setBg(filteredItems);
    setBgs(category);
  };

  return (
    <>
      <h1 className='text-center text-5xl font-semibold my-14 text-blue-500'>New Arrivals</h1>
      <div className='flex gap-2 md:gap-3 w-full px-1 md:px-5 mb-5'>
        <button onClick={() => handleCategoryChange('Smartphone')} className={`${
          bgs === 'Smartphone' ? 'bg-blue-500 text-white' : ''
        } w-44 border shadow-xl py-3 rounded-md font-semibold`}>Phone</button>
        <button onClick={() => handleCategoryChange('Smartwatch')} className={`${
          bgs === 'Smartwatch' ? 'bg-blue-500 text-white' : ''
        } w-44 border shadow-xl py-3 rounded-md font-semibold`}>SmartWatch</button>
        <button onClick={() => handleCategoryChange('Headphones')} className={`${
          bgs === 'Headphones' ? 'bg-blue-500 text-white' : ''
        } w-44 border shadow-xl py-3 rounded-md font-semibold`}>HeadPhone</button>
        <button onClick={() => handleCategoryChange('Earbuds')} className={`${
          bgs === 'Earbuds' ? 'bg-blue-500 text-white' : ''
        } w-44 border shadow-xl py-3 rounded-md font-semibold`}>EarBuds</button>
      </div>

      <div className='py-10 px-2 md:px-5'>
        <Swiper autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          slidesPerView: 2
        }} breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        }} modules={[Autoplay]} className="py-10 px-5">
          {loading ? (
            <div className="loader w-28 h-28 mx-auto my-10"></div>
          ) : (
            bg.map(item => (
              <SwiperSlide key={item._id}>
                <Link href={`/services/${item._id}`}>
                  <div className="relative card border-2 rounded-md group overflow-hidden">
                    <div className="relative w-full h-64">
                      <img
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:opacity-0"
                        src={item.image1}
                        alt={item.title}
                      />
                      <img
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out opacity-0 group-hover:opacity-100"
                        src={item.image2}
                        alt={item.title}
                      />
                    </div>
                    <div className="card-body p-3 md:p-5">
                      <h2 className="card-title text-base">{item.title}</h2>
                      <p>${item.price}</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </>
  );
};

export default Items;
