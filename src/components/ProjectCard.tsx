import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Github, 
  Layers, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { ProjectArchitecture } from '../types';

interface ProjectCardProps {
  project: ProjectArchitecture;
  onOpenModal: (project: ProjectArchitecture) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const [screenIndex, setScreenIndex] = useState(0);

  const screenshots = project.screenshots && project.screenshots.length > 0 
    ? project.screenshots 
    : [];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScreenIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScreenIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const getScreenshotUrl = (filename: string) => {
    const baseUrl = import.meta.env.BASE_URL.endsWith('/') 
      ? import.meta.env.BASE_URL 
      : `${import.meta.env.BASE_URL}/`;
    return `${baseUrl}screenshots/${project.folder}/${filename}`;
  };

  return (
    <div className="executive-card overflow-hidden flex flex-col justify-between group hover:border-slate-400/40 dark:hover:border-slate-700/80 transition-all duration-300">
      <div>
        {/* Top: Crisp Mobile UI Showcase with in-card carousel */}
        <div className="relative w-full bg-slate-100 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center min-h-[300px]">
          {/* Subtle phone device frame */}
          <div className="relative w-[190px] sm:w-[210px] aspect-[9/18.5] rounded-[24px] p-2 bg-slate-800 dark:bg-slate-950 shadow-2xl border-2 border-slate-300/80 dark:border-slate-700/80 flex flex-col items-center justify-center overflow-hidden">
            {/* Dynamic camera punch-hole */}
            <div className="absolute top-3 w-12 h-3.5 bg-slate-900 dark:bg-slate-950 rounded-full z-20 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700 inline-block" />
            </div>

            {/* Actual Screenshot */}
            <div className="w-full h-full rounded-[18px] overflow-hidden bg-slate-900 flex items-center justify-center relative">
              {screenshots.length > 0 ? (
                <img
                  src={getScreenshotUrl(screenshots[screenIndex])}
                  alt={`${project.name} UI Screen ${screenIndex + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-opacity duration-300"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-500 p-4 text-center text-xs">
                  <Layers className="w-6 h-6 mb-2 opacity-50" />
                  <span>UI Preview</span>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Left/Right Switcher Arrows */}
          {screenshots.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                type="button"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 shadow-md border border-slate-200 dark:border-slate-700 hover:bg-sky-50 dark:hover:bg-slate-800 hover:text-sky-600 transition-all opacity-90 sm:opacity-0 group-hover:opacity-100 z-30"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 shadow-md border border-slate-200 dark:border-slate-700 hover:bg-sky-50 dark:hover:bg-slate-800 hover:text-sky-600 transition-all opacity-90 sm:opacity-0 group-hover:opacity-100 z-30"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm z-30">
                {screenshots.slice(0, 5).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setScreenIndex(idx); }}
                    type="button"
                    className={`h-1.5 rounded-full transition-all ${
                      idx === screenIndex 
                        ? 'w-4 bg-sky-400' 
                        : 'w-1.5 bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Jump to screenshot ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Screenshot counter pill */}
          <span className="absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900/70 text-slate-300 backdrop-blur-sm border border-slate-700/50">
            {screenIndex + 1}/{screenshots.length}
          </span>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          {/* Domain & State Engine Badges */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
              {project.category}
            </span>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              {project.stateManagement}
            </span>
          </div>

          {/* App Title */}
          <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
            {project.title}
          </h3>

          {/* Concise 1-Line Value Proposition */}
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {project.valueProposition}
          </p>

          {/* Clean Tech Pills (2-3 clean pills) */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.cleanTechPills.map((pill) => (
              <span
                key={pill}
                className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-5 py-3.5 sm:px-6 bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenModal(project)}
          type="button"
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-all shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Case Study & Screens</span>
        </button>

        <div className="flex items-center gap-3 text-xs font-medium text-slate-600 dark:text-slate-400">
          <a
            href={project.releasesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Releases
          </a>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Repo</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </div>
    </div>
  );
};
