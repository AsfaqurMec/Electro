// // app/email/api/route.js
// import { Resend } from 'resend';

// const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

// export async function POST(request) {
//   try {
//     const { to, productDetails } = await request.json();
    

//     // Sending email using Resend
//     const emailResponse = await resend.emails.send({
//       from: 'Electro <onboarding@resend.dev>', // Replace with your actual sender email
//       to,
//       subject: `Product Purchase: ${productDetails.name}`,
//       text: `Product Title : ${productDetails.name}\nPrice : ${productDetails.price}\nCategory : ${productDetails.category}\nQuantity : ${productDetails.quantity}`,
//     //   text:<div><h1 className='text-3xl'>Product: ${productDetails.name}</h1> 
//     //        <h1 className='text-sky-400'>Price: ${productDetails.price}</h1>
//     //        <h1>Description: {productDetails.description}</h1>
//     //        </div>,
//     });

//     return new Response(
//       JSON.stringify({ success: true, message: 'Email sent successfully', emailResponse }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error(error);
//     return new Response(
//       JSON.stringify({ success: false, message: 'Failed to send email', error }),
//       { status: 500 }
//     );
//   }
// }
// app/api/sendEmail/route.js

// import nodemailer from 'nodemailer';

// export async function POST(req) {
//   const { recipientEmail, subject, title, quantity, price, category, user } = await req.json();

//   // Create a transporter object using SMTP
//   const transporter = nodemailer.createTransport({
//     service: 'gmail', 
//     auth: {
//       user: process.env.EMAIL_USER, 
//       pass: process.env.EMAIL_PASS, 
//     },
//   });

//   // Define the email options
//   const mailOptions = {
//     from: 'Electro <process.env.EMAIL_USER>' , // Sender address
//     to: recipientEmail, // Recipient address
//     subject: subject, // Subject line
//     html: `
//       <h1>Product Information</h1>
//       <table border="1" cellpadding="10" cellspacing="0">
//         <tr>
//           <th>Title</th>
//           <td>${title}</td>
//         </tr>
//         <tr>
//           <th>Quantity</th>
//           <td>${quantity}</td>
//         </tr>
//         <tr>
//           <th>Price</th>
//           <td>$${price}</td>
//         </tr>
//         <tr>
//           <th>Category</th>
//           <td>${category}</td>
//         </tr>
//       </table>
//       <br />
//       <h1>User Information</h1>
//       <table border="1" cellpadding="10" cellspacing="0">
//         <tr>
//           <th>Name</th>
//           <td>${user.name}</td>
//         </tr>
//         <tr>
//           <th>Email</th>
//           <td>${user.email}</td>
//         </tr>
//         <tr>
//           <th>Address</th>
//           <td>${user.address}</td>
//         </tr>
//         <tr>
//           <th>Phone</th>
//           <td>${user.number}</td>
//         </tr>
//       </table>
//     `,
//    // Email body
//   };

//   try {
//     // Send email
//     await transporter.sendMail(mailOptions);
//     return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
//       status: 200,
//     });
//   } catch (error) {
//     console.log(error);
    
//     return new Response(JSON.stringify({ message: 'Error sending email', error }), {
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
    to: 'hamimhamim044@gmail.com', // Recipient address
    subject: 'Product Purchase', // Subject line
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
          <td>${item?.firstName +' '+item?.lastName}</td>
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
      </table>
      <br />
      <h1>Thank You for Ordering.</h1>
      <p>Happy Purchase<p>
      <p>For more order <a href="http://localhost:3000">Visit Website<a><p>
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
