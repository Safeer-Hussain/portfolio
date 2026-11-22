import React from 'react';
import { 
  WORK_EXPERIENCES, 
  CERTIFICATIONS, 
  HERO_DATA 
} from '../data/portfolioData';
import { 
  Award, 
  ExternalLink, 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

export const CredentialsSection: React.FC = () => {
  return (
    <section id="credentials" className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 mb-3">
            <Award className="w-3.5 h-3.5 text-sky-500" />
            <span>Proven Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Leadership Experience & Credentials
          </h2>

          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            3.5+ years directing multi-platform engineering squads, refactoring monolithic legacy codebases into modular Clean Architectures, and validated multi-cloud certifications.
          </p>
        </div>

        {/* Leadership Experience Grid */}
        <div className="space-y-6 mb-16">
          <h3 className="text-sm font-semibold tracking-wider text-slate-500 uppercase flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-sky-500" />
            <span>Technical Leadership Positions</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {WORK_EXPERIENCES.map((exp, idx) => (
              <div 
                key={idx}
                className="executive-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h4>
                      <div className="text-sky-600 dark:text-sky-400 font-semibold text-sm">
                        {exp.organization}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed font-normal">
                    {exp.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {exp.achievements.map((item, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
                  {exp.stack.map((tech) => (
                    <span 
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Certifications Section with Banner */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-sm font-semibold tracking-wider text-slate-500 uppercase flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Verified Industry Certifications</span>
            </h3>

            <a
              href={HERO_DATA.socialLinks.credly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>Verify all on Credly Registry</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="executive-card p-5 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {cert.badgeCategory}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {cert.issuer}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
                    {cert.title}
                  </h4>

                  <div className="space-y-1.5 mb-4">
                    {cert.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-slate-500">
                    ID: {cert.verificationId}
                  </span>

                  <a
                    href={cert.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                  >
                    <span>Verify Badge</span>
                    <ExternalLink className="w-3 h-3" />
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
