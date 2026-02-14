import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Activity, Calendar, FileText, MessageSquare, PieChart, Settings, Bell, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const NavItem = ({ to, icon: Icon, label, onClick }) => {
    const location = useLocation();
    const active = location.pathname === to;

    return (
        <Link to={to} onClick={onClick} className={clsx(
            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
            active ? "bg-cyan-50 text-cyan-700 font-bold" : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
        )}>
            <Icon size={20} className={active ? "text-cyan-600" : "text-slate-400 group-hover:text-slate-600"} />
            <span>{label}</span>
            {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-600" />}
        </Link>
    );
};

const HealthLayout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-cyan-100 text-slate-900 flex flex-col lg:flex-row">
            {/* Mobile Header */}
            <div className="lg:hidden flex justify-between items-center p-6 bg-white border-b border-slate-200 sticky top-0 z-30">
                <div className="flex items-center gap-2 text-cyan-600">
                    <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center text-white">
                        <Activity size={20} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-slate-800">MediCure.</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(true)} className="text-slate-600">
                    <Menu size={24} />
                </button>
            </div>

            {/* Sidebar (Desktop) */}
            <aside className="hidden lg:flex w-72 bg-white border-r border-slate-200 flex-col h-screen fixed top-0 left-0 z-20">
                <div className="p-8 pb-4">
                    <div className="flex items-center gap-2 text-cyan-600 mb-8">
                        <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center text-white">
                            <Activity size={20} strokeWidth={3} />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-slate-800">MediCure.</span>
                    </div>

                    <div className="mb-8">
                        <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                            <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold">JD</div>
                            <div>
                                <h4 className="font-bold text-sm text-slate-800">John Doe</h4>
                                <p className="text-xs text-slate-400">Patient ID: #8492</p>
                            </div>
                        </div>
                    </div>

                    <nav className="space-y-1">
                        <NavItem to="/healthcare" icon={PieChart} label="Snapshot" />
                        <NavItem to="/healthcare/vitals" icon={Activity} label="Vitals" />
                        <NavItem to="/healthcare/appointments" icon={Calendar} label="Appointments" />
                        <NavItem to="/healthcare/medications" icon={FileText} label="Medications" />
                        <NavItem to="/healthcare/mental" icon={MessageSquare} label="Mental Health" />
                    </nav>
                </div>

                <div className="mt-auto p-8 pt-0">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-5 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-8 -mt-8" />
                        <h4 className="font-bold mb-1">Premium Plan</h4>
                        <p className="text-xs text-cyan-100 mb-3">Your family plan is active until Dec 2025.</p>
                        <button className="text-xs font-bold bg-white/20 px-3 py-1.5 rounded-lg hover:bg-white/30 transition-colors">Manage</button>
                    </div>
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
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 w-64 bg-white z-50 lg:hidden shadow-2xl flex flex-col"
                        >
                            <div className="p-6 flex justify-between items-center border-b border-slate-100">
                                <span className="font-bold text-xl text-slate-800">Menu</span>
                                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-600">
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="p-6">
                                <nav className="space-y-2">
                                    <NavItem to="/healthcare" icon={PieChart} label="Snapshot" onClick={() => setIsMobileMenuOpen(false)} />
                                    <NavItem to="/healthcare/vitals" icon={Activity} label="Vitals" onClick={() => setIsMobileMenuOpen(false)} />
                                    <NavItem to="/healthcare/appointments" icon={Calendar} label="Appointments" onClick={() => setIsMobileMenuOpen(false)} />
                                    <NavItem to="/healthcare/medications" icon={FileText} label="Medications" onClick={() => setIsMobileMenuOpen(false)} />
                                    <NavItem to="/healthcare/mental" icon={MessageSquare} label="Mental Health" onClick={() => setIsMobileMenuOpen(false)} />
                                </nav>
                            </div>

                            <div className="mt-auto p-6 bg-slate-50">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold">JD</div>
                                    <div>
                                        <h4 className="font-bold text-sm text-slate-800">John Doe</h4>
                                        <p className="text-xs text-slate-400">Sign Out</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="flex-1 w-full lg:ml-72 p-6 lg:p-12">
                <header className="flex justify-between items-center mb-8 lg:mb-10">
                    <div>
                        <h1 className="text-xl lg:text-2xl font-bold text-slate-800">Good Morning, John</h1>
                        <p className="text-slate-500 text-sm">Here's your daily health summary.</p>
                    </div>

                    <div className="flex items-center gap-3 lg:gap-4">
                        <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-cyan-600 hover:border-cyan-200 transition-all relative">
                            <Bell size={18} />
                            <div className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
                        </button>
                        <button className="hidden lg:flex w-10 h-10 rounded-full bg-white border border-slate-200 items-center justify-center text-slate-400 hover:text-cyan-600 hover:border-cyan-200 transition-all">
                            <Settings size={18} />
                        </button>
                    </div>
                </header>

                <Outlet />
            </main>
        </div>
    );
};

export default HealthLayout;
