import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Video, Users, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const ScheduleData = [
    { time: "09:00 AM", title: "Daily Sync", type: "meeting", duration: "30m", attendees: ["Sarah", "Mike"], color: "blue" },
    { time: "10:00 AM", title: "Deep Work: System Arch", type: "work", duration: "2h", color: "purple" },
    { time: "12:30 PM", title: "Lunch with Client", type: "personal", duration: "1h", location: "Bistro 42", color: "emerald" },
    { time: "02:00 PM", title: "Product Review", type: "meeting", duration: "1h", attendees: ["Team", "PO"], color: "orange" },
    { time: "04:00 PM", title: "Gym / Cardio", type: "health", duration: "1h", color: "rose" },
];

const EventCard = ({ event, index }) => (
    <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: index * 0.1 }}
        className={clsx(
            "relative pl-8 pb-12 border-l border-white/10 last:pb-0 group"
        )}
    >
        <div className={clsx(
            "absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full border border-black transition-all duration-300 group-hover:scale-125",
            `bg-${event.color}-400 shadow-[0_0_10px_var(--color-${event.color}-400)]`
        )} style={{ [`--color-${event.color}-400`]: event.color === 'blue' ? '#60a5fa' : event.color === 'purple' ? '#c084fc' : event.color === 'emerald' ? '#34d399' : event.color === 'orange' ? '#fb923c' : '#fb7185' }} />

        <div className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/10 transition-colors cursor-pointer group-hover:border-white/10 backdrop-blur-md">
            <div className="flex justify-between items-start mb-2">
                <span className={`text-xs font-mono px-2 py-1 rounded bg-${event.color}-500/10 text-${event.color}-400 border border-${event.color}-500/20`}>
                    {event.time} • {event.duration}
                </span>
                <button className="text-white/20 hover:text-white transition-colors">
                    <ArrowRight size={16} />
                </button>
            </div>

            <h3 className="text-xl font-medium text-slate-100 mb-1">{event.title}</h3>

            <div className="flex gap-4 text-sm text-slate-400 mt-3">
                {event.attendees && (
                    <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span>{event.attendees.length} Attendees</span>
                    </div>
                )}
                {event.location && (
                    <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{event.location}</span>
                    </div>
                )}
                {event.type === 'meeting' && <Video size={14} />}
            </div>
        </div>
    </motion.div>
);

const Schedule = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 h-full pb-20 md:pb-0">
            <div className="lg:col-span-2">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-light text-white">Today's <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Timeline</span></h2>
                        <p className="text-sm md:text-base text-slate-400">You have 5 events scheduled.</p>
                    </div>

                    <div className="flex gap-2 w-full md:w-auto">
                        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors">
                            <Calendar size={20} />
                        </button>
                        <button className="flex-1 md:flex-none px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium shadow-[0_0_15px_rgba(8,145,178,0.4)] transition-all">
                            + New Event
                        </button>
                    </div>
                </div>

                <div className="relative ml-2">
                    {ScheduleData.map((event, i) => (
                        <EventCard key={i} event={event} index={i} />
                    ))}
                </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
                {/* AI Suggestions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
                >
                    <div className="flex items-center gap-2 mb-4 text-purple-300">
                        <MapPin size={18} />
                        <h3 className="font-semibold">Smart Suggestion</h3>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        Based on traffic data, you should leave for <span className="text-white font-medium">Bistro 42</span> by 12:10 PM. I've already plotted the fastest route.
                    </p>
                    <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white transition-colors border border-white/10">
                        View Route
                    </button>
                </motion.div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Clock size={16} className="text-cyan-400" />
                        Upcoming Tomorrow
                    </h3>
                    <div className="space-y-4">
                        <div className="flex gap-3 items-center opacity-60 hover:opacity-100 transition-opacity">
                            <div className="w-1 h-8 bg-slate-600 rounded-full" />
                            <div>
                                <p className="text-sm font-medium text-slate-200">Dentist Appointment</p>
                                <p className="text-xs text-slate-500">09:00 AM</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center opacity-60 hover:opacity-100 transition-opacity">
                            <div className="w-1 h-8 bg-slate-600 rounded-full" />
                            <div>
                                <p className="text-sm font-medium text-slate-200">Quarterly Review</p>
                                <p className="text-xs text-slate-500">02:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
