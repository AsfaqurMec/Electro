import { connectDB } from "../../../../lib/connectDB";

import { NextResponse } from "next/server";
export const POST = async (request) => {
  const newItem = await request.json();
  try {
    const db = await connectDB();
    const cartCollection = db.collection("buy");
    
    const resp = await cartCollection.insertOne({...newItem});
 
   return NextResponse.json(newItem);
  } catch (error) {
    console.log(error);
    
    return NextResponse.json(
      { message: "Something Went Wrong", error },
      { status: 500 }
    );
  }
};