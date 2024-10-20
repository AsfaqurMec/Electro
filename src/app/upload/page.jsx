/* eslint-disable @next/next/no-img-element */
// pages/index.js
"use client"
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('image', image); // Ensure 'image' is the file object
  
    const res = await fetch('/upload/api', {
      method: 'POST',
      body: formData, // FormData should be sent directly, no need to JSON.stringify it
    });
  
    if (res.ok) {
      const data = await res.json();
     // console.log(data);
      setMessage(`${data.filePath}`);
    } else {
      console.error('Upload failed', await res.json());
      setMessage('Upload failed');
    }
  };
                  
  
  

  return (
    <div>
      <h1>Upload Image</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
      <Image  src={message} alt='imm' width={100} height={100}></Image>
    </div>
  );
}