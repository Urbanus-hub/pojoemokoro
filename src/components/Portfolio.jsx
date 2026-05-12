import { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/images';
import AnimatedSection from './AnimatedSection';

const CATEGORIES = ['All', 'Kitchen', 'Bathroom', 'Outdoor', 'Living Room'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-off-white">
      <div className="section-container">
        <AnimatedSection className="text-center mb-10">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle mx-auto">
            Recent work from homes and businesses across Nairobi.
          </p>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-500 hover:text-gray-800 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.08}>
              <div className="group relative rounded-xl overflow-hidden bg-white shadow-xs hover:shadow-md transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-800 mt-1">{item.title}</h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
