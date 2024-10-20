import nodemailer from 'nodemailer';

export async function POST(req) {
  const { item } = await req.json();

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
    subject: 'Purchase', // Subject line
    html: `
      <h1>Product Information</h1>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>Title</th>
          <td>${item?.item?.title}</td>
        </tr>
        <tr>
          <th>Color</th>
          <td>${item?.item?.color}</td>
        </tr>
        <tr>
          <th>RAM</th>
          <td>${item?.item?.ram}</td>
        </tr>
        <tr>
          <th>Stotage</th>
          <td>${item?.item?.size}</td>
        </tr>
        <tr>
          <th>Quantity</th>
          <td>${item?.item?.quantity}</td>
        </tr>
        <tr>
          <th>Price</th>
          <td>$${item?.item?.price*item?.item?.quantity}</td>
        </tr>
        
      </table>
      <br />
      <h1>Other Information</h1>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>Name</th>
          <td>${item?.firstName + item?.lastName}</td>
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
