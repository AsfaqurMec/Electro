import nodemailer from "nodemailer";
import puppeteer from "puppeteer";
import os from "os";
import path from "path";

export async function POST(req) {
  const { item } = await req.json();
  const order = item?.item[0];

  // Generate Invoice HTML
  const generateInvoiceHtml = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Invoice</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
    .container { max-width: 800px; margin: auto; padding: 20px; }
    h1 { color: #003366; }
    .header1 { margin-botom: 20px; }
     .header2 { margin-botom: 10px; }
     .header3 { margin-top: 10px; margin-botom: 10px; }
    .header { width: 100%; display: flex; justify-content: space-between; }
    .table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    .table th, .table td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    .table th { background-color: #f2f2f2; }
    .totals { width: 100%; padding-top: 4px; text-align: right; padding-bottom: 4px; padding-right: 4px;  border: 1px solid #ddd;}
    .footer { margin-top: 40px; text-align: center; font-size: 14px; color: gray; }
  </style>
</head>
<body>
  <div class="container">
    
      <h1 class="header1">INVOICE</h1>
      
      <h3 class="header2">Invoice ID : #${item?.invoiceId}</h3>


      <p class="header1">Asfaqur Rahman</br>
      CEO, Electro.</br>
      Mymensingh, Bangladesh</p>
    
    
    <div class="header">
    <div>
      <strong>Bill To:</strong>
      <p>${item?.firstName + " " + item?.lastName}<br>${item.apartment + " " + item?.city}</p>
    </div>
    <div>
      <strong>Ship To:</strong>
      <p>${item?.firstName + " " + item?.lastName}<br>${item.apartment + " " + item?.city}</p>
    </div>
    </div>

<p class="header3">Purchase Date :</br>
      
      ${item?.date}</p>

    <table class="table">
      <thead>
        <tr>
          <th>QTY</th>
          <th>Description</th>
          <th>Unit Price</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${data?.quantity}</td>
          <td>${data?.title}</td>
          <td>${data?.price}</td>
          <td>$${data?.price * data?.quantity}</td>
        </tr>
      </tbody>
    </table>
    <div class="totals">
      <p><strong>Total: $${data?.price * data?.quantity}</strong></p>
    </div>
    <div class="footer">
      <h1>Thank You for Ordering.</h1>
      <p>Happy Purchase<p>
  <p>For more order <a href="https://electro-brown.vercel.app">Visit Website<a><p>
    </div>
  </div>
</body>
</html>
  `;

  const invoiceHtml = generateInvoiceHtml(order);

  try {
    // Generate PDF using Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(invoiceHtml);
    const pdfPath = path.join(os.tmpdir(), `invoice-${Date.now()}.pdf`);
    await page.pdf({ path: pdfPath, format: "A4" });
    await browser.close();

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Electro" <${process.env.EMAIL_USER}>`,
      to: item?.email,
      subject: "Your Purchase Invoice",
      html: `<p>Please find your invoice attached.</p>`,
      attachments: [
        {
          filename: `invoice.pdf`,
          path: pdfPath,
        },
      ],
    });

    return new Response(JSON.stringify({ message: "Invoice sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send invoice", error: error.message }), {
      status: 500,
    });
  }
}

