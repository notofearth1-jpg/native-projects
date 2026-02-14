import React from 'react';
import { motion } from 'framer-motion';
import { Pill, AlertTriangle, Check, Clock, Plus, RefreshCw } from 'lucide-react';

const MedCard = ({ name, dose, freq, time, status, notes, refill }) => (
    <div className={`bg-white p-4 md:p-5 rounded-2xl border ${status === 'missed' ? 'border-red-100 bg-red-50/50' : 'border-slate-100'} shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 group hover:shadow-md transition-shadow`}>
        <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${status === 'taken' ? 'bg-emerald-100 text-emerald-600' : status === 'missed' ? 'bg-red-100 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                <Pill size={24} />
            </div>
            <div>
                <h4 className="font-bold text-slate-800 text-sm md:text-base">{name}</h4>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                    <span>{dose}</span> • <span>{freq}</span>
                </div>
            </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6 w-full sm:w-auto justify-between sm:justify-end">
            <div className="text-right flex items-center gap-2 sm:block">
                <div className="flex items-center gap-1 justify-end font-bold text-slate-700 text-xs md:text-sm">
                    <Clock size={14} className="text-slate-400" /> {time}
                </div>
                {notes && <span className="text-[10px] text-amber-500 font-bold bg-amber-50 px-2 py-0.5 rounded-full">{notes}</span>}
            </div>

            <button className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all shrink-0 ${status === 'taken' ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-200 text-slate-300 hover:border-cyan-500 hover:text-cyan-500'}`}>
                <Check size={20} />
            </button>
        </div>
    </div>
);

const Medications = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20 md:pb-0">
            <div className="lg:col-span-2 space-y-8">
                <header className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">Medications</h2>
                        <p className="text-slate-500 text-sm">Track your daily intake and refills.</p>
                    </div>
                    <button className="bg-cyan-600 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-md hover:bg-cyan-700 transition-colors flex items-center gap-2">
                        <Plus size={18} /> Add Med
                    </button>
                </header>

                <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl flex items-start gap-3">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={20} />
                    <div>
                        <h4 className="font-bold text-amber-800 text-sm">Interaction Warning</h4>
                        <p className="text-xs text-amber-700/80 mt-1 leading-relaxed">
                            <span className="font-bold">Aspirin</span> and <span className="font-bold">Ibuprofen</span> may increase risk of side effects when taken together. Please consult your doctor.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-4">Morning</h3>
                        <div className="space-y-3">
                            <MedCard name="Lisinopril" dose="10mg" freq="Daily" time="08:00 AM" status="taken" />
                            <MedCard name="Vitamin D3" dose="1000 IU" freq="Daily" time="08:00 AM" status="taken" notes="Take with food" />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-4">Afternoon</h3>
                        <div className="space-y-3">
                            <MedCard name="Metformin" dose="500mg" freq="Twice Daily" time="01:00 PM" status="pending" notes="Refill Soon" />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-4">Evening</h3>
                        <div className="space-y-3">
                            <MedCard name="Atorvastatin" dose="20mg" freq="Daily" time="09:00 PM" status="pending" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-6">Refills Needed</h3>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-400 shadow-sm">
                                    <Pill size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-slate-800">Lisinopril</h4>
                                    <p className="text-xs text-red-500 font-bold">3 days left</p>
                                </div>
                            </div>
                            <button className="p-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
                                <RefreshCw size={16} />
                            </button>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-400 shadow-sm">
                                    <Pill size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">Metformin</h4>
                                    <p className="text-xs text-amber-500 font-bold">7 days left</p>
                                </div>
                            </div>
                            <button className="p-2 bg-white text-slate-400 border border-slate-200 rounded-lg hover:border-cyan-500 hover:text-cyan-500 transition-colors">
                                <RefreshCw size={16} />
                            </button>
                        </div>
                    </div>

                    <button className="w-full mt-6 py-3 border-2 border-slate-100 rounded-xl font-bold text-slate-500 hover:border-cyan-600 hover:text-cyan-600 transition-colors text-sm">
                        Manage Pharmacy
                    </button>
                </div>

                <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600 shadow-sm border border-emerald-100">
                        <Check size={32} strokeWidth={3} />
                    </div>
                    <h3 className="font-bold text-emerald-900 text-lg">All caught up!</h3>
                    <p className="text-emerald-700/80 text-sm mt-1">You've taken all your morning medications.</p>
                </div>
            </div>
        </div>
    );
};

export default Medications;
