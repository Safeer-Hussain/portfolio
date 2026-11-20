import React, { useState, useMemo } from 'react';
import { ENTERPRISE_APPS } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectArchitecture, ProjectCategory } from '../types';
import { Search, Layers, Terminal } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenModal: (project: ProjectArchitecture) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ProjectCategory[] = [
    'All',
    'FinTech & Commerce',
    'AI & Telemetry',
    'Enterprise & Civic',
    'Health & Lifestyle'
  ];

  // Filter projects by category and search term
  const filteredProjects = useMemo(() => {
    return ENTERPRISE_APPS.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch = 
        project.name.toLowerCase().includes(query) ||
        project.title.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.stateManagement.toLowerCase().includes(query) ||
        project.nativeBridge.toLowerCase().includes(query) ||
        project.techStack.some(t => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="apps" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
            <Terminal className="w-4 h-4" />
            <span>SECTION 03 // ENTERPRISE & DOMAIN APPLICATION SUITE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            15 Production App Architectures
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            Domain-driven systems built across enterprise FinTech, biometric health telemetry, autonomous logistics, and spatial computing. Filterable by operational domain or searched by state engine and hardware bridge.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Category Filter Pills */}
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
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                      : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-slate-900/30 text-slate-950' : 'bg-slate-800 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by state, bridge, stack..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-6 pb-3 border-b border-slate-800/60">
          <span>
            SHOWING {filteredProjects.length} OF {ENTERPRISE_APPS.length} ARCHITECTURES
          </span>
          {searchQuery && (
            <span className="text-emerald-400">
              FILTER: "{searchQuery}"
            </span>
          )}
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
          <div className="text-center py-16 rounded-xl border border-dashed border-slate-800 bg-[#070A11]/60">
            <Layers className="w-8 h-8 text-slate-600 mx-auto mb-2" />
            <p className="text-sm font-mono text-slate-400">
              No architectures match your query: "{searchQuery}"
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs font-mono text-emerald-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
