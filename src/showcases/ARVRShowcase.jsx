import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Box } from 'lucide-react';
import IPhone17Pro from '../components/IPhone17Pro';
import ARVRProject from '../projects/ar-vr-learning';

const ARVRShowcase = () => {
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-8 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614726365723-49cfae92782f?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 blur-md" />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-slate-900/80 to-black/90" />

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">

                {/* Intro Text */}
                <div className="text-center lg:text-left text-white max-w-lg order-2 lg:order-1">
                    <Link to="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-white mb-8 transition-colors font-mono uppercase tracking-widest text-xs">
                        <ArrowLeft size={16} /> Return to Base
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase relative">
                        <span className="absolute -top-12 -left-12 opacity-5 text-9xl">AR</span>
                        Spatial <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Learning</span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0 mb-8 font-light">
                        Break the fourth wall. Immersive educational modules that blend physical reality with digital overlays for instant skill acquisition.
                    </p>

                    <div className="flex gap-4 items-center justify-center lg:justify-start">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30">
                            <Box size={24} />
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-white">Interactive 3D</p>
                            <p className="text-xs text-indigo-300">WebGL Powered</p>
                        </div>
                    </div>
                </div>

                {/* Phone Mockup */}
                <div className="scale-75 md:scale-90 lg:scale-100 transform transition-transform duration-500 hover:scale-[1.02] order-1 lg:order-2">
                    <IPhone17Pro time="14:00">
                        <ARVRProject />
                    </IPhone17Pro>
                </div>
            </div>
        </div>
    );
};

export default ARVRShowcase;
