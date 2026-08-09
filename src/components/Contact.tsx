import React, { useState } from 'react';
import { personalDetails } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle2, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900/60 text-xs font-bold text-orange-700 dark:text-orange-300">
            <MessageSquare className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 dark:text-slate-100 tracking-tight">
            Get in <span className="text-[#F58220]">Touch</span> 🚀
          </h2>
          <p className="text-stone-600 dark:text-slate-400 text-base max-w-2xl mx-auto font-medium">
            Have a project in mind, a collaboration opportunity, or just want to connect? Send me a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Info & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/90 dark:bg-slate-800/90 border border-stone-200/90 dark:border-slate-700 rounded-3xl p-8 space-y-8 shadow-sm">
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-stone-900 dark:text-slate-100">Contact Information</h3>
                <p className="text-stone-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                  Feel free to reach out directly through email, phone, or connect on social networks.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${personalDetails.socials.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-orange-50/60 dark:bg-slate-900/80 border border-orange-200/60 dark:border-slate-700 hover:border-orange-400 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-slate-800 border border-orange-200/80 dark:border-slate-700 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-stone-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Email Me</span>
                    <span className="text-sm font-bold text-stone-900 dark:text-slate-100">{personalDetails.socials.email}</span>
                  </div>
                </a>

                {personalDetails.socials.phone && (
                  <a
                    href={`tel:${personalDetails.socials.phone}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 dark:bg-slate-900/60 border border-stone-200/80 dark:border-slate-700 hover:border-orange-300 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 flex items-center justify-center text-stone-700 dark:text-slate-300 group-hover:text-orange-600 group-hover:scale-110 transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-stone-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Phone</span>
                      <span className="text-sm font-bold text-stone-900 dark:text-slate-100">{personalDetails.socials.phone}</span>
                    </div>
                  </a>
                )}

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 dark:bg-slate-900/60 border border-stone-200/80 dark:border-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 flex items-center justify-center text-stone-500 dark:text-slate-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-stone-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Location</span>
                    <span className="text-sm font-bold text-stone-900 dark:text-slate-100">{personalDetails.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 dark:border-slate-700 space-y-3">
                <span className="text-xs uppercase tracking-widest text-stone-500 dark:text-slate-400 font-bold block">Social Channels</span>
                <div className="flex flex-wrap gap-2">
                  <a href={personalDetails.socials.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-100 dark:bg-slate-900 border border-stone-200 dark:border-slate-700 text-xs font-bold text-stone-700 dark:text-slate-300 hover:text-orange-600 transition-all">
                    <Github className="w-4 h-4" /><span>GitHub</span>
                  </a>
                  <a href={personalDetails.socials.linkedin} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-100 dark:bg-slate-900 border border-stone-200 dark:border-slate-700 text-xs font-bold text-stone-700 dark:text-slate-300 hover:text-orange-600 transition-all">
                    <Linkedin className="w-4 h-4" /><span>LinkedIn</span>
                  </a>
                  <a href={personalDetails.socials.instagram} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-100 dark:bg-slate-900 border border-stone-200 dark:border-slate-700 text-xs font-bold text-stone-700 dark:text-slate-300 hover:text-orange-600 transition-all">
                    <Instagram className="w-4 h-4" /><span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/90 dark:bg-slate-800/90 border border-stone-200/90 dark:border-slate-700 rounded-3xl p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-700 dark:text-slate-300 uppercase tracking-wider block">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Shree Skanda V"
                      className="w-full px-4 py-3 rounded-2xl bg-stone-50 dark:bg-slate-900 border border-stone-200 dark:border-slate-700 text-stone-900 dark:text-slate-100 text-sm font-medium focus:outline-none focus:border-[#F58220] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-700 dark:text-slate-300 uppercase tracking-wider block">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="shreeskanda2704@gmail.com"
                      className="w-full px-4 py-3 rounded-2xl bg-stone-50 dark:bg-slate-900 border border-stone-200 dark:border-slate-700 text-stone-900 dark:text-slate-100 text-sm font-medium focus:outline-none focus:border-[#F58220] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-700 dark:text-slate-300 uppercase tracking-wider block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello! I would love to discuss a project or role..."
                    className="w-full px-4 py-3 rounded-2xl bg-stone-50 dark:bg-slate-900 border border-stone-200 dark:border-slate-700 text-stone-900 dark:text-slate-100 text-sm font-medium focus:outline-none focus:border-[#F58220] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl bg-[#F58220] hover:bg-orange-600 text-white font-extrabold text-sm shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {submitted && (
                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
