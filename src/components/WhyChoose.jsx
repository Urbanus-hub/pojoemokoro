import { Target, Banknote, CalendarCheck, HandshakeIcon } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const REASONS = [
  {
    icon: Target,
    title: 'Clean, precise work',
    description: 'Every tile is laid with care and accuracy.',
  },
  {
    icon: Banknote,
    title: 'Fair pricing',
    description: 'Honest quotes with no hidden charges.',
  },
  {
    icon: CalendarCheck,
    title: 'Dependable timelines',
    description: 'We show up on time and finish when we say we will.',
  },
  {
    icon: HandshakeIcon,
    title: 'Professional service',
    description: 'Courteous, respectful, and easy to work with.',
  },
];

export default function WhyChoose() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="section-container">
        <AnimatedSection className="text-center mb-12">
          <h2 className="section-title">Why Choose Us</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 0.1}>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                  <reason.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold font-heading mb-2">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
