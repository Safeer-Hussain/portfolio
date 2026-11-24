import React from 'react';
import { OPEN_SOURCE_PACKAGES, HERO_DATA } from '../data/portfolioData';
import { PackageCard } from '../components/PackageCard';
import { OpenSourcePackage } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface PackagesSectionProps {
  onOpenCodeModal: (pkg: OpenSourcePackage) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenCodeModal }) => {
  return (
    <section id="packages" className="py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Open-Source Packages
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              Published Dart & Flutter packages targeting 160/160 pub.dev scores with pure Dart, WebAssembly (Wasm), and multi-platform support.
            </p>
          </div>

          <a
            href={HERO_DATA.socialLinks.pubDev}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0"
          >
            <span>View pub.dev profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 5-Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
