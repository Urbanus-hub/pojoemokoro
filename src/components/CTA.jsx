import AnimatedSection from './AnimatedSection';

export default function CTA() {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 md:py-24 bg-gray-900 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative section-container px-5 md:px-8 lg:px-16 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading tracking-tight">
            Need your tiles done right?
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
            Get in touch today for a free quote. We serve homes and businesses across Nairobi.
          </p>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="btn-primary mt-8 !py-4 !px-10 !text-base"
          >
            Request Quote
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
