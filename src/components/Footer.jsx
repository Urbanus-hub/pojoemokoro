import { Phone, Mail, MapPin } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
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
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">LT</span>
              </div>
              <span className="font-heading font-bold text-white text-lg">Lilian Tile Solutions</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Professional tile installation and repair services in Nairobi. Quality work, fair pricing, dependable timelines.
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
              Contact
            </h4>
            <div className="space-y-3">
              <a href="tel:+254712345678" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors">
                <Phone size={15} />
                +254 712 345 678
              </a>
              <a href="mailto:info@liliantilesolutions.co.ke" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail size={15} />
                info@liliantilesolutions.co.ke
              </a>
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <MapPin size={15} />
                Nairobi, Kenya
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} Lilian Tile Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
