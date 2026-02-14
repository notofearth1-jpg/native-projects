import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, Zap, Home, Navigation, CreditCard, Shield, Menu, X } from 'lucide-react';
import clsx from 'clsx';

const NavItem = ({ to, icon: Icon, label, onClick }) => {
    const location = useLocation();
    const active = location.pathname === to;

    return (
        <Link to={to} onClick={onClick} className={clsx(
            "flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 relative group w-full",
            active ? "text-cyan-400" : "text-slate-500 hover:text-white"
        )}>
            <div className={clsx(
                "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 border mb-1 relative overflow-hidden",
                active
                    ? "bg-cyan-500/10 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                    : "bg-slate-900 border-slate-800 group-hover:border-slate-600"
            )}>
                <Icon size={24} className={active ? "drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]" : ""} />
                {active && <div className="absolute inset-0 bg-cyan-400/20 blur-xl" />}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
        </Link>
    );
};

const CityLayout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#050505] font-mono text-slate-300 selection:bg-pink-500 selection:text-white relative overflow-hidden flex flex-col md:flex-row">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />

            {/* Sidebar Desktop */}
            <aside className="fixed left-0 top-0 h-screen w-24 border-r border-white/10 bg-black/50 backdrop-blur-md hidden md:flex flex-col items-center py-8 z-50">
                <div className="mb-12">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(236,72,153,0.5)]">
                        N
                    </div>
                </div>

                <nav className="flex flex-col gap-6 w-full px-2">
                    <NavItem to="/smart-city" icon={Zap} label="Dash" />
                    <NavItem to="/smart-city/home" icon={Home} label="Home" />
                    <NavItem to="/smart-city/nav" icon={Navigation} label="Nav" />
                    <NavItem to="/smart-city/services" icon={CreditCard} label="Pay" />
                    <NavItem to="/smart-city/emergency" icon={Shield} label="Alert" />
                </nav>

                <div className="mt-auto text-[10px] text-slate-600 rotate-180 writing-vertical-lr tracking-widest font-bold">
                    NEO-TOKYO OS v12
                </div>
            </aside>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 w-64 bg-[#0a0a0a] border-r border-white/10 z-50 md:hidden flex flex-col p-6"
                        >
                            <div className="flex justify-between items-center mb-10">
                                <div className="font-bold text-white tracking-widest text-xl">NEO-TOKYO</div>
                                <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                                    <X size={24} />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-4">
                                <NavItem to="/smart-city" icon={Zap} label="Dash" onClick={() => setIsMobileMenuOpen(false)} />
                                <NavItem to="/smart-city/home" icon={Home} label="Home" onClick={() => setIsMobileMenuOpen(false)} />
                                <NavItem to="/smart-city/nav" icon={Navigation} label="Nav" onClick={() => setIsMobileMenuOpen(false)} />
                                <NavItem to="/smart-city/services" icon={CreditCard} label="Pay" onClick={() => setIsMobileMenuOpen(false)} />
                                <NavItem to="/smart-city/emergency" icon={Shield} label="Alert" onClick={() => setIsMobileMenuOpen(false)} />
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>


            {/* Main Content */}
            <main className="w-full md:ml-24 min-h-screen p-6 md:p-12 relative z-10">
                {/* Mobile Header */}
                <header className="md:hidden flex justify-between items-center mb-8 sticky top-0 bg-black/80 backdrop-blur p-4 rounded-2xl border border-white/10 z-30">
                    <div className="font-bold text-white tracking-widest">NEO-TOKYO</div>
                    <button onClick={() => setIsMobileMenuOpen(true)}>
                        <Menu className="text-white" />
                    </button>
                </header>

                <Outlet />
            </main>

            {/* Mobile Nav - Keeping for quick access */}
            <nav className="md:hidden fixed bottom-6 left-6 right-6 bg-black/90 border border-white/20 backdrop-blur-lg p-4 flex justify-around z-40 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <MobileNavItem to="/smart-city" icon={Zap} />
                <MobileNavItem to="/smart-city/home" icon={Home} />
                <MobileNavItem to="/smart-city/nav" icon={Navigation} />
                <MobileNavItem to="/smart-city/services" icon={CreditCard} />
            </nav>
        </div>
    );
};

const MobileNavItem = ({ to, icon: Icon }) => {
    const location = useLocation();
    const active = location.pathname === to;

    return (
        <Link to={to} className={clsx(
            "transition-colors duration-300",
            active ? "text-cyan-400 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]" : "text-slate-500 hover:text-slate-300"
        )}>
            <Icon size={24} />
        </Link>
    );
};

export default CityLayout;
