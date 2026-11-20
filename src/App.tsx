import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { StatusBar } from './components/StatusBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { MetricsStrip } from './sections/MetricsStrip';
import { PillarsSection } from './sections/PillarsSection';
import { PackagesSection } from './sections/PackagesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ArchitectureSection } from './sections/ArchitectureSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { ContactSection } from './sections/ContactSection';
import { ArchitectureModal } from './components/ArchitectureModal';
import { CodeModal } from './components/CodeModal';
import { ProjectArchitecture, OpenSourcePackage } from './types';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<ProjectArchitecture | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<OpenSourcePackage | null>(null);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-[#0B0F19]' : 'light bg-slate-50'} text-slate-100 flex flex-col font-sans transition-colors duration-200`}>
      {/* Background terminal blueprint grid */}
      <div className="fixed inset-0 bg-terminal-grid pointer-events-none z-0" />

      {/* Persistent System Status Bar */}
      <div className="relative z-40">
        <StatusBar />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
      </div>

      {/* Main Content Layout */}
      <main className="relative z-10 flex-grow">
        <HeroSection />
        <MetricsStrip />
        <PillarsSection />
        <PackagesSection onOpenCodeModal={(pkg) => setSelectedPackage(pkg)} />
        <ProjectsSection onOpenModal={(project) => setSelectedProject(project)} />
        <ArchitectureSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Persistent Engineering Terminal Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Interactive Architecture Modal */}
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
