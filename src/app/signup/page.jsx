/* eslint-disable react-hooks/rules-of-hooks */
"use client";
// import SocialSignin from "@/components/shared/SocialSignin";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useUser } from "../../../context/UserContext";



const SignUpPage = () => {
  // let user;
  // setTimeout(() => {
  //    user  = useUser();
  // }, 1000);
  const { user } = useUser(); // Access user data from context
  const { setUser } = useUser(); // Access setUser from context
 
//console.log(user?.email);

  const handleSignUp = async (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    const resp = await fetch("http://localhost:3000/signup/api", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });

    if (resp.status === 200) {
      setUser(newUser); // Save the user details in context
      toast.success("SignUp Successfully");
      //console.log(newUser);
      
      event.target.reset();
    }else {
      toast.error("Something went Wrong");
    }
  };

  return (
    <div className="container  px-5 lg:px-24 mx-auto py-24">
      <div className="grid grid-cols-1 gap-12 items-center">
       
        <div className="border-2 bg-violet-200 p-12 border-violet-500 rounded-md">
          <h6 className="text-5xl font-semibold text-[#1a1357] text-center mb-12">
            Sign Up
          </h6>
          <form onSubmit={handleSignUp} action="">
            <label className="text-black" htmlFor="email">Name</label> <br />
            <input
              type="text"
              name="name"
              placeholder="your name"
              className="w-full px-3 py-2 border-b-[#b14f25] rounded-md border-b-2 focus:border-b-2 focus:border-b-[#e2b29d] focus:outline-none bg-transparent text-black text-lg"
            />
            <br /> <br />
            <label className="text-black" htmlFor="email">Email</label> <br />
            <input
              type="text"
              name="email"
              placeholder="your email"
              className="w-full px-3 py-2 border-b-[#bd5224] rounded-md border-b-2 focus:border-b-2 focus:border-b-[#e2b29d] focus:outline-none bg-transparent text-black text-lg"
            />
            <br /> <br />
            <label className="text-black" htmlFor="password">Password</label> <br />
            <input
              type="password"
              name="password"
              placeholder="your password"
              className="w-full px-3 py-2 border-b-[#a7451c] rounded-md border-b-2 focus:border-b-2 focus:border-b-[#e2b29d] focus:outline-none bg-transparent text-black text-lg"
            />
            <br />
            <button
              type="submit"
              className="w-full btn btn-primary bg-[#9a4c2b] mt-12 text-lg border-none"
            >
              Sign Up
            </button>
          </form>
          <div>
           
            <h6 className="my-12 text-center text-black">
              Already have account ?{" "}
              <Link className="text-[#3b4ce8] font-semibold text-xl ml-2" href={"/login"}>
                Sign In
              </Link>
            </h6>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default SignUpPage;