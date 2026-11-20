import React from 'react';
import { 
  Github, 
  Cpu, 
  Layers, 
  Maximize2,
  CheckCircle2
} from 'lucide-react';
import { ProjectArchitecture } from '../types';

interface ProjectCardProps {
  project: ProjectArchitecture;
  onOpenModal: (project: ProjectArchitecture) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <div className="glass-panel rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5 group">
      <div>
        {/* Header: Name & Category */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-emerald-400">
              {project.name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>

          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-emerald-400 transition-colors mb-2">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-4 line-clamp-2 leading-relaxed">
          {project.tagline}
        </p>

        {/* Core Architecture Badges: State Management & Native Bridge */}
        <div className="space-y-2 mb-4 p-3 rounded-lg bg-[#070A11]/60 border border-slate-800/80">
          <div className="flex items-center gap-2 text-xs">
            <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="text-slate-400 text-[11px] font-mono">State Engine:</span>
            <span className="font-mono font-medium text-cyan-300 text-[11px] truncate">
              {project.stateManagement}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <Cpu className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="text-slate-400 text-[11px] font-mono">Native Bridge:</span>
            <span className="font-mono font-medium text-emerald-300 text-[11px] truncate">
              {project.nativeBridge}
            </span>
          </div>
        </div>

        {/* Highlights Preview */}
        <div className="space-y-1.5 mb-5">
          {project.keyHighlights.slice(0, 2).map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900/40 text-slate-500">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons: Modal Trigger + Links */}
        <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-800/80">
          <button
            onClick={() => onOpenModal(project)}
            type="button"
            className="flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 py-1.5 px-3 rounded bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Architecture Deep-Dive</span>
          </button>

          <div className="flex items-center gap-1.5">
            <a
              href={project.releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono px-2 py-1 rounded text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 transition-colors"
              title="GitHub Releases"
            >
              Releases
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="GitHub Repository"
              aria-label={`GitHub repo for ${project.name}`}
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
