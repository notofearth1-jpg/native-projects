import React from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, FileText, ArrowRight } from 'lucide-react';

const ReportCard = ({ title, date, size, type, delay }) => (
    <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay }}
        className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer group"
    >
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-[#E8F5E9] group-hover:text-[#1B4332] transition-colors">
                <FileText size={20} />
            </div>
            <div>
                <h4 className="font-bold text-[#2C3E50]">{title}</h4>
                <p className="text-xs text-slate-400 font-medium">{date} • {size} • {type}</p>
            </div>
        </div>

        <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#1B4332] hover:text-[#1B4332] transition-colors">
            <Download size={18} />
        </button>
    </motion.div>
);

const Reports = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <header className="mb-10">
                    <h2 className="text-3xl font-serif font-bold text-[#1B4332] mb-2">Impact Reports</h2>
                    <p className="text-slate-500">Detailed analysis of your environmental contribution.</p>
                </header>

                <div className="bg-[#1B4332] text-white p-8 rounded-3xl relative overflow-hidden mb-8">
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="relative z-10 flex justify-between items-start mb-8">
                        <div>
                            <p className="text-[#D8F3DC] font-bold text-xs uppercase tracking-wider mb-1">THIS MONTH</p>
                            <h3 className="text-4xl font-black">August 2025</h3>
                        </div>
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-2xl">🌍</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        <div>
                            <p className="text-white/60 text-xs mb-1">CO2 Savings</p>
                            <p className="text-xl font-bold">124kg</p>
                        </div>
                        <div>
                            <p className="text-white/60 text-xs mb-1">Water Saved</p>
                            <p className="text-xl font-bold">450L</p>
                        </div>
                        <div>
                            <p className="text-white/60 text-xs mb-1">Trees Equivalent</p>
                            <p className="text-xl font-bold">4.5</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button className="flex-1 bg-white text-[#1B4332] py-3 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                            <Download size={16} /> Download PDF
                        </button>
                        <button className="px-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                            <Share2 size={18} />
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="font-bold text-[#2C3E50] mb-2">Archive</h3>
                    <ReportCard title="July 2025 Impact Summary" date="Aug 01, 2025" size="2.4 MB" type="PDF" delay={0.1} />
                    <ReportCard title="Q2 Quarterly Review" date="Jul 15, 2025" size="5.1 MB" type="PDF" delay={0.2} />
                    <ReportCard title="June 2025 Impact Summary" date="Jul 01, 2025" size="2.2 MB" type="PDF" delay={0.3} />
                </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 h-fit">
                <h3 className="font-bold text-lg text-[#2C3E50] mb-6">Visualizations</h3>

                <div className="space-y-8">
                    {/* Simulated Graph 1 */}
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-sm font-bold text-slate-500">Emissions Trend</h4>
                            <span className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded">-12% YTD</span>
                        </div>
                        <div className="h-40 flex items-end justify-between gap-1">
                            {[40, 60, 45, 70, 50, 65, 55, 45, 40, 35, 30, 25].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 1, delay: i * 0.05 }}
                                    className="w-full bg-[#E8F5E9] rounded-t-sm"
                                >
                                    {i > 8 && <div className="h-full bg-[#1B4332] opacity-50" />}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Simulated Graph 2 */}
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-sm font-bold text-slate-500">Category Distribution</h4>
                        </div>
                        <div className="flex gap-1 h-4 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: '40%' }} transition={{ duration: 1 }} className="bg-[#1B4332]" />
                            <motion.div initial={{ width: 0 }} animate={{ width: '30%' }} transition={{ duration: 1, delay: 0.2 }} className="bg-[#2D6A4F]" />
                            <motion.div initial={{ width: 0 }} animate={{ width: '20%' }} transition={{ duration: 1, delay: 0.4 }} className="bg-[#40916C]" />
                            <motion.div initial={{ width: 0 }} animate={{ width: '10%' }} transition={{ duration: 1, delay: 0.6 }} className="bg-[#74C69D]" />
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-slate-400">
                            <span>Travel</span>
                            <span>Home</span>
                            <span>Food</span>
                            <span>Goods</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 p-4 bg-slate-50 rounded-xl text-center">
                    <p className="text-sm text-slate-500 mb-4">Unlock advanced analytics with Pro subscription</p>
                    <button className="text-[#1B4332] font-bold text-sm flex items-center justify-center gap-1 hover:gap-2 transition-all">
                        Upgrade Now <ArrowRight size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reports;
