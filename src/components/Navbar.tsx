import React, { useState } from 'react';
import { 
  Terminal, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Package, 
  Award
} from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';
import { Theme } from '../hooks/useTheme';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Pillars', href: '#pillars' },
    { label: 'Pub.dev Packages', href: '#packages' },
    { label: 'Enterprise Apps (15)', href: '#apps' },
    { label: 'Architecture Matrix', href: '#architecture' },
    { label: 'Leadership', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0B0F19]/90 border-b border-slate-800/80 transition-colors duration-200 dark:bg-[#0B0F19]/90 dark:border-slate-800/80 light:bg-white/95 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Callsign */}
          <a 
            href="#" 
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Safeer Hussain Portfolio Home"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 transition-colors">
              <Terminal className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-base tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-emerald-400 transition-colors">
                  Safeer Hussain
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  ARCHITECT
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 hidden sm:block">
                AI • Cybersecurity • Cloud/DevOps
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 rounded-md text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-emerald-400 dark:hover:text-emerald-400 light:hover:text-emerald-600 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 light:hover:bg-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons & Actions */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={HERO_DATA.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={HERO_DATA.socialLinks.pubDev}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="pub.dev Packages"
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100 transition-colors"
              title="pub.dev Published Packages"
            >
              <Package className="w-4 h-4" />
            </a>

            <a
              href={HERO_DATA.socialLinks.credly}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Credly Certifications"
              className="p-2 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100 transition-colors"
              title="Credly Verified Certifications"
            >
              <Award className="w-4 h-4" />
            </a>

            <a
              href={HERO_DATA.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <div className="w-px h-5 bg-slate-800 dark:bg-slate-800 light:bg-slate-200 mx-1" />

            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile Menu Trigger & Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 bg-slate-900/80 dark:bg-slate-900/80 light:bg-white"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Tested for 360dp mobile viewports) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#070A11]/98 dark:bg-[#070A11]/98 light:bg-white/98 px-4 py-5 space-y-3 font-mono text-sm animate-in slide-in-from-top-2 duration-150">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-emerald-400 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 light:hover:bg-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-around">
            <a
              href={HERO_DATA.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={HERO_DATA.socialLinks.pubDev}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400"
            >
              <Package className="w-4 h-4" />
              <span>pub.dev</span>
            </a>
            <a
              href={HERO_DATA.socialLinks.credly}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400"
            >
              <Award className="w-4 h-4" />
              <span>Credly</span>
            </a>
            <a
              href={HERO_DATA.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
