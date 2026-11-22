import React from 'react';
import { ENGINEERING_PILLARS } from '../data/portfolioData';
import { PillarCard } from '../components/PillarCard';
import { Terminal } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  return (
    <section id="expertise" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 mb-3">
            <Terminal className="w-3.5 h-3.5 text-sky-500" />
            <span>Core Disciplines</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Core Expertise & Architecture Principles
          </h2>

          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Four foundational engineering disciplines tested across real-world enterprise constraints—ensuring deterministic logic, biometric cryptographic security, offline-first continuity, and automated release quality.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {ENGINEERING_PILLARS.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};
