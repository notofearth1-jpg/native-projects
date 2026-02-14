import React from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy, Target, Award, Hexagon, Box } from 'lucide-react';
import clsx from 'clsx';

const SkillNode = ({ x, y, icon: Icon, label, status, delay }) => {
    // status: locked, unlocked, master
    return (
        <div className="absolute flex flex-col items-center" style={{ top: y, left: x }}>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay, type: "spring" }}
                className={clsx(
                    "w-16 h-16 rounded-2xl rotate-45 flex items-center justify-center border-4 relative z-10 transition-all duration-300 group cursor-pointer",
                    status === 'master' ? "bg-yellow-400 border-black shadow-[0_10px_0_rgba(0,0,0,0.2)]" :
                        status === 'unlocked' ? "bg-white border-black text-black" :
                            "bg-slate-200 border-slate-300 text-slate-400"
                )}
            >
                <div className="-rotate-45">
                    <Icon size={24} />
                </div>

                {status === 'master' && (
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-2 border-dashed border-black/30 rounded-2xl m-[-8px]"
                    />
                )}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delay + 0.2 }}
                className="mt-8 bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider relative z-20"
            >
                {label}
            </motion.div>
        </div>
    );
};

const Connection = ({ start, end, delay }) => {
    // Simplified connection line for demo (static for now as dynamic requires calc)
    // In a real app, calculate SVG path between nodes
    return null;
};

const Progress = () => {
    return (
        <div className="max-w-5xl mx-auto h-[80vh] flex flex-col">
            <header className="mb-12 flex justify-between items-end">
                <div>
                    <h2 className="text-4xl font-black uppercase mb-2">Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Constellation</span></h2>
                    <p className="font-mono text-slate-500">Level 12 • Architect Class</p>
                </div>
                <div className="flex gap-4">
                    <div className="bg-white border-2 border-black rounded-xl p-4 flex items-center gap-3 shadow-[4px_4px_0_#000]">
                        <Trophy className="text-yellow-500 fill-yellow-500" />
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase">Total XP</p>
                            <p className="text-xl font-black">12,450</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex-1 relative bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-inner">
                {/* Scrollable Container for Map */}
                <div className="w-full h-full overflow-auto touch-pan-x touch-pan-y">
                    <div className="min-w-[800px] min-h-[600px] relative">
                        {/* Background Grid */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

                        {/* Nodes */}
                        {/* Connecting Lines (Manual for mockup) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            <motion.path
                                d="M150 400 L 350 250"
                                stroke="black" strokeWidth="4" strokeDasharray="10 10"
                                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }}
                            />
                            <motion.path
                                d="M350 250 L 600 250"
                                stroke="black" strokeWidth="4"
                                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.8 }}
                            />
                            <motion.path
                                d="M350 250 L 350 500"
                                stroke="black" strokeWidth="4"
                                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.8 }}
                            />
                            <motion.path
                                d="M600 250 L 800 150"
                                stroke="#cbd5e1" strokeWidth="4"
                                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.2 }}
                            />
                        </svg>

                        <div className="relative w-full h-full">
                            {/* Centering offset manually for the mockup */}
                            <div className="absolute top-10 left-10">
                                <SkillNode x={120} y={350} icon={Star} label="Basics" status="master" delay={0.1} />
                                <SkillNode x={320} y={200} icon={Box} label="Modeling" status="master" delay={0.3} />
                                <SkillNode x={320} y={450} icon={Target} label="Precision" status="unlocked" delay={0.4} />
                                <SkillNode x={570} y={200} icon={Hexagon} label="Materials" status="unlocked" delay={0.5} />
                                <SkillNode x={770} y={100} icon={Award} label="Mastery" status="locked" delay={0.6} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Badges Footer */}
            <div className="mt-8 overflow-x-auto pb-4 scrollbar-hide flex gap-4">
                {[1, 2, 3, 4, 5].map((_, i) => (
                    <div key={i} className="min-w-[80px] h-20 bg-slate-100 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center grayscale opacity-50">
                        <Award size={32} />
                    </div>
                ))}
                <div className="min-w-[80px] h-20 bg-yellow-400 rounded-full border-2 border-black flex items-center justify-center shadow-[4px_4px_0_#000]">
                    <Award size={32} className="text-black" />
                </div>
            </div>
        </div>
    );
};

export default Progress;
