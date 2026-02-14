import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Home, MessageSquare, Calendar, Sliders, User,
    Mic, Bell, Search, Menu, X
} from 'lucide-react';
import clsx from 'clsx';

const SidebarItem = ({ icon: Icon, to, active, onClick }) => (
    <Link to={to} onClick={onClick} className="relative group w-full">
        <div className={clsx(
            "absolute left-0 w-1 h-full rounded-r-full transition-all duration-300",
            active ? "bg-cyan-400 shadow-[0_0_10px_#22d3ee]" : "bg-transparent group-hover:bg-white/20"
        )} />
        <div className={clsx(
            "p-4 mx-2 rounded-xl transition-all duration-300 flex items-center justify-center",
            active ? "bg-white/10 text-cyan-400" : "text-slate-400 hover:text-white hover:bg-white/5"
        )}>
            <Icon size={24} />
        </div>
    </Link>
);

const AILayout = () => {
    const location = useLocation();
    const path = location.pathname;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#050511] text-white font-sans overflow-hidden relative selection:bg-cyan-500/30">
            {/* Ambient Background Glows */}
            <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/30 rounded-full blur-[120px] pointer-events-none" />
            <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="flex h-screen relative z-10 pb-20 md:pb-0">
                {/* Desktop Sidebar */}
                <nav className="hidden md:flex w-20 lg:w-24 h-full glass-panel border-r border-white/5 flex-col justify-between py-8 backdrop-blur-xl bg-black/20 z-50">
                    <div className="flex flex-col items-center gap-8">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(34,211,238,0.5)] flex items-center justify-center mb-4">
                            <span className="font-bold text-xl">AI</span>
                        </div>

                        <div className="flex flex-col gap-4 w-full">
                            <SidebarItem icon={Home} to="/ai-assistant" active={path === '/ai-assistant'} />
                            <SidebarItem icon={MessageSquare} to="/ai-assistant/chat" active={path === '/ai-assistant/chat'} />
                            <SidebarItem icon={Calendar} to="/ai-assistant/schedule" active={path === '/ai-assistant/schedule'} />
                            <SidebarItem icon={Sliders} to="/ai-assistant/devices" active={path === '/ai-assistant/devices'} />
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <SidebarItem icon={User} to="/ai-assistant/profile" active={path === '/ai-assistant/profile'} />
                    </div>
                </nav>

                {/* Mobile Bottom Navigation */}
                <div className="fixed bottom-0 left-0 right-0 h-20 bg-[#050511]/90 backdrop-blur-xl border-t border-white/10 md:hidden z-50 flex justify-around items-center px-6">
                    <Link to="/ai-assistant" className={`flex flex-col items-center gap-1 ${path === '/ai-assistant' ? 'text-cyan-400' : 'text-slate-500'}`}>
                        <Home size={24} />
                        {path === '/ai-assistant' && <div className="w-1 h-1 rounded-full bg-cyan-400" />}
                    </Link>
                    <Link to="/ai-assistant/chat" className={`flex flex-col items-center gap-1 ${path === '/ai-assistant/chat' ? 'text-cyan-400' : 'text-slate-500'}`}>
                        <MessageSquare size={24} />
                        {path === '/ai-assistant/chat' && <div className="w-1 h-1 rounded-full bg-cyan-400" />}
                    </Link>
                    <div className="relative -top-8">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center text-white border-4 border-[#050511]">
                            <Mic size={24} />
                        </div>
                    </div>
                    <Link to="/ai-assistant/devices" className={`flex flex-col items-center gap-1 ${path === '/ai-assistant/devices' ? 'text-cyan-400' : 'text-slate-500'}`}>
                        <Sliders size={24} />
                        {path === '/ai-assistant/devices' && <div className="w-1 h-1 rounded-full bg-cyan-400" />}
                    </Link>
                    <Link to="/ai-assistant/profile" className={`flex flex-col items-center gap-1 ${path === '/ai-assistant/profile' ? 'text-cyan-400' : 'text-slate-500'}`}>
                        <User size={24} />
                        {path === '/ai-assistant/profile' && <div className="w-1 h-1 rounded-full bg-cyan-400" />}
                    </Link>
                </div>


                {/* Main Content Area */}
                <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                    {/* Top Bar */}
                    <header className="h-16 md:h-20 px-4 md:px-8 flex items-center justify-between border-b border-white/5 bg-black/10 backdrop-blur-sm relative z-40">
                        <div className="flex items-center gap-3 md:hidden">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_10px_rgba(34,211,238,0.3)] flex items-center justify-center">
                                <span className="font-bold text-sm">AI</span>
                            </div>
                            <span className="font-bold text-lg tracking-tight">Nexus OS</span>
                        </div>

                        <div className="flex items-center gap-4 text-slate-300 hidden md:flex">
                            <span className="text-sm font-light tracking-widest uppercase opacity-70">System Online</span>
                            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse" />
                        </div>

                        <div className="flex items-center gap-4 md:gap-6">
                            <div className="relative hidden md:block">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                <input
                                    type="text"
                                    placeholder="Ask anything..."
                                    className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600"
                                />
                            </div>
                            <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
                                <Bell size={20} />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-black" />
                            </button>
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 border border-white/20 overflow-hidden">
                                <img src="https://ui-avatars.com/api/?name=User&background=random" alt="User" />
                            </div>
                        </div>
                    </header>

                    {/* Content Scroll Area */}
                    <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-10 scrollbar-hide">
                        <Outlet />
                    </div>
                </main>
            </div>

            {/* Floating Action Button (Voice) - Desktop Only now */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(6,182,212,0.6)] hidden md:flex items-center justify-center text-white z-50 hover:shadow-[0_0_50px_rgba(6,182,212,0.8)] transition-shadow border border-white/20"
            >
                <Mic size={28} />
            </motion.button>
        </div>
    );
};

export default AILayout;
