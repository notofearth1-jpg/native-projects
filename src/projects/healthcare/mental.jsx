import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smile, Frown, Meh, Sun, Cloud, Moon, Play, BookOpen, Music } from 'lucide-react';

const MoodButton = ({ icon: Icon, label, color, selected, onClick }) => (
    <button
        onClick={onClick}
        className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all ${selected ? `bg-${color}-100 ring-2 ring-${color}-500 transform scale-105` : 'bg-white border border-slate-100 hover:border-slate-300'}`}
    >
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${selected ? `text-${color}-600` : 'text-slate-400'}`}>
            <Icon size={32} />
        </div>
        <span className={`text-xs font-bold ${selected ? `text-${color}-700` : 'text-slate-500'}`}>{label}</span>
    </button>
);

const ResourceCard = ({ title, desc, icon: Icon, color, duration }) => (
    <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow group">
        <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform`}>
            <Icon size={20} />
        </div>
        <div className="flex-1">
            <h4 className="font-bold text-slate-800 text-sm">{title}</h4>
            <p className="text-xs text-slate-400">{desc}</p>
        </div>
        <div className="bg-slate-50 px-2 py-1 rounded-full text-[10px] font-bold text-slate-500">
            {duration}
        </div>
    </div>
);

const Mental = () => {
    const [mood, setMood] = useState('good');

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 pb-20 md:pb-0">
            <div className="space-y-8">
                <header>
                    <h2 className="text-2xl font-bold text-slate-800">Mental Wellness</h2>
                    <p className="text-slate-500 text-sm">How are you feeling today, John?</p>
                </header>

                <div>
                    <h3 className="font-bold text-slate-800 mb-4">Daily Check-in</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <MoodButton icon={Smile} label="Good" color="emerald" selected={mood === 'good'} onClick={() => setMood('good')} />
                        <MoodButton icon={Meh} label="Okay" color="amber" selected={mood === 'okay'} onClick={() => setMood('okay')} />
                        <MoodButton icon={Frown} label="Bad" color="rose" selected={mood === 'bad'} onClick={() => setMood('bad')} />
                    </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-10 -mb-10" />

                    <h3 className="font-bold text-2xl mb-2">Daily Gratitude</h3>
                    <p className="text-indigo-100 text-sm mb-6">Take a moment to reflect on what you're thankful for.</p>

                    <textarea
                        className="w-full bg-white/20 border border-white/30 rounded-xl p-4 text-white placeholder-white/60 text-sm focus:outline-none focus:bg-white/30 transition-colors resize-none h-32"
                        placeholder="Today I am grateful for..."
                    />
                    <button className="mt-4 bg-white text-indigo-600 px-6 py-2 rounded-xl font-bold text-sm shadow-lg hover:bg-slate-50 transition-colors">
                        Save Entry
                    </button>
                </div>
            </div>

            <div className="space-y-8">
                <div>
                    <h3 className="font-bold text-slate-800 mb-4">Recommended for You</h3>
                    <div className="grid grid-cols-1 gap-4">
                        <ResourceCard title="Morning Focus" desc="Guided Meditation" icon={Sun} color="bg-amber-400" duration="10 min" />
                        <ResourceCard title="Anxiety Relief" desc="Breathing Exercise" icon={Cloud} color="bg-cyan-400" duration="5 min" />
                        <ResourceCard title="Sleep Stories" desc="Audio for Rest" icon={Moon} color="bg-indigo-400" duration="20 min" />
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-slate-800 mb-4">Mood History</h3>
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 h-48 flex items-end justify-between gap-2 px-4">
                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => {
                            const h = [60, 40, 80, 50, 70, 90, 60][i];
                            const color = h > 60 ? 'bg-emerald-400' : h > 40 ? 'bg-amber-400' : 'bg-rose-400';
                            return (
                                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`w-2 md:w-4 rounded-full ${color} opacity-80`}
                                    />
                                    <span className="text-xs font-bold text-slate-400">{day}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mental;
