import React from 'react';
import { ENGINEERING_PILLARS } from '../data/portfolioData';
import { PillarCard } from '../components/PillarCard';
import { Terminal } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  return (
    <section id="pillars" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
            <Terminal className="w-4 h-4" />
            <span>SECTION 01 // FOUNDATIONAL DISCIPLINES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Engineering Pillars
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            Architectural tenets rigorously proven across high-throughput production ecosystems, from deterministic state engines and cryptographic sealing to automated CI/CD test gates.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ENGINEERING_PILLARS.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};
