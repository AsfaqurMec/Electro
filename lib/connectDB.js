import { MongoClient, ServerApiVersion } from "mongodb";
let db;
export const connectDB = async () => {
  if (db) return db;
  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db('electronic')
    return db;
  } catch (error) {
    console.log({error});
  }
};



// import { MongoClient, ServerApiVersion } from "mongodb";

// let db;

// export const connectDB = async () => {
//   if (db) return db;
//   try {
//     const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
//     const client = new MongoClient(uri, {
//       serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//       },
//      // connectTimeoutMS: 10000 // 10 seconds timeout
//     });

//     // Connect to the MongoDB cluster
//     await client.connect();

//     // Specify the database you want to use
//     db = client.db('electronic');
    
//     console.log('Successfully connected to MongoDB');
//     return db;
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     throw error; // You may want to throw this to handle it upstream
//   }
// };
