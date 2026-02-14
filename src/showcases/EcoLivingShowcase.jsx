import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf } from 'lucide-react';
import IPhone17Pro from '../components/IPhone17Pro';
import EcoProject from '../projects/eco-living';

const EcoLivingShowcase = () => {
    return (
        <div className="min-h-screen bg-[#F0FDF4] flex flex-col items-center justify-center p-8 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-200 rounded-full blur-[100px] opacity-30 -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-lime-200 rounded-full blur-[120px] opacity-30 -ml-20 -mb-20" />

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">

                {/* Intro Text */}
                <div className="text-center lg:text-left text-emerald-950 max-w-lg">
                    <Link to="/" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-800 mb-8 transition-colors font-bold text-sm">
                        <ArrowLeft size={18} /> BACK TO COLLECTION
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight text-[#1B4332]">
                        Conscious <br /><span className="italic text-emerald-600">Living.</span>
                    </h1>
                    <p className="text-xl text-emerald-800/70 leading-relaxed mb-8 font-medium">
                        Sustainability meets simplicity. A carbon footprint tracker that inspires positive habits through beautiful data visualization and community challenges.
                    </p>
                    <button className="px-8 py-4 bg-[#1B4332] text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-2 mx-auto lg:mx-0">
                        <Leaf size={20} /> View Prototype
                    </button>
                </div>

                {/* Phone Mockup */}
                <div className="scale-75 md:scale-90 lg:scale-100 transform transition-transform duration-500 hover:scale-[1.02] shadow-2xl rounded-[3rem]">
                    <IPhone17Pro time="07:30">
                        <EcoProject />
                    </IPhone17Pro>
                </div>
            </div>
        </div>
    );
};

export default EcoLivingShowcase;
