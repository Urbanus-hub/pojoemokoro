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
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Our Work</p>
          <h2 className="section-title">A Look at Spaces We've Transformed</h2>
          <p className="section-subtitle mx-auto">
            Every project is a chance to make someone's space feel better. Here are a few we're proud of.
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
                  ? 'bg-primary text-white shadow-sm'
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
            <AnimatedSection key={item.id} delay={i * 0.07}>
              <div className="group relative rounded-xl overflow-hidden bg-white shadow-xs hover:shadow-md
                              transition-shadow duration-300 cursor-default">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/30 transition-colors duration-300" />
                <div className="p-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
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
