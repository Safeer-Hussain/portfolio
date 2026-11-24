import React from 'react';
import { ArrowRight, Github, Linkedin, Award, ArrowUpRight } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle status tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          <span>System Architect & App Engineer</span>
        </div>

        {/* Concise Headline */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
          {HERO_DATA.headline}
        </h1>

        {/* Short 2-Line Intro */}
        <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
          System Architect & App Engineer across AI, cybersecurity, cloud/DevOps, offline-first systems, and cross-platform mobile apps.
        </p>

        {/* Actions & CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-medium text-sm transition-all shadow-sm"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={HERO_DATA.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-medium text-sm transition-all shadow-sm"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Clean Links Row */}
        <div className="mt-10 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
          <a
            href={HERO_DATA.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <a
            href={HERO_DATA.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <a
            href={HERO_DATA.socialLinks.credly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Credly</span>
          </a>
        </div>
      </div>
    </section>
  );
};
