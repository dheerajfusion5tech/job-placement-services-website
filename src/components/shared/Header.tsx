import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/jobs", label: "Find Jobs" },
    { to: "/services", label: "Services" },
    { to: "/employers", label: "Employers" },
    { to: "/contact", label: "Contact" },
    { to: "/project-notes", label: "Notes" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="bg-blue-600 text-white px-2.5 py-1 rounded-lg text-sm font-extrabold">JP</span>
          <span>Job Services</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors [&.active]:text-blue-600 [&.active]:font-semibold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors [&.active]:text-blue-600 [&.active]:bg-blue-50 [&.active]:font-semibold"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2.5 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
