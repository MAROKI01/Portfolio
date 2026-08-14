import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Mail, Copy, Check, Send, MessageSquare, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../components/Icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ntahadout@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  const CONTACT_CHANNELS = [
    {
      id: 'linkedin',
      title: 'LINKEDIN',
      detail: 'Noureddine Tahadout',
      subtitle: 'Professional Profile & Network Connection',
      icon: LinkedinIcon,
      url: 'https://www.linkedin.com/in/noureddine-tahadout-7465b51bb/',
      badge: 'RECOMMENDED FOR RECRUITERS',
      actionText: 'CONNECT ON LINKEDIN'
    },
    {
      id: 'email',
      title: 'EMAIL (GMAIL)',
      detail: 'ntahadout@gmail.com',
      subtitle: 'Direct Inquiries & Engineering Proposals',
      icon: Mail,
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=ntahadout@gmail.com',
      badge: 'DIRECT INBOX',
      actionText: 'OPEN GMAIL IN BROWSER'
    },
    {
      id: 'whatsapp',
      title: 'WHATSAPP',
      detail: '0623219055',
      subtitle: 'Instant Messaging & Direct Communication',
      icon: WhatsappIcon,
      url: 'https://wa.me/212623219055?text=Hello%20Noureddine%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.',
      badge: 'INSTANT CHAT',
      actionText: 'OPEN WHATSAPP CHAT'
    },
    {
      id: 'github',
      title: 'GITHUB',
      detail: 'MAROKI01',
      subtitle: 'Source Code Repositories & Open Source Work',
      icon: GithubIcon,
      url: 'https://github.com/MAROKI01',
      badge: 'CODE REPOS',
      actionText: 'VIEW GITHUB PROFILE'
    }
  ];

  return (
    <div className="w-full bg-[#F8F9FA] dark:bg-[#050505] text-[#0F0F12] dark:text-white min-h-screen pt-28 sm:pt-36 pb-24 transition-colors duration-300">
      {/* Background Graphic & Line Grid */}
      <div className="absolute inset-0 tech-line-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-200/30 dark:bg-red-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16 relative z-10">
        {/* Back Navigation Bar */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-montserrat font-semibold tracking-widest text-neutral-700 dark:text-white/60 hover:text-black dark:hover:text-white uppercase transition-colors group border border-black/10 dark:border-white/10 hover:border-red-500/50 bg-white dark:bg-[#0A0A0A] px-4 py-2 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-red-600 dark:text-red-500 group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO PORTFOLIO</span>
          </Link>
        </div>

        {/* Header Section */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <h2 className="font-montserrat font-extrabold text-xs sm:text-sm text-red-700 dark:text-red-500 tracking-[0.25em] uppercase">
              DIRECT CHANNELS
            </h2>
          </div>

          <h1 className="font-montserrat font-black uppercase text-4xl sm:text-5xl lg:text-6xl text-[#0F0F12] dark:text-white tracking-tight leading-none">
            GET IN TOUCH WITH NOUREDDINE
          </h1>

          <p className="font-montserrat text-sm sm:text-base text-neutral-600 dark:text-white/70 leading-relaxed pt-2">
            Interested in software engineering, AI systems, technical consultations, or project collaborations? Select any direct channel below to get in touch.
          </p>
        </div>

        {/* 4 Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CONTACT_CHANNELS.map((channel) => {
            const ChannelIcon = channel.icon;
            return (
              <div
                key={channel.id}
                className="bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/12 hover:border-red-600/60 dark:hover:border-red-600/60 p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between group shadow-md dark:shadow-none hover:shadow-xl red-glow-hover relative overflow-hidden"
              >
                {/* Subtle Red Ambient Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-red-100/40 dark:bg-red-950/30 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-6 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-500/40 text-red-600 dark:text-red-400 rounded">
                        <ChannelIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-black text-xl text-[#0F0F12] dark:text-white uppercase tracking-tight">
                          {channel.title}
                        </h3>
                        <span className="font-mono text-[10px] text-red-600 dark:text-red-400/90 font-semibold tracking-widest uppercase">
                          {channel.badge}
                        </span>
                      </div>
                    </div>

                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${channel.title}`}
                      className="p-2 border border-black/10 dark:border-white/15 bg-neutral-100 dark:bg-black/50 text-neutral-700 dark:text-white/60 group-hover:text-black dark:group-hover:text-white group-hover:border-red-500 transition-colors"
                    >
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                  {/* Detail & Description */}
                  <div className="space-y-2 mb-8">
                    <div className="font-montserrat font-bold text-lg text-[#0F0F12] dark:text-white truncate">
                      {channel.detail}
                    </div>
                    <p className="font-montserrat text-xs text-neutral-600 dark:text-white/60 leading-relaxed">
                      {channel.subtitle}
                    </p>
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="pt-4 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center gap-3">
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-red-900 hover:bg-red-800 text-white px-5 py-3 font-montserrat font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(178,31,53,0.4)] flex items-center justify-center gap-2 border border-red-500/40 group/btn"
                  >
                    <span>{channel.actionText}</span>
                    <ArrowUpRight className="w-4 h-4 text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>

                  {channel.id === 'email' && (
                    <button
                      onClick={handleCopyEmail}
                      title="Copy Email Address to Clipboard"
                      className="p-3 border border-black/15 dark:border-white/15 bg-neutral-100 dark:bg-[#050505] hover:border-red-500 text-neutral-800 dark:text-white transition-colors cursor-pointer flex items-center justify-center rounded"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 text-neutral-600 dark:text-white/70" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Message Form Section */}
        <div className="bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/12 p-8 sm:p-12 relative overflow-hidden shadow-md">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-200/20 dark:bg-red-950/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-8 relative z-10">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-red-600 dark:text-red-400 tracking-widest uppercase">
                <MessageSquare className="w-4 h-4 text-red-600 dark:text-red-500" />
                <span>QUICK MESSAGE</span>
              </div>
              <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-[#0F0F12] dark:text-white uppercase tracking-tight">
                SEND A DIRECT MESSAGE
              </h3>
              <p className="font-montserrat text-xs sm:text-sm text-neutral-600 dark:text-white/60">
                Prefer sending a message straight from this page? Fill out the brief form below.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 border border-green-500/40 bg-green-50 dark:bg-green-950/20 text-green-800 dark:text-green-300 rounded space-y-3">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <span className="font-montserrat font-extrabold text-base uppercase">MESSAGE RECEIVED</span>
                </div>
                <p className="font-montserrat text-xs sm:text-sm leading-relaxed">
                  Thank you, <strong className="text-green-900 dark:text-green-200">{formData.name}</strong>! Your message has been recorded. Noureddine will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="font-montserrat text-xs font-bold underline cursor-pointer pt-2 uppercase tracking-wider block"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-montserrat text-xs font-bold text-neutral-700 dark:text-white/80 uppercase tracking-widest mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-100 dark:bg-[#050505] border border-black/10 dark:border-white/15 focus:border-red-600 dark:focus:border-red-500 px-4 py-3 text-sm text-[#0F0F12] dark:text-white outline-none font-montserrat transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-montserrat text-xs font-bold text-neutral-700 dark:text-white/80 uppercase tracking-widest mb-2">
                      YOUR EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-neutral-100 dark:bg-[#050505] border border-black/10 dark:border-white/15 focus:border-red-600 dark:focus:border-red-500 px-4 py-3 text-sm text-[#0F0F12] dark:text-white outline-none font-montserrat transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-montserrat text-xs font-bold text-neutral-700 dark:text-white/80 uppercase tracking-widest mb-2">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Engineering Consultation"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-neutral-100 dark:bg-[#050505] border border-black/10 dark:border-white/15 focus:border-red-600 dark:focus:border-red-500 px-4 py-3 text-sm text-[#0F0F12] dark:text-white outline-none font-montserrat transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-montserrat text-xs font-bold text-neutral-700 dark:text-white/80 uppercase tracking-widest mb-2">
                    YOUR MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project, question, or proposal..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-100 dark:bg-[#050505] border border-black/10 dark:border-white/15 focus:border-red-600 dark:focus:border-red-500 p-4 text-sm text-[#0F0F12] dark:text-white outline-none font-montserrat transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-red-900 hover:bg-red-800 text-white px-8 py-4 font-montserrat font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(178,31,53,0.5)] flex items-center gap-3 border border-red-500/40 group cursor-pointer"
                >
                  <Send className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  <span>TRANSMIT MESSAGE</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
