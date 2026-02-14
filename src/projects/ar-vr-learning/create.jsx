import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Move, Type, Image, Save, Undo, Share } from 'lucide-react';

const ToolButton = ({ icon: Icon, active, delay }) => (
    <motion.button
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay }}
        className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center mb-4 transition-all ${active ? 'bg-black text-white border-black shadow-[4px_4px_0_rgba(0,0,0,0.2)]' : 'bg-white text-slate-400 border-slate-200 hover:border-black hover:text-black'}`}
    >
        <Icon size={20} />
    </motion.button>
);

const CreateStudio = () => {
    return (
        <div className="h-[calc(100vh-180px)] md:h-[85vh] flex flex-col md:flex-row gap-4 md:gap-6 pb-20 md:pb-0">
            {/* Toolbar */}
            <div className="w-full md:w-16 flex md:flex-col overflow-x-auto md:overflow-hidden gap-2 md:gap-0 pb-2 md:pb-0 hide-scrollbar justify-between md:justify-start">
                <div className="flex md:flex-col gap-2">
                    <ToolButton icon={MousePointer2} active delay={0.1} />
                    <ToolButton icon={Move} delay={0.2} />
                    <ToolButton icon={Type} delay={0.3} />
                    <ToolButton icon={Image} delay={0.4} />
                </div>

                <div className="hidden md:block flex-1" />

                <ToolButton icon={Undo} delay={0.5} />
            </div>

            {/* Canvas */}
            <div className="flex-1 bg-white rounded-3xl border-2 border-slate-200 shadow-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]" />

                {/* 3D Object */}
                <motion.div
                    drag
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-64 md:h-64 cursor-grab active:cursor-grabbing"
                >
                    <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl border-4 border-black shadow-[10px_10px_0_#000] flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-300">
                        <span className="text-3xl md:text-6xl font-black text-black">CUBE</span>
                    </div>

                    {/* Resize Handles */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-white border-2 border-black" />
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-white border-2 border-black" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white border-2 border-black" />
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white border-2 border-black" />
                </motion.div>

                {/* Properties Panel Overlay */}
                <motion.div
                    initial={{ x: 300 }}
                    animate={{ x: 0 }}
                    className="absolute top-4 right-4 w-48 md:w-64 bg-white/90 backdrop-blur border-2 border-black rounded-xl p-4 shadow-[4px_4px_0_rgba(0,0,0,0.1)] md:shadow-[8px_8px_0_rgba(0,0,0,0.1)]"
                >
                    <h3 className="font-bold text-xs md:text-sm uppercase mb-2 md:mb-4">Properties</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="text-xs font-bold text-slate-400 uppercase block mb-1">Color</label>
                            <div className="flex gap-2">
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded bg-yellow-400 border-2 border-black" />
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded bg-red-400 border-2 border-transparent hover:border-black/20" />
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded bg-blue-400 border-2 border-transparent hover:border-black/20" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-bold text-slate-400 uppercase block mb-1">Opacity</label>
                            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                <div className="w-[80%] h-full bg-black" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Actions */}
            <div className="hidden md:flex flex-col gap-4">
                <button className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center hover:bg-slate-800 transition-colors shadow-lg">
                    <Save size={24} />
                </button>
                <button className="w-16 h-16 bg-yellow-400 text-black border-2 border-black rounded-2xl flex items-center justify-center hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0_#000] transition-all">
                    <Share size={24} />
                </button>
            </div>
            {/* Mobile Save/Share */}
            <div className="md:hidden flex gap-4 absolute bottom-24 right-4 z-30">
                <button className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center shadow-lg">
                    <Save size={20} />
                </button>
                <button className="w-12 h-12 bg-yellow-400 text-black border-2 border-black rounded-xl flex items-center justify-center shadow-[4px_4px_0_#000]">
                    <Share size={20} />
                </button>
            </div>
        </div>
    );
};

export default CreateStudio;
