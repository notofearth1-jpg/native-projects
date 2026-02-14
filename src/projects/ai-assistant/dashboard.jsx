import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Thermometer, Wind, Zap, CheckCircle, Clock } from 'lucide-react';
import clsx from 'clsx';

const GlassCard = ({ children, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className={clsx(
            "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 shadow-xl relative overflow-hidden group hover:bg-white/10 transition-colors",
            className
        )}
    >
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {children}
    </motion.div>
);

const Stat = ({ label, value, icon: Icon, color, delay }) => (
    <GlassCard delay={delay} className="flex flex-col justify-between h-28 md:h-32">
        <div className="flex justify-between items-start">
            <div className={`p-2 rounded-lg bg-${color}-500/20 text-${color}-400`}>
                <Icon size={20} />
            </div>
            <span className="text-[10px] md:text-xs text-slate-400 font-mono tracking-wider">LIVE</span>
        </div>
        <div>
            <h4 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">{value}</h4>
            <p className="text-xs md:text-sm text-slate-400">{label}</p>
        </div>
    </GlassCard>
);

const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 pb-20 md:pb-0">
            {/* Welcome Section */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-2 space-y-1 md:space-y-2"
            >
                <h1 className="text-3xl md:text-4xl font-light">
                    Good Morning, <span className="font-bold text-cyan-400">Vibhu</span>
                </h1>
                <p className="text-slate-400 text-base md:text-lg">Your daily briefing is ready. Systems are optimal.</p>
            </motion.div>

            <div className="lg:col-span-1 flex justify-start lg:justify-end items-center space-x-4 mt-2 lg:mt-0">
                <span className="text-xs md:text-sm text-slate-500 font-mono">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                <div className="h-8 w-[1px] bg-slate-700" />
                <span className="text-lg md:text-xl font-mono text-cyan-400">09:42 AM</span>
            </div>

            {/* Stats Row - Mobile Grid Optimization */}
            <div className="grid grid-cols-2 lg:grid-cols-1 lg:col-span-3 gap-4 md:grid-cols-4">
                <Stat label="Heart Rate" value="72 bpm" icon={Activity} color="rose" delay={0.1} />
                <Stat label="Energy Usage" value="1.2 kW" icon={Zap} color="yellow" delay={0.2} />
                <Stat label="Indoor Temp" value="22°C" icon={Thermometer} color="orange" delay={0.3} />
                <Stat label="Air Quality" value="98%" icon={Wind} color="emerald" delay={0.4} />
            </div>

            {/* Active Tasks - 2 Cols */}
            <GlassCard className="lg:col-span-2 min-h-[300px] md:min-h-[400px]" delay={0.5}>
                <div className="flex justify-between items-center mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                        <CheckCircle className="text-cyan-400" size={20} />
                        Active Protocols
                    </h3>
                    <button className="text-sm text-cyan-400 hover:text-cyan-300">View All</button>
                </div>

                <div className="space-y-3 md:space-y-4">
                    {[
                        { title: "Review Q3 System Metrics", time: "10:00 AM", status: "In Progress", priority: "High" },
                        { title: "Sync Neural Interface", time: "11:30 AM", status: "Pending", priority: "Medium" },
                        { title: "Optimize Home Grid", time: "02:00 PM", status: "Scheduled", priority: "Low" },
                    ].map((task, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 + (i * 0.1) }}
                            className="p-3 md:p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex justify-between items-center group cursor-pointer"
                        >
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${task.priority === 'High' ? 'bg-red-500 shadow-[0_0_8px_#ef4444]' : task.priority === 'Medium' ? 'bg-yellow-500' : 'bg-blue-500'}`} />
                                <div>
                                    <h4 className="font-medium text-sm md:text-base text-slate-200 group-hover:text-white transition-colors line-clamp-1">{task.title}</h4>
                                    <p className="text-[10px] md:text-xs text-slate-500 flex items-center gap-1 mt-1">
                                        <Clock size={12} /> {task.time}
                                    </p>
                                </div>
                            </div>
                            <span className={`text-[10px] md:text-xs px-2 py-1 rounded-full border whitespace-nowrap ${task.status === 'In Progress' ? 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10' : 'border-slate-600 text-slate-400'}`}>
                                {task.status}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </GlassCard>

            {/* Right Column - Visualizer */}
            <GlassCard className="lg:col-span-1 min-h-[300px] md:min-h-[400px] relative" delay={0.6}>
                <h3 className="text-lg md:text-xl font-semibold mb-6 flex items-center gap-2">
                    <Zap className="text-yellow-400" size={20} />
                    System Load
                </h3>

                <div className="h-full w-full flex items-end justify-between gap-1 pb-10 px-2 h-48 md:h-64">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-full bg-cyan-500/20 rounded-t-sm relative overflow-hidden"
                            initial={{ height: '20%' }}
                            animate={{ height: `${Math.random() * 80 + 20}%` }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-cyan-600 to-transparent opacity-50" />
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">84%</h2>
                    <p className="text-[10px] md:text-xs text-slate-400 tracking-wider">OPTIMAL EFFICIENCY</p>
                </div>
            </GlassCard>

        </div>
    );
};

export default Dashboard;
