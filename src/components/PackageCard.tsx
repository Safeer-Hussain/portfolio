import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  ExternalLink, 
  Github, 
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
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-slate-900/40 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-2.5">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
            {pkg.pubScoreTarget} Target
          </span>
          <span className="text-[11px] font-mono text-slate-400">
            v{pkg.version}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold font-mono text-slate-900 dark:text-white mb-1">
          {pkg.name}
        </h3>

        {/* Short Summary */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-4">
          {pkg.summary}
        </p>
      </div>

      <div>
        {/* Copy-Install Box */}
        <div className="rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 p-2.5 mb-4 flex items-center justify-between gap-2 font-mono text-xs">
          <code className="text-slate-700 dark:text-slate-300 truncate">
            <span className="text-sky-600 dark:text-sky-400 font-bold">$</span> {pkg.installCommand}
          </code>
          <button
            onClick={handleCopy}
            type="button"
            className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0"
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
        <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-200/80 dark:border-slate-800/80 text-xs">
          <button
            onClick={() => onOpenCodeModal(pkg)}
            type="button"
            className="inline-flex items-center gap-1 font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Example</span>
          </button>

          <div className="flex items-center gap-3">
            <a
              href={pkg.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              title="GitHub Repo"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={pkg.pubDevUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-sky-600 dark:text-sky-400 hover:underline"
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
