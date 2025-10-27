'use client';

import { useActionState } from 'react';
import { submitContact } from './actions';

const initialState = { ok: false, message: '' };

export default function Kontakt() {
  const [state, formAction] = useActionState(submitContact, initialState);

  return (
    <main className="max-w-2xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Kontakt</h1>
      <p className="text-gray-600 mb-8">
        Du hast Interesse an einer Zusammenarbeit oder Fragen zu meinen Projekten? 
        Schreib mir gerne über das Formular oder direkt per E-Mail.
      </p>

      <form action={formAction} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          className="border border-gray-300 p-3 w-full rounded-md"
          required
        />
        <input
          name="email"
          placeholder="E-Mail"
          className="border border-gray-300 p-3 w-full rounded-md"
          required
        />
        <textarea
          name="nachricht"
          placeholder="Nachricht"
          className="border border-gray-300 p-3 w-full rounded-md h-32"
          required
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
        >
          Absenden
        </button>

        {state?.message && (
          <p
            className={`mt-4 text-sm ${
              state.ok ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {state.message}
          </p>
        )}
      </form>
    </main>
  );
}
