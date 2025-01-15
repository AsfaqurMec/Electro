"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
// import SocialSignin from "@/components/shared/SocialSignin";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useUser } from "../../../context/UserContext";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";; // Import useRouter

const SignUpPage = () => {
  
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [imagePath, setImagePath] = useState('');
  // Initialize the router
  const { user } = useUser(); // Access user data from context
  const { setUser } = useUser(); // Access setUser from context
  const router = useRouter(); // Initialize the router

  const [imageUrl, setImageUrl] = useState(null);

  const handleDebug = () => {
    console.log('Widget opened');
  };


  const handleUploadComplete = (result) => {
    if (result?.event === 'success') {
      setImageUrl(result?.info.secure_url);
     // console.log('Upload successful:', result?.info);
    } else {
      console.error('Upload failed or canceled:', result);
    }
  };
  // const handleFileChange = async (e) => {
  //  // console.log(e.target.files[0]);
    
  //   setImage(e.target.files[0]);

  //   const formData = new FormData();
  //   formData.append('image', image); // Ensure 'image' is the file object
  // console.log(formData);
  
  //   const res = await fetch(' https://electro-brown.vercel.app/upload/api', {
  //     method: 'POST',
  //     body: formData, // FormData should be sent directly, no need to JSON.stringify it
  //   });
  
  //   if (res.ok) {
  //     const data = await res.json();
  //    // console.log(data);
  //     setMessage(`Upload Successfully`);
  //     setImagePath(`${data.filePath}`);
  //   } else {
  //     console.error('Upload failed', await res.json());
  //     setMessage('Upload failed');
  //   }
  // };

  const handleFileChange = async (e) => {
    const file = e.target.files[0]; // Get the selected file directly
    if (!file) {
      setMessage('No file selected');
      return;
    }
  
    setImage(file); // Update state if you need it elsewhere
  
    const formData = new FormData();
    formData.append('image', file); // Use the file directly
  
    try {
      const res = await fetch(' https://electro-brown.vercel.app/upload/api', {
        method: 'POST',
        body: formData, // Send the FormData directly
      });
  
      if (res.ok) {
        const data = await res.json();
        setMessage('Upload Successfully');
        setImagePath(data.filePath); 
        console.log(imagePath);
        // Use the file path from the server response
      } else {
        const error = await res.json();
        console.error('Upload failed', error);
        setMessage('Upload failed');
      }
    } catch (err) {
      console.error('An error occurred during upload:', err);
      setMessage('Upload failed');
    }
  };
  


  const handleSignUp = async (event) => {
    
    event.preventDefault();

    
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      image: imageUrl
    };
    const resp = await fetch(" https://electro-brown.vercel.app/signup/api", {
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
      setImageUrl(null);
      event.target.reset();

     // Redirect after 2 seconds
     setTimeout(() => {
      router.push("/");
    }, 2000); // 2000 milliseconds = 2 seconds


    }else {
      toast.error("Something went Wrong");
    }
  };
//console.log(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);

  return (
    <div className="container  px-5 lg:px-24 mx-auto py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
       
        <div className="border-2 bg-violet-200 px-12 py-5 border-violet-500 rounded-md">
          <h6 className="text-5xl font-semibold text-[#1a1357] text-center mb-8">
            Sign Up
          </h6>


          <form onSubmit={handleSignUp} action="">

           <div className="mb-5 shadow-md shadow-orange-900 p-5">
      <h1 className="mb-3 font-semibold">Upload Profile Image</h1>
      <div className="flex justify-between">

    <CldUploadWidget 
       cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dzmglrehf"}
      uploadPreset="electro"
      onSuccess={(result) => handleUploadComplete(result)}
      onWidgetOpen={handleDebug}
      >
  {({ open }) => {
    return (
      <button onClick={() => open()}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>
         {imageUrl && (
        <div className="flex gap-3 flex-col">
          <h2>Uploaded Image:</h2>
          <img src={imageUrl} alt="Uploaded" style={{ width: '100px' }} />
          {/* <h1>{imageUrl}</h1> */}
        </div>
      )}






        {/* <input type="file" className="" onChange={handleFileChange} required />
        <img src={imagePath} alt="" className="w-20 h-18 rounded-md"/> */}
      </div>
      {/* {message && <p>{message}</p>} */}
      
    </div>                                                                                                          

            <label className="text-black" htmlFor="email">Name</label> <br />
            <input
              type="text"
              name="name"
              placeholder="your name"
              className="w-full px-3 py-2 border-b-[#b14f25] rounded-md border-b-2 focus:border-2 focus:border-[#18100c] focus:outline-none bg-transparent text-black text-lg"
               required />
            <br /> <br />
            <label className="text-black" htmlFor="email">Email</label> <br />
            <input
              type="text"
              name="email"
              placeholder="your email"
              className="w-full px-3 py-2 border-b-[#bd5224] rounded-md border-b-2 focus:border-2 focus:border-[#18100c] focus:outline-none bg-transparent text-black text-lg"
               required />
            <br /> <br />
            <label className="text-black" htmlFor="password">Password</label> <br />
            <input
              type="password"
              name="password"
              placeholder="your password"
              className="w-full px-3 py-2 border-b-[#a7451c] rounded-md border-b-2 focus:border-2 focus:border-[#18100c] focus:outline-none bg-transparent text-black text-lg"
              required />
            <br />
            <button
              type="submit"
              className="w-full btn btn-primary bg-[#9a4c2b] mt-8 text-lg border-none"
            >
              Sign Up
            </button>
          </form>
          <div>
           
            <h6 className="mt-5 mb-5 text-center text-black">
              Already have account ?{" "}
              <Link className="text-[#3b4ce8] font-semibold text-xl ml-2" href={"/login"}>
                Sign In
              </Link>
            </h6>
          </div>
        </div>

        <div className="text-center flex flex-col justify-center items-center gap-5">
                          <h1 className="text-6xl mt-5 text-black text-center font-bold pb-1">Login!</h1>
                          <p>Welcome to <strong>Electro!</strong>. A reliable and authenticate platform for all kind of electronic devices. Here we have all the latest and top brands products.
                          </p>
                          <Link href={"/login"}><button className="btn hover:bg-white hover:text-black hover:border-2  bg-black text-white font-semibold text-xl">Login</button></Link>
                          
                      </div>

      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default SignUpPage;