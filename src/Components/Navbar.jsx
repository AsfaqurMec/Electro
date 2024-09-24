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
import { useEffect, useState } from "react";
import logo from '../../images/Screenshot_2024-09-09_192325-removebg-preview.png'
import { useUser } from "../../context/UserContext";
import { useSession } from "next-auth/react";
import axios from "axios";


const Navbar = () => {
  const  session  = useSession();
  console.log('session : ',session?.data?.user);
  
  const { user } = useUser(); // Access user data from context
console.log('USER : ',user);

  const pathname = usePathname();
  const [search, setSearch] = useState('')
  const [items, setItems] = useState([]);

  const [toggle, setToggle] = useState(false);

   const handleToggle = () => {
          setToggle(true);
   }

   const handle = () => {
    setItems([]);
    setSearch('');
  }

  useEffect(() => {
    if (search) {
      
    
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/search/api?search=${search}`);
        setItems(data);
        console.log('dataaaas :',items.service);
        
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
      
    };
    fetchData();
  } else {
    setItems([]);
  }

  
  
  }, [items.service, search]);

   const navLinks = <>
       
   <li  className="mr-3  group rounded-md hover:scale-125 transition duration-300 hover-underline shop"><Link href="/shop" >Shop</Link></li>
   <li  className="mr-3  rounded-md hover:scale-125 transition duration-300 hover-underline"><Link href="/blog" >Blog</Link></li>


  <li  className="mr-3  rounded-md hover:scale-125 transition duration-300 hover-underline"><Link href="/contact" >Contact Us</Link></li>

   


</>

    return (
        <>
      

       {/* upper NAVBAR */}
       <div className="sticky top-0 z-50 shadow-sm backdrop-blur-xl ">
       <div  className="navbar shadow-sm bg-violet-200 px-1 md:px-2 flex w-full">
               <div className="w-[40%] lg:w-[20%] ">

<div className="flex justify-start gap-1 md:gap-5">
<div className="drawer  lg:hidden justify-start p-0">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn p-0 bg-transparent border-none shadow-none text-slate-50 hover:bg-transparent text-2xl">

            <GiHamburgerMenu onClick={handleToggle} className='md:w-8 w-5 h-5 md:h-8 text-black mx-1' /> 


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

                      <Image className="w-24 md:w-32 h-8 md:h-10 ml-0 lg:ml-10" src={logo} alt="logo"></Image>
                      </Link>
                 </div>   

               </div>


               <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="w-[60%] lg:w-[50%]">
                   <ul className="menu-horizontal px-1 text-sm font-normal w-full">
                   <div className="flex w-full  items-center justify-center gap-5 ">
                <div className="flex w-full items-center  rounded-sm shadow-lg ">
                
      <input
                type='text'
                
                placeholder='Search Here . . . '
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='w-full h-8  md:h-10 px-3 py-0 md:py-1  rounded-l-sm  focus:outline-none  text-gray-900'
                
              />
<IoIosSearch className="h-8 w-8 md:h-10 md:w-10 text-white rounded-r-sm bg-sky-400 " />
               
          </div>
                 
                </div>
                   </ul>
               </div>



               <div className="lg:flex hidden w-[30%] ">
               
               <div className="w-full flex justify-end gap-5 items-center pr-14">
          
        
                           <div className="lg:flex justify-end hidden">
                            {
                              user || session?.data?.user? 
                          
                           <Link href='/account'>
                               {/* <button className="text-white text-white-sm bg-green-500 hover:bg-blue-500 text-white mr-2  text-white-ghost">Login</button> */}
                               <h1 className="flex gap-1 items-center uppercase font-medium"> <img className="w-6 rounded-full" src={ "https://i.ibb.co/8xzVgxd/pngtree-user-icon-png-image-1796659.jpg" } />  My Account</h1>
                           </Link>
                           :
                           <Link href='/login'>
                               {/* <button className="text-white text-white-sm bg-green-500 hover:bg-blue-500 text-white mr-2  text-white-ghost">Login</button> */}
                               <h1 className="flex gap-1 items-center uppercase font-medium"> <img className="w-6 rounded-full" src={ "https://i.ibb.co/8xzVgxd/pngtree-user-icon-png-image-1796659.jpg" } />  My Account</h1>
                           </Link>
                            } 
                       </div>
                 

{ user || session?.data?.user? 
                  <Link href='/wishlist'> <h1 className="indicator hidden lg:flex"><span className="indicator-item badge mt-1 w-6 text-lg  bg-black text-white">{0}</span><CiHeart className="h-8 w-8"/></h1></Link>
                  : 
                  <Link href='/wishlist'> <h1 className="indicator hidden lg:flex"><span className="indicator-item badge  mt-1 w-6 text-lg  bg-black text-white">0</span><CiHeart className="h-8 w-8"/></h1></Link>
                }

                { user || session?.data?.user?
                  <Link href='/cart'> <h1 className="indicator hidden lg:flex"><span className="indicator-item badge mt-1 w-6 text-lg  bg-black text-white">{0}</span><IoCartOutline className="h-8 w-8"/></h1></Link>
                  : 
                  <Link href='/cart'> <h1 className="indicator hidden lg:flex"><span className="indicator-item badge mt-1 w-6 text-lg  bg-black text-white">0</span><IoCartOutline className="h-8 w-8"/></h1></Link>
                }



        </div>
               

               </div>
           </div>
           </div>


            {/* lower NAVBAR */}
        
       <div className="hidden lg:flex justify-center lg:justify-between px-2 lg:px-16 bg-black  py-2 md:py-1 items-center w-full border-b-2 ">
        <div className="flex gap-5 items-center">

        <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="text-white m-1 pr-3 border-r-2 border-r-white"><GiHamburgerMenu className='w-5 h-5' /> </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-sm  w-52  p-2 shadow z-50">
    <li className="text-base font-medium hover:text-orange-500"><a>Phones</a></li>
    <li className="text-base font-medium hover:text-orange-500"><a>Earbuds</a></li>
    <li className="text-base font-medium hover:text-orange-500"><a>SmartWatch</a></li>
    <li className="text-base font-medium hover:text-orange-500"><a>HeadPhone</a></li>
    <li className="text-base font-medium hover:text-orange-500"><a>Speaker</a></li>
    <li className="text-base font-medium hover:text-orange-500"><a>Tab</a></li>
  </ul>
</div>

<div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="text-white m-1">Phones</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-sm  w-52 p-2 shadow z-50">
  <li className="text-base font-medium hover:text-orange-500"><a>Samsung</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>IPhone</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Xiomi</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Google</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Vivo</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>OnePlus</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Realme</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Honor</a></li>
  </ul>
</div>

<div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="text-white m-1">EarBuds</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-sm  w-52 p-2 shadow z-50">
  <li className="text-base font-medium hover:text-orange-500"><a>Samsung</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>IPhone</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Xiomi</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Google</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Vivo</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>OnePlus</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Realme</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Honor</a></li>
  </ul>
</div>

<div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="text-white m-1">SmartWatch</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-sm  w-52 p-2 shadow z-50">
  <li className="text-base font-medium hover:text-orange-500"><a>Samsung</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>IPhone</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Xiomi</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Google</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Vivo</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>OnePlus</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Realme</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Honor</a></li>
  </ul>
</div>

<div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="text-white m-1">HeadPhones</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-sm  w-52 p-2 shadow z-50">
  <li className="text-base font-medium hover:text-orange-500"><a>Samsung</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>IPhone</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Xiomi</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Google</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Vivo</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>OnePlus</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Realme</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Honor</a></li>
  </ul>
</div>

<div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="text-white m-1">Accessories</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-sm  w-52 p-2 shadow z-50">
  <li className="text-base font-medium hover:text-orange-500"><a>Screen Protector</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Charger & Adapter</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Router</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Flash Drive</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Phone Cases</a></li>
  <li className="text-base font-medium hover:text-orange-500"><a>Power Bank</a></li>
  
  </ul>
</div>

<div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="text-white font-medium m-1 bg-gradient-to-r from-blue-600 via-violet-600 to-orange-600 bg-clip-text text-transparent animate-bounce mt-2">Online Exclusive</div>
  
</div>
        </div>
        <div>
              <h1 className="text-base text-white md:text-lg tracking-wider">01956230265</h1>
        </div>

      

       </div> 
       {
            items?.service?.length>0 ?
           <div className="flex justify-center w-full ">
            
            
            <div className="absolute mt-2 p-10 flex flex-col items-start justify-start gap-5 max-h-[600px] overflow-y-scroll z-50 bg-white md:w-[40%] rounded-md border-2 mx-auto">
              <h1>Search Result for <span className="text-2xl text-cyan-500 font-medium">{search}</span></h1>
              { items?.service?.map(latest => 
             <Link href={`/services/${latest._id}`} onClick={handle} key={latest._id}><div  className=" flex items-center justify-center w-full">
              <figure className='relative'>
                <img className='transition-transform duration-300 ease-in-out transform hover:scale-125 h-24'
                  src={latest.image1}
                  alt="Shoes" />
               
              </figure>
              <div className="card-body">
                <h2 className="card-title">{latest.title}</h2>
                <p>${latest.price}</p>
                
              </div>
            </div> </Link> 
          )
          } 
            </div>  
         </div>
          : ""
        } 
       </>
    );
};

export default Navbar;