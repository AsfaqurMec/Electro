/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import lofo from '../../images/Screenshot 2024-09-09 192439.png'
import lofo1 from '../../images/Samsung-S24-Ultra-Titanium-Grey-removebg-preview.png'
import drone from '../../images/Screenshot 2024-09-11 015109.png'
import pc from '../../images/Screenshot 2024-09-11 015123.png'
import { getServices } from '../../services/getItems';


const Other = async () => {
//     const colors = ["#EC4899", "#8B5CF6", "#3B82F6", "#22C55E", "#FACC15"]; // Example color array
//   const [selectedColor, setSelectedColor] = useState("");
// const image ='/uploads/iPhone-15-Plus-_4_-7443-removebg-preview.png'
//   const handleChange = (color) => {
//     setSelectedColor(color);
//   };

  const { services } = await getServices();
//  console.log(services);
  const flagship = services.filter(item=> item.type == 'flagship');

 

//console.log(flagship);

    return (
        <>
        {/* <h1>{phone.length}</h1>
        <h1>{watch.length}</h1>
        <h1>{earbuds.length}</h1>
        <h1>{headphone.length}</h1> */}
        {/* <h1>{flagship.length}</h1> */}
        <section className='pt-14'>
            <h2 className='text-center font-semibold text-2xl '>Best Selers</h2>
            <h1 className='text-center font-semibold text-4xl mb-5'>Top Best sellers of This Week</h1>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 px-5 py-10'>
            {/* { flagship?.map(latest => 
             <div key={latest._id} className="card shadow-2xl rounded-md group">
              <figure className='relative'>
                <img className='transition-transform duration-300 ease-in-out transform hover:scale-125 h-60 md:h-full'
                  src={latest.image1}
                  alt="Shoes" />
              
              </figure>
              <div className="card-body p-3 md:p-5">
                <h2 className="card-title text-base">{latest.title}</h2>
                <p>${latest.price}</p>
                
              </div>
            </div>  
          )
          } */}
          {flagship?.map(latest => (
        <div
          key={latest._id}
          className="relative card shadow-2xl rounded-md group overflow-hidden"
        >
          <div className="relative w-full h-60 md:h-60">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform delay-1000 duration-1000 ease-in-out transform group-hover:opacity-0"
              src={latest.image1}
              alt="Shoes"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform delay-1000 duration-1000 ease-in-out transform opacity-0 group-hover:opacity-100"
              src={latest.image2}
              alt="Shoes"
            />
          </div>
          <div className="card-body p-3 md:p-5">
            <h2 className="card-title text-base">{latest.title}</h2>
            <p>${latest.price}</p>
          </div>
        </div>
      ))}
            </div>
        </section>
        <div className='my-10 px-5'>
            <div className='flex flex-col lg:flex-row'>
                <div className='w-full lg:w-1/2'>
                <Image src={lofo} alt='lofo'></Image>
                </div>
                <div className='w-full lg:w-1/2 flex flex-col justify-center items-center gap-4 px-10 py-10 bg-slate-100'> 
                    <h3>Trending now</h3>
                    <h1>Speakers Of The House</h1>
                    <p className='text-center'>With HomePod or HomePod mini, amplify all the listening experiences you love. And enjoy an effortlessly connected smart home — with Siri built in — thats private and secure.</p>
                    <div className='w-[98%] lg:w-[70%] mt-6 flex justify-around items-center shadow-slate-300 shadow-lg bg-white rounded-md p-3'>
                        <Image className='h-20 w-20' src={lofo1} alt='lofo1'></Image>
                        <div>
                            <h2>Galaxy S24 Ultra</h2>
                            <h4>Samsung</h4>
                        </div>
                        <h1>$990.00</h1>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col lg:flex-row gap-10  py-10'>
      <div className='w-full lg:w-1/2 shadow-2xl flex flex-col md:flex-row bg-[#f6f5f8] justify-around items-center gap-1 md:gap-5 px-5 py-8  rounded-md'>
        <div className='space-y-3'>
           <h1 className='text-cyan-500 tracking-widest font-medium'>New Arrival</h1>
           <h1 className='text-xl font-semibold'>Galaxy S24 Series</h1>
           <h1 className='pt-3 font-bold'>Shop Now ?</h1>
           </div>
           <Image src={drone} className='h-52 w-64' alt='image'></Image>
         </div>

         <div className='w-full lg:w-1/2 shadow-2xl flex flex-col md:flex-row bg-[#f6f5f8] justify-around items-center gap-1 md:gap-5 px-5 py-8  rounded-md'>
        <div className='space-y-3'>
           <h1 className='text-cyan-500 tracking-widest font-medium'>New Arrival</h1>
           <h1 className='text-xl font-semibold'>iPhone 15 Series</h1>
           <h1 className='pt-3 font-bold'>Shop Now ?</h1>
           </div>
           <Image src={pc} className='h-52 w-64' alt='image'></Image>
         </div>

        
      </div>

        </div>


{/* 
<div className="flex space-x-4">
{colors.map((color, index) => (
  <label key={index} className="cursor-pointer">
    <input
      type="radio"
      name="color"
      value={color}
      onChange={() => handleChange(color)}
      className="hidden"
    />
    <div
      className={`w-10 h-10 rounded-full border-4 transition-transform ${
        selectedColor === color ? "scale-105 border-gray-200" : "border-white"
      }`}
      style={{ backgroundColor: color }}
    ></div>
  </label>
))}
<Image src={image} alt='ww' width={100} height={100}></Image>
</div> */}
</>
    );
};

export default Other;