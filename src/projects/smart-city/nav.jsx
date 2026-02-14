import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, MapPin, Search, Crosshair, Cpu } from 'lucide-react';

const MapMarker = ({ x, y, label, type, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay }}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
        style={{ top: y, left: x }}
    >
        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${type === 'destination' ? 'bg-pink-500 border-pink-400 text-white shadow-[0_0_20px_#ec4899]' : 'bg-cyan-500 border-cyan-400 text-white shadow-[0_0_20px_#06b6d4]'}`}>
            <MapPin size={14} fill="currentColor" />
        </div>

        {/* Pulse Effect */}
        <div className={`absolute inset-0 rounded-full animate-ping opacity-50 ${type === 'destination' ? 'bg-pink-500' : 'bg-cyan-500'}`} />

        {/* Label */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur border border-white/20 px-3 py-1 rounded text-[10px] font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            {label}
        </div>
    </motion.div>
);

const Nav = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[calc(100vh-140px)] pb-20 md:pb-0">
            {/* Map Container */}
            <div className="w-full h-[50vh] lg:h-auto lg:flex-1 bg-black/60 border border-white/10 rounded-3xl relative overflow-hidden group perspective-1000 order-2 lg:order-1">
                {/* HUD Overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none p-4 md:p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <div className="bg-black/80 backdrop-blur border border-white/20 px-4 py-2 rounded-xl">
                            <span className="text-xs font-mono text-cyan-400">SAT-LINK: ACTIVE</span>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <div className="w-10 h-10 bg-black/80 backdrop-blur border border-white/20 rounded-lg flex items-center justify-center text-white pointer-events-auto cursor-pointer hover:bg-white/10">
                                <Crosshair size={20} />
                            </div>
                            <div className="w-10 h-10 bg-black/80 backdrop-blur border border-white/20 rounded-lg flex items-center justify-center text-white pointer-events-auto cursor-pointer hover:bg-white/10">
                                <span className="font-bold">+</span>
                            </div>
                            <div className="w-10 h-10 bg-black/80 backdrop-blur border border-white/20 rounded-lg flex items-center justify-center text-white pointer-events-auto cursor-pointer hover:bg-white/10">
                                <span className="font-bold">-</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Isometric Map Layer */}
                <div className="absolute inset-0 flex items-center justify-center transform scale-150 rotate-x-60 rotate-z-45 transition-transform duration-1000 group-hover:scale-125">
                    {/* Map Grid */}
                    <div className="w-[800px] h-[800px] bg-[#0a0a0a] border-4 border-cyan-900/30 grid grid-cols-8 grid-rows-8 gap-1 p-1 shadow-2xl transform rotate-45">
                        {[...Array(64)].map((_, i) => (
                            <div key={i} className={`bg-slate-900/50 border border-white/5 relative hover:bg-cyan-900/20 transition-colors duration-300 ${i === 27 || i === 28 || i === 35 || i === 36 ? 'bg-slate-800' : ''}`}>
                                {/* 3D Buildings Visualization (Random heights) */}
                                {Math.random() > 0.7 && (
                                    <div
                                        className="absolute bottom-0 left-0 right-0 bg-slate-800 border-t border-l border-white/10 shadow-lg"
                                        style={{ height: `${Math.random() * 60 + 20}px`, transform: 'translateZ(20px)' }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
                                        {Math.random() > 0.9 && <div className="absolute top-0 right-0 w-1 h-1 bg-red-500 animate-pulse" />}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* SVG Path Overlay (2D visual on top of 3D) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-60">
                    <motion.path
                        d="M 200 600 L 400 400 L 600 450 L 800 300"
                        fill="transparent"
                        stroke="#06b6d4"
                        strokeWidth="4"
                        strokeDasharray="10 5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                </svg>

                <MapMarker x="25%" y="75%" label="You" type="origin" delay={0.5} />
                <MapMarker x="75%" y="35%" label="Tech Plaza" type="destination" delay={1} />
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-80 bg-black/60 border border-white/10 rounded-3xl p-6 backdrop-blur-md flex flex-col order-1 lg:order-2">
                <div className="relative mb-6">
                    <input type="text" placeholder="Set Destination..." className="w-full bg-slate-900 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                    <Search size={16} className="absolute left-3 top-1/2 -translate-x-0 -translate-y-1/2 text-slate-500" />
                </div>

                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Route Info</h3>

                <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-400">Distance</span>
                        <span className="text-white font-mono font-bold">4.2 km</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-400">Est. Time</span>
                        <span className="text-cyan-400 font-mono font-bold">12 min</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-400">Traffic</span>
                        <span className="text-emerald-400 font-bold">Light</span>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto space-y-2 pr-2 scrollbar-none">
                    <div className="p-3 bg-white/5 rounded-lg border-l-2 border-cyan-500 text-sm text-slate-300">
                        Head North on Cyber Ave
                    </div>
                    <div className="p-3 bg-transparent rounded-lg border-l-2 border-slate-700 text-sm text-slate-500">
                        Turn Right at Neon St
                    </div>
                    <div className="p-3 bg-transparent rounded-lg border-l-2 border-slate-700 text-sm text-slate-500">
                        Merge onto Skyway 4
                    </div>
                    <div className="p-3 bg-transparent rounded-lg border-l-2 border-slate-700 text-sm text-slate-500">
                        Destination on Left
                    </div>
                </div>

                <button className="w-full mt-4 py-4 bg-cyan-600 rounded-xl font-bold text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:bg-cyan-500 transition-all flex items-center justify-center gap-2">
                    <Navigation size={18} /> START GUIDANCE
                </button>
            </div>
        </div>
    );
};

export default Nav;
