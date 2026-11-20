import React from 'react';
import { 
  Terminal, 
  Github, 
  Linkedin, 
  Award, 
  Package, 
  Shield, 
  ArrowUp,
  GitCommit
} from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#070A11] border-t border-slate-800/80 pt-12 pb-8 font-mono text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800/80">
          {/* Identity & Core Principle */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-sm tracking-tight">
                {HERO_DATA.name}
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {HERO_DATA.callsign}
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md font-sans">
              Principal System Architect & App Engineer building resilient, offline-first applications, native hardware bridges, and automated release engineering pipelines.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{HERO_DATA.currentAvailability}</span>
              </span>
            </div>
          </div>

          {/* Verification & Social Links */}
          <div className="space-y-2">
            <span className="text-slate-300 font-semibold uppercase tracking-wider text-[11px] block mb-2">
              Provenance & Verification
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href={HERO_DATA.socialLinks.credly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Credly Certified Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={HERO_DATA.socialLinks.pubDev}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <Package className="w-3.5 h-3.5 text-cyan-400" />
                  <span>pub.dev Packages (5)</span>
                </a>
              </li>
              <li>
                <a
                  href={HERO_DATA.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repositories</span>
                </a>
              </li>
              <li>
                <a
                  href={HERO_DATA.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn Network</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Security & Cryptography Box */}
          <div className="space-y-2">
            <span className="text-slate-300 font-semibold uppercase tracking-wider text-[11px] block mb-2">
              Cryptographic Footprint
            </span>
            <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
                <Shield className="w-3.5 h-3.5" />
                <span>GPG KEY ID:</span>
              </div>
              <code className="text-[11px] text-slate-300 block select-all font-mono">
                {HERO_DATA.pgpKeyId}
              </code>
              <p className="text-[10px] text-slate-500 font-sans">
                Commits and releases are cryptographically signed.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 text-slate-500 text-[11px]">
            <GitCommit className="w-3.5 h-3.5 text-emerald-400" />
            <span>Deployment Target: GitHub Pages (`safeer-hussain.github.io`)</span>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 py-1.5 px-3 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors text-slate-300"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
