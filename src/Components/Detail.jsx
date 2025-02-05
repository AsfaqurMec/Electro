/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { getServices } from '../../services/getItems';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useUser } from '../../context/UserContext';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
const Detail = ({ latest, paramsId }) => {
  const [selectedStorage, setSelectedStorage] = useState('');
  const [selectedRam, setSelectedRam] = useState('');

  const handleStorageChange = (e) => {
    setSelectedStorage(e.target.value);
  };

  const handleRamChange = (e) => {
    setSelectedRam(e.target.value);
  };
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(false);
  const handleToggles = () => setToggle(true);
  // console.log("dataaa",latest);

  const [lat, setLat] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      //const { services } = await getServices();
      const { data } = await axios.get(
        ` https://electro-brown.vercel.app/services/api/get-all`
      )
      setLat(data.services);
      setLoading(false);
    }
    getData()
  }, [])





  const { title, image1, image2, price, type, category } = latest;


  const related = lat.filter(item => item.category == category);

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const [selectedColor, setSelectedColor] = useState("");

  const handleChange = (color) => {
    setSelectedColor(color);
  };

  const handleStorage = (item) => {
    setStorage(item);
  //  console.log(item);

  };
  const  session  = useSession();
  const { user } = useUser(); 
  const router = useRouter();

  const userEmail = session?.data?.user?.email || user?.email;
console.log(userEmail);


  const handleCart = () => {
    if (!session) {
      // If no session, redirect to sign-in page or show a message
      alert("You must be logged in to add items to the cart!");
       // This redirects to the sign-in page
      return;
    }
    // Prepare the info object for the API call
    const info = {
      title: title,
      image: image1,
      price: price,
      email: userEmail,
      quantity: quantity,
      ram: selectedRam,
      rom: selectedStorage,
      color: selectedColor,
      category: category,
    };
  
    //  try {
    //   // Call the API to add the item to the cart
    //   const resp = fetch(' https://electro-brown.vercel.app/cart/api', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(info),
    //   });
  
    //   // Check the API response status
    //   if (resp.status == 200 ){
    //         alert('added to cart')   
    //   }
    // } catch (error) {
    //   // Log any errors that occur during the fetch
    //   console.error("Error adding to cart:", error);
    //   toast.error("Failed to add to cart. Please try again.");
    //  }
  };
  





  // const [loadin, setLoadin] = useState(false);

  // const handleBuyClick = async () => {
  //   setLoadin(true);

  //   try {
  //     const response = await fetch('/email/api', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         to: "hamimhamim044@gmail.com",
  //         productDetails: {
  //           name: title,
  //           price: price,
  //           category: category,
  //           quantity: quantity,
  //         },
  //       }),
  //     });

  //     const data = await response.json();

  //     if (data.success) {
  //       alert('Product details sent successfully!');
  //     } else {
  //       alert('Failed to send product details.');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert('An error occurred.');
  //   } finally {
  //     setLoadin(false);
  //   }
  // };

  const [recipientEmail, setRecipientEmail] = useState('');
  const [subject, setSubject] = useState('Product Purchase');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');


  const sendEmail = async (e) => {
    setRecipientEmail(user?.email || session?.data?.user?.email)
    setStatus('Sending...');

    try {
      const res = await fetch('/email/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipientEmail,
          subject,
          title,
          quantity,
          price,
          category,
          user,
          session,
        }),

      });

      if (res.ok) {
        alert('Product details sent successfully!');
      } else {
        alert('Failed to send product details.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred.');
    }
  };


  return (
    <div className='bg-black'>
      <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start w-[95%] gap-10 lg:gap-0 mx-auto my-10 py-10 md:pl-5 bg-[#f3f2f28c]">

        <div data-aos="flip-right" data-aos-duration="2000" className="w-full md:w-1/2 flex justify-center">



          <div className="carousel w-[95%] md:w-[90%] flex">
            <div className="flex w-[25%] md:w-[15%] flex-col gap-2 py-1">
              <a className=""><img onClick={handleToggle}
                src={image1}
                className="h-20 w-20 rounded-md shadow-lg border-2" /></a>
              {
                image2 ? <a className=""><img onClick={handleToggles}
                  src={image2}
                  className="h-20 w-20 rounded-md shadow-lg border-2" /></a>
                  : ""
              }

            </div>
            <div className='w-[80%] rounded-md shadow-xl border-2'>
              {
                !toggle ?
                  <div id="item1" className="carousel-item w-full">
                    <img
                      src={image1}
                      className="w-full " />
                  </div>
                  :
                  <div id="item2" className="carousel-item w-full">
                    <img
                      src={image2}
                      className="w-full" />
                  </div>
              }
            </div>


          </div>



        </div>
        <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000" className="flex flex-col w-full md:w-1/2 gap-5 pl-5 md:pl-0">
          <h2 className="text-4xl font-bold primary-font">{title}</h2>
          <h3 className='text-4xl ml-1 font-medium'><span className="font-normal ml-1"> ৳{price}</span></h3>

          <section>
            <div className="flex space-x-4 mb-5">
              <h1 className='text-lg font-semibold'>Color :</h1>
              <div
                className={`w-8 h-8 rounded-full  transition-transform`}
                style={{ backgroundColor: selectedColor }}
              ></div>
            </div>
            <div className="flex space-x-4">
              {latest.color_options.map((color, index) => (
                <label key={index} className="cursor-pointer">
                  <input
                    type="radio"
                    name="color"
                    value={color}
                    onChange={() => handleChange(color)}
                    className="hidden"
                  />
                  <div
                    className={`w-10 h-10 rounded-full border-4 transition-transform ${selectedColor === color ? "scale-105 border-gray-700" : "border-white"
                      }`}
                    style={{ backgroundColor: color }}
                  ></div>
                </label>
              ))}

            </div>
          </section>


          {
            latest?.storage ?


              <div className='flex flex-col md:flex-row gap-3'>
                {/* <label className="form-control w-full md:w-1/2">
  <div className="label">
    <span className="label-text text-lg font-medium">Select Storage :</span>
   
  </div>
  <select className="select select-bordered text-lg font-medium shadow-lg focus:outline-dashed">



    <option disabled selected>Pick one</option>
    {
        latest.service?.storage?.map(item => <option  key={item}>{item}</option>)
    }
   
  </select>
  
</label>

<label className="form-control w-full md:w-1/2">
  <div className="label">
    <span className="label-text text-lg font-medium">Select RAM :</span>
   
  </div>
  <select className="select select-bordered text-lg font-medium shadow-lg focus:outline-dashed">



    <option disabled selected>Pick one</option>
    {
        latest.service?.ram?.map(item => <option key={item}>{item}</option>)
    }
   
  </select>
  
</label> */}

                {/* Storage Select */}
                <label className="form-control w-full md:w-1/2">
                  <div className="label">
                    <span className="label-text text-lg font-medium">Select Storage :</span>
                  </div>
                  <select
                    className="select select-bordered text-lg font-medium shadow-lg focus:outline-dashed"
                    value={selectedStorage}
                    onChange={handleStorageChange}
                  >
                    <option disabled value="">
                      Pick one
                    </option>
                    {latest?.storage?.map(item => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                {/* RAM Select */}
                <label className="form-control w-full md:w-1/2">
                  <div className="label">
                    <span className="label-text text-lg font-medium">Select RAM :</span>
                  </div>
                  <select
                    className="select select-bordered text-lg font-medium shadow-lg focus:outline-dashed"
                    value={selectedRam}
                    onChange={handleRamChange}
                  >
                    <option disabled value="">
                      Pick one
                    </option>
                    {latest?.ram?.map(item => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>


              </div>
              : ""}


          <div className="flex justify-between items-center  w-36 border-2 ml-5 lg:ml-0 text-2xl font-semibold">

            <button className=" w-9 h-full text-3xl rounded-sm text-black flex items-center justify-center bg-gray-200" onClick={decreaseQuantity}>-</button>
            <span className="mx-2 text-3xl">{quantity}</span>
            <button className="w-9 h-full text-3xl rounded-sm text-black flex items-center justify-center bg-gray-200" onClick={increaseQuantity}>+</button>
          </div>

          <div className="flex flex-row justify-between">

            <h3 className='text-3xl font-medium'>Price : <span className="text-sky-600 ml-1"> ৳{price}</span></h3>

          </div>
          <div className="flex flex-col mx-5 lg:mx-0 gap-5">
            <div><button onClick={handleCart} className="btn w-full bg-emerald-600 hover:bg-green-800 text-white text-xl">Add to Cart</button></div>
            <div><button onClick={sendEmail} className="btn text-white text-xl w-full bg-cyan-400 hover:bg-cyan-700">Buy Now</button></div>
          </div>
          {/* onClick={handleBuyClick} disabled={loading} */}
          <div className="ml-2 lg:ml-0 space-y-5 mt-5">

            <h1 className="text-xl font-semibold flex gap-5">Share : <div className="flex  gap-4 ">

              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="fill-current text-sky-500 ">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="fill-current text-red-600">
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="fill-current text-blue-800">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div></h1>
          </div>

        </div>

      </div>

      {/* product details */}
      <div className='w-full lg:w-2/3 mx-0 md:mx-5 lg:mx-auto my-5'>
        <div role="tablist" className="tabs tabs-lifted ">

          <input type="radio" name="my_tabs_2" role="tab" className="tab text-2xl font-medium" aria-label="Specification" defaultChecked />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-lg p-6">

            {
              latest.service.processor ?
                <h1 className='text-2xl font-semibold flex justify-between items-center pb-2 border-b-2 pt-2'> <span>Processor :</span> <span className="text-xl text-gray-500">{latest.service.processor}</span></h1>
                : ""
            }
            {
              latest.service.display || latest.service.screen_size ?
                <h1 className='text-2xl font-semibold flex justify-between items-center pb-2 border-b-2 pt-2'> <span>Display :  </span> <span className="text-xl text-gray-500">{latest.service.screen_size || latest.service.display}</span></h1>
                : ""}
            {
              latest.service.camera ?
                <h1 className='text-2xl font-semibold flex justify-between items-center pb-2 border-b-2 pt-2'> <span>Camera :   </span> <span className="text-xl text-gray-500">{latest.service.camera}</span></h1>
                : ""}
            <h1 className='text-2xl font-semibold flex justify-between items-center pb-2 border-b-2 pt-2'> <span>Battery :  </span> <span className="text-xl text-gray-500">{latest.service.battery || latest.service.battery_life}</span></h1>
            {
              latest.service.features ?
                <h1 className='text-2xl font-semibold flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center pb-2 border-b-2 pt-2'> <span>Features :  </span> <span className="text-xl text-gray-500">{latest.service.features}</span></h1>
                : ""}
            <h1 className='text-2xl font-semibold flex justify-between items-center pb-2 border-b-2 pt-2'> <span>Type :  </span> <span className="text-xl text-gray-500">{latest.service.type}</span></h1>
            <h1 className="text-xl font-semibold pt-3">Category : <span className="text-xl text-gray-500">{category}</span></h1>
            <h1 className="text-xl font-semibold mt-2">SKU : <span className="text-xl text-gray-500">N/A</span></h1>


          </div>



          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab text-2xl font-medium"
            aria-label="Reviews"
          />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-lg p-6">
            No Review
          </div>


        </div>
      </div>

      <h1 className='text-5xl font-medium text-center my-10'>Related Products</h1>
      <div className='py-10 px-2 md:px-5'>
        <Swiper autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          slidesPerView: 2
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
              slidesPerView: 4,  // 3 slides for devices ≥ 1024px
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]} className=" py-10 px-5">
          {
            loading ? <div >
              <h1 class="loader w-28 h-28 mx-auto my-10"></h1>
            </div>

              :
              <>
                {related?.map(latest => (
                  <SwiperSlide key={latest._id} >
                    <Link href={`/services/${latest._id}`}>
                      <div

                        className="relative card border-2 shadow-2xl rounded-md group overflow-hidden"
                      >
                        <div className="relative w-full h-72 md:h-80 ">
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
                          <h2 className="card-title text-base">{latest.title}</h2>
                          <p>৳{latest.price}</p>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </>

          }

        </Swiper>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Detail;