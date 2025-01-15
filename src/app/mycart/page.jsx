/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { MdDelete } from "react-icons/md";
import { useSession } from 'next-auth/react';
import React from 'react';
import { useUser } from '../../../context/UserContext';
import { useEffect, useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import toast from "react-hot-toast";
const page = () => {
  // let session;
  // setTimeout(() => {
  //    session  = useSession();
  // }, 1000);
  
    const  session  = useSession();
  
    
 // console.log('session : ',session?.data?.user);
//  let user;
//  setTimeout(() => {
//     user  = useUser();
//  }, 1000);
 const { user } = useUser(); // Access user data from context
//console.log('USER : ',user);

const [latest, setLatest] = useState([]);
     
   
useEffect(() => {
  const getData = async () => {
    const { data } = await axios.get(
      ` https://electro-brown.vercel.app/mycart/api?email=${session?.data?.user?.email || user?.email}`
    )
    
    setLatest(data.service)
   
  }
  getData();
  



}, [latest, session?.data?.user?.email, user?.email])



const [selectedUsers, setSelectedUsers] = useState([]);

  // Function to handle checkbox toggle
  const handleCheckboxChange = (checked, user) => {
    if (checked) {
      // Add user to array if checked
      setSelectedUsers([...selectedUsers, user]);
    } else {
      // Remove user from array if unchecked
      setSelectedUsers(selectedUsers.filter((u) => u.title !== user.title));
    }
  };
  const totalPrice = selectedUsers.reduce((total, item) => total + item.price*item.quantity, 0)
  // console.log(totalPrice);
  const totalQuantity = selectedUsers.reduce((total, item) => total + item.quantity, 0) 
  //console.log(totalQuantity);
  const total = totalPrice + totalQuantity*50;
  //console.log(total);
//console.log(latest);

const [recipientEmail, setRecipientEmail] = useState('');
const [subject, setSubject] = useState('Product Purchase');
const [message, setMessage] = useState('');
const [status, setStatus] = useState('');

const [isModalOpen, setIsModalOpen] = useState(false);

        const handleOpenModal = () => {

             if (selectedUsers.length == 0) {
              toast.error("Add Item please!");
              // This redirects to the sign-in page
             return;
             }
          


          setIsModalOpen(true);
        };



const handlePurchase = () => {



    // const swalWithBootstrapButtons = Swal.mixin({
    //     customClass: {
    //       confirmButton: "btn btn-success text-white font-semibold",
    //       cancelButton: "btn btn-error mr-5 text-white font-semibold"
    //     },
    //     buttonsStyling: false
    //   });
    //   swalWithBootstrapButtons.fire({
    //     title: "Are you ready to procced?",
    //     text: "You won't be able to revert this!",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonText: "Yes, Purchase!",
    //     cancelButtonText: "No, cancel!",
    //     reverseButtons: true
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //         //sendEmail();



    //       swalWithBootstrapButtons.fire({
    //         title: "Successfull!",
    //         text: "We will contact you, Soon.",
    //         // html: `<h3>Happy Purchase.</h3>`,
    //         icon: "success"
    //       });
    //     } else if (
    //       /* Read more about handling dismissals below */
    //       result.dismiss === Swal.DismissReason.cancel
    //     ) {
    //       swalWithBootstrapButtons.fire({
    //         title: "Cancelled",
    //         text: "Your imaginary file is safe :)",
    //         icon: "error"
    //       });
    //     }
    //   });
}


const sendEmail = async (e) => {
    setRecipientEmail(user?.email || session?.data?.user?.email)
 
  setStatus('Sending...');
  
  try {
    const res = await fetch('/purchase/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recipientEmail,
        subject,
        selectedUsers,
        user,
        e,
        session,
      }),
    
    });

    if (res.ok) {
      setSelectedUsers([]);
      handleDelete();
    } else {
      alert('Failed to send product details.');
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred.');
  }
};

const handleDelete = async () => {
    try {
      const response = await axios.delete('/delete/api', {
        data: { selectedUsers }, // Sending the product IDs in the request body
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error deleting products');
    }
  };

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
     
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []);


  const handleSubmit = async (event) => {
  // Function that logs the object containing the form data
    event.preventDefault();

 

const order = {
firstName: event.target.firstName.value,
lastName: event.target.lastName.value,
email: event.target.email.value,
phone: event.target.phone.value,
streetAddress: event.target.streetAddress.value,
apartment: event.target.apartment.value,
city: event.target.city.value,
zipCode: event.target.zipCode.value,
status : 'pending',
date : currentDate,
item : selectedUsers,
};
   
//console.log(order);

const resp = await fetch('/buy/api', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(order),


})

if (resp.status === 200) {
  //alert('added');
  toast.success("Product Buy Successfully");
  sendEmail(order);
} else {
  toast.error("Something went Wrong");
}


    event.target.firstName.value='';
    event.target.lastName.value='';
    event.target.email.value='';
    event.target.phone.value='';
    event.target.streetAddress.value='';
    event.target.apartment.value='';
    event.target.city.value='';
    event.target.zipCode.value='';
    setIsModalOpen(false);


  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  }


    return (
        <>
        <div className='bg-black text-center py-4  text-white'>
            <h1 className='text-4xl mb-2'>MY CART</h1>
            <h1 className='flex justify-center text-lg items-center gap-2'> Home / My Cart</h1>

         </div>
         {
            user || session ? 
            <h1 className='flex justify-start my-10 text-lg items-center gap-2 ml-3'>Total Item Selected ({totalQuantity})</h1>
            :
            <h1 className='flex justify-start my-10 text-lg items-center gap-2'>Total Item(0)</h1>
         }
         
        <div className="flex flex-col lg:flex-row gap-5">
        <div className="overflow-x-auto min-h-[46vh] w-full lg:w-2/3 bg-[#f6f5f5]">


<table className="table rounded-none bg-[#f6f5f5] w-full border-2">
      {/* head */}
      <thead className="border-b-2">
        <tr>
          <th className="px-[5px] md:px-3 text-stone-950 text-lg font-bold">Select</th>
          <th className="px-[5px] md:px-3 text-stone-950 text-lg font-bold">Product</th>
          <th className="px-[5px] md:px-3 text-stone-950 text-lg font-bold">Price</th>
        </tr>
      </thead>
      {user || session ? (
        <tbody>
          {latest.map((user) => (
            <tr key={user?.title} className="border-b-2 ">
              <td className="px-[5px] md:px-2 bg-slate-200 ">
                <div className="flex items-center justify-center h-full w-full">
                <input
                  type="checkbox" className="h-5 w-5"
                  onChange={(e) => handleCheckboxChange(e.target.checked, user)}
                /></div>
              </td>
              <td className="px-[5px] md:px-3 font-bold text-lg">
                <div className="flex gap-5 items-center">
                  <img className="w-16 h-16" src={user.image} alt="" />
                  <div className="flex flex-col gap-3">
                    <h1 className="text-lg md:text-xl lg:text-2xl">{user.title}</h1>
                    <p className="text-base md:text-xl">Category : {user?.category}</p>
                    <div className="flex flex-col md:flex-row gap-2 text-base md:text-xl">
                      {user?.rom && <h1>Rom : {user?.rom}</h1>}
                      {user?.ram && <h1>Ram : {user?.ram}</h1>}
                    </div>
                  </div>
                  <button className="btn md:mr-2 bg-transparent hover:bg-transparent shadow-none text-black text-2xl">
                    <MdDelete />
                  </button>
                </div>
              </td>
              <td className="px-[5px] md:px-3 font-bold text-base md:text-lg flex flex-col md:flex-row">
                <h1 className="flex">
                  {user.quantity} X {user.price}
                </h1>
                <h1>= ${user.quantity * user.price}</h1>
              </td>
            </tr>
          ))}
        </tbody>
      ) : (
        <h1 className="text-center text-5xl w-full">No data</h1>
      )}
    </table>


</div>

{
    user || session ?
 
    <div className="w-full lg:w-1/3 bg-[#f6f5f5] p-5 h-96 rounded-md">



<h1  className="font-medium text-2xl my-3">Order Summery</h1>
<div className="flex justify-between mb-3">
    <h1 className="font-medium text-lg">Subtotal({totalQuantity} items )</h1>
    <h1 className="font-medium text-lg">${totalPrice}</h1>
</div>

<div className="pb-5 border-b-2 flex justify-between">
    <h1 className="font-medium text-lg">Shipping Fee</h1>
    <h1 className="font-medium text-lg">${totalQuantity*50}</h1>
</div>

<div className="pb-5 border-b-2 flex justify-between mt-3">
    <h1 className="font-medium text-lg">Total</h1>
    <h1 className="font-medium text-lg">${total}</h1>
</div>

<button onClick={handleOpenModal} className="btn w-full mt-5 bg-black hover:bg-sky-600 text-white">PROCEED TO CHECKOUT ({selectedUsers.length})</button>
{/* //onClick={handlePurchase} */}

{isModalOpen && (
<dialog id="my_modal_3" className="modal" open>
  <div className="modal-box w-[1000px]">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button onClick={handleCloseModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    
    
    <div className="w-full mx-auto mt-10">
      <h2 className="text-xl font-bold mb-6">Billing details</h2>

      <form onSubmit={handleSubmit}  className="space-y-4">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium">First name <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="firstName"
             id="firstName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
            defaultValue={session?.data?.user?.name}
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium">Last name <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
            defaultValue={session?.data?.user?.name}
          />
        </div>

       

        {/* Street Address */}
        <div>
          <label className="block text-sm font-medium">Street address <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="streetAddress"
            id="streetAddress"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="House number and street name"
            required
          />
        </div>

        {/* Apartment, suite, etc. (Optional) */}
        <div>
          <label className="block text-sm font-medium">Apartment, suite, unit, etc. (optional)</label>
          <input
            type="text"
            name="apartment"
           id="apartment"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium">Town / City <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="city"
             id="city"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        
        {/* ZIP Code */}
        <div>
          <label className="block text-sm font-medium">ZIP Code <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="zipCode"
            id="zipCode" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium">Phone <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="phone"
            name="phone"
            
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email address <span className="text-red-500">*</span></label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
            defaultValue={session?.data?.user?.email || user?.email}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
        <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button onClick={handleCloseModal} className="btn btn-error">Cancel</button>
      </form>
          <button
          type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
            
          >
            Place Order
          </button>
        </div>
      </form>
    </div>



  </div>
</dialog>
)}



</div>

      :

      <div className="w-full lg:w-1/3 bg-[#f6f5f5] p-5 h-96 rounded-md">

<h1 className="font-medium text-lg">Location</h1>
<p className="pb-5 border-b-2">ghutrghrg,grwir</p>

<h1  className="font-medium text-2xl my-3">Order Summery</h1>
<div className="flex justify-between mb-3">
    <h1 className="font-medium text-lg">Subtotal( 0 items )</h1>
    <h1 className="font-medium text-lg">$0</h1>
</div>

<div className="pb-5 border-b-2 flex justify-between">
    <h1 className="font-medium text-lg">Shipping Fee</h1>
    <h1 className="font-medium text-lg">$0</h1>
</div>

<div className="pb-5 border-b-2 flex justify-between mt-3">
    <h1 className="font-medium text-lg">Total</h1>
    <h1 className="font-medium text-lg">$0</h1>
</div>

<button className="btn w-full mt-5 bg-black text-white">PROCEED TO CHECKOUT ( 0 )</button>

</div>

}


        </div>
        </>
    );
};

export default page;