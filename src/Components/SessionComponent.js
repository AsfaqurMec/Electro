/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
'use client';

import Link from "next/link";
import { useSession } from "next-auth/react";
import { FaCartArrowDown } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useUser } from "../../context/UserContext";

export default function SessionComponent() {
    const  session  = useSession();
     const { user } = useUser();
  return (
    <div className="w-[100%] mx-auto flex justify-around items-center lg:hidden bottom-0 bg-violet-200 fixed py-2 md:py-4 z-50">
      <Link href="/contact">
        <div className="flex flex-col items-center">
          <h1 className="indicator">
            <FaLocationDot className="h-6 md:h-8 w-6 md:w-8" />
          </h1>
          <h3 className="font-bold">Contact</h3>
        </div>
      </Link>
      <Link href="/mycart">
        <div className="flex flex-col items-center">
          <h1 className="indicator">
            <FaCartArrowDown className="h-6 md:h-8 w-6 md:w-8" />
          </h1>
          <h3 className="font-bold">Cart</h3>
        </div>
      </Link>
      { user || session?.data?.user ? (
        <Link href="/account">
          <div className="flex flex-col items-center">
            <img className="w-6 h-6 rounded-full" src={user?.image ||session?.data?.user?.image } />
            <h3 className="font-bold">{user?.name || session?.data?.user?.name}</h3>
          </div>
        </Link>
      ) : (
        <Link href="/login">
          <div className="flex flex-col items-center">
            
            <img
              className="w-7 md:w-10 rounded-full"
              src="https://i.ibb.co/8mshvVT/666201.png"
              alt="Account"
            />
            <h3 className="font-bold">Account</h3>
          </div>
        </Link>
      )}
    </div>
  );
}
