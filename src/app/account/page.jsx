/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { useUser } from '../../../context/UserContext';
 // Import the useRouter hook
import Link from 'next/link';
import { useRouter } from 'next/navigation';




const page = () => {
    const router = useRouter(); // Initialize the router
    const  session  = useSession();
    console.log('session : ',session?.data?.user);
    
    const { user } = useUser(); // Access user data from context
  console.log('USER : ',user);

     // State to toggle edit mode
  const [isEditable, setIsEditable] = useState(false);

  // Function to toggle edit mode
  const handleEditToggle = () => {
    setIsEditable((prevState) => !prevState);
  };

const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: '/' }); // Redirect to home page after sign out
    } catch (error) {
      console.error('Failed to sign out:', error);
    }
  };
    
    return (
        <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-36 md:w-64 bg-white shadow-lg p-2 md:p-6">
          <div className="text-xl font-bold mb-8">My Account</div>
          <ul>
            <li className="mb-4">
              <a href="#" className="flex items-center text-orange-500 font-semibold">
                <span className="mr-2">&#128100;</span> Account Info
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-600 hover:text-orange-500">
                <span className="mr-2">&#128203;</span> My Orders
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-600 hover:text-orange-500">
                <span className="mr-2">&#128221;</span> My Reviews
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-600 hover:text-orange-500">
                <span className="mr-2">&#128232;</span> Manage Address
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-600 hover:text-orange-500">
                <span className="mr-2">&#127942;</span> Reward Points
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-600 hover:text-orange-500">
                <span className="mr-2">&#128712;</span> FAQ
              </a>
            </li>
            <li onClick={handleLogout}>
             <button className="flex items-center text-gray-600 hover:text-orange-500">
                <span className="mr-2">&#128682;</span> Logout
              </button>
            </li>
          </ul>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Hello <span className='text-xl font-medium text-orange-600 '>{session?.data?.user.name || user?.name}</span></h2>
          </div>
  
          {/* Account Details Form */}
          <div className="bg-white p-8 shadow-lg rounded-lg max-w-4xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Account Details</h3>
              <button
                onClick={handleEditToggle}
                className="text-orange-500 hover:text-orange-600 flex items-center"
              >
                <span className="mr-1">&#9998;</span> {isEditable ? 'Cancel' : 'Edit'}
              </button>
            </div>
  
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
                {/* Full Name */}
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue={session?.data?.user.name || user?.name}
                    className={`w-full p-2 border border-gray-300 rounded ${isEditable ? 'bg-white' : 'bg-gray-100'}`}
                    readOnly={!isEditable}
                  />
                </div>
  
  
                {/* Email */}
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue={session?.data?.user.email || user?.email}
                    className={`w-full p-2 border border-gray-300 rounded ${isEditable ? 'bg-white' : 'bg-gray-100'}`}
                    disabled
                  />
                </div>
  
                
              </div>
  
              {isEditable && (
                <div className="mt-6">
                  <button
                    type="submit"
                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    );
};

export default page;