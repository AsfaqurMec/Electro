"use client";
import Image from "next/image";
import Link from "next/link";
import React  from "react";
 import { signIn, useSession } from "next-auth/react";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();


  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });
   // console.log(resp);
    
  };

  return (

<div className='hero h-full rounded-lg bg-white '>
                  <div className="w-full hero-content flex-col gap-14 lg:gap-28 lg:flex-row-reverse">
                      <div className="text-center flex flex-col justify-center items-center gap-5">
                          <h1 className="text-6xl mt-5 text-black text-center font-bold pb-1">Register!</h1>
                          <p>Welcome to <strong>Electro!</strong>. A reliable and authenticate platform for all kind of electronic devices. Here we have all the latest and top brands products.
                          </p>
                          <Link href={"/signup"}><button className="btn hover:bg-white hover:text-black hover:border-2  bg-black text-white font-semibold text-xl">Register</button></Link>
                          
                      </div>
                      <div data-aos="zoom-out-up" data-aos-duration="1000" className="card flex-shrink-0 w-full lg:w-1/2 rounded-none bg-[#ffffff] lg:border-r-2 border-r-black">
                        
                        
                          <form  onSubmit={handleLogin} className="card-body gap-1">
                          <div className='w-full flex flex-col justify-center items-center gap-2'>
                          <h1 className='font-semibold text-teal-900 text-3xl'>Login to your <span className='text-purple-500'>account</span></h1>
                          
                              </div> 

                  <div className="form-control mt-16">
                              <label className="text-xl text-[#d38303]" htmlFor="email">Email</label> <br />
               <input
                 type="text"
                 name="email"
                 placeholder="your email"
                 className="w-full px-3 py-3  border-[#090a11] rounded-md border-[3px] focus:border-b-2 focus:border-b-[#e2b29d] focus:outline-none bg-transparent text-xl text-black"
               />
               </div>
               <div className="form-control mt-5">
               <label className="text-[#d38303] text-xl" htmlFor="password">Password</label> <br />
               <input
                 type="password"
                 name="password"
                 placeholder="your password"
                 className="w-full px-3 py-3 border-[#000000] rounded-md border-[3px] focus:border-b-2 focus:border-b-[#e2b29d] focus:outline-none bg-transparent text-xl text-black"
               />
                </div>


               <div className="form-control mt-2 p-0">
               <button
                 type="submit"
                 className="w-full btn btn-primary border-none bg-[#551a01] mt-12 text-lg"
               >
                 Sign In
               </button>
               </div>
    
                          </form>
                          
                              
                      </div>
                  </div>
                  
              </div>

  );
};

export default Page;
