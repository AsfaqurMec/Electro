import { ObjectId } from "mongodb";
import { connectDB } from "../../../../../lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
 //console.log('iddd', params);
    
    const db =await connectDB()
    const servicesCollection = db.collection('items')
    try {
       
       const service = await servicesCollection.findOne({_id :new ObjectId(params)});
        //console.log(service);
       // console.log(service);
        
        return NextResponse.json({service})
    } catch (error) {
        return NextResponse.json({message : "No Data Found"})
    }
}