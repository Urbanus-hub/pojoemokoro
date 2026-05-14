import { CheckCircle } from 'lucide-react';
import { IMAGES } from '../data/images';
import AnimatedSection from './AnimatedSection';

const HIGHLIGHTS = [
  'Experienced, skilled tiling team',
  'We travel to wherever you need us',
  'Attention to detail on every project',
  'Transparent pricing with no hidden costs',
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image */}
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden shadow-sm">
              <img
                src={IMAGES.about}
                alt="Tile installation work in progress"
                className="w-full h-80 lg:h-[440px] object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-5 left-5 bg-white rounded-xl px-4 py-3 shadow-md">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Built on</p>
                <p className="text-lg font-black text-gray-900 font-heading leading-tight">
                  Care &amp; Craft
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={0.15}>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
            <h2 className="section-title">We Care About Doing the Job Properly</h2>
            <p className="text-gray-500 leading-relaxed mt-4 text-base">
              At Pojoemokoro Enterprise, we believe every space deserves to be treated with respect.
              Whether it's a small repair or a full installation, we bring the same focus and care to
              every single project.
            </p>
            <p className="text-gray-500 leading-relaxed mt-3 text-base">
              We serve clients wherever they are — we come to you, work cleanly, and leave your space
              looking exactly the way you hoped. No fuss, no mess, just good honest work.
            </p>
            <ul className="mt-6 space-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
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
