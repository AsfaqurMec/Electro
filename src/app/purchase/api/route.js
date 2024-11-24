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
//   const { recipientEmail, selectedUsers, user } = await req.json();

//   // Create a transporter object using SMTP
//   const transporter = nodemailer.createTransport({
//     service: 'gmail', // Change this to your email service (e.g., "hotmail", "yahoo")
//     auth: {
//       user: process.env.EMAIL_USER, // Your email
//       pass: process.env.EMAIL_PASS, // Your email password or app-specific password
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
  const { recipientEmail, selectedUsers, session, user, e } = await req.json();
//console.log(recipientEmail);

  // Create a transporter object using SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Change this to your email service (e.g., "hotmail", "yahoo")
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  // Generate the product rows for the table
  const productRows = selectedUsers.map((product) => {
    return `
      <tr>
        <td>${product.title}</td>
        <td>${product.quantity}</td>
        <td>$${product.price * product.quantity}</td>
      </tr>
    `;
  }).join(''); // Convert array to a string

  // Define the email options
  const mailOptions = {
    from: `Electro <${process.env.EMAIL_USER}>`, // Sender address
    to: user?.email || session?.data?.user?.email, // Recipient address
    subject: 'Product Purchase Details', // Subject line
    html: `
      <h1>Purchase Items</h1>
      <table border="1" cellpadding="10" cellspacing="0">
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          ${productRows} <!-- Insert the product rows here -->
        </tbody>
      </table>
      <br />
      <h1>Other Information</h1>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>Name</th>
          <td>${e?.firstName +" " +e?.lastName}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>${e?.email}</td>
        </tr>
        <tr>
          <th>Address</th>
          <td>${e?.apartment}</td>
        </tr>
        <tr>
          <th>City</th>
          <td>${e?.city}</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>${e?.phone}</td>
        </tr>
      </table>
      <br />
      <h1>Thank You for Order</h1>
      <p>Happy Purchase<p>
      <p>For more order <a href="https://electro-brown.vercel.app">Visit Website<a><p>
      
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
