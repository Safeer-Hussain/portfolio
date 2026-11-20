import React, { useState } from 'react';
import { 
  Layers, 
  Database, 
  Cpu, 
  Shield, 
  Layout, 
  ChevronRight, 
  ShieldAlert, 
  Terminal,
  CheckCircle2
} from 'lucide-react';
import { SYSTEM_ARCHITECTURE_LAYERS } from '../data/portfolioData';

export const SystemArchitectureDiagram: React.FC = () => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('layer-1');

  const selectedLayer = SYSTEM_ARCHITECTURE_LAYERS.find(l => l.id === selectedLayerId) || SYSTEM_ARCHITECTURE_LAYERS[0];

  const getLayerIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-emerald-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-violet-400" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-emerald-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Column: Interactive Stack Layers */}
        <div className="w-full lg:w-5/12 space-y-3">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>Interactive Architectural Stack</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              Click layer to inspect
            </span>
          </div>

          {SYSTEM_ARCHITECTURE_LAYERS.map((layer) => {
            const isSelected = layer.id === selectedLayerId;
            return (
              <button
                key={layer.id}
                onClick={() => setSelectedLayerId(layer.id)}
                type="button"
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 border flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'bg-slate-800/90 border-emerald-500/70 shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/40 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                    isSelected 
                      ? 'bg-emerald-500 text-slate-950' 
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {layer.number}
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold tracking-tight ${
                      isSelected ? 'text-white' : 'text-slate-300'
                    }`}>
                      {layer.title}
                    </h4>
                    <p className="text-[11px] font-mono text-slate-400 truncate max-w-[220px] sm:max-w-[280px]">
                      {layer.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {getLayerIcon(layer.iconName)}
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-emerald-400 translate-x-1' : 'text-slate-600'
                  }`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Layer Blueprint Inspector */}
        <div className="w-full lg:w-7/12 rounded-xl bg-[#070A11] border border-slate-800/90 p-5 sm:p-7 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Header of Inspector */}
          <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-1">
                <span>LAYER {selectedLayer.number} DEEP INSPECTION</span>
                <span>•</span>
                <span className="text-slate-400">CLEAN ARCHITECTURE</span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {selectedLayer.title}
              </h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
              {getLayerIcon(selectedLayer.iconName)}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
            {selectedLayer.description}
          </p>

          {/* Subsystems & Components */}
          <div className="mb-6 space-y-3">
            <h4 className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Modular Subsystems & Engines:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {selectedLayer.components.map((comp, idx) => (
                <div 
                  key={idx} 
                  className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-mono">{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fault-Tolerance & Resilience Strategy */}
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 mb-1.5">
              <ShieldAlert className="w-4 h-4 text-emerald-400" />
              <span>RESILIENCE & ZERO-CRASH GUARANTEE:</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {selectedLayer.resilienceMechanism}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
