import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Github, 
  Layers, 
  ArrowUpRight,
  Maximize2
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
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-slate-900/40 overflow-hidden flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 group">
      <div>
        {/* Screenshot showcase area */}
        <div 
          onClick={() => onOpenModal(project)}
          className="relative w-full bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 p-5 flex items-center justify-center cursor-pointer min-h-[310px]"
        >
          {/* Device Mockup */}
          <div className="relative w-[190px] aspect-[9/18.5] rounded-[22px] p-2 bg-slate-900 dark:bg-slate-950 shadow-lg border border-slate-300/80 dark:border-slate-700/80 flex flex-col items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
            {/* Dynamic camera pill */}
            <div className="absolute top-2.5 w-10 h-3 bg-slate-900 dark:bg-slate-950 rounded-full z-20 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700 inline-block" />
            </div>

            {/* Actual Screenshot */}
            <div className="w-full h-full rounded-[16px] overflow-hidden bg-slate-900 flex items-center justify-center relative">
              {screenshots.length > 0 ? (
                <img
                  src={getScreenshotUrl(screenshots[screenIndex])}
                  alt={`${project.name} UI Screen ${screenIndex + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-opacity duration-200"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-500 p-4 text-center text-xs">
                  <Layers className="w-6 h-6 mb-2 opacity-50" />
                  <span>UI Preview</span>
                </div>
              )}
            </div>
          </div>

          {/* Switcher Arrows */}
          {screenshots.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                type="button"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 text-slate-700 dark:text-slate-200 shadow border border-slate-200 dark:border-slate-700 hover:text-sky-600 transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 z-30"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 text-slate-700 dark:text-slate-200 shadow border border-slate-200 dark:border-slate-700 hover:text-sky-600 transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 z-30"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-900/40 backdrop-blur-sm z-30">
                {screenshots.slice(0, 5).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setScreenIndex(idx); }}
                    type="button"
                    className={`h-1.5 rounded-full transition-all ${
                      idx === screenIndex 
                        ? 'w-3.5 bg-white' 
                        : 'w-1.5 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Jump to screenshot ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Screenshot counter pill */}
          <span className="absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/90 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
            {screenIndex + 1}/{screenshots.length}
          </span>
        </div>

        {/* Card Body */}
        <div className="p-5">
          {/* Domain tag & State management */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-semibold text-sky-600 dark:text-sky-400">
              {project.category}
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              {project.stateManagement}
            </span>
          </div>

          {/* App Title */}
          <h3 
            onClick={() => onOpenModal(project)}
            className="text-base font-bold text-slate-900 dark:text-white tracking-tight hover:text-sky-600 dark:hover:text-sky-400 cursor-pointer transition-colors"
          >
            {project.title}
          </h3>

          {/* 1-Sentence Summary */}
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            {project.valueProposition}
          </p>

          {/* Clean Tech Pills */}
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {project.cleanTechPills.slice(0, 3).map((pill) => (
              <span
                key={pill}
                className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-5 py-3 bg-slate-50/60 dark:bg-slate-950/40 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between gap-3 text-xs">
        <button
          onClick={() => onOpenModal(project)}
          type="button"
          className="inline-flex items-center gap-1.5 font-medium text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Details & Screens</span>
        </button>

        <div className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400 font-medium">
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
