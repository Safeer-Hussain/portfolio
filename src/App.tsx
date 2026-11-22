import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { PackagesSection } from './sections/PackagesSection';
import { PillarsSection } from './sections/PillarsSection';
import { CredentialsSection } from './sections/CredentialsSection';
import { ArchitectureModal } from './components/ArchitectureModal';
import { CodeModal } from './components/CodeModal';
import { ProjectArchitecture, OpenSourcePackage } from './types';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<ProjectArchitecture | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<OpenSourcePackage | null>(null);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-slate-950 text-slate-100' : 'light bg-slate-50 text-slate-900'} flex flex-col font-sans transition-colors duration-200 selection:bg-sky-500/20 selection:text-sky-300`}>
      {/* Minimal Top Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections (Strict Order) */}
      <main className="flex-grow">
        {/* 1. Hero Section + 4-Stat Strip */}
        <HeroSection />

        {/* 2. Featured Work — 15 Applications Showcase with Screenshots */}
        <ProjectsSection onOpenModal={(project) => setSelectedProject(project)} />

        {/* 3. Open-Source Packages (pub.dev 160/160 Target) */}
        <PackagesSection onOpenCodeModal={(pkg) => setSelectedPackage(pkg)} />

        {/* 4. Core Expertise & Architecture Principles (4 Clean Cards) */}
        <PillarsSection />

        {/* 5. Credentials & Leadership (Octet Solutions, Finjineers & Credly) */}
        <CredentialsSection />
      </main>

      {/* Clean Footer & Contact */}
      <Footer />

      {/* Interactive Case Study & Architecture Modal */}
      <ArchitectureModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Interactive Code Snippet Modal */}
      <CodeModal 
        pkg={selectedPackage} 
        onClose={() => setSelectedPackage(null)} 
      />
    </div>
  );
};

export default App;
