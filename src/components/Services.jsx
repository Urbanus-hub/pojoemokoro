import { Grid3x3, Wrench, Paintbrush, Gem } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const SERVICES = [
  {
    icon: Grid3x3,
    title: 'Tile Installation',
    description: 'Clean, precise installation for floors and walls.',
  },
  {
    icon: Wrench,
    title: 'Tile Repair',
    description: 'Fix cracked, loose, or damaged tiles quickly.',
  },
  {
    icon: Paintbrush,
    title: 'Regrouting',
    description: 'Restore and refresh tile joints for a clean finish.',
  },
  {
    icon: Gem,
    title: 'Custom Tile Work',
    description: 'Designed and installed to match your space perfectly.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-container">
        <AnimatedSection className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            Professional tile solutions for every space in your home or business.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="group p-6 rounded-xl border border-gray-100 hover:border-primary-light hover:shadow-md transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-light transition-colors">
                  <service.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-heading mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
