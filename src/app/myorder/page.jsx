/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { signOut, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { useUser } from '../../../context/UserContext';
 // Import the useRouter hook
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';




const page = () => {
    const router = useRouter(); // Initialize the router
    const  session  = useSession();
   // console.log('session : ',session?.data?.user);
    
    const { user } = useUser(); // Access user data from context
 // console.log('USER : ',user);

     // State to toggle edit mode
//   const [isEditable, setIsEditable] = useState(false);

  // Function to toggle edit mode
//   const handleEditToggle = () => {
//     setIsEditable((prevState) => !prevState);
//   };


const [latest, setLatest] = useState([]);
     
   
useEffect(() => {
  const getData = async () => {
    const { data } = await axios.get(
      ` https://electro-brown.vercel.app/myorder/api?email=${session?.data?.user?.email || user?.email}`
    )
    
    setLatest(data.service)
   
  }
  getData();
  



}, [latest, session?.data?.user?.email, user?.email])





const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: '/' }); // Redirect to home page after sign out
    } catch (error) {
      console.error('Failed to sign out:', error);
    }
  };
    
    return (
        <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-36 md:w-64 bg-white shadow-lg p-2 md:p-6">
          <div className="text-xl font-bold mb-8">My Account</div>
          <ul>
            <li className="mb-4">
              <a href="/account" className="flex items-center text-orange-500 font-semibold">
                <span className="mr-2">&#128100;</span> Account Info
              </a>
            </li>
            {
              session?.data?.user?.role === 'admin' ?  <li className="mb-4">
             <Link href={'/dashboard'}> <button className="flex items-center text-gray-600 hover:text-orange-500">
                 <span className="mr-2">&#128682;</span> Dashboard
               </button></Link>
             </li>
             :
             ""
            }
            <li className="mb-4">
              <a href="/myorder" className="flex items-center text-gray-600 hover:text-orange-500">
                <span className="mr-2">&#128203;</span> My Orders
              </a>
            </li>
            
            {
              session?.data?.user.email || user?.email ?  <li onClick={handleLogout}>
              <button className="flex items-center text-gray-600 hover:text-orange-500">
                 <span className="mr-2">&#128682;</span> Logout
               </button>
             </li>
             :
             <li>
             <Link href={'/login'}><button className="flex items-center text-gray-600 hover:text-orange-500">
             <span className="mr-2">&#128682;</span> Login
           </button></Link>
         </li>
            
            }
          </ul>
        </div>
  
        {/* Main Content */}
        {/* <h1>{latest.length}</h1> */}
        <div className='flex flex-col gap-10 w-full mx-20 mt-20'>
        {
            latest.map(items => (
                <div key={items._id} className='flex flex-col gap-5 border-2 rounded-lg p-10 bg-white shadow-2xl w-full'>
                       <div className='grid grid-cols-2'>
                        <h4>Name : {items.firstName +" "+ items.lastName}</h4>
                        <h4>Email : {items.email}</h4>
                        <h4>Date : {items.date}</h4>
                        <h4>Status : {items.status}</h4>
                       </div>
                       {/* order detail */}
                     <div>
                        {
                            items.item.map(order => (
                                <div key={items._id} className='bg-slate-100 w-full'>
                                    <h1 className='my-5'>Order Detail :</h1>
                                <div  className='grid grid-cols-4 lg:grid-cols-6 w-full'>  
                                <h4>Title : {order.title}</h4>
                                <h4>Color : {order.color}</h4>
                                <h4>Ram : {order.ram}</h4>
                                <h4>Rom : {order.size}</h4>
                                <h4>Quantity : {order.quantity}</h4>
                                <h4>Price : ৳{order.price}</h4>
                                </div>
                               </div>  
                            ))
                        }
                     </div>
                </div>
            ))
        }
        </div>
      </div>
    );
};

export default page;