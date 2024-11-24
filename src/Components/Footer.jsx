import React from 'react';
import logo from '../../images/Screenshot 2024-09-10 194509.png'
import logo1 from '../../images/Screenshot 2024-09-10 194458.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className=' bg-[#0b0719] px-5'>
          <footer className="w-full justify-between mx-auto lg:grid-flow-col grid-flow-row footer bg-[#0c0a1b]  text-white px-5 md:px-10 py-10">
  
  <nav className='space-y-3'>
    <h6 className="footer-title text-xl mb-3 text-[#5e8cf8] opacity-100">Follow Us:</h6>
    <Image className='w-full h-12' src={logo} alt='photo'></Image> 
  </nav>
  <nav className='space-y-3'>
    <h6 className="footer-title text-xl mb-3 text-[#5e8cf8] opacity-100">We Accept:</h6>
    <Image className='w-full h-12' src={logo1} alt='photo'></Image>
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
           <footer className="w-full mx-auto lg:grid-flow-col grid-flow-row footer bg-[#0c0a1b]  text-white p-10 border-t-[.5px] border-t-gray-600">
  
  <nav className='space-y-3'>
    <h6 className="footer-title text-xl mb-3 text-[#5e8cf8] opacity-100">CUSTOMER CARE</h6>
    <a className="link link-hover text-base font-semibold">FAQs</a>
    <a className="link link-hover text-base font-semibold">Terms of Service</a>
    <a className="link link-hover text-base font-semibold">Privacy Policy</a>
    <a className="link link-hover text-base font-semibold">Contact Us</a>
    <a className="link link-hover text-base font-semibold">Gift Card</a>
  </nav>                                                                                        


  <nav className='space-y-3'>
    <h6 className="footer-title text-xl mb-3 text-[#5e8cf8] opacity-100">HELP & SUPPORT</h6>
    <a className="link link-hover text-base font-semibold">Shipping Info</a>
    <a className="link link-hover text-base font-semibold">Returns</a>
    <a className="link link-hover text-base font-semibold">How To Order</a>
    <a className="link link-hover text-base font-semibold">How To Track</a>
    <a className="link link-hover text-base font-semibold">Size Guide</a>
  </nav>
  

  <nav className='space-y-3'>
    <h6 className="footer-title text-xl mb-3 text-[#5e8cf8] opacity-100">COMPANY INFO</h6>
    <a className="link link-hover text-base font-semibold">About Us</a>
    <a className="link link-hover text-base font-semibold">Our Blog</a>
    <a className="link link-hover text-base font-semibold">Careers</a>
    <a className="link link-hover text-base font-semibold">Store Locations</a>
    <a className="link link-hover text-base font-semibold">Testimonial</a>
  </nav>
  <nav className='space-y-3'>
    <h6 className="footer-title text-xl mb-3 text-[#5e8cf8] opacity-100">Our Shop</h6>
    <a className="link link-hover text-base font-semibold">Gaming Gear</a>
    <a className="link link-hover text-base font-semibold">Electronics</a>
    <a className="link link-hover text-base font-semibold">Home Appliance</a>
    <a className="link link-hover text-base font-semibold">Audio</a>
    <a className="link link-hover text-base font-semibold">Smartphone</a>
  </nav>

  <nav className='space-y-3'>
    <h6 className="footer-title text-xl mb-3 text-[#5e8cf8] opacity-100">MY ACCOUNT</h6>
    <a className="link link-hover text-base font-semibold">Login</a>
    <a className="link link-hover text-base font-semibold">Register</a>
    <a className="link link-hover text-base font-semibold">Wishlist</a>
    <a className="link link-hover text-base font-semibold">Track Your Orders</a>
    <a className="link link-hover text-base font-semibold">Checkout</a>
  </nav>

</footer> 
<footer className="w-full justify-between mx-auto lg:grid-flow-col grid-flow-row footer bg-[#0c0a1b]  text-white py-10 px-5 border-t-[.5px] border-t-gray-600">
  
  <nav className='space-y-1'>
  <p className='text-xl mb-0'>Copyright © {new Date().getFullYear()} - by <strong className='text-[#5e8cf8]'>electro</strong> Ltd</p>
    <p className='text-xl'>All right reserved</p>
  </nav>
  <nav className='space-y-1 mb-3'>
    <h6 className="footer-title font-medium text-xl  text-[#d9d8d8] opacity-100">Store Location :</h6>
   <p className='font-medium text-xl text-[#5e8cf8]'>Mymensingh, Bangladesh</p> 
    
  </nav>
  <nav className='space-y-1 mb-3'>
  <h6 className="footer-title font-medium  text-xl text-[#d9d8d8] opacity-100">  Call Us Now <h1 className='text-[#5e8cf8]'>+8801956230265</h1></h6>
<p className='font-medium text-xl text-[#5e8cf8]'>Email: asfaqurrahman055@gmail.com</p>
</nav>
</footer>


        </div>
    );
};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
export default Footer;