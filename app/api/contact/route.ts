export const runtime = "nodejs"

import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(3, "Subject is too short"),
  message: z.string().min(10, "Message is too short"),
})

function createTransporter() {
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const secure = String(process.env.SMTP_SECURE || "false").toLowerCase() === "true"

  if (!host || !port || !user || !pass) {
    throw new Error("Missing SMTP configuration env vars (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS)")
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  })
}

export async function POST(request: Request) {
  try {
    const json = await request.json().catch(() => ({}))
    const parsed = contactSchema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid payload", issues: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const { name, email, subject, message } = parsed.data

    const transporter = createTransporter()

    const to = process.env.MAIL_TO || process.env.SMTP_USER!
    const from = process.env.MAIL_FROM || `Portfolio Contact <${process.env.SMTP_USER}>`

    const text = `New contact submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
    const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.6">
        <h2>New contact submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr/>
        <p style="white-space:pre-wrap">${message}</p>
      </div>
    `

    await transporter.sendMail({
      to,
      from,
      replyTo: email,
      subject: `New contact from ${name}: ${subject}`,
      text,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("/api/contact error", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}


