import React from 'react';
import { OPEN_SOURCE_CONTRIBUTIONS } from '../data/portfolioData';
import { GitPullRequest, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ContributionsSection: React.FC = () => {
  return (
    <section id="opensource" className="py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Open-Source Contributions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Contributing upstream fixes to core Dart & Flutter ecosystems—accompanied by rigorous regression unit tests, clean static analysis, and concurrency validation.
          </p>
        </div>

        {/* PR Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OPEN_SOURCE_CONTRIBUTIONS.map((contrib) => (
            <div
              key={contrib.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-slate-900/40 p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Header with Project Name & PR Pill */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <a
                    href={contrib.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm font-bold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>{contrib.project}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href={contrib.prUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 text-xs font-mono font-medium hover:underline"
                  >
                    <GitPullRequest className="w-3.5 h-3.5" />
                    <span>PR #{contrib.prNumber}</span>
                  </a>
                </div>

                {/* PR Title */}
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                  {contrib.title}
                </h3>

                {/* Issue Link */}
                <div className="mb-3 text-xs text-slate-500">
                  <span>Resolves </span>
                  <a
                    href={contrib.issueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 dark:text-sky-400 font-mono hover:underline inline-flex items-center gap-0.5"
                  >
                    <span>Issue #{contrib.issueNumber}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-4">
                  {contrib.summary}
                </p>

                {/* Impact Note */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{contrib.impact}</span>
                </div>
              </div>

              {/* Tags & Action Link */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {contrib.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={contrib.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sky-600 dark:text-sky-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>View PR on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
