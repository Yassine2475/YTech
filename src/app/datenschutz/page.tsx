export default function Datenschutz() {
  return (
    <main className="max-w-3xl mx-auto py-20 px-6 text-gray-700">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Datenschutzerklärung</h1>

      <p className="mb-4">
        Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und
        Zweck der Verarbeitung personenbezogener Daten innerhalb unseres
        Onlineangebotes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Verantwortlicher</h2>
      <p className="mb-6">
        Yassine Fakrouche <br />
        YTech – Webentwicklung & digitale Lösungen <br />
        Musterstraße 12 <br />
        58095 Hagen <br />
        E-Mail: kontakt@ytech.dev
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Erhebung und Speicherung personenbezogener Daten
      </h2>
      <p className="mb-4">
        Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren,
        werden Ihre Angaben zum Zwecke der Bearbeitung der Anfrage sowie für den
        Fall, dass Anschlussfragen entstehen, gespeichert.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Hosting</h2>
      <p className="mb-4">
        Unsere Website wird bei Vercel Inc. (USA) gehostet. Mit Vercel besteht
        ein Auftragsverarbeitungsvertrag (Art. 28 DSGVO).
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">E-Mail-Versand</h2>
      <p className="mb-4">
        Für den Versand von Kontaktformularnachrichten nutzen wir Brevo (Sendinblue GmbH).
        Mit Brevo wurde ebenfalls ein Auftragsverarbeitungsvertrag abgeschlossen.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Ihre Rechte</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Auskunft über Ihre gespeicherten Daten</li>
        <li>Berichtigung unrichtiger Daten</li>
        <li>Löschung Ihrer Daten</li>
        <li>Einschränkung der Verarbeitung</li>
        <li>Widerspruch gegen die Verarbeitung</li>
      </ul>

      <p>
        Wenn Sie eines dieser Rechte ausüben möchten, wenden Sie sich bitte an:{" "}
        <a href="mailto:kontakt@ytech.dev" className="text-blue-600 underline">
          kontakt@ytech.dev
        </a>
      </p>
    </main>
  );
}
