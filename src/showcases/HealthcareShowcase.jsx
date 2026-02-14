import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Activity } from 'lucide-react';
import IPhone17Pro from '../components/IPhone17Pro';
import HealthProject from '../projects/healthcare';

const HealthcareShowcase = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-white/50 backdrop-blur-3xl" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-200 rounded-full blur-[80px] opacity-40 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-[80px] opacity-40 animate-pulse delay-1000" />

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">

                {/* Intro Text */}
                <div className="text-center lg:text-left text-slate-800 max-w-lg order-2 lg:order-1">
                    <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-600 mb-8 transition-colors font-medium text-sm bg-white px-4 py-2 rounded-full shadow-sm hover:shadow">
                        <ArrowLeft size={16} /> Projects
                    </Link>
                    <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-slate-900">
                        Better Health, <span className="text-cyan-500">Simplified.</span>
                    </h1>
                    <p className="text-lg text-slate-500 leading-relaxed mb-8">
                        A patient-centric mobile companion designed for clarity and empathy. Features intuitive vital tracking, medication reminders, and secure telehealth.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
                                <Activity size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Real-time</h4>
                                <p className="text-xs text-slate-400">Vitals Monitor</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Secure</h4>
                                <p className="text-xs text-slate-400">Telehealth Chat</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Phone Mockup */}
                <div className="scale-75 md:scale-90 lg:scale-100 transform transition-transform duration-500 hover:scale-[1.02] order-1 lg:order-2">
                    <IPhone17Pro time="10:00">
                        <HealthProject />
                    </IPhone17Pro>
                </div>
            </div>
        </div>
    );
};

export default HealthcareShowcase;
