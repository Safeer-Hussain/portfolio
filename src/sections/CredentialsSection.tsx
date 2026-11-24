import React from 'react';
import { 
  WORK_EXPERIENCES, 
  CERTIFICATIONS, 
  HERO_DATA 
} from '../data/portfolioData';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Award,
  Briefcase
} from 'lucide-react';

export const CredentialsSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & Credentials
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            3.5+ years of engineering leadership, architecture design, and verified multi-cloud certifications.
          </p>
        </div>

        {/* Leadership Experience Grid */}
        <div className="space-y-6 mb-16">
          <h3 className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-slate-400" />
            <span>Leadership Positions</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WORK_EXPERIENCES.map((exp, idx) => (
              <div 
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-slate-900/40 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h4>
                    <span className="text-xs text-slate-500 font-mono">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-sky-600 dark:text-sky-400 font-semibold text-xs mb-3">
                    {exp.organization} · {exp.location}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed font-normal">
                    {exp.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    {exp.achievements.map((item, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                  {exp.stack.map((tech) => (
                    <span 
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Certifications Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-500" />
              <span>Verified Certifications</span>
            </h3>

            <a
              href={HERO_DATA.socialLinks.credly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <span>View all on Credly</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="rounded-xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-slate-900/40 p-4 sm:p-5 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {cert.badgeCategory}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {cert.issuer}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                    {cert.title}
                  </h4>

                  <div className="space-y-1 mb-4">
                    {cert.skills.slice(0, 3).map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-slate-400" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-[10px] font-mono text-slate-400">
                    {cert.verificationId}
                  </span>

                  <a
                    href={cert.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-400 font-medium hover:underline"
                  >
                    <span>Verify</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
