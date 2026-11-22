import React from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Award, 
  Package, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Boxes 
} from 'lucide-react';
import { HERO_DATA, KEY_METRICS } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const getMetricIcon = (id: string) => {
    switch (id) {
      case 'apps':
        return <Layers className="w-5 h-5 text-sky-500 dark:text-sky-400" />;
      case 'packages':
        return <Boxes className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />;
      case 'experience':
        return <Clock className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />;
      case 'certifications':
        return <ShieldCheck className="w-5 h-5 text-sky-500 dark:text-sky-400" />;
      default:
        return <Layers className="w-5 h-5 text-sky-500 dark:text-sky-400" />;
    }
  };

  return (
    <section className="relative pt-16 pb-12 md:pt-24 md:pb-20 overflow-hidden subtle-mesh">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Role Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 dark:bg-sky-500/10 light:bg-sky-50 border border-sky-500/20 text-xs font-semibold text-sky-600 dark:text-sky-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          <span>{HERO_DATA.roleTag}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
          {HERO_DATA.headline}
        </h1>

        {/* Short Subtitle */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          {HERO_DATA.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all shadow-md shadow-sky-600/20 hover:shadow-lg hover:shadow-sky-600/30"
          >
            <span>Explore Featured Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={HERO_DATA.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all shadow-sm"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub</span>
          </a>
        </div>

        {/* Subtle Verification Links Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400">
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
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <a
            href={HERO_DATA.socialLinks.pubDev}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <Package className="w-3.5 h-3.5" />
            <span>pub.dev</span>
          </a>
        </div>

        {/* Clean 4-Stat Strip Below Hero */}
        <div className="mt-14 pt-10 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {KEY_METRICS.map((metric) => (
              <div 
                key={metric.id}
                className="executive-card p-4 sm:p-5 text-left flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {metric.value}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    {getMetricIcon(metric.id)}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {metric.label}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                    {metric.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
