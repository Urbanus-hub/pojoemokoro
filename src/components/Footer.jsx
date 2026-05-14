import { Phone, Mail, MapPin } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="grid grid-cols-2 gap-0.5 w-7 h-7 shrink-0">
                <div className="bg-primary rounded-tl-sm" />
                <div className="bg-primary-dark rounded-tr-sm" />
                <div className="bg-primary-dark rounded-bl-sm" />
                <div className="bg-primary rounded-br-sm" />
              </div>
              <div>
                <div className="font-black text-white text-sm leading-none tracking-wide font-heading">POJOEMOKORO</div>
                <div className="text-xs font-semibold text-primary-light leading-none tracking-widest font-heading">ENTERPRISE</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Expert tile installation, grouting, granite &amp; marble fixing, and repair.
              We bring quality craftsmanship to your door — wherever you are.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2.5">
              {QUICK_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => scrollTo(e, href)}
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wide mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+254716827947"
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={14} />
                0716 827 947
              </a>
              <a
                href="tel:+254780395624"
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={14} />
                0780 395 624
              </a>
              <a
                href="mailto:liliannaodeny@gmail.com"
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={14} />
                liliannaodeny@gmail.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                We come to you — anywhere you need us
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} Pojoemokoro Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
