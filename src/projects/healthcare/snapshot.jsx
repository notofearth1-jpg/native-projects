import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Heart, Moon, Droplets, ArrowRight, Video, Pill, Check } from 'lucide-react';

const MetricCard = ({ label, value, unit, icon: Icon, color, trend }) => (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)] flex items-start justify-between group hover:border-cyan-100 transition-colors cursor-default">
        <div>
            <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                <Icon size={20} className="text-white" />
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">{label}</p>
            <div className="flex items-baseline gap-1">
                <h3 className="text-3xl font-bold text-slate-800">{value}</h3>
                <span className="text-sm text-slate-400 font-medium">{unit}</span>
            </div>
        </div>

        {trend && (
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                {trend}
            </span>
        )}
    </div>
);

const Task = ({ title, time, type, status }) => (
    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group border border-transparent hover:border-slate-100">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${status === 'done' ? 'bg-cyan-500 border-cyan-500 text-white' : 'border-slate-200 text-transparent group-hover:border-cyan-400'}`}>
            <Check size={16} />
        </div>
        <div className="flex-1">
            <h4 className={`font-bold text-sm ${status === 'done' ? 'text-slate-400 line-through' : 'text-slate-800'}`}>{title}</h4>
            <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-medium text-slate-400">{time}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${type === 'Meds' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'}`}>
                    {type}
                </span>
            </div>
        </div>
    </div>
);

const Snapshot = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                {/* Vitals Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <MetricCard label="Heart Rate" value="72" unit="bpm" icon={Heart} color="bg-rose-500" trend="Normal" />
                    <MetricCard label="Blood Pressure" value="120/80" unit="mmHg" icon={Activity} color="bg-cyan-500" />
                    <MetricCard label="Sleep" value="7h 20m" unit="hrs" icon={Moon} color="bg-indigo-500" trend="+12%" />
                    <MetricCard label="Glucose" value="95" unit="mg/dL" icon={Droplets} color="bg-emerald-500" />
                </div>

                {/* Main Activity Chart Area */}
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm min-h-[300px]">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-slate-800">Activity Overview</h3>
                        <select className="bg-slate-50 border-none text-xs font-bold text-slate-500 rounded-lg py-2 px-3 outline-none">
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                        </select>
                    </div>

                    <div className="h-64 flex items-end justify-between gap-4 px-2">
                        {[50, 70, 45, 90, 60, 80, 75].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col justify-end gap-2 group">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 0.8, delay: i * 0.1 }}
                                    className="w-full bg-cyan-100 rounded-t-xl group-hover:bg-cyan-500 transition-colors relative"
                                >
                                </motion.div>
                                <span className="text-xs text-slate-400 text-center font-medium">
                                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Upcoming Appointment */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 shadow-lg shadow-blue-500/20">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm shrink-0">
                            <Video size={24} />
                        </div>
                        <div>
                            <p className="text-blue-100 text-xs font-bold uppercase mb-1">Coming Up • 2:00 PM</p>
                            <h3 className="font-bold text-lg">Dr. Sarah Smith</h3>
                            <p className="text-sm opacity-90">Cardiology Consultation</p>
                        </div>
                    </div>
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold text-sm shadow-md hover:scale-105 transition-transform w-full sm:w-auto">
                        Join Call
                    </button>
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6 pb-20 md:pb-0">
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-slate-800">Daily Tasks</h3>
                        <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-2 py-1 rounded-full">2/5 Done</span>
                    </div>
                    <div className="space-y-1">
                        <Task title="Morning Meds" time="08:00 AM" type="Meds" status="done" />
                        <Task title="Blood Pressure Check" time="09:00 AM" type="Check" status="done" />
                        <Task title="Afternoon Meds" time="01:00 PM" type="Meds" status="pending" />
                        <Task title="Dr. Smith Call" time="02:00 PM" type="Appt" status="pending" />
                        <Task title="Evening Walk" time="06:00 PM" type="Activity" status="pending" />
                    </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100">
                    <h3 className="font-bold text-orange-800 mb-2">Prescription Refill</h3>
                    <p className="text-sm text-orange-600/80 mb-4">Your <span className="font-bold">Lisinopril</span> is running low. 5 days remaining.</p>
                    <button className="w-full py-3 bg-white text-orange-600 font-bold rounded-xl shadow-sm hover:shadow border border-orange-200 transition-all flex items-center justify-center gap-2">
                        <Pill size={16} /> Request Refill
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Snapshot;
