import React, { useState } from 'react';
import { 
  Package, 
  Copy, 
  Check, 
  ExternalLink, 
  Github, 
  Code2, 
  CheckCircle,
  Award
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
    <div className="glass-panel rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 group">
      <div>
        {/* Header Badges */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/60 transition-colors">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                <span>{pkg.pubScoreTarget} Target</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                v{pkg.version}
              </span>
            </div>
          </div>

          <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
            pkg.runtime.includes('Pure Dart') 
              ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' 
              : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
          }`}>
            {pkg.runtime}
          </span>
        </div>

        {/* Package Title */}
        <h3 className="text-lg font-mono font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors mb-2">
          {pkg.name}
        </h3>

        {/* Summary & Description */}
        <p className="text-xs font-mono text-emerald-400/90 dark:text-emerald-400/90 light:text-emerald-600 mb-2">
          {pkg.summary}
        </p>

        <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-4">
          {pkg.description}
        </p>

        {/* Key Features */}
        <div className="space-y-1.5 mb-5">
          {pkg.keyFeatures.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 font-sans">
              <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Copy-Install Terminal Box */}
        <div className="rounded-lg bg-[#070A11] border border-slate-800 p-2.5 mb-4 flex items-center justify-between gap-2 font-mono text-xs">
          <code className="text-slate-300 truncate">
            <span className="text-emerald-400">$</span> {pkg.installCommand}
          </code>
          <button
            onClick={handleCopy}
            type="button"
            className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-emerald-400 transition-colors shrink-0 focus:outline-none"
            title="Copy command to clipboard"
            aria-label="Copy install command"
          >
            {copied ? (
              <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                <Check className="w-3.5 h-3.5" />
                <span>COPIED</span>
              </span>
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Links & Playground Trigger */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-800/80">
          <button
            onClick={() => onOpenCodeModal(pkg)}
            type="button"
            className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 py-1.5 px-2.5 rounded bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-colors"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Code Snippet</span>
          </button>

          <div className="flex items-center gap-2">
            <a
              href={pkg.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
              title="GitHub Repository"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={pkg.pubDevUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-mono text-slate-300 hover:text-cyan-400 py-1.5 px-2.5 rounded bg-slate-800/60 hover:bg-slate-800 transition-colors"
            >
              <span>pub.dev</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
