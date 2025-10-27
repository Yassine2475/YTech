import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import Header from './components/Header';

export const metadata: Metadata = {
  title: 'YTech – Webentwicklung & digitale Lösungen',
  description:
    'Moderne Websites, Webapps und digitale Lösungen. Erstellt von Yassine Fakrouche – Fullstack Developer aus Köln.',
  metadataBase: new URL('https://www.ytech.dev'),
  openGraph: {
    title: 'YTech – Webentwicklung & digitale Lösungen',
    description:
      'Moderne Websites, Webapps und digitale Lösungen. Erstellt von Yassine Fakrouche – Fullstack Developer aus Köln.',
    url: 'https://www.ytech.dev',
    siteName: 'YTech',
    type: 'website',
  },
  alternates: { canonical: 'https://www.ytech.dev' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-white text-gray-900 antialiased scroll-smooth">
        {/* ----- NAVIGATION ----- */}
        <Header />
        {/* ----- HAUPTINHALT ----- */}
        <main className="pt-20">{children}</main>

        {/* ----- FOOTER ----- */}
        <footer className="mt-16 border-t pt-8 pb-12 text-sm text-gray-600 text-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 px-4 mb-4">
            <Link href="/#home" className="hover:text-black">
              Home
            </Link>
            <Link href="/#leistungen" className="hover:text-black">
              Leistungen
            </Link>
            <Link href="/#projekte" className="hover:text-black">
              Projekte
            </Link>
            <Link href="/#kontakt" className="hover:text-black">
              Kontakt
            </Link>
            <Link href="/impressum" className="hover:text-black">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-black">
              Datenschutz
            </Link>
          </div>

          <p className="px-4">
            © {new Date().getFullYear()} <span className="font-semibold">YTech</span> – Alle Rechte vorbehalten.
          </p>
        </footer>

                {/* ----- FLOATING CONTACT BUTTONS ----- */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/491771234567" // ← deine WhatsApp-Nummer hier!
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 text-white shadow-lg transition hover:shadow-xl hover:scale-105 animate-pulse-glow"
            aria-label="WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-7 h-7 group-hover:text-[#25D366] transition"
            >
              <path d="M16.7 14.5c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1s-.8 1-.9 1.1c-.2.2-.3.2-.6.1s-1.1-.4-2.1-1.3c-.8-.7-1.3-1.6-1.4-1.8-.1-.2 0-.4.1-.5.1-.1.3-.3.4-.5.1-.1.2-.2.3-.4.1-.2.1-.3 0-.5 0-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 2.1 3.3 5 4.6.7.3 1.3.6 1.7.7.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4z" />
              <path d="M20.5 3.5C18.2 1.3 15.2 0 12 0 5.4 0 .1 5.3.1 11.8c0 2.1.5 4.1 1.6 5.9L0 24l6.5-1.7c1.8 1 3.8 1.5 5.8 1.5 6.6 0 11.9-5.3 11.9-11.8 0-3.1-1.2-6.1-3.4-8.5zM12.2 21c-1.8 0-3.6-.5-5.1-1.3l-.4-.2-3.8 1 1-3.7-.2-.4C3 15.1 2.6 13.5 2.6 11.8c0-5.2 4.3-9.5 9.6-9.5 2.5 0 4.9 1 6.7 2.8s2.8 4.2 2.8 6.7c.1 5.2-4.2 9.5-9.5 9.5z" />
            </svg>
          </a>

          {/* Call Button */}
          <a
            href="tel:+492211234567" // ← deine Telefonnummer hier!
            className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 text-white shadow-lg transition hover:shadow-xl hover:scale-105 animate-pulse-glow"
            aria-label="Anrufen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-7 h-7 group-hover:text-[#1E90FF] transition"
            >
              <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.56 0 1 .45 1 1V21c0 .55-.44 1-1 1C10.07 22 2 13.93 2 3c0-.55.45-1 1-1h3.5c.55 0 1 .44 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </a>
        </div>

      </body>
    </html>
  );
}
