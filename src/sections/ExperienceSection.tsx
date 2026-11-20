import React from 'react';
import { WORK_EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
            <Briefcase className="w-4 h-4" />
            <span>SECTION 05 // LEADERSHIP & TECHNICAL IMPACT</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Leadership & Experience
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            Guiding engineering organizations through architectural transformations, modularizing codebases, authoring foundational frameworks, and mentoring high-velocity engineering squads.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {WORK_EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-slate-700 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-emerald-400 font-mono text-sm font-semibold mt-0.5">
                    {exp.organization}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-3 mb-6">
                <h4 className="font-mono text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  Key Technical Achievements:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Operational Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {exp.stack.map((tech) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};
