import React from 'react';
import { motion } from 'framer-motion';
import { CloudRain, Wind, Droplets, ArrowUpRight, Train, Bus, Activity, Zap } from 'lucide-react';

const GlitchText = ({ text }) => (
    <span className="relative inline-block group">
        <span className="relative z-10">{text}</span>
        <span className="absolute top-0 left-0 -ml-0.5 text-red-500 opacity-0 group-hover:opacity-70 animate-pulse">{text}</span>
        <span className="absolute top-0 left-0 ml-0.5 text-cyan-500 opacity-0 group-hover:opacity-70 animate-pulse delay-75">{text}</span>
    </span>
);

const StatPanel = ({ label, value, unit, color }) => (
    <div className="bg-black/40 border border-white/10 p-4 rounded-xl backdrop-blur-sm relative overflow-hidden group">
        <div className={`absolute top-0 left-0 w-1 h-full bg-${color}-500 transition-all duration-300 group-hover:w-full group-hover:opacity-10`} />
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">{label}</p>
        <div className="flex items-baseline gap-1">
            <h3 className="text-2xl font-black text-white">{value}</h3>
            <span className={`text-xs font-bold text-${color}-400`}>{unit}</span>
        </div>
    </div>
);

const TransitCard = ({ line, status, time, type }) => (
    <div className="flex items-center justify-between p-3 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors cursor-pointer">
        <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded bg-slate-800 flex items-center justify-center ${type === 'Metro' ? 'text-cyan-400' : 'text-pink-400'}`}>
                {type === 'Metro' ? <Train size={16} /> : <Bus size={16} />}
            </div>
            <div>
                <h4 className="font-bold text-sm text-white">{line}</h4>
                <p className="text-[10px] text-slate-400 uppercase">{status}</p>
            </div>
        </div>
        <div className="text-right">
            <span className="text-xl font-bold text-white font-mono">{time}</span>
            <p className="text-[10px] text-emerald-400">ON TIME</p>
        </div>
    </div>
);

const Dashboard = () => {
    return (
        <div className="max-w-7xl mx-auto pb-20 md:pb-0">
            <header className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
                        <span className="text-xs font-mono text-emerald-500">SYSTEM ONLINE // GRID: STABLE</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                        <GlitchText text="Neo-Tokyo" />
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">Central Hub</span>
                    </h1>
                </div>

                <div className="text-right">
                    <h2 className="text-5xl font-mono text-white font-bold">14:02</h2>
                    <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm">Thursday, Oct 12</p>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Weather Module */}
                <div className="bg-black/60 border border-white/10 rounded-3xl p-6 backdrop-blur-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-cyan-500/10 rounded-full blur-3xl -mr-16 -mt-16" />

                    <div className="flex justify-between items-start mb-8 relative z-10">
                        <div>
                            <CloudRain size={48} className="text-white mb-4" />
                            <h3 className="text-4xl font-black text-white">18°C</h3>
                            <p className="text-slate-400">Heavy Rain</p>
                        </div>
                        <div className="space-y-4 text-right">
                            <div className="flex items-center justify-end gap-2 text-sm text-slate-300">
                                <Wind size={14} className="text-cyan-400" /> 12 km/h
                            </div>
                            <div className="flex items-center justify-end gap-2 text-sm text-slate-300">
                                <Droplets size={14} className="text-blue-400" /> 88%
                            </div>
                            <div className="flex items-center justify-end gap-2 text-sm text-slate-300">
                                <Activity size={14} className="text-pink-400" /> AQI: 45
                            </div>
                        </div>
                    </div>

                    {/* Forecast Mini Graph modeled with divs */}
                    <div className="flex items-end justify-between gap-1 h-12">
                        {[40, 60, 45, 70, 80, 50, 60].map((h, i) => (
                            <div key={i} className="flex-1 bg-white/10 rounded-t hover:bg-cyan-500 transition-colors" style={{ height: `${h}%` }} />
                        ))}
                    </div>
                </div>

                {/* City Stats */}
                <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <StatPanel label="Grid Load" value="78" unit="%" color="pink" />
                    <StatPanel label="Traffic" value="MOD" unit="LVL" color="amber" />
                    <StatPanel label="Net Speed" value="8.5" unit="Gb/s" color="cyan" />
                    <StatPanel label="Secure" value="100" unit="%" color="emerald" />

                    {/* Live Cam Feed Simulation */}
                    <div className="col-span-2 md:col-span-4 h-48 bg-slate-900 rounded-2xl border border-white/10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                        <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded animate-pulse">LIVE</div>

                        <div className="absolute bottom-4 left-4">
                            <h4 className="font-bold text-white">District 9 • Shibuya Crossing</h4>
                            <p className="text-xs text-slate-400">Cam ID: #CAM-9284-X</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Transit Schedule */}
                <div className="bg-black/40 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-white flex items-center gap-2">
                            <Train size={18} className="text-cyan-400" /> Transit Status
                        </h3>
                        <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">ALL SYSTEMS GO</span>
                    </div>

                    <div className="space-y-1">
                        <TransitCard line="Line A • Downtown" status="Arriving" time="2 min" type="Metro" />
                        <TransitCard line="Line B • Airport" status="Delayed" time="8 min" type="Metro" />
                        <TransitCard line="Bus 404 • North" status="On Time" time="5 min" type="Bus" />
                        <TransitCard line="Bus 201 • Tech Park" status="On Time" time="12 min" type="Bus" />
                    </div>
                </div>

                {/* Energy Consumption Map Placeholder */}
                <div className="bg-slate-900 border border-white/10 rounded-3xl p-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
                    <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-10" />
                    <div className="relative z-10 p-8 border border-cyan-500/30 bg-black/60 backdrop-blur rounded-2xl max-w-xs">
                        <Zap size={32} className="text-yellow-400 mx-auto mb-4" />
                        <h3 className="font-bold text-white text-lg">Energy Optimization Pro</h3>
                        <p className="text-sm text-slate-400 mb-4">AI suggests rerouting power to District 4 to save 12% efficiency.</p>
                        <button className="w-full py-2 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-500 transition-colors text-sm">
                            Execute Protocol
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
