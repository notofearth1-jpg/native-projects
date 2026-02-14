import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, AlertTriangle, Phone, Radio, MapPin, CheckCircle, XOctagon } from 'lucide-react';

const AlertItem = ({ type, title, time, level, location, status }) => (
    <div className={`p-4 border-l-4 mb-4 backdrop-blur-md transition-all cursor-pointer group hover:bg-white/5 ${level === 'CRITICAL' ? 'bg-red-900/20 border-red-500' : level === 'WARNING' ? 'bg-amber-900/20 border-amber-500' : 'bg-blue-900/20 border-blue-500'}`}>
        <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
                {level === 'CRITICAL' ? <XOctagon className="text-red-500" size={18} /> : <AlertTriangle className="text-amber-500" size={18} />}
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${level === 'CRITICAL' ? 'bg-red-500/20 text-red-500' : 'bg-amber-500/20 text-amber-500'}`}>{level}</span>
                <span className="text-xs text-slate-400 font-mono">{time}</span>
            </div>
            {status === 'ACTIVE' && <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />}
        </div>

        <h4 className="font-bold text-white text-sm mb-1">{title}</h4>
        <div className="flex items-center gap-2 text-xs text-slate-400">
            <MapPin size={12} /> {location}
        </div>
    </div>
);

const EmergencyBtn = ({ icon: Icon, label, color, onClick }) => (
    <button
        onClick={onClick}
        className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border transition-all active:scale-95 group relative overflow-hidden ${color === 'red' ? 'bg-red-500/10 border-red-500/50 hover:bg-red-500/20 hover:border-red-500' : 'bg-cyan-500/10 border-cyan-500/50 hover:bg-cyan-500/20 hover:border-cyan-500'}`}
    >
        <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 z-10 ${color === 'red' ? 'bg-red-500 border-red-400 text-white shadow-[0_0_30px_rgba(239,68,68,0.5)]' : 'bg-cyan-900/50 border-cyan-400 text-cyan-400'}`}>
            <Icon size={32} />
        </div>
        <span className="font-bold text-white tracking-widest uppercase text-xs z-10">{label}</span>

        {/* Background Animation */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${color === 'red' ? 'bg-gradient-to-t from-red-900/50 to-transparent' : 'bg-gradient-to-t from-cyan-900/50 to-transparent'}`} />
    </button>
);

const Emergency = () => {
    const [sosActive, setSosActive] = useState(false);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full pb-20 md:pb-0">
            {/* Left Panel: Alerts Feed */}
            <div className="flex flex-col h-full bg-black/40 border border-white/10 rounded-3xl p-6 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-red-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                <header className="mb-6 z-10">
                    <div className="flex items-center gap-3 mb-2">
                        <ShieldAlert className="text-red-500" size={28} />
                        <h2 className="text-2xl font-bold text-white uppercase tracking-widest font-mono">
                            City<span className="text-red-500">Alert</span>
                        </h2>
                    </div>
                    <div className="h-px w-full bg-gradient-to-r from-red-500/50 to-transparent" />
                </header>

                <div className="flex-1 overflow-y-auto pr-2 scrollbar-none z-10">
                    <div className="mb-6">
                        <h3 className="text-xs font-bold text-red-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" /> Live Incidents
                        </h3>
                        <AlertItem
                            type="Traffic"
                            title="Maglev Line Collison Avoidance"
                            time="Now"
                            level="CRITICAL"
                            location="Sector 7 - Lower Level"
                            status="ACTIVE"
                        />
                        <AlertItem
                            type="Weather"
                            title="Acid rain Warning - Tier 2"
                            time="12 min ago"
                            level="WARNING"
                            location="All Sectors"
                            status="ACTIVE"
                        />
                    </div>

                    <div>
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Resolved</h3>
                        <AlertItem
                            type="Security"
                            title="Unauthorized Drone Activity"
                            time="09:42 AM"
                            level="INFO"
                            location="District 4"
                            status="RESOLVED"
                        />
                    </div>
                </div>
            </div>

            {/* Right Panel: SOS Actions */}
            <div className="flex flex-col gap-6">
                <div className="flex-1 bg-black/40 border border-white/10 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-center items-center text-center relative overflow-hidden">
                    <AnimatePresence>
                        {sosActive ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="absolute inset-0 bg-red-900/90 z-20 flex flex-col items-center justify-center p-8"
                            >
                                <div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center mb-6 animate-pulse">
                                    <Radio size={48} className="text-white" />
                                </div>
                                <h3 className="text-3xl font-black text-white uppercase tracking-wider mb-2">Signal Sent</h3>
                                <p className="text-red-200 mb-8 max-w-xs">Emergency units dispatched to your location coordinates.</p>
                                <button
                                    onClick={() => setSosActive(false)}
                                    className="bg-white text-red-600 px-8 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-red-50 transition-colors"
                                >
                                    Cancel Signal
                                </button>
                            </motion.div>
                        ) : null}
                    </AnimatePresence>

                    <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-2 font-mono">Emergency Response</h3>
                    <p className="text-slate-500 text-sm mb-8">Tap and hold for immediate assistance.</p>

                    <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                        <EmergencyBtn icon={ShieldAlert} label="Police" color="cyan" onClick={() => setSosActive(true)} />
                        <EmergencyBtn icon={AlertTriangle} label="Medical" color="red" onClick={() => setSosActive(true)} />
                        <EmergencyBtn icon={Radio} label="Fire" color="cyan" onClick={() => setSosActive(true)} />
                        <EmergencyBtn icon={Phone} label="Hotline" color="cyan" onClick={() => setSosActive(true)} />
                    </div>
                </div>

                <div className="bg-emerald-900/20 border border-emerald-500/30 p-4 rounded-2xl flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
                        <CheckCircle size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-emerald-400 text-sm uppercase tracking-widest">Safe Zone</h4>
                        <p className="text-xs text-emerald-200/70">You are currently in a verified secure sector.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emergency;
