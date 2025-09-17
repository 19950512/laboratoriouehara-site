'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/20 dark:border-slate-700/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            onClick={closeMenu}
          >
            Laboratório Uehara
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300"
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300"
            >
              Sobre
            </Link>
            <Link
              href="/equipe"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300"
            >
              Equipe
            </Link>
            <Link
              href="/faq"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300"
            >
              FAQ
            </Link>
            <Link
              href="/servicos"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300"
            >
              Serviços
            </Link>
            <Link
              href="/contato"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300"
            >
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300"
              aria-label="Menu"
            >
              <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200/20 dark:border-slate-700/20">
            <nav className="py-4 space-y-4">
              <Link
                href="/"
                className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-300"
                onClick={closeMenu}
              >
                Início
              </Link>
              <Link
                href="/sobre"
                className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-300"
                onClick={closeMenu}
              >
                Sobre
              </Link>
              <Link
                href="/equipe"
                className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-300"
                onClick={closeMenu}
              >
                Equipe
              </Link>
              <Link
                href="/faq"
                className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-300"
                onClick={closeMenu}
              >
                FAQ
              </Link>
              <Link
                href="/servicos"
                className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-300"
                onClick={closeMenu}
              >
                Serviços
              </Link>
              <Link
                href="/contato"
                className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-300"
                onClick={closeMenu}
              >
                Contato
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
