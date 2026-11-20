import React from 'react';
import { Terminal, Shield, Wifi, Box, MapPin } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

export const StatusBar: React.FC = () => {
  return (
    <div className="w-full bg-[#070A11] border-b border-slate-800/80 px-4 py-1.5 text-xs font-mono text-slate-400 overflow-x-auto whitespace-nowrap scrollbar-none dark:bg-[#070A11] dark:border-slate-800/80 light:bg-slate-100 light:border-slate-200 light:text-slate-600">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 min-w-max">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold tracking-wider">SYSTEM: ALL SERVICES OPERATIONAL</span>
          </div>

          <span className="text-slate-700 dark:text-slate-700 light:text-slate-300">|</span>

          <div className="flex items-center gap-1.5 text-slate-300 dark:text-slate-300 light:text-slate-700">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>NODE: {HERO_DATA.callsign}</span>
          </div>

          <span className="text-slate-700 dark:text-slate-700 light:text-slate-300">|</span>

          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>{HERO_DATA.location} ({HERO_DATA.timeZone})</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Box className="w-3.5 h-3.5 text-cyan-400" />
            <span>PUB.DEV: 5 PACKAGES (160/160 TARGET)</span>
          </div>

          <span className="text-slate-700 dark:text-slate-700 light:text-slate-300">|</span>

          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>PGP: {HERO_DATA.pgpKeyId}</span>
          </div>

          <span className="text-slate-700 dark:text-slate-700 light:text-slate-300">|</span>

          <div className="flex items-center gap-1.5 text-slate-400">
            <Wifi className="w-3.5 h-3.5 text-emerald-400" />
            <span>LATENCY: 14ms</span>
          </div>
        </div>
      </div>
    </div>
  );
};
