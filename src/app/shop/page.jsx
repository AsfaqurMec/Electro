/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import Link from 'next/link';
const Shop = () => {

    const [selectedcategory, setSelectedcategory] = useState('');
    const [latest, setLatest] = useState([]);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(
                `https://electro-brown.vercel.app/services/api/get-all`
            )

            setLatest(data.services)
            setProduct(data.services)
        }
        getData();

    }, []);

    const handleCategory = (e) => {
        setSelectedcategory(e.target.value);

        if (e.target.value === 'Phone') {
            const phones = latest.filter(item => item.category === 'Smartphone');
            setProduct(phones);
        }
        if (e.target.value === 'Earbuds') {
            const earBuds = latest.filter(item => item.category === 'Earbuds');
            setProduct(earBuds);
           // console.log(latest);
            
        }
        if (e.target.value === 'HeadPhones') {
            const headPhones = latest.filter(item => item.category === 'Headphones');
            setProduct(headPhones);
            //console.log(latest);
        }
        if (e.target.value === 'SmartWatch') {
            const smartWatch = latest.filter(item => item.category === 'Smartwatch');
            setProduct(smartWatch);
           // console.log(latest);
        }
    };

    return (
        <div className='px-2 md:px-5 py-10 min-h-[80vh] flex flex-col md:flex-row gap-10'>
            {/* side bar */}
            <div className='w-full md:w-[20%] shadow-md shadow-blue-200 border-2 rounded-md flex flex-col items-center'>
                <select
                    className="select select-bordered text-lg font-medium shadow-lg my-5"
                    value={selectedcategory}
                    onChange={handleCategory}
                >
                    <option disabled selected value="">Category</option>

                    <option value={'Phone'}>Phone</option>
                    <option value={'Earbuds'}>Earbuds</option>
                    <option value={'HeadPhones'}>HeadPhones</option>
                    <option value={'SmartWatch'}>SmartWatch</option>

                </select>
                {/* <h1>{selectedcategory}</h1> */}
            </div>

            {/* main contents */}
            <div className='w-full md:w-[80%]'>
                <h1 className='text-center text-2xl font-semibold my-2'>Products</h1>
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 px-1 md:px-2 py-5'>

                    {product?.map(latest => (

                        <Link key={latest._id} href={`/services/${latest._id}`}>
                            <div className="relative card shadow-2xl rounded-md group overflow-hidden h-[350px]">
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
                                    <h2 className="card-title text-sm md:text-base">{latest.title}</h2>
                                    <p className="bottom-0">৳{latest.price}</p>
                                </div>
                            </div>
                        </Link>


                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;