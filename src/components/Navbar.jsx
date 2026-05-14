import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Work', href: '#projects', id: 'projects' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /* ── Scroll shadow + shrink ──────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Active section tracker ──────────────────────── */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.id);
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.25, rootMargin: '-80px 0px -50% 0px' },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/97 backdrop-blur-sm ${
        scrolled
          ? 'shadow-sm border-b border-gray-100'
          : 'border-b border-gray-100/60'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-14' : 'h-16 md:h-18'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center shrink-0"
          >
            <img
              src={logo}
              alt="Pojoemokoro Enterprise"
              className="h-18 md:h-24 w-auto object-contain"
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map(({ label, href, id }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`relative text-sm font-medium transition-colors duration-200 py-1 group ${
                    isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {label}
                  {/* Active / hover underline */}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full transition-all duration-200 bg-primary ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop right: phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+254716827947"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Call us"
            >
              <Phone size={14} className="text-primary" />
              0716 827 947
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary !py-2.5 !px-5 !text-sm"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-0.5">
            {NAV_LINKS.map(({ label, href, id }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`flex items-center gap-2 py-3 px-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary bg-primary-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  )}
                  {label}
                </a>
              );
            })}
            <div className="pt-3 border-t border-gray-100 mt-2 space-y-2">
              <a
                href="tel:+254716827947"
                className="flex items-center gap-2 py-2 px-2 text-sm font-medium text-gray-600"
              >
                <Phone size={14} className="text-primary" />
                0716 827 947
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-primary w-full !text-sm !py-3"
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
