/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { UserProvider, useUser} from "../../context/UserContext";
import AuthProvider from "../../services/AuthProvider";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import { useSession } from "next-auth/react";
import SessionComponent from "@/Components/SessionComponent";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Electro",
  description: "A Electronic E-commerce ",
  icons: {
    icon: "/favicon.ico", // Add the path to your favicon file
  },
};

export default function RootLayout({ children }) {
    


  return (

    <html lang="en" data-theme="light">
    {/* Wrap the entire app with AuthProvider and UserProvider */}
    <AuthProvider>
      <UserProvider>
        <body className="antialiased">
          <Navbar />
          {children}
          <Toaster></Toaster>
           {/* <div className="w-[100%] mx-auto flex justify-around items-center lg:hidden bottom-0 bg-violet-200 fixed py-2 md:py-4 z-50">
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

            {
               user || session?.data?.user?

            <Link href="/account">
              <div className="flex flex-col items-center">
              <img className="w-6 h-6 rounded-full" src={user?.image ||session?.data?.user?.image } />
                <h3 className="font-bold ">{ user?.name || session?.data?.user?.name}</h3>
              </div>
            </Link>
            :
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
        }
            
          </div>  */}
          <SessionComponent></SessionComponent>
          <Footer />
          
        </body>
        
      </UserProvider>
    </AuthProvider>
  </html>
  
  );
}
