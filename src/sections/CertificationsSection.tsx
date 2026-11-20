import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-16 sm:py-24 bg-[#070A11]/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
              <Award className="w-4 h-4" />
              <span>SECTION 06 // INDUSTRY ACCREDITATIONS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Verified Certifications & Accreditations
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
              Formally validated technical competencies across Cloud Solutions Architecture, Cybersecurity Threat Modeling, Deep Learning / AI Token Telemetry, and CI/CD Automation.
            </p>
          </div>

          <a
            href={HERO_DATA.socialLinks.credly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono shrink-0 transition-colors"
          >
            <span>Verify on Credly Official Registry</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel rounded-xl p-6 flex flex-col justify-between border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {cert.badgeCategory}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors mb-1">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono text-cyan-400 mb-4">
                  Issuer: {cert.issuer}
                </p>

                {/* Validated Skills */}
                <div className="space-y-1.5 mb-6">
                  {cert.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                {cert.verificationId && (
                  <span className="text-[10px] font-mono text-slate-500">
                    ID: {cert.verificationId}
                  </span>
                )}

                <a
                  href={cert.credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 hover:underline"
                >
                  <span>Verify Credly Badge</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
