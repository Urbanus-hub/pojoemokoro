import { LayoutGrid, Layers, Droplets, Gem, Wrench, Package } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const SERVICES = [
  {
    icon: LayoutGrid,
    title: 'Wall Tiling',
    description: 'Carefully placed wall tiles that transform how your space looks and feels — every join clean, every line straight.',
  },
  {
    icon: Layers,
    title: 'Floor Tiling',
    description: 'Durable, level floor tiles installed with full attention to detail. Made to last and look great for years.',
  },
  {
    icon: Droplets,
    title: 'Grouting & Re-Grouting',
    description: 'Clean, fresh grout that makes your tiles look new again. We remove the old and replace it properly.',
  },
  {
    icon: Gem,
    title: 'Granite & Marble Fixing',
    description: 'Beautiful natural stone installed with patience and precision. We handle every piece with the care it deserves.',
  },
  {
    icon: Wrench,
    title: 'Tile Repair',
    description: 'Cracked or loose tiles? We fix them neatly so your floor or wall looks complete and whole again.',
  },
  {
    icon: Package,
    title: 'PVC Tiling',
    description: 'Modern PVC tiles installed cleanly and efficiently — a practical finish that still looks sharp.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-container">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">What We Do</p>
          <h2 className="section-title">Services That Cover Every Corner</h2>
          <p className="section-subtitle mx-auto">
            From a single cracked tile to a full home installation — we do it all, and we do it well.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.08}>
              <div className="group p-6 rounded-xl border border-gray-100 hover:border-primary-light hover:shadow-md
                              transition-all duration-300 h-full bg-white hover:bg-primary-50/30">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4
                                group-hover:bg-primary-light transition-colors duration-300">
                  <service.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-base font-bold font-heading mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
