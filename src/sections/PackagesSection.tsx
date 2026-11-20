import React from 'react';
import { OPEN_SOURCE_PACKAGES } from '../data/portfolioData';
import { PackageCard } from '../components/PackageCard';
import { OpenSourcePackage } from '../types';
import { Package, ExternalLink } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface PackagesSectionProps {
  onOpenCodeModal: (pkg: OpenSourcePackage) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenCodeModal }) => {
  return (
    <section id="packages" className="py-16 sm:py-20 bg-[#070A11]/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
              <Package className="w-4 h-4" />
              <span>SECTION 02 // OPEN-SOURCE LIBRARIES & WASM ENGINES</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Published pub.dev Packages
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
              Zero-dependency, pure Dart, WebAssembly (Wasm)-ready, and Flutter multi-platform packages engineered for high mathematical accuracy, backpressure streaming, and deterministic offline resilience.
            </p>
          </div>

          <a
            href={HERO_DATA.socialLinks.pubDev}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono shrink-0 transition-colors"
          >
            <span>View All Packages on pub.dev</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Packages Grid */}
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
