/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useEffect, useState } from "react";
import { getServicesCategory } from "../../../../services/getItems";
import Link from "next/link";
import axios from "axios";


const page = ({ params }) => {
  // const  services =await getServicesCategory(params.category);
  const [latest, setLatest] = useState([]);
  // console.log('search = ',params.category);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        ` https://electro-brown.vercel.app/product/api?category=${params.category}`
      )

      setLatest(data.service)
      setLoading(false);
    }
    getData();

  }, [params.category]);
  return (
    <div>

      <section className='pt-14'>
        <h2 className='text-center font-semibold text-5xl mb-3'>{params.category}</h2>

        {loading ? (
          <div className="loader w-28 h-28 mx-auto my-20"></div>
        ) :

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 px-5 py-10'>

            {latest?.map(latest => (
              <Link key={latest._id} href={`/services/${latest._id}`}>
                <div

                  className="relative card shadow-2xl rounded-md group overflow-hidden"
                >
                  <div className="relative w-full h-64 md:h-80">
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
              </Link>
            ))}
          </div>
        }
      </section>

    </div>
  );
};

export default page;
