
import { connectDB } from "../../../../lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async (request) => {
       // Extract the search query from the URL
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('category'); // Get the 'search' query parameter
  //  console.log('category', search);
    
    const db =await connectDB()
    const servicesCollection = db.collection('items')
    try {
       
       const service = await servicesCollection.find({category : search}).toArray();
        
       // console.log(service);
        
        return NextResponse.json({service})
    } catch (error) {
        return NextResponse.json({message : "No Data Found"})
    }
}