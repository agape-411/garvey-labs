export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message, organization, phone, service, website } = body;

    //  Spam protection (honeypot)
    if (website) {
      return NextResponse.json({ success: true });
    }

    //  Send email
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "korrokagape@gmail.com", // your receiving email
      replyTo: email,
      subject: `New Contact Form - ${name}`,
      html: `
        <h2>New Contact Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization || "N/A"}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Service:</strong> ${service || "N/A"}</p>

        <hr/>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("EMAIL RESPONSE:", response);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}