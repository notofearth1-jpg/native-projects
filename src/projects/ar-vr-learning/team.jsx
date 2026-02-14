import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Video, MoreVertical, Award, Shield } from 'lucide-react';

const TeamMember = ({ name, role, status, image, delay }) => (
    <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay }}
        className="bg-white rounded-2xl border-2 border-slate-200 p-4 flex items-center gap-4 hover:border-black hover:shadow-[4px_4px_0_#000] transition-all cursor-pointer group"
    >
        <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-black">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${status === 'online' ? 'bg-green-500' : 'bg-slate-400'}`} />
        </div>

        <div className="flex-1">
            <h4 className="font-bold text-sm">{name}</h4>
            <p className="text-xs text-slate-500 font-mono uppercase">{role}</p>
        </div>

        <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
            <MessageCircle size={16} />
        </button>
    </motion.div>
);

const Achievement = ({ title, desc, icon: Icon, color, delay }) => (
    <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay }}
        className="bg-slate-900 text-white p-4 rounded-xl border border-white/10 flex items-center gap-4"
    >
        <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center text-black`}>
            <Icon size={20} />
        </div>
        <div>
            <h4 className="font-bold text-sm">{title}</h4>
            <p className="text-xs text-slate-400">{desc}</p>
        </div>
    </motion.div>
);

const Team = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[80vh]">
            {/* Chat Area */}
            <div className="lg:col-span-2 bg-white rounded-3xl border-2 border-black shadow-[8px_8px_0_#000] flex flex-col overflow-hidden">
                <header className="p-4 md:p-6 border-b-2 border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-50 gap-4 md:gap-0">
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-300" />
                            ))}
                        </div>
                        <div>
                            <h3 className="font-black uppercase">Alpha Squad</h3>
                            <p className="text-xs text-slate-500 font-mono">3 Online • Project: Mars Habitat</p>
                        </div>
                    </div>

                    <div className="flex gap-2 w-full md:w-auto justify-end">
                        <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors"><Phone size={20} /></button>
                        <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors"><Video size={20} /></button>
                        <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors"><MoreVertical size={20} /></button>
                    </div>
                </header>

                <div className="flex-1 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50 p-6 overflow-y-auto space-y-6">
                    <div className="flex flex-col gap-1 items-start max-w-[80%]">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-slate-400">JARA</span>
                            <span className="text-[10px] text-slate-300">10:42 AM</span>
                        </div>
                        <div className="bg-white p-4 rounded-2xl rounded-tl-sm border border-slate-200 shadow-sm text-sm">
                            Check out the new structural render. I optimized the polygon count by 40%.
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 items-end max-w-[80%] ml-auto">
                        <div className="bg-black text-white p-4 rounded-2xl rounded-tr-sm shadow-md text-sm">
                            Awesome work! Can you export it to the AR viewer so we can inspect the scale?
                        </div>
                        <span className="text-[10px] text-slate-400">Delivered</span>
                    </div>

                    <div className="flex justify-center my-4">
                        <span className="bg-slate-200 text-slate-500 text-xs px-3 py-1 rounded-full font-mono">SYSTEM: New Asset Uploaded</span>
                    </div>

                    <div className="flex flex-col gap-1 items-start max-w-[80%]">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-slate-400">KAI</span>
                            <span className="text-[10px] text-slate-300">10:45 AM</span>
                        </div>
                        <div className="bg-white p-3 rounded-2xl rounded-tl-sm border border-slate-200 shadow-sm">
                            <div className="w-48 h-32 bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center mb-2">
                                <span className="text-3xl">🏗️</span>
                            </div>
                            <p className="text-sm">habitat_module_v3.obj</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t-2 border-slate-100 bg-white">
                    <div className="flex gap-2">
                        <input type="text" placeholder="Type a message..." className="flex-1 bg-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all font-medium" />
                        <button className="px-6 py-3 bg-black text-white font-bold rounded-xl hover:bg-slate-800 transition-colors">SEND</button>
                    </div>
                </div>
            </div>

            {/* Sidebar Data */}
            <div className="space-y-6">
                <div>
                    <h3 className="font-black uppercase mb-4 flex items-center gap-2">
                        <Shield className="text-black" size={20} /> Team Roster
                    </h3>
                    <div className="space-y-3">
                        <TeamMember name="Sarah Jenkins" role="Lead Architect" status="online" image="https://ui-avatars.com/api/?name=Sarah+Jenkins&background=random" delay={0.1} />
                        <TeamMember name="Mike Chen" role="3D Generalist" status="offline" image="https://ui-avatars.com/api/?name=Mike+Chen&background=random" delay={0.2} />
                        <TeamMember name="Alex Fox" role="Sim Engineer" status="online" image="https://ui-avatars.com/api/?name=Alex+Fox&background=random" delay={0.3} />
                    </div>
                </div>

                <div>
                    <h3 className="font-black uppercase mb-4 flex items-center gap-2">
                        <Award className="text-yellow-500" size={20} /> Recent Unlocks
                    </h3>
                    <div className="space-y-3">
                        <Achievement title="Speed Demon" desc="Completed logic puzzle in < 30s" icon={Award} color="bg-yellow-400" delay={0.4} />
                        <Achievement title="Collaborator" desc="Shared 5 assets with team" icon={MessageCircle} color="bg-cyan-400" delay={0.5} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
