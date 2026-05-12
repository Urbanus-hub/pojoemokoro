import { CheckCircle } from 'lucide-react';
import { IMAGES } from '../data/images';
import AnimatedSection from './AnimatedSection';

const HIGHLIGHTS = [
  'Serving Nairobi homes and businesses',
  'Experienced, professional team',
  'Attention to detail on every project',
  'Transparent pricing and timelines',
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <AnimatedSection>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={IMAGES.about}
                alt="Tile installation work in progress"
                className="w-full h-80 lg:h-[420px] object-cover"
              />
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={0.15}>
            <h2 className="section-title">About Lilian Tile Solutions</h2>
            <p className="text-gray-500 leading-relaxed mt-4 text-base">
              We provide reliable tile installation and repair services in Nairobi
              with attention to detail and consistent results. Our team works with
              homeowners and businesses to deliver clean, professional tile work —
              on time and within budget.
            </p>
            <ul className="mt-6 space-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-primary shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
