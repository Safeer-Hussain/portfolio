import React from 'react';
import { KEY_METRICS } from '../data/portfolioData';
import { Layers, Package, Clock, ShieldCheck } from 'lucide-react';

export const MetricsStrip: React.FC = () => {
  const getMetricIcon = (id: string) => {
    switch (id) {
      case 'apps':
        return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'packages':
        return <Package className="w-5 h-5 text-cyan-400" />;
      case 'experience':
        return <Clock className="w-5 h-5 text-emerald-400" />;
      case 'certifications':
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      default:
        return <Layers className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section className="relative z-10 -mt-6 sm:-mt-8 mb-12 sm:mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {KEY_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="glass-panel rounded-xl p-5 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {metric.value}
                </span>
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {getMetricIcon(metric.id)}
                </div>
              </div>

              <h3 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                {metric.label}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
