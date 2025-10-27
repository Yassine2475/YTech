import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, nachricht } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `Neue Kontaktanfrage – ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${nachricht}`,
    });

    return NextResponse.json({ ok: true, message: 'Nachricht erfolgreich gesendet.' });
  } catch (error) {
    console.error('MAIL FEHLER:', error);
    return NextResponse.json({ ok: false, message: 'Fehler beim Senden.' }, { status: 500 });
  }
}
