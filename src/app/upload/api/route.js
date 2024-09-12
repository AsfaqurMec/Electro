import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

// Disable Next.js's built-in body parsing
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper function to save the file
async function saveFile(fileData, filename) {
  const uploadDir = path.join(process.cwd(), 'public/uploads');
  
  // Ensure the 'uploads' directory exists
  await fs.mkdir(uploadDir, { recursive: true });

  const filePath = path.join(uploadDir, filename);
  
  // Write the file data to disk
  await fs.writeFile(filePath, fileData);

  return `/uploads/${filename}`; // Return the public URL of the uploaded file
}

// Handle POST requests
export async function POST(req) {
  try {
    const formData = await req.formData(); // Parse the form data from the request

    const file = formData.get('image'); // Get the uploaded file (the 'image' field)

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer(); // Get the file content as an array buffer
    const buffer = Buffer.from(arrayBuffer); // Convert the array buffer to a Buffer

    const filePath = await saveFile(buffer, file.name); // Save the file and get the path

    return NextResponse.json({ filePath }, { status: 200 }); // Return the file path
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'File upload failed' }, { status: 500 });
  }
}

