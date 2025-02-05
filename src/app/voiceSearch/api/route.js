

import { connectDB } from "../../../../lib/connectDB"
import { NextResponse } from "next/server";


export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('voice');
     // Extract the search query 
     
 //console.log(search);
 
    
    const db =await connectDB()
    const servicesCollection = db.collection('items')
    try {
       // Search order: category > title > type
    const categoryMatch = await servicesCollection.find({ 
        category: { $regex: search, $options: "i" }
      }).toArray();
       
      //console.log(categoryMatch);
        
      if (categoryMatch.length > 0) return NextResponse.json({categoryMatch});

      const titleMatch = await servicesCollection.find({ 
        title: { $regex: search, $options: "i" }
      }).toArray();
     // console.log(titleMatch);
      if (titleMatch.length > 0) return NextResponse.json({titleMatch});
  
      const typeMatch = await servicesCollection.find({ 
        type: { $regex: search, $options: "i" }
      }).toArray();   
     // console.log(typeMatch);

        return NextResponse.json({typeMatch})
    } catch (error) {
        return NextResponse.json({message : "No Data Found"})
    }
}