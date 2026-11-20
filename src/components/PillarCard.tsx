import React, { useState } from 'react';
import { Server, Cpu, ShieldCheck, GitMerge, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { EngineeringPillar } from '../types';

interface PillarCardProps {
  pillar: EngineeringPillar;
}

export const PillarCard: React.FC<PillarCardProps> = ({ pillar }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getIcon = () => {
    switch (pillar.iconName) {
      case 'Server':
        return <Server className="w-6 h-6 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'GitMerge':
        return <GitMerge className="w-6 h-6 text-cyan-400" />;
      default:
        return <Server className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 group">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 flex items-center justify-center group-hover:scale-105 transition-transform">
          {getIcon()}
        </div>
        <span className="font-mono text-[11px] px-2 py-1 rounded bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-slate-400 dark:text-slate-400 light:text-slate-600 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300">
          CORE PILLAR
        </span>
      </div>

      <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-emerald-400 transition-colors mb-2">
        {pillar.title}
      </h3>

      <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-4">
        {pillar.summary}
      </p>

      {/* Tech Keywords */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {pillar.techKeywords.map((keyword) => (
          <span
            key={keyword}
            className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-cyan-400 dark:text-cyan-400 light:text-cyan-700 border border-slate-800 dark:border-slate-800 light:border-slate-300"
          >
            {keyword}
          </span>
        ))}
      </div>

      {/* Interactive Expandable Architecture Details */}
      {isExpanded && (
        <div className="pt-4 mt-3 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 space-y-2.5 animate-in fade-in duration-200">
          <p className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
            Architecture Blueprint Specifications:
          </p>
          <ul className="space-y-2">
            {pillar.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        type="button"
        className="mt-3 w-full py-1.5 px-3 rounded text-xs font-mono text-slate-400 hover:text-emerald-400 bg-slate-900/40 hover:bg-slate-800/60 border border-slate-800/60 flex items-center justify-center gap-1.5 transition-colors focus:outline-none"
      >
        <span>{isExpanded ? 'Collapse Blueprint Details' : 'Expand Blueprint Details'}</span>
        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};
