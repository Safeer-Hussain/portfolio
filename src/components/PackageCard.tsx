import React, { useState } from 'react';
import { 
  Boxes, 
  Copy, 
  Check, 
  ExternalLink, 
  Github, 
  CheckCircle,
  Code2
} from 'lucide-react';
import { OpenSourcePackage } from '../types';

interface PackageCardProps {
  pkg: OpenSourcePackage;
  onOpenCodeModal: (pkg: OpenSourcePackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, onOpenCodeModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(pkg.installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="executive-card p-6 flex flex-col justify-between hover:border-slate-400/50 dark:hover:border-slate-700/80 transition-all duration-300">
      <div>
        {/* Header Badges */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400">
              <Boxes className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 block">
                {pkg.pubScoreTarget} Target
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                v{pkg.version}
              </span>
            </div>
          </div>

          <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-md border ${
            pkg.runtime.includes('Pure Dart') 
              ? 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20' 
              : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
          }`}>
            {pkg.runtime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold font-mono text-slate-900 dark:text-white mb-1.5">
          {pkg.name}
        </h3>

        {/* Summary */}
        <p className="text-xs font-medium text-sky-600 dark:text-sky-400 mb-2">
          {pkg.summary}
        </p>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 font-normal">
          {pkg.description}
        </p>

        {/* Key Features */}
        <div className="space-y-1.5 mb-5">
          {pkg.keyFeatures.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
              <CheckCircle className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Copy-Install Box */}
        <div className="rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2.5 mb-4 flex items-center justify-between gap-2 font-mono text-xs">
          <code className="text-slate-700 dark:text-slate-300 truncate">
            <span className="text-sky-500 font-bold">$</span> {pkg.installCommand}
          </code>
          <button
            onClick={handleCopy}
            type="button"
            className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0"
            title="Copy command"
            aria-label="Copy install snippet"
          >
            {copied ? (
              <span className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                <Check className="w-3.5 h-3.5" />
                <span>Copied</span>
              </span>
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={() => onOpenCodeModal(pkg)}
            type="button"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-500/10 transition-colors"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>View Snippet</span>
          </button>

          <div className="flex items-center gap-2">
            <a
              href={pkg.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="GitHub Repo"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={pkg.pubDevUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 hover:bg-sky-100 dark:hover:bg-sky-500/20 transition-colors"
            >
              <span>pub.dev</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
