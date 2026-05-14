import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/images';
import AnimatedSection from './AnimatedSection';

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Reviews</p>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle mx-auto">
            Real words from real people who trusted us with their spaces.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={t.id} delay={i * 0.1}>
              <div className="p-6 rounded-xl border border-gray-100 h-full flex flex-col bg-white
                              hover:border-primary-light hover:shadow-sm transition-all duration-300">
                <Quote size={22} className="text-primary-light mb-4" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-50">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
