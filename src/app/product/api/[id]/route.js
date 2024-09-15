
import { connectDB } from "../../../../../lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    //console.log('iddd', params.id);
   // console.log(params.id);
    const category = params.id;
    console.log('fef',category);
    
    const db =await connectDB()
    const servicesCollection = db.collection('items')
    try {
       
       const service = await servicesCollection.find({category}).toArray();
        //console.log(service);
       // console.log('ffffff',service);
        
        return NextResponse.json({service})
    } catch (error) {
        return NextResponse.json({message : "No Data Found"})
    }
}