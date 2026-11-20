import React from 'react';
import { 
  Package, 
  Award, 
  Github, 
  Linkedin, 
  MapPin, 
  ArrowRight, 
  ExternalLink, 
  Code2, 
  CheckCircle2 
} from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Terminal Command Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400 font-semibold">$ whoami</span>
              <span className="text-slate-600 dark:text-slate-600 light:text-slate-300">::</span>
              <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">Principal Systems & App Architect</span>
            </div>

            {/* Name & Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight leading-tight">
                {HERO_DATA.name}
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-mono font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300">
                {HERO_DATA.headline}
              </p>
            </div>

            {/* Subheadline & Bio */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-sans max-w-2xl">
              {HERO_DATA.subheadline}
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <MapPin className="w-4 h-4" />
                <span>{HERO_DATA.location} ({HERO_DATA.timeZone})</span>
              </span>
              <span>•</span>
              <span className="text-cyan-400">Deterministic Clean Architecture</span>
            </div>

            {/* Verification & Social Links */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={HERO_DATA.socialLinks.credly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono transition-all duration-200"
              >
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Credly Certifications</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href={HERO_DATA.socialLinks.pubDev}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono transition-all duration-200"
              >
                <Package className="w-4 h-4 text-cyan-400" />
                <span>pub.dev (5 Packages)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href={HERO_DATA.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-mono transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={HERO_DATA.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-mono transition-all duration-200"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Quick Action Navigation */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#apps"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
              >
                <span>Explore 15 Enterprise Apps</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#packages"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500/50 font-mono text-sm transition-all duration-200"
              >
                <span>Inspect pub.dev Packages</span>
                <Code2 className="w-4 h-4 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Interactive Terminal Blueprint Widget (Col 8-12) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#070A11] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-[#0B0F19] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-slate-400 text-[11px]">sh-arch-terminal@safeer-hussain:~</span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                  LIVE
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-5 space-y-4 text-slate-300">
                <div>
                  <div className="text-emerald-400 font-semibold mb-1 flex items-center gap-1.5">
                    <span>$</span>
                    <span>system-architect --inspect --profile</span>
                  </div>
                  <div className="space-y-1 text-slate-400 pl-4 border-l-2 border-slate-800">
                    <div><span className="text-cyan-400">ARCHITECT:</span> Safeer Hussain</div>
                    <div><span className="text-cyan-400">LOCATION:</span> Lahore, PK (GMT+05:00)</div>
                    <div><span className="text-cyan-400">CORE FOCUS:</span> AI, Security & Cloud/DevOps</div>
                    <div><span className="text-cyan-400">STATUS:</span> 15 Production App Architectures Deployed</div>
                  </div>
                </div>

                <div>
                  <div className="text-emerald-400 font-semibold mb-1 flex items-center gap-1.5">
                    <span>$</span>
                    <span>pub-cache verify --target-score</span>
                  </div>
                  <div className="space-y-1 text-slate-400 pl-4 border-l-2 border-slate-800">
                    <div className="flex items-center gap-1.5 text-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>adaptive_pane_scaffold (Multi-Platform 360dp)</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>sm2_spaced_repetition (Pure Dart + Wasm)</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>token_stream_controller (Async LLM Stream)</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>dio_resilience_mock (Chaos Fault Injection)</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>geofence_haversine (Great-Circle Engine)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>SECURITY: KEYSTORE / SECURE ENCLAVE</span>
                    <span className="text-emerald-400 font-bold">160/160 PANA TARGET</span>
                  </div>
                </div>

                <div className="text-slate-400 flex items-center">
                  <span className="text-emerald-400 mr-1.5">$</span>
                  <span>ready for deployment</span>
                  <span className="terminal-cursor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
