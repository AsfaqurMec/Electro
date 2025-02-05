// import nodemailer from "nodemailer";


// export async function POST(req) {
//   const { item } = await req.json();
//   const order = item?.item[0];

//   // Generate Invoice HTML
//   const generateInvoiceHtml = (data) => `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Invoice</title>
//   <style>
//     body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
//     .container { max-width: 800px; margin: auto; padding: 20px; }
//     h1 { color: #003366; }
//     .header1 { margin-botom: 20px; }
//      .header2 { margin-botom: 10px; }
//      .header3 { margin-top: 10px; margin-botom: 10px; }
//     .header { width: 100%; display: flex; justify-content: space-between; }
//     .table { width: 100%; border-collapse: collapse; margin-top: 20px; }
//     .table th, .table td { border: 1px solid #ddd; padding: 8px; text-align: left; }
//     .table th { background-color: #f2f2f2; }
//     .totals { width: 100%; padding-top: 4px; text-align: right; padding-bottom: 4px; padding-right: 4px;  border: 1px solid #ddd;}
//     .footer { margin-top: 40px; text-align: center; font-size: 14px; color: gray; }
//   </style>
// </head>
// <body>
//   <div class="container">
    
//       <h1 class="header1">INVOICE</h1>
      
//       <h3 class="header2">Invoice ID : #${item?.invoiceId}</h3>


//       <p class="header1">Asfaqur Rahman</br>
//       CEO, Electro.</br>
//       Mymensingh, Bangladesh</p>
    
    
//     <div class="header">
//     <div>
//       <strong>Bill To:</strong>
//       <p>${item?.firstName + " " + item?.lastName}<br>${item.apartment + " " + item?.city}</p>
//     </div>
//     <div>
//       <strong>Ship To:</strong>
//       <p>${item?.firstName + " " + item?.lastName}<br>${item.apartment + " " + item?.city}</p>
//     </div>
//     </div>

// <p class="header3">Purchase Date :</br>
      
//       ${item?.date}</p>

//     <table class="table">
//       <thead>
//         <tr>
//           <th>QTY</th>
//           <th>Description</th>
//           <th>Unit Price</th>
//           <th>Amount</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>${data?.quantity}</td>
//           <td>${data?.title}</td>
//           <td>${data?.price}</td>
//           <td>$${data?.price * data?.quantity}</td>
//         </tr>
//       </tbody>
//     </table>
//     <div class="totals">
//       <p><strong>Total: $${data?.price * data?.quantity}</strong></p>
//     </div>
//     <div class="footer">
//       <h1>Thank You for Ordering.</h1>
//       <p>Happy Purchase<p>
//   <p>For more order <a href=" https://electro-brown.vercel.app">Visit Website<a><p>
//     </div>
//   </div>
// </body>
// </html>
//   `;



//     // Configure nodemailer
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Send the email
//     await transporter.sendMail({
//       from: `"Electro" <${process.env.EMAIL_USER}>`,
//       to: item?.email,
//       subject: "Your Purchase Invoice",
//       html: `<p>Please find your invoice attached.</p>`,
//       attachments: [
//         {
//           filename: `invoice.pdf`,
//           // path: pdfPath,
//           content: pdfBuffer,
//         },
//       ],
//     });

//     return new Response(JSON.stringify({ message: "Invoice sent successfully" }), {
//       status: 200,
//     });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return new Response(JSON.stringify({ message: "Failed to send invoice", error: error.message }), {
//       status: 500,
//     });
//   }
// }















import nodemailer from 'nodemailer';

export async function POST(req) {
  const { item } = await req.json();
  let order = item?.item[0];
 // console.log(order);
  
  // Create a transporter object using SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });

  // Define the email options
  const mailOptions = {
    from: 'Electro <process.env.EMAIL_USER>' , // Sender address
    to: item?.email, // Recipient address
    subject: 'Product Purchase User Copy', // Subject line
    html: `
      <h1>Product Information</h1>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>Title</th>
          <td>${order?.title}</td>
        </tr>
        <tr>
          <th>Color</th>
          <td>${order?.color}</td>
        </tr>
        <tr>
          <th>RAM</th>
          <td>${order?.ram}</td>
        </tr>
        <tr>
          <th>Stotage</th>
          <td>${order?.size}</td>
        </tr>
        <tr>
          <th>Quantity</th>
          <td>${order?.quantity}</td>
        </tr>
        <tr>
          <th>Price</th>
          <td>$${order?.price*order?.quantity}</td>
        </tr>
        
      </table>
      <br />
      <h1>Order Information</h1>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>Name</th>
          <td>${item?.firstName +' '+ item?.lastName}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>${item?.email}</td>
        </tr>
        <tr>
          <th>Address</th>
          <td>${item?.apartment}</td>
        </tr>
        <tr>
          <th>City</th>
          <td>${item?.city}</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>${item?.phone}</td>
        </tr>
        <tr>
          <th>Purchase Date</th>
          <td>${item?.date}</td>
        </tr>
      </table>
      <br />
      <h1>Thank You for Ordering.</h1>
      <p>Happy Purchase<p>
      <p>For more order <a href=" https://electro-brown.vercel.app">Visit Website<a><p>
    `,
   // Email body
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    
    return new Response(JSON.stringify({ message: 'Error sending email', error }), {
      status: 500,
    });
  }
}


// import { NextResponse } from "next/server";
// import chromium from "chrome-aws-lambda"; // ✅ Use this instead of Puppeteer
// import cloudinary from "cloudinary";
// import nodemailer from "nodemailer";
// import fs from "fs-extra";
// import path from "path";
// import dotenv from "dotenv";

// dotenv.config();

// // Cloudinary Config
// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export async function POST(req) {
//   try {
//     const { item } = await req.json();
//     let order = item?.item[0];
//     if (!item) {
//       return NextResponse.json({ success: false, message: "Invalid data" });
//     }

//     // Invoice HTML Template
//     const htmlContent = `
//       <html>
//       <head>
//         <title>Invoice</title>
//         <style>
//           body { font-family: Arial, sans-serif; }
//           .container { max-width: 800px; margin: auto; padding: 20px; }
//           .table { width: 100%; border-collapse: collapse; margin-top: 20px; }
//           .table th, .table td { border: 1px solid #ddd; padding: 8px; text-align: left; }
//           .table th { background-color: #f2f2f2; }
//           .footer { margin-top: 40px; text-align: center; font-size: 14px; color: gray; }
//         </style>
//       </head>
//       <body>
//         <div class="container">
//           <h1>INVOICE</h1>
//           <h3>Invoice ID: #${item?.invoiceId}</h3>
//           <p>Bill To: ${item?.firstName} ${item?.lastName}, ${item?.city}</p>
//           <table class="table">
//             <thead>
//               <tr>
//                 <th>QTY</th>
//                 <th>Description</th>
//                 <th>Unit Price</th>
//                 <th>Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>${data?.quantity}</td>
//                 <td>${data?.title}</td>
//                 <td>$${data?.price}</td>
//                 <td>$${data?.price * data?.quantity}</td>
//               </tr>
//             </tbody>
//           </table>
//           <div class="footer">
//             <h1>Thank You for Your Purchase</h1>
//           </div>
//         </div>
//       </body>
//       </html>
//     `;

//     // ✅ Use `chrome-aws-lambda` for Puppeteer in Vercel
//     const browser = await chromium.puppeteer.launch({
//       args: chromium.args,
//       defaultViewport: chromium.defaultViewport,
//       executablePath: await chromium.executablePath,
//       headless: true,
//     });

//     const page = await browser.newPage();
//     await page.setContent(htmlContent);
//     const pdfBuffer = await page.pdf({ format: "A4" });
//     await browser.close();

//     // Upload PDF to Cloudinary
//     const uploadResponse = await cloudinary.v2.uploader.upload_stream(
//       { resource_type: "raw", folder: "invoices" },
//       (error, result) => {
//         if (error) throw error;
//       }
//     ).end(pdfBuffer);

//     const invoiceUrl = uploadResponse.secure_url;

//     // Send Email
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: item?.email,
//       subject: "Your Invoice",
//       html: `<p>Download your invoice: <a href="${invoiceUrl}">${invoiceUrl}</a></p>`,
//     });

//     return NextResponse.json({ success: true, invoiceUrl });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ success: false, message: "Failed to generate invoice" });
//   }
// }




// import { NextResponse } from "next/server";
// import playwright from "playwright"; // ✅ Use Playwright instead of Puppeteer
// import cloudinary from "cloudinary";
// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config();

// // Cloudinary Config
// cloudinary.v2.config({
//   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export async function POST(req) {
//   try {
//     const { item } = await req.json();
//     let order = item?.item[0];
//     //console.log(order);
    
//     if (!item) {
//       return NextResponse.json({ success: false, message: "Invalid data" });
//     }

//     // Invoice HTML Template
//     const htmlContent = `
//       <html>
//       <head>
//         <title>Invoice</title>
//         <style>
//           body { font-family: Arial, sans-serif; }
//           .container { max-width: 800px; margin: auto; padding: 20px; }
//           .table { width: 100%; border-collapse: collapse; margin-top: 20px; }
//           .table th, .table td { border: 1px solid #ddd; padding: 8px; text-align: left; }
//           .table th { background-color: #f2f2f2; }
//           .footer { margin-top: 40px; text-align: center; font-size: 14px; color: gray; }
//         </style>
//       </head>
//       <body>
//         <div class="container">
//           <h1>INVOICE</h1>
//           <h3>Invoice ID: #${item?.invoiceId}</h3>
//           <p class="header1">Asfaqur Rahman</br>
//            CEO, Electro.</br>
//            Mymensingh, Bangladesh</p>            
//          <div class="header">
//          <div>
//            <strong>Bill To:</strong>
//            <p>${item?.firstName + " " + item?.lastName}</p>
//          </div>
//          <div>
//            <strong>Ship To:</strong>
//            <p>${item?.firstName + " " + item?.lastName}</p>
//          </div>
//          <div>
//            <strong>Shipping Address:</strong>
//            <p>${item.apartment + " ," + item?.city}</p>
//          </div>
//          </div>

//           <p class="header3">Purchase Date :</br>
      
//           ${item?.date}</p>

//           <table class="table">
//             <thead>
//               <tr>
//                 <th>QTY</th>
//                 <th>Description</th>
//                 <th>Unit Price</th>
//                 <th>Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>${order?.quantity}</td>
//                 <td>${order?.title}</td>
//                 <td>৳${order?.price}</td>
//                 <td>৳${order?.price * order?.quantity}</td>
//               </tr>
//             </tbody>
//           </table>
//           <div class="footer">
//             <h1>Thank You for Your Purchase</h1>
//             <p>Happy Purchase<p>
//             <p>For more order <a href=" https://electro-brown.vercel.app">Visit Website<a><p>
//           </div>
//         </div>
//       </body>
//       </html>
//     `;

//     // ✅ Use Playwright instead of Puppeteer
//     const browser = await playwright.chromium.launch();
//     const page = await browser.newPage();
//     await page.setContent(htmlContent);
//     const pdfBuffer = await page.pdf({ format: "A4", printBackground: true  });
//     await browser.close();
//     //console.log('PDF Buffer Size:', pdfBuffer.length);
//     // Upload PDF to Cloudinary
//     const uploadResponse = await new Promise((resolve, reject) => {
//       const uploadStream = cloudinary.v2.uploader.upload_stream(
//         {  type: "upload", resource_type: "auto", folder: "invoices", public_id: item.invoiceId },
//         (error, result) => {
//           if (error) reject(error);
//           else resolve(result);
//         }
//       );
//       uploadStream.end(pdfBuffer);
//     });

//     const invoiceUrl = uploadResponse.secure_url;

//     // Send Email
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: item?.email,
//       subject: "Your Invoice",
//       html: `<h1>Your Invoice :</h1> </br>
//       <p>Download your invoice: <a href="${invoiceUrl}" target="_blank">Click here</a></p>`,
//     });

//     return NextResponse.json({ success: true, invoiceUrl });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ success: false, message: "Failed to generate invoice" });
//   }
// }

