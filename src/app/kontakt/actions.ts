'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

const ContactSchema = z.object({
  name: z.string().min(2, 'Bitte Namen angeben.'),
  email: z.string().email('Bitte gültige E-Mail.'),
  nachricht: z.string().min(10, 'Bitte eine Nachricht (min. 10 Zeichen).'),
});

export type ContactState = {
  ok: boolean;
  errors?: Record<string, string>;
  message?: string;
};

export async function submitContact(_: ContactState, formData: FormData): Promise<ContactState> {
  const data = {
    name: String(formData.get('name') || '').trim(),
    email: String(formData.get('email') || '').trim(),
    nachricht: String(formData.get('nachricht') || '').trim(),
  };

  const parsed = ContactSchema.safeParse(data);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    parsed.error.issues.forEach((i) => (errors[i.path[0] as string] = i.message));
    return { ok: false, errors };
  }

  try {
    // SMTP-Verbindung einrichten
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Mail senden
    await transporter.sendMail({
      from: process.env.CONTACT_FROM, // z. B. kontakt@ygutachter.de
      to: process.env.CONTACT_TO,     // z. B. ygutachter@gmail.com
      replyTo: parsed.data.email,     // damit du direkt antworten kannst
      subject: `Neue Kontaktanfrage – ${parsed.data.name}`,
      text: `Neue Nachricht über das Kontaktformular:

        Name: ${parsed.data.name}
        E-Mail: ${parsed.data.email}

        Nachricht:
        ${parsed.data.nachricht}
        `,
    });

    return { ok: true, message: 'Nachricht erfolgreich gesendet.' };
  } catch (err) {
    console.error('SMTP-Fehler:', err);
    return { ok: false, message: 'Senden fehlgeschlagen. Bitte später erneut versuchen.' };
  }
}
