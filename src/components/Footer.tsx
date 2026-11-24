import React from 'react';
import { 
  Github, 
  Linkedin, 
  Award, 
  Mail, 
  MapPin, 
  ArrowUp,
  ArrowUpRight
} from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950 pt-16 pb-12 text-slate-600 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple & Clean Contact Box */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800/90 bg-slate-50/60 dark:bg-slate-900/40 p-8 sm:p-10 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Get in Touch
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              Available for Principal Systems Architecture advisory, mobile app engineering, and engineering leadership engagements.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Based in {HERO_DATA.location} ({HERO_DATA.timeZone}) · Open to remote teams worldwide</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${HERO_DATA.socialLinks.email}?subject=Architecture%20Inquiry%20-%20Safeer%20Hussain`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-medium text-xs transition-colors shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send Email</span>
            </a>

            <a
              href={HERO_DATA.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-medium text-xs transition-colors shadow-sm"
            >
              <Linkedin className="w-3.5 h-3.5 text-sky-500" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800 dark:text-slate-200">{HERO_DATA.name}</span>
            <span>·</span>
            <span>System Architect & App Engineer</span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={HERO_DATA.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={HERO_DATA.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={HERO_DATA.socialLinks.credly}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Credly</span>
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1 ml-2"
              title="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
