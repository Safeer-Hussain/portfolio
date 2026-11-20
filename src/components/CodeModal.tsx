import React, { useEffect, useState } from 'react';
import { X, Copy, Check, ExternalLink, Package, Terminal } from 'lucide-react';
import { OpenSourcePackage } from '../types';

interface CodeModalProps {
  pkg: OpenSourcePackage | null;
  onClose: () => void;
}

export const CodeModal: React.FC<CodeModalProps> = ({ pkg, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (pkg) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [pkg, onClose]);

  if (!pkg) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(pkg.codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#070A11]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl glass-panel shadow-2xl border border-cyan-500/30 overflow-hidden bg-[#0B0F19] text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-[#070A11]/90 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-mono font-bold text-white">
                  {pkg.name}
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  {pkg.runtime}
                </span>
              </div>
              <p className="text-xs font-mono text-slate-400 mt-0.5">
                Target Score: {pkg.pubScoreTarget} | Production Code Example
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white transition-colors"
            aria-label="Close Code Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Code Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>Example Usage snippet (`lib/main.dart`)</span>
            </span>

            <button
              onClick={handleCopyCode}
              type="button"
              className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              {copiedCode ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">COPIED SNIPPET</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          <div className="rounded-xl bg-[#070A11] border border-slate-800 p-4 font-mono text-xs text-cyan-200 overflow-x-auto shadow-inner leading-relaxed">
            <pre>
              <code>{pkg.codeSnippet}</code>
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-[#070A11] flex items-center justify-between">
          <a
            href={pkg.pubDevUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline"
          >
            <span>View Documentation on pub.dev</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            type="button"
            className="text-xs font-mono px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
