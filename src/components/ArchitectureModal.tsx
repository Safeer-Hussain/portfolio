import React, { useEffect, useState } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Database, 
  Terminal, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Smartphone
} from 'lucide-react';
import { ProjectArchitecture } from '../types';

interface ArchitectureModalProps {
  project: ProjectArchitecture | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'screens' | 'blueprint' | 'highlights'>('screens');
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setActiveScreenIndex(0);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  const screenshots = project.screenshots || [];

  const getScreenshotUrl = (filename: string) => {
    const baseUrl = import.meta.env.BASE_URL.endsWith('/') 
      ? import.meta.env.BASE_URL 
      : `${import.meta.env.BASE_URL}/`;
    return `${baseUrl}screenshots/${project.folder}/${filename}`;
  };

  const handlePrevScreen = () => {
    setActiveScreenIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNextScreen = () => {
    setActiveScreenIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl bg-white dark:bg-slate-950 shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden text-slate-800 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800">
                {project.stateManagement}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800">
                {project.nativeBridge}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              {project.valueProposition}
            </p>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-xl bg-slate-200/60 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0"
            aria-label="Close Case Study Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs font-semibold overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('screens')}
            className={`pb-3 px-3 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'screens'
                ? 'border-sky-500 text-sky-600 dark:text-sky-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>UI Screenshots & Gallery ({screenshots.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('blueprint')}
            className={`pb-3 px-3 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'blueprint'
                ? 'border-sky-500 text-sky-600 dark:text-sky-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>4-Tier Architecture Blueprint</span>
          </button>

          <button
            onClick={() => setActiveTab('highlights')}
            className={`pb-3 px-3 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'highlights'
                ? 'border-sky-500 text-sky-600 dark:text-sky-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Highlights & Performance Metrics</span>
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-grow">
          {activeTab === 'screens' && (
            <div className="space-y-6">
              {/* Interactive High-Res Screen Showcase */}
              <div className="relative rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center justify-center min-h-[380px]">
                {/* Phone Frame */}
                <div className="relative w-[220px] sm:w-[260px] aspect-[9/18.5] rounded-[28px] p-2.5 bg-slate-900 dark:bg-slate-950 shadow-2xl border-2 border-slate-300 dark:border-slate-700 overflow-hidden">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-slate-900 dark:bg-slate-950 rounded-full z-20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 inline-block" />
                  </div>

                  <div className="w-full h-full rounded-[20px] overflow-hidden bg-slate-900 flex items-center justify-center">
                    {screenshots.length > 0 && (
                      <img
                        src={getScreenshotUrl(screenshots[activeScreenIndex])}
                        alt={`${project.name} UI Screen ${activeScreenIndex + 1}`}
                        className="w-full h-full object-cover object-top"
                      />
                    )}
                  </div>
                </div>

                {/* Left / Right Carousel Controls */}
                {screenshots.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevScreen}
                      type="button"
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-md border border-slate-200 dark:border-slate-700 hover:bg-sky-50 dark:hover:bg-slate-700 hover:text-sky-600 transition-all"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={handleNextScreen}
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-md border border-slate-200 dark:border-slate-700 hover:bg-sky-50 dark:hover:bg-slate-700 hover:text-sky-600 transition-all"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails Strip */}
              {screenshots.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                  {screenshots.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveScreenIndex(idx)}
                      type="button"
                      className={`relative w-16 h-28 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                        idx === activeScreenIndex 
                          ? 'border-sky-500 scale-105 shadow-md' 
                          : 'border-slate-200 dark:border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={getScreenshotUrl(s)}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Product Overview Summary */}
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                  Product Overview & Problem Space
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'blueprint' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-semibold text-xs uppercase tracking-wider">
                  <Terminal className="w-4 h-4" />
                  <span>1. Presentation Layer (360dp-Safe Adaptive UI)</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm pl-6 border-l-2 border-sky-500/40">
                  {project.architectureLayers.presentation}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-xs uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>2. Domain Layer (Pure Business Rules & State Engine)</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm pl-6 border-l-2 border-emerald-500/40">
                  {project.architectureLayers.domain}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-xs uppercase tracking-wider">
                  <Database className="w-4 h-4" />
                  <span>3. Data & Persistence Layer (Offline SQLite & Cryptography)</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm pl-6 border-l-2 border-indigo-500/40">
                  {project.architectureLayers.data}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold text-xs uppercase tracking-wider">
                  <Cpu className="w-4 h-4" />
                  <span>4. Native Hardware Bridge & Sensors</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm pl-6 border-l-2 border-purple-500/40">
                  {project.architectureLayers.hardware}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'highlights' && (
            <div className="space-y-6">
              {project.metrics && project.metrics.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                    Validated Performance & Production Metrics
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <span className="text-[11px] text-slate-500 block mb-1">
                          {metric.label}
                        </span>
                        <span className="text-base font-bold font-mono text-slate-900 dark:text-white">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                  Key Technical Highlights & Resilience Engineering
                </h4>
                <div className="space-y-2.5">
                  {project.keyHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Complete Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with External Links */}
        <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex items-center justify-between gap-4">
          <span className="text-xs text-slate-500 hidden sm:block">
            Press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">ESC</kbd> to exit
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href={project.releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            >
              <span>Releases</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white transition-colors shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
