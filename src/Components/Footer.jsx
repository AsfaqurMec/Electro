import React from 'react';
import logo from '../../images/Screenshot 2024-09-10 194509.png'
import logo1 from '../../images/Screenshot 2024-09-10 194458.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className=' bg-[#0b0719] px-5'>
          <footer className="w-full justify-between mx-auto lg:grid-flow-col grid-flow-row footer bg-[#0c0a1b]  text-white p-10">
  
  <nav className='space-y-3'>
    <h6 className="footer-title text-xl mb-3 text-[#eb966e] opacity-100">Follow Us:</h6>
    <Image className='w-full h-12' src={logo} alt='photo'></Image> 
  </nav>
  <nav className='space-y-3'>
    <h6 className="footer-title text-xl mb-3 text-[#eb966e] opacity-100">We Accept:</h6>
    <Image className='w-full h-12' src={logo1} alt='photo'></Image>
  </nav>
  
  <form className='block'>
    <h6 className="footer-title text-xl mb-3 text-[#eb966e] opacity-100">Newsletter</h6>
   
    <fieldset className="form-control w-64 md:w-80 ">
    
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
    <h6 className="footer-title text-xl mb-3 text-[#eb966e] opacity-100">CUSTOMER CARE</h6>
    <a className="link link-hover text-base font-semibold">FAQs</a>
    <a className="link link-hover text-base font-semibold">Terms of Service</a>
    <a className="link link-hover text-base font-semibold">Privacy Policy</a>
    <a className="link link-hover text-base font-semibold">Contact Us</a>
    <a className="link link-hover text-base font-semibold">Gift Card</a>
  </nav>                                                                                        


  <nav className='space-y-3'>
    <h6 className="footer-title text-xl mb-3 text-[#eb966e] opacity-100">HELP & SUPPORT</h6>
    <a className="link link-hover text-base font-semibold">Shipping Info</a>
    <a className="link link-hover text-base font-semibold">Returns</a>
    <a className="link link-hover text-base font-semibold">How To Order</a>
    <a className="link link-hover text-base font-semibold">How To Track</a>
    <a className="link link-hover text-base font-semibold">Size Guide</a>
  </nav>
  

  <nav className='space-y-3'>
    <h6 className="footer-title text-xl mb-3 text-[#eb966e] opacity-100">COMPANY INFO</h6>
    <a className="link link-hover text-base font-semibold">About Us</a>
    <a className="link link-hover text-base font-semibold">Our Blog</a>
    <a className="link link-hover text-base font-semibold">Careers</a>
    <a className="link link-hover text-base font-semibold">Store Locations</a>
    <a className="link link-hover text-base font-semibold">Testimonial</a>
  </nav>
  <nav className='space-y-3'>
    <h6 className="footer-title text-xl mb-3 text-[#eb966e] opacity-100">Our Shop</h6>
    <a className="link link-hover text-base font-semibold">Gaming Gear</a>
    <a className="link link-hover text-base font-semibold">Electronics</a>
    <a className="link link-hover text-base font-semibold">Home Appliance</a>
    <a className="link link-hover text-base font-semibold">Audio</a>
    <a className="link link-hover text-base font-semibold">Smartphone</a>
  </nav>
</footer> 
<footer className="w-full justify-between mx-auto lg:grid-flow-col grid-flow-row footer bg-[#0c0a1b]  text-white py-10 px-5 border-t-[.5px] border-t-gray-600">
  
  <nav className='space-y-3'>
  <p className='text-xl mb-0'>Copyright © {new Date().getFullYear()} - by <strong className='text-[#eb966e]'>electro</strong> Ltd</p>
    <p>All right reserved</p>
  </nav>
  <nav className='space-y-3'>
    <h6 className="footer-title font-medium text-xl mb-3 text-[#d9d8d8] opacity-100">Store Location : <br />
    15 West 21th Street, Miami FL, USA</h6>
    
  </nav>
  
  <h6 className="footer-title font-medium  text-xl mb-3 text-[#d9d8d8] opacity-100">  Call Us Now +123-456-789 <br />
Email: info@example.com</h6>
  
</footer>

        </div>
    );
};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
export default Footer;