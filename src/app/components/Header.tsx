'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          YTech
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-700">
          <Link href="/#home" className="nav-link">Home</Link>
          <Link href="/#leistungen" className="nav-link">Leistungen</Link>
          <Link href="/#projekte" className="nav-link">Projekte</Link>
          <Link href="/#kontakt" className="nav-link">Kontakt</Link>
          <Link href="/impressum" className="nav-link">Impressum</Link>
          <Link href="/datenschutz" className="nav-link">Datenschutz</Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-800 text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen oder schließen"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="flex flex-col bg-white border-t text-center py-4 md:hidden">
          <Link href="/#home" className="py-2 text-gray-700 hover:text-black" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/#leistungen" className="py-2 text-gray-700 hover:text-black" onClick={() => setMenuOpen(false)}>Leistungen</Link>
          <Link href="/#projekte" className="py-2 text-gray-700 hover:text-black" onClick={() => setMenuOpen(false)}>Projekte</Link>
          <Link href="/#kontakt" className="py-2 text-gray-700 hover:text-black" onClick={() => setMenuOpen(false)}>Kontakt</Link>
          <Link href="/impressum" className="py-2 text-gray-700 hover:text-black" onClick={() => setMenuOpen(false)}>Impressum</Link>
          <Link href="/datenschutz" className="py-2 text-gray-700 hover:text-black" onClick={() => setMenuOpen(false)}>Datenschutz</Link>
        </nav>
      )}
    </header>
  );
}
