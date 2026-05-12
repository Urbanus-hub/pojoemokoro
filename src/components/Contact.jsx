import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const CONTACT_INFO = [
  { icon: Phone, label: 'Call Us', value: '+254 712 345 678', href: 'tel:+254712345678' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+254 712 345 678', href: 'https://wa.me/254712345678' },
  { icon: Mail, label: 'Email', value: 'info@liliantilesolutions.co.ke', href: 'mailto:info@liliantilesolutions.co.ke' },
  { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya', href: null },
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
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding bg-off-white">
      <div className="section-container">
        <AnimatedSection className="text-center mb-12">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            We'd love to hear about your project. Reach out and we'll get back to you promptly.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Form */}
          <AnimatedSection className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="e.g. John Kamau"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="e.g. 0712 345 678"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full !py-3.5">
                  Send Message
                </button>
                {submitted && (
                  <p className="text-sm text-green-600 text-center font-medium">
                    Thank you! We'll get back to you shortly.
                  </p>
                )}
              </div>
            </form>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.15} className="lg:col-span-2">
            <div className="space-y-5">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-gray-800">{value}</p>
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
