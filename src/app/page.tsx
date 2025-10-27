'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ---------- HERO / HOME ---------- */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white via-gray-50 to-gray-100"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          YTech – Webentwicklung & digitale Lösungen
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 max-w-2xl mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Ich bin <strong>Yassine Fakrouche</strong>, Webentwickler aus Köln.  
          Ich entwickle maßgeschneiderte Websites & Webapps mit modernem Tech-Stack,  
          klarer Struktur und einem Auge fürs Design.
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a href="#leistungen" className="btn-primary">Leistungen ansehen</a>
          <a href="#kontakt" className="btn-outline">Kontakt aufnehmen</a>
        </motion.div>
      </section>

      {/* ---------- ÜBER MICH ---------- */}
      <section
        id="ueber"
        className="py-24 px-6 bg-white text-center flex flex-col items-center"
      >
        <motion.h2
          className="text-4xl font-bold mb-10 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Über mich
        </motion.h2>

        <motion.p
          className="max-w-3xl text-gray-700 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Seit mehreren Jahren entwickle ich Websites, Landingpages und Web-Apps mit Fokus
          auf Performance, Design und Nutzerfreundlichkeit.  
          Ich arbeite mit Technologien wie <strong>Next.js, React, TypeScript</strong> und <strong>Tailwind CSS</strong>.  
          Mein Ziel: Digitale Auftritte, die überzeugen – technisch wie visuell.
        </motion.p>
      </section>

      {/* ---------- LEISTUNGEN ---------- */}
      <section
        id="leistungen"
        className="py-24 px-6 bg-gray-50 flex flex-col items-center text-center"
      >
        <motion.h2
          className="text-4xl font-bold mb-10 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Leistungen
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
          {[
            {
              title: 'Webdesign & Entwicklung',
              text: 'Individuelle Websites mit modernem Tech-Stack. Optimiert für SEO, Conversion und Performance.',
            },
            {
              title: 'Webapps & Dashboards',
              text: 'Interaktive Anwendungen mit Datenanbindung, Nutzerverwaltung und responsivem UI.',
            },
            {
              title: 'Technische Beratung',
              text: 'Unterstützung bei Hosting, Deployments, Automatisierungen und digitaler Strategie.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="card bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- PROJEKTE ---------- */}
      <section
        id="projekte"
        className="py-24 px-6 bg-white flex flex-col items-center text-center"
      >
        <motion.h2
          className="text-4xl font-bold mb-10 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Projekte
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
          {[
            {
              name: 'Kfz-Gutachter Plattform',
              desc: 'Redesign mit Next.js und Tailwind – Fokus auf Geschwindigkeit und klare User Journey.',
            },
            {
              name: 'Portfolio für Designer',
              desc: 'Modernes, minimalistisches Portfolio mit CMS-Anbindung und sanften Animationen.',
            },
            {
              name: 'Business Landingpage',
              desc: 'Conversion-optimierte Unternehmensseite mit Kontaktintegration und SEO-Optimierung.',
            },
            {
              name: 'Dashboard App',
              desc: 'Analyse-Dashboard mit React, Chart.js und Echtzeitdaten aus einer REST-API.',
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              className="card hover:scale-[1.02]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- KONTAKT ---------- */}
      <section
        id="kontakt"
        className="py-24 px-6 bg-gray-50 flex flex-col items-center text-center"
      >
        <motion.h2
          className="text-4xl font-bold mb-6 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Kontakt
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Du möchtest ein Projekt umsetzen oder einfach mal über deine Idee sprechen?  
          Schreib mir direkt über das Formular – ich melde mich so schnell wie möglich.
        </motion.p>

        <motion.form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-4 w-full max-w-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <input
            name="name"
            placeholder="Name"
            className="border border-gray-300 p-3 w-full rounded-md focus:border-black focus:outline-none"
            required
          />
          <input
            name="email"
            placeholder="E-Mail"
            type="email"
            className="border border-gray-300 p-3 w-full rounded-md focus:border-black focus:outline-none"
            required
          />
          <textarea
            name="nachricht"
            placeholder="Nachricht"
            className="border border-gray-300 p-3 w-full rounded-md h-32 focus:border-black focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Absenden
          </button>
        </motion.form>
      </section>
    </main>
  );
}
