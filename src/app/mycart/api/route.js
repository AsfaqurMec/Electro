import { connectDB } from "../../../../lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async (request) => {
    
    const { searchParams } = new URL(request.url);
  const search = searchParams.get('email'); 
  //  console.log(search);
    
    const db =await connectDB()
    const servicesCollection = db.collection('cart')
    try {
       
       const service = await servicesCollection.find({email :search}).toArray();
       //console.log('cart data',service);
       
        
        return NextResponse.json({service})
    } catch (error) {
        return NextResponse.json({message : "No Data Found"})
    }
}