/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"
import Image from "next/image";
//import logo from '../../../public/Screenshot 2024-08-19 162502.png'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import logo from '../../images/Screenshot 2024-09-09 192325.png'
import { useUser } from "../../context/UserContext";
import { useSession } from "next-auth/react";


const Navbar = () => {
  const  session  = useSession();
  console.log('session : ',session?.data?.user);
  
  const { user } = useUser(); // Access user data from context
console.log('USER : ',user);

  const pathname = usePathname();
  const [search, setSearch] = useState('')
  

  const [toggle, setToggle] = useState(false);

   const handleToggle = () => {
          setToggle(true);
   }

   const navLinks = <>
       
   <li  className="mr-3  group rounded-md hover:scale-125 transition duration-300 hover-underline shop"><Link href="/shop" >Shop</Link></li>
   <li  className="mr-3  rounded-md hover:scale-125 transition duration-300 hover-underline"><Link href="/blog" >Blog</Link></li>


  <li  className="mr-3  rounded-md hover:scale-125 transition duration-300 hover-underline"><Link href="/contact" >Contact Us</Link></li>

   


</>

    return (
        <>
       
        {/* UPPER NAVBAR */}
        
       <div className="flex justify-center lg:justify-between px-2 lg:px-16 bg-white text-black py-2 md:py-4 items-center w-full border-b-2 ">
        <div>
              <h1 className="text-base md:text-lg">OUR PHONE NUMBER : 01956230265</h1>
        </div>

        <div className="flex justify-end gap-5 items-center">
          
        {
                       user? <div className=" items-center justify-center gap-2 hidden lg:flex">
                        <div className="dropdown block dropdown-end">
                               <div className="w-10  rounded-full dropdown dropdown-end">
                               <label tabIndex={0} className="btn w-14 bg-transparent shadow-none hover:bg-transparent border-none  text-black p-1">
                               {/* <LuMenuSquare className="md:w-8 w-6 h-6 md:h-7"/> */}
                              <Link href="/user"> <img className="w-10 rounded-full" src={user?.photoURL || "https://i.ibb.co/8xzVgxd/pngtree-user-icon-png-image-1796659.jpg" } /> </Link>
                       </label> 
                               </div>
                      
                           </div>
                    
                           
                           </div>  
                           :
                           <div className="lg:flex justify-end hidden">
                            {
                              user ? 
                          
                           <Link href='/user'>
                               {/* <button className="btn btn-sm bg-green-500 hover:bg-blue-500 text-white mr-2  btn-ghost">Login</button> */}
                               <h1 className="flex gap-1 items-center uppercase"> <img className="w-6 rounded-full" src={ "https://i.ibb.co/8xzVgxd/pngtree-user-icon-png-image-1796659.jpg" } />  My Account</h1>
                           </Link>
                           :
                           <Link href='/login'>
                               {/* <button className="btn btn-sm bg-green-500 hover:bg-blue-500 text-white mr-2  btn-ghost">Login</button> */}
                               <h1 className="flex gap-1 items-center uppercase"> <img className="w-6 rounded-full" src={ "https://i.ibb.co/8xzVgxd/pngtree-user-icon-png-image-1796659.jpg" } />  My Account</h1>
                           </Link>
                            } 
                       </div>
                   }

{ user ? 
                  <Link href='/wishlist'> <h1 className="indicator hidden lg:flex"><span className="indicator-item badge mt-1 w-6 text-lg  bg-black text-white">{message.length}</span><CiHeart className="h-8 w-8"/></h1></Link>
                  : 
                  <Link href='/wishlist'> <h1 className="indicator hidden lg:flex"><span className="indicator-item badge  mt-1 w-6 text-lg  bg-black text-white">0</span><CiHeart className="h-8 w-8"/></h1></Link>
                }

                { user ?
                  <Link href='/cart'> <h1 className="indicator hidden lg:flex"><span className="indicator-item badge mt-1 w-6 text-lg  bg-black text-white">{massage.length}</span><IoCartOutline className="h-8 w-8"/></h1></Link>
                  : 
                  <Link href='/cart'> <h1 className="indicator hidden lg:flex"><span className="indicator-item badge mt-1 w-6 text-lg  bg-black text-white">0</span><IoCartOutline className="h-8 w-8"/></h1></Link>
                }



        </div>

       </div>
       
       {/* Some placeholder content to create scroll effect */}
      

       {/* LOWER NAVBAR */}
       <div className="sticky top-0 z-50 shadow-sm backdrop-blur-xl">
       <div  className="navbar shadow-sm bg-slate-50 px-1 md:px-2  ">
               <div className="w-[50%] ">
                  
<div className="flex justify-start gap-1 md:gap-5">
<div className="drawer  lg:hidden justify-start p-0">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn p-0 bg-transparent border-none shadow-none text-slate-50 hover:bg-transparent text-2xl">
    
            <GiHamburgerMenu onClick={handleToggle} className='md:w-10 w-7 h-7 md:h-10 text-black mx-1' /> 
             
             
    </label>
  </div>
  <div className="drawer-side z-50  overflow-y-scroll">
  <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className=" menu bg-[#ffffff] border-2 border-sky-200 text-base-content min-h-[150vh] w-80 pb-10 pt-2 px-5 z-50 space-y-5">
      {/* Sidebar content here */}
      {/* <h1 htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay bg-black text-white pl-3 py-1 rounded-lg text-xl w-9">X</h1> */}
      <li className="flex flex-row "><label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay  py-1 pl-[11px] w-9  rounded-full bg-[#08b0f8] hover:bg-[#0838f8] text-white text-xl font-bold">X</label></li>
      <div className="flex items-center p-1 mb-10 rounded-md bg-slate-300">
      <input
                type='text'
                name='search'
                
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search Here'
                className='w-full px-3 py-2  rounded-md  focus:outline-none  text-gray-900'
                
              />

                <IoIosSearch className="h-8 w-8 " />
          </div>

          <ul className="menu lg:menu-horizontal bg-base-100 rounded-lg lg:mb-64">

          <li>
    <details >
      <summary className="text-lg font-bold border-2 hover:bg-sky-200 ">Category</summary>
      <ul className="p-0 m-0">
        
        </ul>

        </details>
        </li>

          </ul>





      <li  className="mr-3  rounded-md hover:scale-105 border-2 hover:bg-sky-200 transition duration-300 bg-white text-center text-xl font-medium "><Link href="/shop" >Shop</Link></li>
                       <li  className="mr-3 border-2 hover:bg-sky-200 rounded-md hover:scale-105 transition duration-300 bg-white text-center text-xl font-medium"><Link href="/blog" >Blog</Link></li>


                      <li  className="mr-3 border-2 hover:bg-sky-200  rounded-md hover:scale-105 transition duration-300 bg-white text-center text-xl font-medium"><Link href="/contact" className="text-center">Contact Us</Link></li>
    </ul>
  </div>
</div>


                   <Link href='/' className="btn hover:bg-transparent border-none bg-transparent shadow-none text-black p-0 font-bold normal-case text-xl md:text-2xl lg:text-5xl" >
                      
                      <Image className="w-32 h-10 ml-0 lg:ml-10" src={logo} alt="logo"></Image>
                      </Link>
                 </div>   
               </div>


               <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="navbar-center hidden lg:flex">
                   <ul className="menu-horizontal px-1 text-lg font-normal flex gap-10">
                   {navLinks}
                   </ul>
               </div>



               <div className="navbar-end ">
               
               
                <div className="flex w-full lg:w-[70%] items-center justify-center gap-5 ">
                <div className="flex w-full items-center  rounded-md shadow-lg border-sky-400 border-2">
                
      <input
                type='text'
                
                placeholder='Search Here . . . '
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='w-full px-3 py-2  rounded-md  focus:outline-none  text-gray-900'
                
              />
<IoIosSearch className="h-10 w-10 text-white bg-sky-400 " />
               
          </div>
                 
                </div>


               </div>
           </div>
           </div>
            
       </>
    );
};

export default Navbar;