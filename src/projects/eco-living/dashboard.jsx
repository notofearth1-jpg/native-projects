import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, TrendingUp, Info } from 'lucide-react';

const Card = ({ children, className }) => (
    <div className={`bg-white rounded-3xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.02)] border border-slate-100 ${className}`}>
        {children}
    </div>
);

const StatCard = ({ label, value, trend, trendLabel, color }) => (
    <Card>
        <p className="text-slate-500 font-medium text-sm mb-2">{label}</p>
        <h3 className="text-4xl font-black text-[#2C3E50] mb-4 tracking-tight">{value}</h3>
        <div className="flex items-center gap-2">
            <div className={`px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${color === 'green' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {trend === 'down' ? <ArrowDown size={12} /> : <TrendingUp size={12} />}
                {trendLabel}
            </div>
            <span className="text-xs text-slate-400">vs last week</span>
        </div>
    </Card>
);

const Dashboard = () => {
    return (
        <div>
            <header className="mb-10">
                <h1 className="text-4xl font-serif font-bold text-[#1B4332] mb-2">Hello, Vibhu.</h1>
                <p className="text-slate-500">Your ecological footprint is looking greener today.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard label="Carbon Footprint" value="12.4 kg" trend="down" trendLabel="12%" color="green" />
                <StatCard label="Waste Diversion" value="85%" trend="up" trendLabel="5%" color="green" />
                <StatCard label="Water Usage" value="140 L" trend="up" trendLabel="2%" color="red" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart Area */}
                <Card className="lg:col-span-2 min-h-[400px]">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="font-bold text-lg text-[#2C3E50]">Weekly Emissions</h3>
                        <div className="flex gap-2">
                            <button className="px-4 py-1 rounded-full bg-[#E8F5E9] text-[#1B4332] text-sm font-bold">Week</button>
                            <button className="px-4 py-1 rounded-full text-slate-400 text-sm font-medium hover:bg-slate-50 transition-colors">Month</button>
                        </div>
                    </div>

                    <div className="h-64 flex items-end justify-between gap-4 px-4 pb-2">
                        {[65, 40, 45, 30, 55, 35, 25].map((h, i) => (
                            <div key={i} className="w-full flex flex-col justify-end gap-2 group cursor-pointer">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 0.8, delay: i * 0.1 }}
                                    className="w-full bg-[#A8D5BA] rounded-t-xl group-hover:bg-[#1B4332] transition-colors relative"
                                >
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#2C3E50] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity mb-2">
                                        {h}kg
                                    </div>
                                </motion.div>
                                <span className="text-xs text-slate-400 text-center font-medium">
                                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                                </span>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Breakdown Area */}
                <Card className="lg:col-span-1">
                    <h3 className="font-bold text-lg text-[#2C3E50] mb-6">Source Breakdown</h3>

                    <div className="relative w-48 h-48 mx-auto mb-8">
                        <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#E8F5E9" strokeWidth="12" />
                            <motion.circle
                                cx="50" cy="50" r="40" fill="transparent" stroke="#1B4332" strokeWidth="12"
                                strokeDasharray="251.2" strokeDashoffset="60"
                                initial={{ strokeDashoffset: 251.2 }}
                                animate={{ strokeDashoffset: 100 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                            <motion.circle
                                cx="50" cy="50" r="40" fill="transparent" stroke="#D8F3DC" strokeWidth="12"
                                strokeDasharray="251.2" strokeDashoffset="200"
                                initial={{ strokeDashoffset: 251.2 }}
                                animate={{ strokeDashoffset: 210 }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-3xl font-black text-[#2C3E50]">12.4</span>
                            <span className="text-xs text-slate-400 font-bold uppercase">kg CO2</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#1B4332]" />
                                <span className="text-sm font-medium text-slate-600">Transport</span>
                            </div>
                            <span className="text-sm font-bold">60%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#D8F3DC]" />
                                <span className="text-sm font-medium text-slate-600">Energy (Home)</span>
                            </div>
                            <span className="text-sm font-bold">25%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#E8F5E9]" />
                                <span className="text-sm font-medium text-slate-600">Food</span>
                            </div>
                            <span className="text-sm font-bold">15%</span>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="mt-8 pb-20 md:pb-0">
                <Card className="bg-[#1B4332] text-white border-none flex flex-col md:flex-row items-start gap-4 p-6 md:p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20" />
                    <div className="p-3 bg-white/20 rounded-full text-white backdrop-blur-sm mb-2 md:mb-0">
                        <Info size={24} />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-2">Did you know?</h3>
                        <p className="text-[#D8F3DC] max-w-2xl leading-relaxed text-sm md:text-base">
                            Switching to a plant-based diet for just one day a week can reduce your carbon footprint by up to 10% annually. We've found some great local markets near you.
                        </p>
                        <button className="mt-4 bg-white text-[#1B4332] px-6 py-2 rounded-full font-bold text-sm hover:bg-[#D8F3DC] transition-colors w-full md:w-auto">
                            Explore Markets
                        </button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
