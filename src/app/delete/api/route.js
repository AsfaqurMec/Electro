// import { ObjectId } from "mongodb";
// import { connectDB } from "../../../../lib/connectDB";



// export default async function handler(req, res) {
//   if (req.method === 'DELETE') {
//     try {
//       const client = await connectDB();
//       const db = client.db('cart'); // Replace with your database name
//       const { selectedUsers } = req.body;
//       console.log(selectedUsers);
      
//       // Validate that productIds is an array and not empty
//       if (!Array.isArray(selectedUsers) || selectedUsers.length === 0) {
//         return res.status(400).json({ message: 'Invalid product IDs' });
//       }

//       // Delete products with IDs matching those in the array
//       const result = await db.collection('cart').deleteMany({
//         _id: { $in: selectedUsers.map((id) => new ObjectId(id._id)) },
//       });

//       res.status(200).json({ message: 'Products deleted successfully', deletedCount: result.deletedCount });
//     } catch (error) {
//       res.status(500).json({ message: 'Error deleting products', error: error.message });
//     }
//   } else {
//     res.setHeader('Allow', ['DELETE']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// /src/app/delete/api/route.js
import { ObjectId } from 'mongodb';
import { connectDB } from '../../../../lib/connectDB';

export const DELETE = async (req) => {
    // const body = await req.json(); // Parse the incoming JSON body
    // const { selectedUsers } = body;
    // console.log(selectedUsers);
    
  try {
    const db = await connectDB();
    const servicesCollection = db.collection('cart') // Replace with your database name
    const body = await req.json(); // Parse the incoming JSON body
    const { selectedUsers } = body;
    //console.log(selectedUsers);
    // Validate that selectedUsers is an array and not empty
    if (!Array.isArray(selectedUsers) || selectedUsers.length === 0) {
      return new Response(JSON.stringify({ message: 'Invalid product IDs' }), { status: 400 });
    }

    // Delete products with IDs matching those in the array
    const result = await servicesCollection.deleteMany({
      _id: { $in: selectedUsers.map((user) => new ObjectId(user._id)) },
    });

    return new Response(
      JSON.stringify({ message: 'Products deleted successfully', deletedCount: result.deletedCount }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error deleting products', error: error.message }), { status: 500 });
  }
}





// import { NextResponse } from "next/server";
// export const DELETE = async (request) => {
//   const newCart = await request.json();
//   try {
//     const db = await connectDB();
//     const cartCollection = db.collection("cart");
    
//     const resp = await cartCollection.insertOne({...newCart});
 
//    return NextResponse.json(newCart);
//   } catch (error) {
//     console.log(error);
    
//     return NextResponse.json(
//       { message: "Something Went Wrong", error },
//       { status: 500 }
//     );
//   }
// };