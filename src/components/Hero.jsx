import { MapPin, Clock, ShieldCheck } from 'lucide-react';
import { IMAGES } from '../data/images';

const TRUST_ITEMS = [
  { icon: MapPin, text: 'Based in Nairobi' },
  { icon: Clock, text: 'Reliable & On-Time' },
  { icon: ShieldCheck, text: 'Quality Work Guaranteed' },
];

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative">
      {/* Hero */}
      <div className="relative min-h-[90vh] md:min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Professional tile installation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/65" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-16 pt-20 pb-12 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight font-heading">
              Clean, Reliable Tile Installation in Nairobi
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-200 leading-relaxed max-w-lg">
              We install and repair tiles for homes and businesses — on time, every time.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" onClick={(e) => scrollTo(e, '#contact')} className="btn-primary !py-4 !px-8 !text-base">
                Request Quote
              </a>
              <a href="#projects" onClick={(e) => scrollTo(e, '#projects')} className="btn-secondary !py-4 !px-8 !text-base">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {TRUST_ITEMS.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center justify-center gap-3 py-4 sm:py-5">
                <Icon size={20} className="text-primary shrink-0" />
                <span className="text-sm font-semibold text-gray-700">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
