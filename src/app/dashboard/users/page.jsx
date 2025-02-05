/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
'use client'
import Layout from '@/Components/Layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const page = () => {


  const [latest, setLatest] = useState([]);
     
   
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        ` https://electro-brown.vercel.app/dashboard/users/api`
      )
      
      setLatest(data.service)
     
    }
    getData();
    
  
  
  
  }, [])




  return (
    <Layout>
    <div className='min-h-screen'>
    <>
<h1 className="text-center text-green-700 text-3xl font-semibold mb-6">All Users</h1>
<div className="overflow-x-auto min-h-[46vh]">
    <table className="table rounded-none bg-[#c3b8cbc1]">
        {/* head */}
        <thead>
            <tr>
                
                <th className="px-[5px] md:px-3 text-stone-950 text-lg font-bold">user avator</th>
                <th className="px-[5px] md:px-3 text-stone-950 text-lg font-bold">user email</th>
                <th className="px-[5px] md:px-3 text-stone-950 text-lg font-bold">user name</th>
                <th className="px-[5px] md:px-3 text-stone-950 text-lg font-bold">user role</th>
                <th className="px-[5px] md:px-3 text-stone-950 text-lg font-bold">user status</th>
                
                <th className="px-[5px] md:px-3 text-stone-950 text-lg font-bold">Action</th>
               
            </tr>
      
      </thead>

        <tbody>
            {
             latest.map(user => 
                <tr key={user?.image}>
                
                <td className="px-[5px] md:px-3 font-bold text-lg"><img className="w-12 h-12" src={user?.image} alt="" /></td>
                <td className="px-[5px] md:px-3 font-bold text-lg">{user?.email}</td>
                <td className="px-[5px] md:px-3 font-bold text-lg">{user.name}</td>
                <td className="px-[5px] md:px-3 font-bold text-lg">{user?.role}</td>
               
                <td className="px-[5px] md:px-3 font-bold text-lg">{user.status}</td>
                
                
                <td className="flex  gap-2 flex-row">
                
                 {/* { user.status == 'active' ?
                   
                   <button onClick={()=>handleBlock(user?._id)}
                        className="btn md:mr-2 btn-error">Block</button>
                
                 : "" }
                  
                  
                  { user.status == 'block' ?
                   
                   <button onClick={()=>handleActive(user?._id)}
                        className="btn md:mr-2 btn-success">Unblock</button>
                
                 : "" }
              
                 
              { user.role == 'customer' ?
                   <button onClick={()=>handleAdmin(user?._id)}
                        className="btn md:mr-2 btn-primary">Admin</button>
                : "" } */}

                </td>

            </tr>
              )
          }
        </tbody>  
    </table>
</div>
</>
    </div>
    </Layout>
  );
};

export default page;