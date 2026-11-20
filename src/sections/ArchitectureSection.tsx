import React from 'react';
import { SystemArchitectureDiagram } from '../components/SystemArchitectureDiagram';
import { Layers, ShieldCheck, GitBranch, Database } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  return (
    <section id="architecture" className="py-16 sm:py-24 bg-[#070A11]/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
            <Layers className="w-4 h-4" />
            <span>SECTION 04 // CLEAN ARCHITECTURE & SYSTEM BLUEPRINT</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Layered System Architecture Matrix
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            How every application is structured: from 360dp responsive presentations down to hardware-backed biometric enclaves and deterministic mathematical engines.
          </p>
        </div>

        {/* Interactive Architecture Diagram Component */}
        <SystemArchitectureDiagram />

        {/* Architectural Principles Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>DETERMINISTIC BEHAVIOR</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every state change flows through deterministic reducers and finite state machines, preventing race conditions and phantom UI redraws.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
              <Database className="w-4 h-4" />
              <span>OFFLINE-FIRST AT REST</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              The local SQLite cache acts as the single source of truth. Remote writes queue into an outbox with cryptographic hash chains.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
              <GitBranch className="w-4 h-4" />
              <span>CHAOS TESTED RESILIENCE</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              HTTP layers are validated using dio_resilience_mock, injecting simulated cellular packet drops and latency jitter in automated test suites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
