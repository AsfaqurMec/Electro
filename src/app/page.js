// /* eslint-disable @next/next/no-img-element */
// /* eslint-disable jsx-a11y/alt-text */
// // "use client"; // Add this at the top
// import Banner from "@/Components/Banner";
// import Category from "@/Components/Category";
// import Items from "@/Components/Items";

// import Other from "@/Components/Other";
// import Link from "next/link";
// import { CiHeart } from "react-icons/ci";
// import { IoCartOutline } from "react-icons/io5";
// import { useSession } from "next-auth/react";
// import { useUser } from "../../context/UserContext";



// export default function Home() {
//  const  session  = useSession();
//   const { user } = useUser();
//   return (
//     <>
//     <div>
//     <div className="w-[100%] md:w-[90%] mx-auto flex justify-around items-center lg:hidden bottom-0 bg-slate-100 fixed py-2 md:py-4 z-50">
//             { user || session?.data?.user  ? 
//                   <Link href='/wishlist'> <h1 className="indicator"><span className="indicator-item badge mt-1 w-3 md:w-6 text-xs md:text-lg  bg-black text-white">{}</span><CiHeart className="h-6 md:h-8 w-6 md:w-8"/></h1></Link>
//                   : 
//                   <Link href='/wishlist'> <h1 className="indicator"><span className="indicator-item badge mt-1 w-3 md:w-6 text-xs md:text-lg  bg-black text-white">0</span><CiHeart className="h-6 md:h-8 w-6 md:w-8"/></h1></Link>
//                 }

//                 { user || session?.data?.user  ?
//                   <Link href='/cart'> <h1 className="indicator"><span className="indicator-item badge mt-1 w-3 md:w-6 text-xs md:text-lg  bg-black text-white">{}</span><IoCartOutline className="h-6 md:h-8 w-6 md:w-8"/></h1></Link>
//                   : 
//                   <Link href='/cart'> <h1 className="indicator"><span className="indicator-item badge mt-1 w-3 md:w-6 text-xs md:text-lg  bg-black text-white">0</span><IoCartOutline className="h-6 md:h-8 w-6 md:w-8"/></h1></Link>
//                 }
//                 { user || session?.data?.user  ?
//             <Link href="/account"><img className="w-7 md:w-10 rounded-full" src={user?.photoURL } /></Link>     
//                    : 
//             <Link href="/login"><img className="w-7 md:w-10 rounded-full" src={ "https://i.ibb.co/8mshvVT/666201.png" } /></Link>
//                 }
//             </div>
//       <div className='bg-gradient-to-l from-sky-400 to-emerald-100 pt-10 px-5'>
//       <Category></Category>
//       <Banner></Banner>
      
//       </div>
      
//       <Other></Other>
//       <Items></Items>

//     </div>
//     </>
//   );
// }

// "use client"; // Add this at the top of the file

import Banner from "@/Components/Banner";
import Category from "@/Components/Category";
import Items from "@/Components/Items";
import Other from "@/Components/Other";


export default function Home() {
  

  return (
    <div>
      

      <div className='bg-gradient-to-l from-sky-400 to-emerald-100 pt-10 px-5'>
        <Category />
        <Banner />
      </div>

      <Other />
      <Items />
    </div>
  );
}
