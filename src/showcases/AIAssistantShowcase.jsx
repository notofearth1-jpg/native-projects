import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import IPhone17Pro from '../components/IPhone17Pro';
import AIAssistantProject from '../projects/ai-assistant';

const AIAssistantShowcase = () => {
    return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-8 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-20 blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">

                {/* Intro Text */}
                <div className="text-center lg:text-left text-white max-w-lg">
                    <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft size={20} /> Back to Hub
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
                        AI Life <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Assistant</span>
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed mb-8">
                        Experience the future of personal management. A fully responsive, glassmorphic interface designed for next-gen spatial computing.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <span className="px-4 py-2 bg-white/10 border border-white/10 rounded-full text-sm font-bold backdrop-blur-md">React</span>
                        <span className="px-4 py-2 bg-white/10 border border-white/10 rounded-full text-sm font-bold backdrop-blur-md">Tailwind</span>
                        <span className="px-4 py-2 bg-white/10 border border-white/10 rounded-full text-sm font-bold backdrop-blur-md">Framer Motion</span>
                    </div>
                </div>

                {/* Phone Mockup */}
                <div className="scale-75 md:scale-90 lg:scale-100 transform transition-transform duration-500 hover:scale-[1.02]">
                    <IPhone17Pro time="09:41">
                        <AIAssistantProject />
                    </IPhone17Pro>
                </div>
            </div>
        </div>
    );
};

export default AIAssistantShowcase;
