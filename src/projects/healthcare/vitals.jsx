import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Thermometer, ArrowUp, ArrowDown } from 'lucide-react';

const VitalCard = ({ title, value, unit, icon: Icon, color, data }) => (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-6">
            <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center text-white`}>
                <Icon size={24} />
            </div>
            <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{title}</p>
                <div className="flex items-baseline gap-1">
                    <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
                    <span className="text-xs text-slate-400 font-medium">{unit}</span>
                </div>
            </div>
        </div>

        {/* Simple Sparkline */}
        <div className="h-16 flex items-end gap-1">
            {data.map((h, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05 }}
                    className={`flex-1 rounded-t-sm ${i === data.length - 1 ? 'bg-slate-800' : 'bg-slate-100'}`}
                />
            ))}
        </div>
    </div>
);

const HistoryRow = ({ date, type, value, status }) => (
    <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl transition-colors border-b border-slate-50 last:border-0 cursor-default">
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xs">
                {date.split(' ')[0]}
            </div>
            <div>
                <p className="font-bold text-slate-800 text-sm">{type}</p>
                <p className="text-xs text-slate-400">{date}</p>
            </div>
        </div>

        <div className="text-right">
            <p className="font-bold text-slate-800 text-sm">{value}</p>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${status === 'Normal' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                {status}
            </span>
        </div>
    </div>
);

const Vitals = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20 md:pb-0">
            <div className="lg:col-span-2 space-y-8">
                <header className="flex justify-between items-end">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">Vitals History</h2>
                        <p className="text-slate-500 text-sm">Track your health trends over time.</p>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <VitalCard
                        title="Heart Rate"
                        value="72" unit="bpm"
                        icon={Heart}
                        color="bg-rose-500"
                        data={[40, 50, 45, 60, 55, 70, 65, 60, 55, 50]}
                    />
                    <VitalCard
                        title="Blood Pressure"
                        value="118/78" unit="mmHg"
                        icon={Activity}
                        color="bg-cyan-500"
                        data={[60, 65, 60, 55, 60, 65, 70, 65, 60, 60]}
                    />
                    <VitalCard
                        title="Body Temp"
                        value="98.6" unit="°F"
                        icon={Thermometer}
                        color="bg-amber-500"
                        data={[50, 50, 52, 50, 50, 50, 50, 50, 50, 50]}
                    />
                    <VitalCard
                        title="Oxygen Level"
                        value="98" unit="%"
                        icon={Activity}
                        color="bg-blue-500"
                        data={[90, 92, 95, 98, 98, 97, 98, 99, 98, 98]}
                    />
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-6">Detailed Analysis</h3>
                    <div className="h-64 flex items-end gap-2">
                        {/* Simulated Complex Graph */}
                        {[...Array(30)].map((_, i) => {
                            const h = Math.random() * 60 + 20;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ delay: i * 0.02 }}
                                    className="flex-1 bg-cyan-100 rounded-t-sm hover:bg-cyan-500 transition-colors relative group"
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                        Value: {Math.round(h)}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm h-fit">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-slate-800">Recent Logs</h3>
                    <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-cyan-600 hover:border-cyan-600 transition-colors">
                        <span className="text-xl leading-none mb-1">+</span>
                    </button>
                </div>

                <div>
                    <HistoryRow date="Oct 24" type="Blood Pressure" value="120/80" status="Normal" />
                    <HistoryRow date="Oct 23" type="Heart Rate" value="75 bpm" status="Normal" />
                    <HistoryRow date="Oct 23" type="Glucose" value="105 mg/dL" status="Elevated" />
                    <HistoryRow date="Oct 22" type="Weight" value="165 lbs" status="Normal" />
                    <HistoryRow date="Oct 21" type="Blood Pressure" value="118/79" status="Normal" />
                    <HistoryRow date="Oct 20" type="Heart Rate" value="70 bpm" status="Normal" />
                </div>

                <button className="w-full mt-6 py-3 border border-slate-200 rounded-xl text-slate-500 font-bold text-sm hover:bg-slate-50 transition-colors">
                    View Complete Log
                </button>
            </div>
        </div>
    );
};

export default Vitals;
