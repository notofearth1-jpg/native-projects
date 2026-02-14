import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, BarChart2, Map, ShoppingBag, PieChart, Menu, X } from 'lucide-react';
import clsx from 'clsx';

const EcoLayout = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#FDFBF7] text-[#2C3E50] font-sans selection:bg-[#E8F5E9] overflow-hidden flex relative flex-col md:flex-row">
            {/* Sidebar Desktop */}
            <aside className="hidden md:flex flex-col w-64 p-8 h-screen sticky top-0">
                <div className="flex items-center gap-3 mb-12">
                    <div className="w-10 h-10 rounded-full bg-[#1B4332] flex items-center justify-center text-white">
                        <Leaf size={20} />
                    </div>
                    <span className="font-serif text-2xl font-bold tracking-tight text-[#1B4332]">Roots.</span>
                </div>

                <nav className="space-y-2 flex-1">
                    <NavLink to="/eco-living" icon={PieChart} label="Dashboard" />
                    <NavLink to="/eco-living/tracker" icon={BarChart2} label="Habits" />
                    <NavLink to="/eco-living/community" icon={Map} label="Community" />
                    <NavLink to="/eco-living/market" icon={ShoppingBag} label="Market" />
                </nav>

                <div className="bg-[#E8F5E9] p-6 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#C8E6C9] rounded-full -mr-10 -mt-10 opacity-50" />
                    <p className="font-bold text-[#1B4332] mb-1">Tree Planted</p>
                    <p className="text-sm text-[#2D6A4F] mb-3">You've offset 12kg of CO2 this week!</p>
                    <button className="text-xs font-bold text-white bg-[#1B4332] px-3 py-2 rounded-full">View Impact</button>
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
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden"
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 w-64 bg-[#FDFBF7] z-50 md:hidden shadow-2xl flex flex-col p-6"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-[#1B4332] flex items-center justify-center text-white">
                                        <Leaf size={16} />
                                    </div>
                                    <span className="font-serif text-xl font-bold text-[#1B4332]">Roots.</span>
                                </div>
                                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-full text-[#1B4332]">
                                    <X size={24} />
                                </button>
                            </div>

                            <nav className="space-y-4">
                                <NavLink to="/eco-living" icon={PieChart} label="Dashboard" onClick={() => setIsMobileMenuOpen(false)} />
                                <NavLink to="/eco-living/tracker" icon={BarChart2} label="Habits" onClick={() => setIsMobileMenuOpen(false)} />
                                <NavLink to="/eco-living/community" icon={Map} label="Community" onClick={() => setIsMobileMenuOpen(false)} />
                                <NavLink to="/eco-living/market" icon={ShoppingBag} label="Market" onClick={() => setIsMobileMenuOpen(false)} />
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto h-screen relative w-full">
                {/* Mobile Header */}
                <header className="md:hidden flex justify-between items-center p-6 bg-[#FDFBF7] sticky top-0 z-30">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#1B4332] flex items-center justify-center text-white">
                            <Leaf size={16} />
                        </div>
                        <span className="font-serif text-xl font-bold text-[#1B4332]">Roots.</span>
                    </div>
                    <button onClick={() => setIsMobileMenuOpen(true)}>
                        <Menu size={24} className="text-[#1B4332]" />
                    </button>
                </header>

                <div className="p-6 md:p-12 max-w-5xl mx-auto pb-32">
                    <Outlet />
                </div>
            </main>

            {/* Mobile Nav - Keeping it as quick action, but also adding sidebar for completeness */}
            <nav className="md:hidden fixed bottom-6 left-6 right-6 bg-white border border-slate-100 p-2 flex justify-around z-40 rounded-full shadow-lg">
                <MobileNavLink to="/eco-living" icon={PieChart} />
                <MobileNavLink to="/eco-living/tracker" icon={BarChart2} />
                <div className="w-12 h-12 rounded-full bg-[#1B4332] flex items-center justify-center text-white -mt-8 border-4 border-[#FDFBF7] shadow-lg">
                    <Leaf size={24} />
                </div>
                <MobileNavLink to="/eco-living/community" icon={Map} />
                <MobileNavLink to="/eco-living/market" icon={ShoppingBag} />
            </nav>
        </div>
    );
};

const NavLink = ({ to, icon: Icon, label, onClick }) => {
    const location = useLocation();
    const active = location.pathname === to;

    return (
        <Link to={to} onClick={onClick} className={clsx(
            "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300",
            active ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-[#1B4332] font-semibold" : "text-slate-500 hover:bg-[#F0F2F5] hover:text-[#1B4332]"
        )}>
            <Icon size={20} className={active ? "text-[#2D6A4F]" : "text-slate-400"} />
            {label}
        </Link>
    );
};

const MobileNavLink = ({ to, icon: Icon }) => {
    const location = useLocation();
    const active = location.pathname === to;

    return (
        <Link to={to} className={clsx("p-2 rounded-full", active ? "bg-[#E8F5E9] text-[#1B4332]" : "text-slate-400")}>
            <Icon size={24} />
        </Link>
    );
};

export default EcoLayout;
