/* eslint-disable @next/next/no-img-element */ 
"use client"; 

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getServices } from '../../services/getItems'; // Ensure this returns a promise
import axios from 'axios';
import Image from 'next/image';

import samsung from '../../images/kisspng-samsung-electronics-business-smart-tv-sahel-5b3ce49d5735a8.9077611815307173413572-removebg-preview.png'
import apple from '../../images/Apple-Logo.png'
import huawei from '../../images/png-transparent-huawei-logo-telecommunications-equipment-smartphone-tizen-tizen-association-mobile-phones-red-leaf-thumbnail-removebg-preview.png'
import google from '../../images/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo-removebg-preview.png'
import jbl from '../../images/JBL-Logo-transparent-PNG-removebg-preview.png'
import oneplus from '../../images/21e56eeedded3fdd129cf5bd291db9ff-removebg-preview.png'
import beats from '../../images/Beats-by-Dr-Dre-removebg-preview.png'
import fossil from '../../images/Fossil_Logo-removebg-preview.png'

import img1 from '../../images/download (1).jpeg'
import img2 from '../../images/download (2).jpeg'
import img3 from '../../images/download (4).jpeg'



import img4 from '../../images/Screenshot 2024-10-21 183951.png'
import img5 from '../../images/Screenshot 2024-10-21 184019.png'
import img6 from '../../images/Screenshot 2024-10-21 184033.png'
import img7 from '../../images/Screenshot 2024-10-21 184003.png'









const Items = () => {
  const [loading, setLoading] = useState(true);
  const [latest, setLatest] = useState([]);
  
  const [bgs, setBgs] = useState('Smartphone');

 

  useEffect(() => {
    // Define the async function inside useEffect
    const getData = async () => {
      const { data } = await axios.get(
        ` https://electro-brown.vercel.app/services/api/get-all`
      )
       // const { services } = await getServices(); // Ensure getServices is async and returns a promise
        setLatest(data.services);
        
        setLoading(false);
       
    };
    // setTimeout(() => {
      getData(); // Call the async function
    // }, 1000);
   
        // setBg(phones); // Initialize bg with smartphones

  }, [latest]);

  const phones = latest.filter(item => item.category === 'Smartphone');
  const [bg, setBg] = useState([]);
  // if (bgs === 'Smartphone') {
  //     setBg(phones);
  // }
  const handleCategoryChange = (category) => {
    const filteredItems =  latest.filter(item => item.category === category);
    setBg(filteredItems);
    setBgs(category);
  };

  return (
    <>
      <h1 className='text-center text-5xl font-semibold my-14 text-blue-500'>New Arrivals</h1>
      <div className='flex gap-1 md:gap-3 w-full px-1 md:px-5 mb-5'>
        <button onClick={() => handleCategoryChange('Smartphone')} className={`${
          bgs === 'Smartphone' ? 'bg-blue-500 text-white' : ''
        } w-32 md:w-44 text-sm md:text-lg border shadow-xl py-3 rounded-md font-semibold`}>Phone</button>
        <button onClick={() => handleCategoryChange('Smartwatch')} className={`${
          bgs === 'Smartwatch' ? 'bg-blue-500 text-white' : ''
        } w-32 md:w-44 border text-sm md:text-lg shadow-xl py-3 rounded-md font-semibold`}>SmartWatch</button>
        <button onClick={() => handleCategoryChange('Headphones')} className={`${
          bgs === 'Headphones' ? 'bg-blue-500 text-white' : ''
        } w-32 md:w-44 border text-sm md:text-lg shadow-xl py-3 rounded-md font-semibold`}>HeadPhone</button>
        <button onClick={() => handleCategoryChange('Earbuds')} className={`${
          bgs === 'Earbuds' ? 'bg-blue-500 text-white' : ''
        } w-32 md:w-44 border text-sm md:text-lg shadow-xl py-3 rounded-md font-semibold`}>EarBuds</button>
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
          ) : <div>{
            bgs === "Smartphone" ? 
            phones.map(item => (
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
          :
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
            ))}
          
          </div>
          }
        </Swiper>
      </div>

      <h1 className='text-center text-5xl font-semibold my-14 text-black'>Brands</h1>

      <div className="wrapper">
  <div className="item item1 flex items-center gap-2 justify-center  text-lg font-semibold">
     <Image src={samsung} className='w-16 h-12' alt=''></Image>
     <h1>Samsung</h1>
  </div>
  <div className="item item2 flex items-center justify-center  text-lg font-semibold  ">
  <Image src={apple} className='w-20 h-12' alt=''></Image>
  <h1>Apple</h1>
  </div>
  <div className="item item3 flex items-center gap-4 justify-center  text-lg font-semibold">
  <Image src={huawei} className='w-12 h-12' alt=''></Image>
  <h1>Huawei</h1>
  </div>
  <div className="item item4 flex items-center gap-2 justify-center text-lg font-semibold">
  <Image src={google} className='w-12 h-12' alt=''></Image>
  <h1>Google</h1>
  </div>
  <div className="item item5 flex items-center gap-2 justify-center">
  <Image src={jbl} className='w-20 h-16' alt=''></Image>
  {/* <h1>JBL</h1> */}
  </div>
  <div className="item item6 flex items-center gap-2 justify-center  text-lg font-semibold">
  <Image src={fossil} className='w-12 h-12' alt=''></Image>
  <h1>Fossil</h1>
  </div>
  <div className="item item7 flex items-center gap-2 justify-center  text-lg font-semibold">
  <Image src={oneplus} className='w-14 h-14' alt=''></Image>
  <h1>Oneplus</h1>
  </div>
  <div className="item item8 flex items-center justify-center  text-lg font-semibold">
  <Image src={beats} className='w-20 h-14' alt=''></Image>
  <h1>Beats</h1>
  </div>
</div>

<div className="bg-gray-100 py-10 px-5">
      {/* What Client Says Section */}
      <section className="mb-10 mx-20">
        <h2 className="text-2xl font-bold mb-6 text-center">What Client Says</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="font-bold text-lg">“Excellent Work”</h3>
            <div className="flex items-center mb-4">
              <div className="text-yellow-500">★★★★★</div>
            </div>
            <p className="mb-4">
              Thank you for your prompt reply! I like dealing with you guys in that you are prompt, helpful, and professional, and your gear has always worked as advertised.
            </p>
            <div className="flex items-center">
              <Image
                className="w-12 h-12 rounded-full mr-4"
                src={img1} // replace with actual image path
                alt="Client"
              />
              <div>
                <p className="font-bold">JOHN MATTHEWS</p>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="font-bold text-lg">“Excellent Work”</h3>
            <div className="flex items-center mb-4">
              <div className="text-yellow-500">★★★★★</div>
            </div>
            <p className="mb-4">
              I am very impressed with Technocy. They provide my company with a product of superb quality at a great cost. We look forward to a long and prosperous relationship.
            </p>
            <div className="flex items-center">
              <Image
                className="w-12 h-12 rounded-full mr-4"
                src={img2} // replace with actual image path
                alt="Client"
              />
              <div>
                <p className="font-bold">BRUCE JONES</p>
                <p className="text-gray-500">Boston, LA</p>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="font-bold text-lg">“Highly Recommended”</h3>
            <div className="flex items-center mb-4">
              <div className="text-yellow-500">★★★★★</div>
            </div>
            <p className="mb-4">
             
              I was highly impressed with technical supports efforts, and their immediate response in getting new software out to me. Can you help me install the new software?
            </p>
            <div className="flex items-center">
              <Image
                className="w-12 h-12 rounded-full mr-4"
                src={img3} // replace with actual image path
                alt="Client"
              />
              <div>
                <p className="font-bold">JOHN MATTHEWS</p>
                <p className="text-gray-500">Boston, LA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section>
        <div className="flex justify-between items-center mb-6 mx-20">
          <h2 className="text-2xl font-bold">Latest Posts</h2>
          <a href="#" className="text-blue-500">View All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-20">
          {/* Post 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={img4} // replace with actual image path
              alt="Post Thumbnail"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-pink-500 text-sm mb-1">LIFESTYLE</p>
              <p className="text-gray-500 text-xs mb-2">AUGUST 18, 2021</p>
              <h3 className="font-bold text-lg mb-2">Office rental agency or direct? Which is best...</h3>
            </div>
          </div>
          {/* Post 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={img5} // replace with actual image path
              alt="Post Thumbnail"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-pink-500 text-sm mb-1">ELECTRONICS</p>
              <p className="text-gray-500 text-xs mb-2">AUGUST 18, 2021</p>
              <h3 className="font-bold text-lg mb-2">Lotus Electronics - New Store Launch...</h3>
            </div>
          </div>
          {/* Post 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={img6}  // replace with actual image path
              alt="Post Thumbnail"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-pink-500 text-sm mb-1">COMPANY NEWS</p>
              <p className="text-gray-500 text-xs mb-2">JULY 21, 2021</p>
              <h3 className="font-bold text-lg mb-2">We Invite You to These Wonderful Wine...</h3>
            </div>
          </div>
          {/* Post 4 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={img7}  // replace with actual image path
              alt="Post Thumbnail"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 ">
              <p className="text-pink-500 text-sm mb-1">SOCIAL MEDIA</p>
              <p className="text-gray-500 text-xs mb-2">JULY 21, 2021</p>
              <h3 className="font-bold text-lg mb-2">10 French Wine Regions to Visit for...</h3>
            </div>
          </div>
        </div>
      </section>
    </div>

    </>
  );
};

export default Items;
