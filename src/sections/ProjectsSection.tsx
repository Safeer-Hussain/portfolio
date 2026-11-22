import React, { useState, useMemo } from 'react';
import { ENTERPRISE_APPS } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectArchitecture, ProjectCategory } from '../types';
import { Search, Layers, Sparkles } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenModal: (project: ProjectArchitecture) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ProjectCategory[] = [
    'All',
    'FinTech & Commerce',
    'AI & Health',
    'Enterprise & Operations',
    'Smart Living & Lifestyle'
  ];

  const filteredProjects = useMemo(() => {
    return ENTERPRISE_APPS.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch = 
        project.name.toLowerCase().includes(query) ||
        project.title.toLowerCase().includes(query) ||
        project.valueProposition.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.stateManagement.toLowerCase().includes(query) ||
        project.nativeBridge.toLowerCase().includes(query) ||
        project.cleanTechPills.some(t => t.toLowerCase().includes(query)) ||
        project.techStack.some(t => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="work" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Featured Production Systems</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            15 Production Application Architectures
          </h2>

          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            A comprehensive suite of cross-platform ecosystems spanning institutional FinTech, low-latency telemetry, intelligent coaching, and autonomous logistics—designed for offline resilience and hardware performance.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = cat === 'All' 
                ? ENTERPRISE_APPS.length 
                : ENTERPRISE_APPS.filter(p => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-300'
                  }`}
                >
                  <span>{cat === 'All' ? 'All (15)' : cat}</span>
                  {cat !== 'All' && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected 
                        ? 'bg-slate-700 dark:bg-slate-200 text-white dark:text-slate-950' 
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                    }`}>
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by tech, bridge, stack..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Applications Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={onOpenModal}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
            <Layers className="w-10 h-10 text-slate-400 mx-auto mb-3 opacity-60" />
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
              No architectures match your search for "{searchQuery}"
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
