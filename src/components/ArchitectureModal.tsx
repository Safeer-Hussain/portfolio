import React, { useEffect, useState } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Database, 
  Terminal, 
  CheckCircle2
} from 'lucide-react';
import { ProjectArchitecture } from '../types';

interface ArchitectureModalProps {
  project: ProjectArchitecture | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'blueprint' | 'highlights' | 'overview'>('blueprint');

  // Handle ESC key to dismiss modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#070A11]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl glass-panel shadow-2xl border border-emerald-500/30 overflow-hidden bg-[#0B0F19] text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-[#070A11]/90 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                {project.name}
              </span>
              <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/80">
                {project.category}
              </span>
              <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
                {project.stateManagement}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
            aria-label="Close Architecture Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-800 bg-[#0B0F19] text-xs font-mono overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('blueprint')}
            className={`pb-2.5 px-3 border-b-2 font-medium transition-colors ${
              activeTab === 'blueprint'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Architecture Layers (4-Tier)
          </button>
          <button
            onClick={() => setActiveTab('highlights')}
            className={`pb-2.5 px-3 border-b-2 font-medium transition-colors ${
              activeTab === 'highlights'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Engineering Highlights & Metrics
          </button>
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2.5 px-3 border-b-2 font-medium transition-colors ${
              activeTab === 'overview'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Overview & Problem Space
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm">
          {activeTab === 'blueprint' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
                  <Terminal className="w-4 h-4" />
                  <span>1. Presentation Layer (360dp-Safe Adaptive UI)</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm pl-6 border-l-2 border-cyan-500/30">
                  {project.architectureLayers.presentation}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>2. Domain Layer (Pure Business Rules & State FSM)</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm pl-6 border-l-2 border-emerald-500/30">
                  {project.architectureLayers.domain}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider">
                  <Database className="w-4 h-4" />
                  <span>3. Data & Persistence Layer (Offline SQLite & Cryptography)</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm pl-6 border-l-2 border-amber-500/30">
                  {project.architectureLayers.data}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-violet-400 font-mono text-xs font-semibold uppercase tracking-wider">
                  <Cpu className="w-4 h-4" />
                  <span>4. Native Hardware Bridge & Sensors</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm pl-6 border-l-2 border-violet-500/30">
                  {project.architectureLayers.hardware}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'highlights' && (
            <div className="space-y-6">
              {project.metrics && project.metrics.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                    Validated Performance & Architectural Metrics
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <span className="text-[11px] font-mono text-slate-400 block mb-1">
                          {metric.label}
                        </span>
                        <span className="text-base font-bold font-mono text-white">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-mono text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                  Technical Implementation Highlights
                </h4>
                <div className="space-y-2.5">
                  {project.keyHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Complete Technology Matrix
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-cyan-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 leading-relaxed text-slate-300 text-sm">
                {project.description}
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                <h4 className="font-mono text-xs text-emerald-400 uppercase tracking-wider mb-2">
                  Primary Architectural Objective
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Engineered with strict zero-runtime crash guarantees, deterministic offline-first storage pipelines, and native hardware sensor bridges. Tested against fault injection suites to guarantee high reliability even under unstable 2G/3G network conditions.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Direct Links */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-[#070A11] flex items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-400 hidden sm:block">
            Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">ESC</kbd> to exit
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href={project.releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              <span>GitHub Releases</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono px-4 py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 transition-colors font-semibold"
            >
              <Github className="w-4 h-4" />
              <span>Inspect Source Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
