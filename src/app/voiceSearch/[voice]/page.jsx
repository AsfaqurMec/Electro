/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const page = ({ params }) => {
 
  //console.log(params.voice);
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!params.voice) return;
    //console.log(params.voice);
    const getData = async () => {
      const { data } = await axios.get(`https://electro-brown.vercel.app/voiceSearch/api?voice=${params.voice}`);
      delayedFunction();
      function delayedFunction() {
        
          if (data.categoryMatch) {
            setProducts(data.categoryMatch);
          }else if (data.titleMatch) {
            setProducts(data.titleMatch);
          }else {
            setProducts(data.typeMatch);
          }
          
        
      }
      
    //  console.log(data.categoryMatch);
      
    };

    getData();
    
  },[params.voice, products]);


  return (
    <div className="px-2 md:px-10 py-10">
      
      <h2 className="flex gap-2">Search Results: <h1 className="text-blue-400">{params.voice}</h1></h2>
      {products.length > 0 ? (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 px-0 md:px-5 py-10'>
          {products.map((latest) => (
            
            <Link key={latest._id} href={`/services/${latest._id}`}>
            <div className="relative card shadow-2xl rounded-md group overflow-hidden">
              <div className="relative w-full h-60 md:h-60">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform delay-1000 duration-1000 ease-in-out transform group-hover:opacity-0"
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
                <h2 className="card-title text-sm md:text-base">{latest.title}</h2>
                <p className="bottom-0">৳{latest.price}</p>
              </div>
            </div>
          </Link>

          ))}
        </div>
      ) : (
        <h1 className="text-center mt-14 text-2xl font-bold">No results found</h1>
      )}
    </div>
  );
};

export default page;