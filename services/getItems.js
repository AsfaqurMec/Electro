import axios from "axios";

export const getServices = async () => {
    //console.log('uthbvjteghtk');
    
  try {
    const res = await axios.get(
      ` https://electro-brown.vercel.app/services/api/get-all`
    );
    //console.log(res.data);
    
    return res.data;
  } catch (error) {
   // console.log('errpe');
        
    return [];
  }
};

export const getServicesDetails = async (id) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/services/api/${id}`
    );
    return res.data;
  } catch (error) {
    return {};
  }
};

export const getServicesCategory = async (id) => {
 //console.log(id);
  
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/product/api/${id}`
    );
    //console.log(res.data);
    return res.data;
  } catch (error) {
    return {};
  }
};