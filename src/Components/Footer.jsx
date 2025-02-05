import React from 'react';
import logo from '../../images/Screenshot 2024-09-10 194509.png'
import logo1 from '../../images/android-chrome-192x192.png'
import logo2 from '../../images/Scr.png'
import Image from 'next/image';
import Link from 'next/link';
import { MdAddCall } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";

const Footer = () => {

  const Smartphone = 'Smartphone';
  const Smartwatch = 'Smartwatch';
  const Earbuds = 'Earbuds';
  const Headphones = 'Headphones';
  

    return (
        <div className=' bg-[#0b0719] px-5'>
          <footer className="w-full justify-between mx-auto lg:grid-flow-col grid-flow-row footer bg-[#0c0a1b]  text-white px-5 md:px-10 py-10">
  
  <nav className='space-y-3'>
    <h6 className="footer-title text-xl mb-3 text-[#5e8cf8] opacity-100">Follow Us:</h6>
    <Image className='w-full h-12' src={logo} alt='photo'></Image> 
  </nav>
  <nav className='space-y-3'>
    <h6 className="footer-title text-xl mb-3 text-[#5e8cf8] opacity-100">We Accept:</h6>
    <Image className='w-full h-12' src={logo2} alt='photo'></Image>
  </nav>
  
  <form className='hidden md:block'>
    <h6 className="footer-title text-xl mb-3 text-[#5e8cf8] opacity-100">Newsletter</h6>
   
    <fieldset className="form-control md:w-80 ">
    
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input  join-item bg-transparent btn-outline border-[#eb966e] border-2" />
        <button className="btn bg-[#eb966e] border-[#eb966e] join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
           <footer className="w-full px-5 md:px-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 grid  bg-[#0c0a1b]  text-white py-10 border-t-[.5px] border-t-gray-600">
  
  <nav className='space-y-2'>
  <Image className='w-12 h-12' src={logo1} alt='photo'></Image>
  <h1 className='text-3xl font-semibold'>Electro</h1>
  <p>Electro is an e-commerce website offering a wide range of high-quality electronic products. Experience seamless shopping with a modern interface and reliable service.</p>
  </nav>                                                                                        


  <nav className='space-y-3 flex flex-col pl-0 md:pl-20'>
    <h6 className="footer-title text-xl mb-3 text-[#5e8cf8] opacity-100">OUR CATRGORIES</h6>
    <Link href={`/product/${Smartphone}`}><h2 className="link link-hover text-base font-semibold">Phone</h2></Link>
    <Link href={`/product/${Smartwatch}`}><h2 className="link link-hover text-base font-semibold">Smart Watch</h2></Link>
    <Link href={`/product/${Headphones}`}><h2 className="link link-hover text-base font-semibold">HeadPhone</h2></Link>
    <Link href={`/product/${Earbuds}`}><h2 className="link link-hover text-base font-semibold">EarBuds</h2></Link>
    
  </nav>
  

  <nav className='space-y-3 flex flex-col pl-0 md:pl-20'>
    <h6 className="footer-title text-xl mb-3 text-[#5e8cf8] opacity-100">MY ACCOUNT</h6>
    <Link href={'/login'}><h2 className="link link-hover text-base font-semibold">Login</h2></Link>
    <Link href={'/signup'}><h2 className="link link-hover text-base font-semibold">Register</h2></Link>
    <Link href={'/mycart'}><h2 className="link link-hover text-base font-semibold">My Cart</h2></Link>

    <a className="link link-hover text-base font-semibold">Checkout</a>
  </nav>

  <nav className='space-y-3'>
    <h6 className="footer-title text-xl mb-3 text-[#5e8cf8] opacity-100">CONTACT US</h6>
    
     <div className='space-y-3'>
      <p className='flex items-center'><span className='mr-2'><MdAddCall /></span>01956230265</p>
      <p className='flex items-center'><span className='mr-2'><MdAddCall /></span>01572908354</p>
          <p className='font-medium text-lg text-[#ffffff] flex items-center'><span className='mr-2'><MdMarkEmailRead /></span> <span className='mr-2 text-blue-500'>asfaqurrahman055@gmail.com</span></p>
     </div>
    
  </nav>

</footer> 
<footer className="w-full flex justify-center mx-auto bg-[#0c0a1b]  text-white py-5 px-5 border-t-[.5px] border-t-gray-600">
  
  
  <p className='text-xl mb-0 '>Copyright © {new Date().getFullYear()} - by <strong className='text-[#5e8cf8]'>electro</strong> Ltd. All right reserved</p>
   
 
  
</footer>


        </div>
    );
};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
export default Footer;