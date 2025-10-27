export default function Leistungen() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-10 text-gray-900">Leistungen</h1>
      <div className="space-y-8 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Webdesign & Entwicklung</h2>
          <p>
            Individuelle Websites mit Next.js, React und Tailwind. 
            Performance, SEO und modernes Design inklusive.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Webapps & Dashboards</h2>
          <p>
            Maßgeschneiderte Anwendungen mit API-Integration, 
            Datenvisualisierung und Authentifizierung.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Technische Beratung</h2>
          <p>
            Unterstützung bei Hosting, Deployment, CI/CD, SEO und modernem Webstack.
          </p>
        </section>
      </div>
    </main>
  );
}
