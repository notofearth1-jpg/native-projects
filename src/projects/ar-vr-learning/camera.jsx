import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Maximize, RotateCcw, Layers, X } from 'lucide-react';

const Hotspot = ({ x, y, label, content, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="absolute" style={{ top: y, left: x }}>
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.2, type: "spring" }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-8 h-8 bg-black/80 text-white rounded-full border-2 border-white flex items-center justify-center shadow-[0_0_20px_white] hover:scale-110 transition-transform relative z-10"
            >
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping absolute" />
                <Info size={16} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 bg-black/90 text-white p-4 rounded-xl border border-white/20 backdrop-blur-md z-20"
                    >
                        <h4 className="font-bold text-yellow-400 text-sm uppercase mb-1">{label}</h4>
                        <p className="text-xs text-slate-300 leading-relaxed">{content}</p>
                        <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-black/90 border-b border-r border-white/20 rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Connecting Line */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: 40 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                className="absolute top-8 left-1/2 w-[1px] bg-white/50 -translate-x-1/2"
            />
        </div>
    );
};

const ARCamera = () => {
    const [viewMode, setViewMode] = useState('exploded'); // exploded, solid, wireframe

    return (
        <div className="relative h-[65vh] md:h-[80vh] rounded-3xl overflow-hidden border-2 border-black/10 shadow-2xl bg-slate-900 pb-20 md:pb-0">
            {/* Simulated Camera Feed Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

            {/* Simulated 3D Model Centered */}
            <div className="absolute inset-0 flex items-center justify-center -mt-10 md:mt-0">
                <motion.div
                    initial={{ rotate: 0, scale: 0.8 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="relative w-64 h-64 md:w-96 md:h-96 border-[1px] border-cyan-500/30 rounded-full flex items-center justify-center"
                >
                    <div className="absolute inset-0 border border-dashed border-white/20 rounded-full animate-spin-slow" />

                    {/* Simulated Engine Model using CSS shapes/Image */}
                    <div className="relative w-40 h-40 md:w-64 md:h-64 bg-gradient-to-br from-slate-700 to-black rounded-lg transform rotate-45 shadow-2xl border border-white/10 flex items-center justify-center">
                        <div className={`absolute inset-0 bg-cyan-500/10 ${viewMode === 'wireframe' ? 'border-2 border-cyan-400 bg-transparent' : ''}`} />
                        <span className="text-4xl md:text-6xl">⚙️</span>

                        {/* Floating Parts for Exploded View */}
                        {viewMode === 'exploded' && (
                            <>
                                <motion.div
                                    initial={{ x: 0, y: 0 }}
                                    animate={{ x: 40, y: -40 }}
                                    className="absolute w-12 h-12 md:w-20 md:h-20 bg-slate-600 rounded border border-white/20 shadow-xl"
                                />
                                <motion.div
                                    initial={{ x: 0, y: 0 }}
                                    animate={{ x: -40, y: 40 }}
                                    className="absolute w-12 h-12 md:w-20 md:h-20 bg-slate-800 rounded border border-white/20 shadow-xl"
                                />
                            </>
                        )}
                    </div>
                </motion.div>
            </div>

            {/* Hotspots */}
            <Hotspot x="20%" y="30%" label="Intake Valve" content="Regulates air flow. 98% efficiency." index={0} />
            <Hotspot x="80%" y="40%" label="Cooling" content="Liquid cooling. 85°C." index={1} />
            <Hotspot x="50%" y="70%" label="Drive Shaft" content="High-torque transmission." index={2} />

            {/* Scanning UI Overlays */}
            <motion.div
                initial={{ top: '0%' }}
                animate={{ top: '100%' }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-1 bg-cyan-400/50 shadow-[0_0_20px_#22d3ee] pointer-events-none"
            />

            {/* Controls */}
            <div className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-4 bg-black/80 backdrop-blur-md p-2 rounded-2xl border border-white/10 z-30">
                <button
                    onClick={() => setViewMode('solid')}
                    className={`p-3 rounded-xl transition-all ${viewMode === 'solid' ? 'bg-yellow-400 text-black' : 'hover:bg-white/10 text-white'}`}
                >
                    <RotateCcw size={20} />
                </button>
                <button
                    onClick={() => setViewMode('exploded')}
                    className={`p-3 rounded-xl transition-all ${viewMode === 'exploded' ? 'bg-yellow-400 text-black' : 'hover:bg-white/10 text-white'}`}
                >
                    <Layers size={20} />
                </button>
                <button
                    onClick={() => setViewMode('wireframe')}
                    className={`p-3 rounded-xl transition-all ${viewMode === 'wireframe' ? 'bg-yellow-400 text-black' : 'hover:bg-white/10 text-white'}`}
                >
                    <Maximize size={20} />
                </button>
            </div>

            {/* Top Info */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border-l-4 border-yellow-400 text-white max-w-[200px] md:max-w-none">
                <h3 className="font-bold text-sm md:text-lg">V-8 Turbine Engine</h3>
                <p className="text-[10px] md:text-xs text-slate-300">Scale: 1:4 • Object Detected</p>
            </div>
        </div>
    );
};

export default ARCamera;
