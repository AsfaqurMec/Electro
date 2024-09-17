// app/email/api/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request) {
  try {
    const { to, productDetails } = await request.json();
    

    // Sending email using Resend
    const emailResponse = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Replace with your actual sender email
      to,
      subject: `Product Purchase: ${productDetails.name}`,
      text: `Product: ${productDetails.name}\nPrice: ${productDetails.price}\nDescription: ${productDetails.description}`,
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully', emailResponse }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to send email', error }),
      { status: 500 }
    );
  }
}
