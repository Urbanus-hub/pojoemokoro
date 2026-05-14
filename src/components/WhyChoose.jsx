import { Target, CalendarCheck, ShieldCheck, HandshakeIcon } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const REASONS = [
  {
    icon: Target,
    title: 'We pay attention to detail',
    description: 'Every tile is placed with care. Every edge, every join — nothing is rushed or left to chance.',
  },
  {
    icon: CalendarCheck,
    title: 'We respect your time and space',
    description: 'We arrive when we say we will, work efficiently, and leave your space clean when we\'re done.',
  },
  {
    icon: ShieldCheck,
    title: 'We deliver what we promise',
    description: 'No surprises. No shortcuts. When we say something will be done, it gets done — properly.',
  },
  {
    icon: HandshakeIcon,
    title: 'We keep it simple and honest',
    description: 'Clear quotes, real communication, and fair prices. We want you to feel comfortable, not confused.',
  },
];

export default function WhyChoose() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="section-container">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Trust</p>
          <h2 className="section-title">Why Clients Trust Us</h2>
          <p className="section-subtitle mx-auto">
            We've built our reputation one project at a time, by showing up and doing things right.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 0.1}>
              <div className="text-center p-6 rounded-xl bg-white border border-gray-100 hover:border-primary-light
                              hover:shadow-sm transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <reason.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-base font-bold font-heading mb-2 text-gray-900">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
