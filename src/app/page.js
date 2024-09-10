import Banner from "@/Components/Banner";
import Category from "@/Components/Category";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div>
      <div className='bg-gradient-to-l from-sky-400 to-emerald-100 pt-10 px-5'>
      <Category></Category>
      <Banner></Banner>
      </div>
    </div>
    </>
  );
}
