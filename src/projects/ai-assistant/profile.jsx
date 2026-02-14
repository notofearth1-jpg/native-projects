import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, Activity, Shield, Cpu, Share2, Settings, Smartphone } from 'lucide-react';
import clsx from 'clsx';

const Profile = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Identity Column */}
            <div className="md:col-span-1 space-y-6">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col items-center text-center relative overflow-hidden backdrop-blur-xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none" />

                    <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-cyan-400 to-blue-600 mb-6 relative">
                        <img
                            src="https://ui-avatars.com/api/?name=Vibhu+Thanki&background=random&size=256"
                            alt="Profile"
                            className="w-full h-full rounded-full border-4 border-[#050511]"
                        />
                        <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-[#050511]" />
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-1">Vibhu Thanki</h2>
                    <p className="text-cyan-400 text-sm font-mono tracking-wider mb-6">ID: #8X-9291-AZ</p>

                    <div className="flex gap-2 w-full">
                        <button className="flex-1 py-2 bg-white/10 hover:bg-white/15 rounded-xl text-sm font-medium transition-colors">Edit</button>
                        <button className="p-2 bg-white/10 hover:bg-white/15 rounded-xl transition-colors"><Share2 size={18} /></button>
                    </div>
                </motion.div>

                {/* Biometric Status */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
                >
                    <h3 className="flex items-center gap-2 font-semibold mb-6">
                        <Fingerprint className="text-purple-400" /> Biometrics
                    </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-slate-400 text-sm">Neural Link</span>
                            <span className="text-green-400 text-xs font-mono px-2 py-1 bg-green-500/10 rounded border border-green-500/20">CONNECTED</span>
                        </div>
                        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "98%" }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="h-full bg-green-500"
                            />
                        </div>

                        <div className="flex justify-between items-center mt-4">
                            <span className="text-slate-400 text-sm">Stress Level</span>
                            <span className="text-yellow-400 text-xs font-mono">12%</span>
                        </div>
                        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "12%" }}
                                transition={{ duration: 1.5, delay: 0.6 }}
                                className="h-full bg-yellow-500"
                            />
                        </div>

                        <div className="pt-4 mt-2 border-t border-white/5">
                            <div className="flex items-center gap-3 text-sm text-slate-300">
                                <Shield size={16} className="text-cyan-400" />
                                <span>Identity Verified</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Data Column */}
            <div className="md:col-span-2 space-y-6">
                <h3 className="text-xl font-light">System <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Preferences</span></h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer group">
                        <Cpu className="w-8 h-8 text-blue-400 mb-4 group-hover:text-cyan-400 transition-colors" />
                        <h4 className="font-semibold text-lg mb-1">Processing Power</h4>
                        <p className="text-slate-500 text-sm">Manage neural allocation</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer group">
                        <Shield className="w-8 h-8 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors" />
                        <h4 className="font-semibold text-lg mb-1">Privacy & Security</h4>
                        <p className="text-slate-500 text-sm">Encryption level: Quantum</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all cursor-pointer group">
                        <Smartphone className="w-8 h-8 text-emerald-400 mb-4 group-hover:text-emerald-300 transition-colors" />
                        <h4 className="font-semibold text-lg mb-1">Linked Devices</h4>
                        <p className="text-slate-500 text-sm">12 Active Connections</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all cursor-pointer group">
                        <Settings className="w-8 h-8 text-orange-400 mb-4 group-hover:text-orange-300 transition-colors" />
                        <h4 className="font-semibold text-lg mb-1">Global Settings</h4>
                        <p className="text-slate-500 text-sm">System configuration</p>
                    </motion.div>
                </div>

                <div className="bg-gradient-to-r from-red-500/10 to-red-900/10 border border-red-500/20 rounded-2xl p-6 flex items-center justify-between">
                    <div>
                        <h4 className="text-red-400 font-semibold mb-1">Danger Zone</h4>
                        <p className="text-red-400/60 text-sm">System reset and data purge options</p>
                    </div>
                    <button className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg border border-red-500/20 transition-colors text-sm">
                        Advanced
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
