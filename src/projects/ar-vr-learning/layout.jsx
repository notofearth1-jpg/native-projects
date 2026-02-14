import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Camera, Award, Users, Menu, X, Crosshair } from 'lucide-react';
import clsx from 'clsx';

const NavItem = ({ icon: Icon, to, label }) => {
    const location = useLocation();
    const active = location.pathname === to;

    return (
        <Link to={to} className="relative group flex flex-col items-center gap-1">
            <div className={clsx(
                "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 border-2",
                active
                    ? "bg-black text-white border-black shadow-[4px_4px_0px_rgba(0,0,0,0.2)] transform -translate-y-1"
                    : "bg-white text-black border-slate-200 group-hover:border-black group-hover:-translate-y-1"
            )}>
                <Icon size={24} strokeWidth={1.5} />
            </div>
            <span className={clsx("text-[10px] font-bold tracking-wider uppercase", active ? "text-black" : "text-slate-400 group-hover:text-black")}>
                {label}
            </span>
        </Link>
    );
};

const ARLayout = () => {
    return (
        <div className="min-h-screen bg-[#F0F2F5] font-sans selection:bg-yellow-300 text-black overflow-hidden relative">
            {/* AR Overlay - HUD Elements */}
            <div className="fixed inset-0 pointer-events-none z-50">
                {/* Corners */}
                <div className="absolute top-8 left-8 w-8 h-8 border-t-4 border-l-4 border-black/80 rounded-tl-lg" />
                <div className="absolute top-8 right-8 w-8 h-8 border-t-4 border-r-4 border-black/80 rounded-tr-lg" />
                <div className="absolute bottom-8 left-8 w-8 h-8 border-b-4 border-l-4 border-black/80 rounded-bl-lg" />
                <div className="absolute bottom-8 right-8 w-8 h-8 border-b-4 border-r-4 border-black/80 rounded-br-lg" />

                {/* Crosshairs */}
                <div className="absolute top-1/2 left-8 w-4 h-[2px] bg-black/20" />
                <div className="absolute top-1/2 right-8 w-4 h-[2px] bg-black/20" />
                <div className="absolute top-8 left-1/2 w-[2px] h-4 bg-black/20" />
                <div className="absolute bottom-8 left-1/2 w-[2px] h-4 bg-black/20" />

                {/* Status Code */}
                <div className="absolute top-12 left-20 font-mono text-xs text-black/40">
                    SYS.V.2.0 // ONLINE
                </div>
            </div>

            {/* Main Content */}
            <main className="h-screen pb-24 overflow-y-auto pt-24 px-6 md:px-12 scrollbar-hide">
                <Outlet />
            </main>

            {/* Bottom Navigation Dock */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-sm sm:max-w-md px-4">
                <div className="bg-white/80 backdrop-blur-md border border-white/50 px-4 sm:px-8 py-4 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex items-center justify-between sm:gap-8">
                    <NavItem icon={Box} to="/ar-vr-learning" label="Discover" />
                    <NavItem icon={Camera} to="/ar-vr-learning/camera" label="AR View" />

                    {/* Center Action Button */}
                    <Link to="/ar-vr-learning/create" className="relative -top-8">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-16 h-16 bg-yellow-400 rounded-full border-4 border-white shadow-[0_10px_20px_rgba(250,204,21,0.4)] flex items-center justify-center text-black"
                        >
                            <Crosshair size={28} />
                        </motion.div>
                    </Link>

                    <NavItem icon={Award} to="/ar-vr-learning/progress" label="Skills" />
                    <NavItem icon={Users} to="/ar-vr-learning/social" label="Team" />
                </div>
            </div>

            {/* Background Grid */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />
        </div>
    );
};

export default ARLayout;
