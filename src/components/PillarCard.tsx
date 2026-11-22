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
        return <Server className="w-5 h-5 text-sky-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-indigo-500" />;
      case 'GitMerge':
        return <GitMerge className="w-5 h-5 text-amber-500" />;
      default:
        return <Server className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <div className="executive-card p-6 flex flex-col justify-between hover:border-slate-400/50 dark:hover:border-slate-700/80 transition-all duration-300">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            {getIcon()}
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            {pillar.title}
          </h3>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 font-normal">
          {pillar.summary}
        </p>

        {/* Tech Keywords */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {pillar.techKeywords.map((keyword) => (
            <span
              key={keyword}
              className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
            >
              {keyword}
            </span>
          ))}
        </div>

        {/* Expandable Blueprint Details */}
        {isExpanded && (
          <div className="pt-4 mt-3 border-t border-slate-200 dark:border-slate-800 space-y-2.5 animate-in fade-in duration-200">
            <ul className="space-y-2">
              {pillar.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        type="button"
        className="mt-4 w-full py-2 px-3 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 flex items-center justify-center gap-1.5 transition-colors"
      >
        <span>{isExpanded ? 'Hide Architecture Details' : 'View Architecture Details'}</span>
        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};
