import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

import kitchen from '../assets/kitchen.png';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
  },
});

const TRUST_ITEMS = [
  'Clean, precise work',
  'Always on time',
  'Trusted by homeowners',
];

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative bg-white overflow-hidden"
    >
      {/* Subtle background accent */}
      <div
        className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full pointer-events-none -z-0"
        style={{
          background:
            'radial-gradient(circle, rgba(254,0,178,0.06) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 pt-28 md:pt-32 pb-16 md:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Text ─────────────────────────────────── */}
          <div>
            {/* Company badge */}
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-primary-50 border border-primary/20 rounded-full px-4 py-1.5 mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                Pojoemokoro Enterprise
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp(0.1)}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-gray-900 leading-[1.1] tracking-tight font-heading"
            >
              Beautiful Tiles, <br />
              <span className="text-primary">Perfectly Laid</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
              className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg font-medium"
            >
              We do neat, fast, and reliable tile work for your home or business. No mess, no stress—just a clean finish you will love.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                className="btn-primary !py-4 !px-8 !text-base gap-2"
              >
                Get a Quote
                <ArrowRight size={16} />
              </a>
              <a
                href="#projects"
                onClick={(e) => scrollTo(e, '#projects')}
                className="btn-outline !py-4 !px-8 !text-base"
              >
                View Our Work
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={fadeUp(0.4)}
              initial="hidden"
              animate="visible"
              className="mt-7 flex flex-wrap gap-x-5 gap-y-2"
            >
              {TRUST_ITEMS.map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-sm text-gray-600 font-medium">
                  <CheckCircle size={14} className="text-primary shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Image ───────────────────────────────── */}
          <motion.div
            variants={fadeUp(0.15)}
            initial="hidden"
            animate="visible"
            className="relative lg:pb-10"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={kitchen}
                alt="Professional tile installation work"
                className="w-full h-[340px] sm:h-[420px] lg:h-[500px] object-cover"
              />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute -bottom-5 left-4 lg:-bottom-8 lg:-left-8 bg-white rounded-xl shadow-xl border border-gray-100 p-4 md:p-5 flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <span className="text-primary font-black text-lg md:text-2xl leading-none">5+</span>
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm md:text-base leading-tight">
                  Years Experience
                </p>
                <p className="text-gray-500 font-medium text-xs md:text-sm mt-0.5">
                  100+ Projects Completed
                </p>
              </div>
            </motion.div>

            {/* Pink decorative blur */}
            <div
              className="absolute -top-8 -right-6 w-36 h-36 rounded-full blur-3xl -z-10 pointer-events-none"
              style={{ background: 'rgba(254,0,178,0.12)' }}
            />
          </motion.div>

        </div>
      </div>

      {/* Trust strip */}
      <div className="border-t border-gray-100 bg-gray-50/60">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {[
              { stat: 'Wall & Floor Tiling', note: 'Any surface, any room' },
              { stat: 'Granite & Marble', note: 'Precision stone fixing' },
              { stat: 'Grouting & Repair', note: 'We fix it right' },
            ].map(({ stat, note }, i) => (
              <motion.div
                key={stat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="flex flex-col items-center justify-center py-4 sm:py-5 text-center px-4"
              >
                <span className="text-sm font-bold text-gray-800 font-heading">{stat}</span>
                <span className="text-xs text-gray-400 mt-0.5">{note}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
