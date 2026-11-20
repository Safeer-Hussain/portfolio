import React, { useState } from 'react';
import { 
  Mail, 
  Shield, 
  MapPin, 
  Terminal, 
  Copy, 
  Check, 
  Github,
  Linkedin,
  Clock,
  ArrowRight
} from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyPgp = () => {
    navigator.clipboard.writeText(HERO_DATA.pgpKeyId);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(HERO_DATA.socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Engagement Scope & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
              <Terminal className="w-4 h-4" />
              <span>SECTION 07 // ARCHITECTURAL ENGAGEMENT</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Initiate System Architecture Advisory
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Currently available for Principal Systems Architecture advisory, high-velocity engineering squad leadership, offline-first mobile refactors, and mission-critical cross-platform systems engineering.
            </p>

            {/* Availability Badge */}
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div className="text-xs font-mono">
                <span className="text-emerald-400 font-bold block">STATUS: OPEN FOR ENGAGEMENTS</span>
                <span className="text-slate-400">Response SLA: &lt; 24 business hours</span>
              </div>
            </div>

            {/* Location & Timezone Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>HEADQUARTERS</span>
                </div>
                <div className="text-sm font-bold font-mono text-white">
                  {HERO_DATA.location}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>TIMEZONE & AVAILABILITY</span>
                </div>
                <div className="text-sm font-bold font-mono text-white">
                  {HERO_DATA.timeZone} (Flexible for Global Teams)
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Channels & Cryptographic Key */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-5">
              <h3 className="font-mono text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Direct Communication Channels:
              </h3>

              {/* Email Box */}
              <div className="p-4 rounded-xl bg-[#070A11] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>DIRECT INBOX</span>
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="hover:text-emerald-400 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <a
                  href={`mailto:${HERO_DATA.socialLinks.email}?subject=Architecture%20Advisory%20Inquiry%20-%20Safeer%20Hussain`}
                  className="font-mono text-xs sm:text-sm text-white hover:text-emerald-400 transition-colors block truncate font-semibold"
                >
                  {HERO_DATA.socialLinks.email}
                </a>
              </div>

              {/* PGP Key Fingerprint */}
              <div className="p-4 rounded-xl bg-[#070A11] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Shield className="w-3.5 h-3.5" />
                    <span>PGP KEY FINGERPRINT</span>
                  </span>
                  <button
                    onClick={handleCopyPgp}
                    type="button"
                    className="hover:text-emerald-400 transition-colors"
                    title="Copy PGP Fingerprint"
                  >
                    {copiedKey ? (
                      <span className="text-[10px] text-emerald-400 font-mono font-bold">COPIED</span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <code className="text-xs font-mono text-slate-300 block select-all">
                  {HERO_DATA.pgpKeyId}
                </code>
              </div>

              {/* Direct Mailto Button */}
              <a
                href={`mailto:${HERO_DATA.socialLinks.email}?subject=System%20Architecture%20Consultation`}
                className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-emerald-500/20"
              >
                <span>Dispatch Architecture Brief</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Social Channels Strip */}
              <div className="pt-2 flex items-center justify-center gap-4 text-xs font-mono">
                <a
                  href={HERO_DATA.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-slate-700">|</span>
                <a
                  href={HERO_DATA.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
