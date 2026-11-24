import React, { useState, useMemo } from 'react';
import { ENTERPRISE_APPS } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectArchitecture, ProjectCategory } from '../types';
import { Search, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenModal: (project: ProjectArchitecture) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ProjectCategory[] = [
    'All',
    'FinTech & Commerce',
    'Health & AI',
    'Operations & Civic',
    'Smart Living & Media'
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
    <section id="work" className="py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-850">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            15 production mobile applications engineered across FinTech, biometric health telemetry, civic operations, and smart media ecosystems.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    isSelected
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-slate-800'
                  }`}
                >
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-slate-400 dark:focus:border-slate-700 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Applications Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={onOpenModal}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
            <Layers className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-60" />
            <p className="text-xs text-slate-500">
              No applications match your search for "{searchQuery}".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-2 text-xs font-medium text-sky-600 dark:text-sky-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
