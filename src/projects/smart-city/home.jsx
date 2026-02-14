import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Thermometer, Lock, Wifi, Sun, Music, Power, ShieldCheck } from 'lucide-react';

const RoomButton = ({ label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${active ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'bg-black/40 border-white/10 text-slate-500 hover:text-white hover:border-white/30'}`}
    >
        {label}
    </button>
);

const DeviceCard = ({ label, icon: Icon, active, color }) => (
    <div className={`p-4 rounded-xl border transition-all cursor-pointer group relative overflow-hidden ${active ? `bg-${color}-500/10 border-${color}-500 shadow-[0_0_15px_rgba(var(--color-${color}-500),0.3)]` : 'bg-black/40 border-white/10 hover:border-white/30'}`}>
        <div className="flex justify-between items-start mb-4 relative z-10">
            <Icon size={24} className={active ? `text-${color}-400` : 'text-slate-500'} />
            <div className={`w-2 h-2 rounded-full ${active ? `bg-${color}-500 animate-pulse shadow-[0_0_8px_${color}]` : 'bg-slate-700'}`} />
        </div>
        <h4 className={`font-bold text-sm relative z-10 ${active ? 'text-white' : 'text-slate-400'}`}>{label}</h4>
        <p className="text-[10px] text-slate-500 font-mono mt-1 relative z-10">{active ? 'ACTIVE' : 'OFFLINE'}</p>

        {active && <div className={`absolute inset-0 bg-${color}-500/5 blur-xl`} />}
    </div>
);

const Slider = ({ value, color }) => (
    <div className="h-32 bg-black/40 rounded-full w-12 border border-white/10 relative overflow-hidden mx-auto group cursor-pointer">
        <div
            className={`absolute bottom-0 left-0 right-0 bg-${color}-500/80 transition-all duration-300 group-hover:bg-${color}-400`}
            style={{ height: `${value}%` }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-white/50" />
    </div>
);

const SmartHome = () => {
    const [activeRoom, setActiveRoom] = useState('Living Room');

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20 md:pb-0">
            <div className="lg:col-span-2 space-y-8">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-white uppercase tracking-widest font-mono">
                            <span className="text-cyan-400">Habitat</span> Control
                        </h2>
                        <p className="text-slate-500 text-xs font-mono">UNIT 492 • SECTOR 7</p>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                        {['Living Room', 'Bedroom', 'Kitchen', 'Office'].map(room => (
                            <RoomButton
                                key={room}
                                label={room}
                                active={activeRoom === room}
                                onClick={() => setActiveRoom(room)}
                            />
                        ))}
                    </div>
                </header>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <DeviceCard label="Main Light" icon={Sun} active={true} color="pink" />
                    <DeviceCard label="AC System" icon={Thermometer} active={true} color="cyan" />
                    <DeviceCard label="Smart Lock" icon={Lock} active={true} color="emerald" />
                    <DeviceCard label="Audio Hub" icon={Music} active={false} color="purple" />
                </div>

                <div className="bg-black/60 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

                    <div className="relative z-10 flex justify-between items-center">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <ShieldCheck size={16} className="text-emerald-400" />
                                <span className="text-xs font-bold text-emerald-400 font-mono">PERIMETER SECURE</span>
                            </div>
                            <h3 className="text-3xl font-black text-white mb-1">Night Mode</h3>
                            <p className="text-slate-400 text-sm max-w-md">
                                Ambient lighting engaged. Security protocols active. Temperature optimized for sleep at 00:00.
                            </p>
                        </div>

                        <button className="w-16 h-16 rounded-full border-2 border-cyan-500/50 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:bg-cyan-500 hover:text-white transition-all group">
                            <Power size={24} className="group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/40 border border-white/10 p-6 rounded-2xl">
                        <h4 className="font-bold text-slate-300 text-sm mb-4 flex items-center gap-2">
                            <Wifi size={16} /> Network Status
                        </h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-500">DOWNLOAD</span>
                                <span className="font-mono text-cyan-400">842 MB/s</span>
                            </div>
                            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                <div className="w-[80%] h-full bg-cyan-500 shadow-[0_0_10px_cyan]" />
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-500">UPLOAD</span>
                                <span className="font-mono text-pink-400">420 MB/s</span>
                            </div>
                            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                <div className="w-[40%] h-full bg-pink-500 shadow-[0_0_10px_pink]" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-black/40 border border-white/10 p-6 rounded-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />
                        <div className="text-center relative z-10">
                            <h4 className="font-bold text-white text-4xl font-mono mb-1">72°F</h4>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Internal Temp</p>
                            <div className="mt-4 flex gap-2 justify-center">
                                <button className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:bg-white/10 text-white font-bold">-</button>
                                <button className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:bg-white/10 text-white font-bold">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black/40 border border-white/10 p-6 rounded-3xl backdrop-blur-sm flex flex-col items-center">
                <h3 className="font-bold text-slate-300 text-sm mb-8 uppercase tracking-widest w-full text-center">System Levels</h3>

                <div className="flex gap-8 items-end h-64 mb-8">
                    <div className="flex flex-col items-center gap-2">
                        <Slider value={75} color="pink" />
                        <span className="text-[10px] font-bold text-slate-500">LIGHT</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Slider value={40} color="cyan" />
                        <span className="text-[10px] font-bold text-slate-500">SOUND</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Slider value={90} color="emerald" />
                        <span className="text-[10px] font-bold text-slate-500">POWER</span>
                    </div>
                </div>

                <div className="w-full border-t border-white/10 pt-6 mt-auto">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-slate-500">Total Consumption</span>
                        <span className="font-mono text-cyan-400 font-bold">4.2 kW/h</span>
                    </div>
                    <p className="text-[10px] text-slate-600 text-center mt-4">
                        OPTIMIZED FOR EFFICIENCY
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SmartHome;
