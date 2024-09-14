import axios from "axios";

export const getServices = async () => {
    console.log('uthbvjteghtk');
    
  try {
    const res = await axios.get(
      `http://localhost:3000/services/api/get-all`
    );
    console.log(res.data);
    
    return res.data;
  } catch (error) {
    console.log('errpe');
        
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