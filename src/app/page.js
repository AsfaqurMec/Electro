
import Banner from "@/Components/Banner";
import Category from "@/Components/Category";
import Items from "@/Components/Items";
import Other from "@/Components/Other";


export default function Home() {
  

  return (
    <div>
      

      <div className='bg-gradient-to-l from-gray-100 to-slate-100 pt-10 px-5'>
        
        <Banner />
        <Category />
      </div>

      <Other />
      <Items />
    </div>
  );
}
