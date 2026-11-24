import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { PackagesSection } from './sections/PackagesSection';
import { CredentialsSection } from './sections/CredentialsSection';
import { ContributionsSection } from './sections/ContributionsSection';
import { ArchitectureModal } from './components/ArchitectureModal';
import { CodeModal } from './components/CodeModal';
import { ProjectArchitecture, OpenSourcePackage } from './types';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<ProjectArchitecture | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<OpenSourcePackage | null>(null);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-slate-950 text-slate-100' : 'light bg-white text-slate-900'} flex flex-col font-sans transition-colors duration-200 selection:bg-sky-500/20 selection:text-sky-300`}>
      {/* 1. Top Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections (Strict Order) */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Work (15 Apps Showcase + Details & Screens Modal) */}
        <ProjectsSection onOpenModal={(project) => setSelectedProject(project)} />

        {/* 4. Open-Source Packages (pub.dev) */}
        <PackagesSection onOpenCodeModal={(pkg) => setSelectedPackage(pkg)} />

        {/* 5. Experience & Credentials */}
        <CredentialsSection />

        {/* 6. Open-Source Contributions (localsend, dio) */}
        <ContributionsSection />
      </main>

      {/* 7. Footer & Minimal Contact */}
      <Footer />

      {/* Interactive Details & Screens Modal */}
      <ArchitectureModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Interactive Package Code Snippet Modal */}
      <CodeModal 
        pkg={selectedPackage} 
        onClose={() => setSelectedPackage(null)} 
      />
    </div>
  );
};

export default App;
