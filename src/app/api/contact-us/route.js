import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { name, email, mobile } = await request.json()

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        })

        const adminMail = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: 'Hello Jef you have a Lead to get in touch !! Hurry',
            html: `
        <p>Hi JEF</p>
        <p>You have a new message from the contact form. Here are the details:</p>
        <p><strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Phone Number:</strong> ${mobile}</p>
        <p>Call up the client, Its urgent need you attention.</p>
        <p>Regards,<br>
        JEF GROUP<br>
        Sales & Marketing</p>
      `,
        }

        const autoReply = {
            from: process.env.EMAIL,
            to: email,
            subject: 'JEF UAE IS READY TO GET IN TOUCH SHORTLY !',
            html: `
        <p>Hi ${name},</p>
        <p>We’ll do our best to respond within 1-2 business days. In the meantime, feel free to browse our website for more information.</p>
        <p>Regards,<br>
        JEF GROUP<br>
        Sales & Marketing</p>
      `,
        }

        await transporter.sendMail(adminMail)
        await transporter.sendMail(autoReply)

        return NextResponse.json({ message: 'Form submission successful!' })
    } catch (error) {
        console.error('Email error:', error)
        return NextResponse.json({ error: 'Email sending failed' }, { status: 500 })
    }
}