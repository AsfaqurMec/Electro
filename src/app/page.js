
import Banner from "@/Components/Banner";
import Category from "@/Components/Category";
import Items from "@/Components/Items";
import Other from "@/Components/Other";
import Voice from "@/Components/Voice";


export default function Home() {
  

  return (
    <div className="relative">
      

      <div className='bg-gradient-to-l from-gray-100 to-slate-100 pt-5 md:pt-10 px-2 md:px-5'>
        
        <Banner />
        <Category />
      </div>

      <Other />
      <Items />

     {/* voice search */}
      <section className="right-2 md:right-5 bottom-24 fixed">
      
      <Voice></Voice>
      
      </section>

    </div>
  );
}
