import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Zap, Train, Wifi, ArrowUpRight, ArrowDownLeft, Scan, Fingerprint, RefreshCcw } from 'lucide-react';

const Transaction = ({ icon: Icon, title, date, amount, type }) => (
    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-500/50 transition-colors cursor-pointer group">
        <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${type === 'out' ? 'bg-pink-500/20 text-pink-500' : 'bg-emerald-500/20 text-emerald-500'}`}>
                <Icon size={18} />
            </div>
            <div>
                <h4 className="font-bold text-white text-sm group-hover:text-cyan-400 transition-colors">{title}</h4>
                <p className="text-xs text-slate-500">{date}</p>
            </div>
        </div>
        <div className="text-right">
            <p className={`font-mono font-bold ${type === 'out' ? 'text-white' : 'text-emerald-400'}`}>
                {type === 'out' ? '-' : '+'} {amount}
            </p>
            <p className="text-[10px] text-slate-500 uppercase">Completed</p>
        </div>
    </div>
);

const ServiceCard = ({ icon: Icon, label, color }) => (
    <div className="flex flex-col items-center gap-3 p-4 bg-black/40 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color} text-white group-hover:scale-110 transition-transform shadow-lg`}>
            <Icon size={24} />
        </div>
        <span className="text-xs font-bold text-slate-300 group-hover:text-white">{label}</span>
    </div>
);

const Services = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20 md:pb-0">
            <div className="lg:col-span-2 space-y-8">
                <header className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-white uppercase tracking-widest font-mono">
                            City<span className="text-cyan-400">Pay</span> Protocol
                        </h2>
                        <p className="text-slate-500 text-xs font-mono">SECURE CONNECTION ESTABLISHED</p>
                    </div>
                </header>

                {/* Card Visualization */}
                <div className="relative h-64 w-full rounded-3xl overflow-hidden perspective-1000 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black z-0" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 transition-transform duration-500 transform group-hover:scale-[1.02]">
                        <div className="flex justify-between items-start">
                            <div className="w-12 h-8 bg-gradient-to-r from-amber-200 to-amber-400 rounded-md opacity-80" />
                            <Wifi size={24} className="text-white/50 rotate-90" />
                        </div>

                        <div className="font-mono text-2xl text-white tracking-[0.2em] shadow-black drop-shadow-md">
                            **** **** **** 8492
                        </div>

                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Card Holder</p>
                                <p className="font-bold text-white uppercase">Citizen 7420</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Balance</p>
                                <h3 className="text-3xl font-bold text-cyan-400">$24,500.00</h3>
                            </div>
                        </div>
                    </div>

                    {/* Holographic Shine */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <ServiceCard icon={Zap} label="Utilities" color="bg-amber-500" />
                    <ServiceCard icon={Train} label="Transit Pass" color="bg-pink-500" />
                    <ServiceCard icon={CreditCard} label="Taxes" color="bg-cyan-500" />
                    <ServiceCard icon={Scan} label="Scan to Pay" color="bg-emerald-500" />
                </div>

                <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Recent Transactions</h3>
                    <div className="space-y-2">
                        <Transaction icon={Zap} title="District 7 Power Grid" date="Oct 12, 14:30" amount="145.50" type="out" />
                        <Transaction icon={Train} title="Hyperloop Monthly" date="Oct 11, 09:15" amount="80.00" type="out" />
                        <Transaction icon={ArrowDownLeft} title="Refund: Service Error" date="Oct 10, 18:20" amount="24.00" type="in" />
                        <Transaction icon={Wifi} title="CityNet Fiber" date="Oct 09, 10:00" amount="65.00" type="out" />
                    </div>
                </div>
            </div>

            {/* Quick Actions Sidebar */}
            <div className="bg-black/40 border border-white/10 rounded-3xl p-6 backdrop-blur-md flex flex-col h-fit">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Quick Transfer</h3>

                <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center relative">
                        <div className="w-20 h-20 rounded-full overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop" alt="User" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-500 rounded-full border-2 border-black" />
                    </div>
                    <p className="text-center text-white font-bold mt-2">Alex K.</p>
                    <p className="text-center text-slate-500 text-xs">ID: #9921</p>
                </div>

                <div className="space-y-4 mb-8">
                    <div className="bg-black/60 rounded-xl p-4 border border-white/10">
                        <p className="text-xs text-slate-500 mb-1">Amount</p>
                        <div className="flex justify-between items-center">
                            <span className="text-cyan-400 font-bold text-xl">$</span>
                            <input type="number" defaultValue="50.00" className="bg-transparent text-right text-white font-mono font-bold text-xl focus:outline-none w-full" />
                        </div>
                    </div>
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-bold text-white shadow-lg hover:shadow-pink-500/20 transition-all flex items-center justify-center gap-2 group">
                    <Fingerprint size={20} className="group-hover:text-pink-200" /> AUTHORIZE
                </button>

                <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                    <span className="text-xs text-slate-500">Auto-Pay Settings</span>
                    <button className="text-cyan-400 p-2 hover:bg-white/5 rounded-lg transition-colors">
                        <RefreshCcw size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Services;
