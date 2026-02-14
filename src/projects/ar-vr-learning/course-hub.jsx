import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronRight, Play, Box } from 'lucide-react';
import clsx from 'clsx';

const Categories = ["All", "Biology", "Engineering", "Astronomy", "History", "Arts"];

const Courses = [
    { title: "Quantum Physics", category: "Astronomy", level: "Advanced", color: "bg-indigo-600", image: "🌌" },
    { title: "Human Anatomy", category: "Biology", level: "Intermediate", color: "bg-rose-500", image: "🫀" },
    { title: "Structural Logic", category: "Engineering", level: "Beginner", color: "bg-cyan-600", image: "🏗️" },
    { title: "Renaissance Art", category: "Arts", level: "Intermediate", color: "bg-amber-500", image: "🎨" },
    { title: "Mars Colonization", category: "Astronomy", level: "Advanced", color: "bg-orange-600", image: "🚀" },
    { title: "Ancient Rome", category: "History", level: "Beginner", color: "bg-emerald-600", image: "🏛️" },
];

const CourseCard = ({ course, index }) => {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, type: "spring" }}
            whileHover={{ y: -10 }}
            className="group relative cursor-pointer"
        >
            {/* 3D Depth Layer */}
            <div className="absolute top-2 left-2 w-full h-full rounded-3xl bg-black transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />

            <div className="relative bg-white border-2 border-black rounded-3xl overflow-hidden h-80 flex flex-col transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1">
                {/* Image Area */}
                <div className={clsx("h-48 p-6 flex items-center justify-center relative overflow-hidden", course.color)}>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <motion.div
                        className="text-8xl filter drop-shadow-xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {course.image}
                    </motion.div>

                    <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {course.level}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                    <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{course.category}</span>
                        <h3 className="text-2xl font-black text-black leading-tight mt-1 group-hover:text-indigo-600 transition-colors">{course.title}</h3>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                            ))}
                        </div>
                        <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                            <ArrowIcon />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ArrowIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

const CourseHub = () => {
    const [activeCat, setActiveCat] = useState("All");

    const filteredCourses = activeCat === "All" ? Courses : Courses.filter(c => c.category === activeCat);

    return (
        <div className="max-w-6xl mx-auto pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 mb-2"
                    >
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                        <span className="font-mono text-xs md:text-sm text-slate-500">LIVE FEED // EDU-NET</span>
                    </motion.div>
                    <h1 className="text-4xl md:text-7xl font-black text-black tracking-tighter uppercase relative">
                        Immersion
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Hub</span>
                        {/* Decorative Shape */}
                        <div className="absolute -top-6 -left-6 w-12 h-12 border-t-4 border-l-4 border-black/10 rounded-tl-xl" />
                    </h1>
                </div>

                <div className="relative w-full md:w-auto">
                    <input
                        type="text"
                        placeholder="Search modules..."
                        className="w-full md:w-80 pl-12 pr-4 py-3 md:py-4 bg-white border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-black transition-colors font-medium text-sm md:text-base"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                </div>
            </div>

            {/* Categories */}
            <div className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide mb-4">
                {Categories.map((cat, i) => (
                    <motion.button
                        key={cat}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => setActiveCat(cat)}
                        className={clsx(
                            "px-6 py-3 rounded-xl font-bold border-2 transition-all whitespace-nowrap shadow-[4px_4px_0px_#000000]",
                            activeCat === cat
                                ? "bg-black text-white border-black translate-y-0 shadow-none transform translate-x-[2px] translate-y-[2px]"
                                : "bg-white text-black border-black hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]"
                        )}
                    >
                        {cat}
                    </motion.button>
                ))}
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2">
                <AnimatePresence mode="popLayout">
                    {filteredCourses.map((course, i) => (
                        <CourseCard key={course.title} course={course} index={i} />
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default CourseHub;
