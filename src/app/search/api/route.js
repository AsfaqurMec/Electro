import { connectDB } from "../../../../lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async (request) => {
     // Extract the search query from the URL
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search'); // Get the 'search' query parameter

  // Log the search term to the server console
 // console.log('Search Query:', search);
    
    
    const db =await connectDB()
    const servicesCollection = db.collection('items')
    try {
        let query = {
            title: { $regex: search, $options: 'i' },
          }
        
       const service = await servicesCollection.find(query).toArray();
        //console.log(service);
       // console.log('ffffff',service);
        
        return NextResponse.json({service})
    } catch (error) {
        return NextResponse.json({message : "No Data Found"})
    }
}