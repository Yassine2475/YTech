export default function Projekte() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-10 text-gray-900">Projekte</h1>
      <p className="text-gray-600 mb-8">
        Eine Auswahl meiner bisherigen Arbeiten – von kleinen Business-Websites bis zu 
        komplexen Webanwendungen.
      </p>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Kfz-Gutachter Plattform</h3>
          <p className="text-gray-600 mb-3">
            Komplettes Redesign mit Next.js und Tailwind – optimiert für Performance & SEO.
          </p>
          <a href="#" className="text-black hover:underline">
            Projekt ansehen →
          </a>
        </div>

        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Portfolio für Designer</h3>
          <p className="text-gray-600 mb-3">
            Minimalistisches Portfolio mit CMS-Anbindung und responsivem Layout.
          </p>
          <a href="#" className="text-black hover:underline">
            Projekt ansehen →
          </a>
        </div>
      </div>
    </main>
  );
}
