import React from 'react';
import { OPEN_SOURCE_PACKAGES } from '../data/portfolioData';
import { PackageCard } from '../components/PackageCard';
import { OpenSourcePackage } from '../types';
import { Boxes, ExternalLink } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface PackagesSectionProps {
  onOpenCodeModal: (pkg: OpenSourcePackage) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenCodeModal }) => {
  return (
    <section id="packages" className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 mb-3">
              <Boxes className="w-3.5 h-3.5 text-sky-500" />
              <span>Modular & Wasm-Ready</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Published Open-Source Packages
            </h2>

            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Modular, zero-dependency pure Dart and Flutter multi-platform libraries targeting 160/160 pub.dev quality scores—engineered for mathematical precision, LLM token backpressure, and offline fault injection.
            </p>
          </div>

          <a
            href={HERO_DATA.socialLinks.pubDev}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:border-sky-500 transition-colors shadow-sm shrink-0"
          >
            <span>View pub.dev Publisher</span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* 5-Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {OPEN_SOURCE_PACKAGES.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onOpenCodeModal={onOpenCodeModal}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
