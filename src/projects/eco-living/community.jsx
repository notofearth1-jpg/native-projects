import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Calendar, ArrowUpRight, Heart } from 'lucide-react';
import clsx from 'clsx';

const Events = [
    { title: "River Cleanup", date: "Sat, Aug 12", attendees: 24, type: "Volunteer", color: "bg-blue-500" },
    { title: "Tree Planting", date: "Sun, Aug 13", attendees: 18, type: "Action", color: "bg-green-500" },
    { title: "Zero Waste Workshop", date: "Wed, Aug 16", attendees: 45, type: "Education", color: "bg-purple-500" },
];

const Leaderboard = [
    { name: "Sarah J.", points: 1250, rank: 1 },
    { name: "Mike T.", points: 980, rank: 2 },
    { name: "You", points: 850, rank: 3 },
    { name: "Alex R.", points: 720, rank: 4 },
];

const Pin = ({ x, y, delay }) => (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay, type: "spring" }}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
        style={{ top: y, left: x }}
    >
        <div className="w-8 h-8 rounded-full bg-[#1B4332] border-2 border-white shadow-lg flex items-center justify-center text-white relative z-10 group-hover:scale-110 transition-transform">
            <MapPin size={16} />
        </div>
        <div className="absolute w-8 h-8 bg-[#1B4332] rounded-full top-0 left-0 animate-ping opacity-20" />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-lg text-xs font-bold text-[#1B4332] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            3 Local Events
        </div>
    </motion.div>
);

const Community = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 h-auto lg:h-[calc(100vh-140px)] pb-20 md:pb-0">
            {/* Map Area */}
            <div className="w-full h-[400px] lg:h-auto lg:flex-1 bg-[#E8F5E9] rounded-3xl relative overflow-hidden shadow-inner border border-[#1B4332]/10 group order-2 lg:order-1">
                <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center" />

                {/* Styled Map Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#D8F3DC]/50 to-transparent pointer-events-none" />

                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                    <h3 className="font-bold text-[#1B4332]">Eco-Map</h3>
                    <p className="text-xs text-slate-500">Showing active projects in your area</p>
                </div>

                {/* Pins */}
                <Pin x="40%" y="30%" delay={0.2} />
                <Pin x="60%" y="50%" delay={0.4} />
                <Pin x="25%" y="65%" delay={0.6} />

                <div className="absolute bottom-6 right-6">
                    <button className="bg-white text-[#1B4332] p-3 rounded-xl shadow-lg hover:shadow-xl transition-all font-bold text-sm flex items-center gap-2">
                        <PlusIcon /> Add Project
                    </button>
                </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-96 space-y-6 overflow-y-auto pr-2 scrollbar-hide">
                {/* Upcoming Events */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-lg text-[#2C3E50]">Upcoming Events</h3>
                        <button className="text-sm font-bold text-[#1B4332] hover:underline">View All</button>
                    </div>

                    <div className="space-y-3">
                        {Events.map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-4 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow cursor-pointer flex gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-slate-50 flex flex-col items-center justify-center text-[#1B4332]">
                                    <span className="text-[10px] font-bold uppercase">{event.date.split(' ')[0]}</span>
                                    <span className="text-lg font-black">{event.date.split(' ')[2]}</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-bold text-[#2C3E50] text-sm">{event.title}</h4>
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full text-white ${event.color}`}>{event.type}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                                        <Users size={12} /> {event.attendees} joining
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Leaderboard */}
                <div className="bg-[#1B4332] text-white p-6 rounded-3xl">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold">Top Contributors</h3>
                        <TrophyIcon />
                    </div>

                    <div className="space-y-4">
                        {Leaderboard.map((user, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <span className={`w-6 text-center font-bold ${i < 3 ? 'text-yellow-400' : 'text-white/40'}`}>{user.rank}</span>
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                                    {user.name.charAt(0)}
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-sm">{user.name}</p>
                                </div>
                                <span className="font-mono text-sm opacity-80">{user.points} pts</span>
                            </div>
                        ))}
                    </div>

                    <button className="w-full mt-6 py-3 bg-white/10 rounded-xl text-sm font-bold hover:bg-white/20 transition-colors">
                        View Full Rankings
                    </button>
                </div>
            </div>
        </div>
    );
};

const PlusIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
)

const TrophyIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
        <path d="M8 21h8M12 17v4M7 4h10c0 8-3 13-3 13H10s-3-5-3-13zM6 4c0-2-3-3-3-3s-3 1-3 3c0 3 3 5 3 5M18 4c0-2 3-3 3-3s3 1 3 3c0 3-3 5-3 5" />
    </svg>
)


export default Community;
