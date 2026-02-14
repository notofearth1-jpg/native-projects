import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Wifi, Shield } from 'lucide-react';
import IPhone17Pro from '../components/IPhone17Pro';
import CityProject from '../projects/smart-city';

const SmartCityShowcase = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 relative overflow-hidden">
            {/* Cyberpunk Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=2596&auto=format&fit=crop')] bg-cover bg-center opacity-30 blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-pink-500/10 to-transparent opacity-50" />

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">

                {/* Intro Text */}
                <div className="text-center lg:text-left text-white max-w-lg">
                    <Link to="/" className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-400 mb-8 transition-colors font-mono text-xs uppercase tracking-[0.2em] border border-pink-500/50 px-4 py-2 rounded">
                        <ArrowLeft size={14} /> System Exit
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase font-mono">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-pulse">Neo-Tokyo</span><br />
                        OS 2.0
                    </h1>
                    <p className="text-lg text-slate-400 leading-relaxed mb-8 font-mono border-l-2 border-cyan-500 pl-4">
                        Municipal management reimagined. Real-time infrastructure monitoring, citizen services, and emergency protocols in a high-contrast cyberpunk dashboard.
                    </p>

                    <div className="flex gap-8 justify-center lg:justify-start">
                        <div className="flex flex-col items-center lg:items-start gap-1">
                            <Zap size={24} className="text-yellow-400" />
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Power</span>
                        </div>
                        <div className="flex flex-col items-center lg:items-start gap-1">
                            <Wifi size={24} className="text-cyan-400" />
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Net</span>
                        </div>
                        <div className="flex flex-col items-center lg:items-start gap-1">
                            <Shield size={24} className="text-emerald-400" />
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Sec</span>
                        </div>
                    </div>
                </div>

                {/* Phone Mockup */}
                <div className="scale-75 md:scale-90 lg:scale-100 transform transition-transform duration-500 hover:scale-[1.02] relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                    <IPhone17Pro time="20:77">
                        <CityProject />
                    </IPhone17Pro>
                </div>
            </div>
        </div>
    );
};

export default SmartCityShowcase;
