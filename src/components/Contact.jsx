import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '0716 827 947',
    href: 'tel:+254716827947',
  },
  {
    icon: Phone,
    label: 'Alternative',
    value: '0780 395 624',
    href: 'tel:+254780395624',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '0716 827 947',
    href: 'https://wa.me/254716827947?text=Hello%2C%20I\'d%20like%20to%20enquire%20about%20your%20tile%20services.',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'liliannaodeny@gmail.com',
    href: 'mailto:liliannaodeny@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'We come to you — anywhere you need us',
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-off-white">
      <div className="section-container">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Contact</p>
          <h2 className="section-title">It's Easy to Reach Us</h2>
          <p className="section-subtitle mx-auto">
            Tell us about your project and we'll get back to you quickly. No pressure, no obligation.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Form */}
          <AnimatedSection className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-xs">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. John Mwangi"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="e.g. 0712 345 678"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What do you need done? Where are you located?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full !py-3.5">
                  Send Message
                </button>
                {submitted && (
                  <p className="text-sm text-green-600 text-center font-medium">
                    ✓ Thank you! We'll get back to you as soon as possible.
                  </p>
                )}
              </div>
            </form>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.15} className="lg:col-span-2">
            <div className="space-y-4">
              <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                Prefer to talk directly? Reach out via phone, WhatsApp, or email —
                we're here and happy to help.
              </p>
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100
                             hover:border-primary-light transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gray-600">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
