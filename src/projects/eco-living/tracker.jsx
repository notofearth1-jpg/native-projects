import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Flame, Calendar, Plus } from 'lucide-react';
import clsx from 'clsx';

const Habits = [
    { id: 1, title: "Zero Waste Lunch", streak: 12, completed: true, color: "bg-emerald-500" },
    { id: 2, title: "Public Transit", streak: 5, completed: false, color: "bg-blue-500" },
    { id: 3, title: "Meat-Free Meal", streak: 3, completed: false, color: "bg-orange-500" },
    { id: 4, title: "Cold Water Wash", streak: 8, completed: true, color: "bg-cyan-500" },
];

const Heatmap = () => {
    return (
        <div className="flex gap-1 flex-wrap justify-between">
            {[...Array(28)].map((_, i) => {
                const intensity = Math.random();
                return (
                    <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.02 }}
                        className={clsx(
                            "w-8 h-8 rounded-lg",
                            intensity > 0.8 ? "bg-[#1B4332]" :
                                intensity > 0.5 ? "bg-[#2D6A4F]" :
                                    intensity > 0.2 ? "bg-[#74C69D]" : "bg-[#D8F3DC]"
                        )}
                        title={`Day ${i + 1}`}
                    />
                );
            })}
        </div>
    );
};

const HabitCard = ({ habit, onToggle }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={clsx(
            "p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer hover:shadow-md",
            habit.completed ? "bg-white border-[#1B4332]/20" : "bg-white border-slate-100"
        )}
        onClick={onToggle}
    >
        <div className="flex items-center gap-4">
            <div className={clsx(
                "w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300",
                habit.completed ? habit.color : "bg-slate-100 text-slate-300"
            )}>
                {habit.completed && <Check className="text-white" />}
            </div>

            <div>
                <h4 className={clsx("font-bold text-lg", habit.completed ? "text-[#2C3E50]" : "text-slate-400")}>{habit.title}</h4>
                <div className="flex items-center gap-1 text-xs font-medium text-slate-400">
                    <Flame size={12} className={habit.completed ? "text-orange-500" : ""} />
                    <span>{habit.streak} day streak</span>
                </div>
            </div>
        </div>

        <div className={clsx(
            "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
            habit.completed ? "border-[#1B4332] bg-[#1B4332] text-white" : "border-slate-200 group-hover:border-slate-300"
        )}>
            {habit.completed && <Check size={14} />}
        </div>
    </motion.div>
);

const Tracker = () => {
    const [habits, setHabits] = useState(Habits);

    const toggleHabit = (id) => {
        setHabits(habits.map(h =>
            h.id === id ? { ...h, completed: !h.completed, streak: h.completed ? h.streak : h.streak + 1 } : h
        ));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pb-20 md:pb-0">
            <div>
                <header className="mb-6 md:mb-8">
                    <h2 className="text-3xl font-serif font-bold text-[#1B4332] mb-2">Daily Habits</h2>
                    <p className="text-slate-500">Small actions create big change.</p>
                </header>

                <div className="space-y-4">
                    <AnimatePresence>
                        {habits.map(habit => (
                            <HabitCard key={habit.id} habit={habit} onToggle={() => toggleHabit(habit.id)} />
                        ))}
                    </AnimatePresence>

                    <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-medium hover:border-[#1B4332] hover:text-[#1B4332] transition-colors flex items-center justify-center gap-2">
                        <Plus size={20} /> Add New Habit
                    </button>
                </div>
            </div>

            <div className="space-y-6 md:space-y-8">
                <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
                    <div className="flex justify-between items-end mb-6">
                        <div>
                            <h3 className="font-bold text-lg text-[#2C3E50]">Monthly Consistency</h3>
                            <p className="text-sm text-slate-400">You're 15% more consistent than last month.</p>
                        </div>
                        <Calendar className="text-[#1B4332]" />
                    </div>
                    <div className="overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
                        <div className="min-w-[300px]">
                            <Heatmap />
                        </div>
                    </div>
                </div>

                <div className="bg-[#1B4332] text-white p-8 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#40916C] rounded-full -mr-10 -mt-10 opacity-50" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#2D6A4F] rounded-full -ml-5 -mb-5 opacity-50" />

                    <div className="relative z-10 text-center">
                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
                            <Flame size={32} className="text-orange-400 fill-orange-400" />
                        </div>
                        <h3 className="text-4xl font-black mb-1">12 Days</h3>
                        <p className="text-[#D8F3DC] font-medium tracking-wide">CURRENT STREAK</p>
                        <p className="text-xs text-white/60 mt-4">Keep it up! Only 9 days until you beat your record.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tracker;
