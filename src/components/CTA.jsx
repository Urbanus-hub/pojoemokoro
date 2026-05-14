import AnimatedSection from './AnimatedSection';

export default function CTA() {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gray-900">
      {/* Subtle pink glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[280px] rounded-full blur-3xl"
          style={{ background: 'rgba(254,0,178,0.12)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-16 text-center">
        <AnimatedSection>
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Ready to get started?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight">
            Let's take care of your space.
          </h2>
          <p className="mt-4 text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Get in touch today — we're happy to listen, answer your questions,
            and give you an honest quote with no obligation.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="btn-primary !py-4 !px-10 !text-base"
            >
              Request a Quote
            </a>
            <a
              href="https://wa.me/254716827947?text=Hello%2C%20I'd%20like%20to%20enquire%20about%20your%20tile%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !py-4 !px-10 !text-base"
            >
              Chat on WhatsApp
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
