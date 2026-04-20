/**
 * Contact form API – sends submissions via Resend to your email.
 *
 * Required in .env.local:
 *   RESEND_API_KEY=re_xxx     (from https://resend.com/api-keys)
 *   CONTACT_EMAIL=you@example.com
 *
 * Optional:
 *   CONTACT_FROM_EMAIL=onboarding@resend.dev
 *   CONTACT_FROM_NAME=Earnytics LLC Website
 */
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactBody = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  source?: string; // e.g. "popup" | "contact_page"
};

function buildEmailHtml(body: ContactBody): string {
  const { name, email, phone, service, message, source } = body;
  return `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
    ${service ? `<p><strong>Service:</strong> ${escapeHtml(service)}</p>` : ""}
    ${source ? `<p><strong>Source:</strong> ${escapeHtml(source)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: NextRequest) {
  const toEmail = process.env.CONTACT_EMAIL;
  if (!toEmail) {
    return NextResponse.json(
      { error: "CONTACT_EMAIL is not configured" },
      { status: 500 }
    );
  }
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "RESEND_API_KEY is not configured" },
      { status: 500 }
    );
  }

  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { name, email, message } = body;
  if (!name || typeof name !== "string" || !email || typeof email !== "string" || !message || typeof message !== "string") {
    return NextResponse.json(
      { error: "name, email, and message are required" },
      { status: 400 }
    );
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
  const fromName = process.env.CONTACT_FROM_NAME || "Earnytics LLC Website";

  const { data, error } = await resend.emails.send({
    from: `${fromName} <${fromEmail}>`,
    to: [toEmail],
    subject: `Contact form: ${name} - ${email}`,
    html: buildEmailHtml(body),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ success: true, id: data?.id });
}
