import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Tv, Speaker, Thermometer, Lock, Wifi, Power, Fan } from 'lucide-react';
import clsx from 'clsx';

const Rooms = ["Living Room", "Bedroom", "Kitchen", "Office", "Balcony"];

const DeviceCard = ({ name, icon: Icon, isOn, type, index, onToggle }) => (
    <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: index * 0.05 }}
        onClick={onToggle}
        className={clsx(
            "relative p-6 rounded-3xl cursor-pointer transition-all duration-300 overflow-hidden group border",
            isOn
                ? "bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-cyan-400/30 shadow-[0_0_20px_rgba(8,145,178,0.2)]"
                : "bg-white/5 border-white/5 hover:bg-white/10"
        )}
    >
        <div className="flex justify-between items-start mb-8">
            <div className={clsx(
                "p-3 rounded-full transition-colors duration-300",
                isOn ? "bg-cyan-500 text-white shadow-[0_0_10px_#22d3ee]" : "bg-white/10 text-slate-400"
            )}>
                <Icon size={24} />
            </div>
            <div className={clsx(
                "w-12 h-6 rounded-full p-1 transition-colors duration-300 relative",
                isOn ? "bg-cyan-500" : "bg-slate-700"
            )}>
                <motion.div
                    layout
                    className="w-4 h-4 bg-white rounded-full shadow-sm"
                    animate={{ x: isOn ? 24 : 0 }}
                />
            </div>
        </div>

        <h3 className={clsx("font-semibold text-lg mb-1 transition-colors", isOn ? "text-white" : "text-slate-300")}>{name}</h3>
        <p className="text-sm text-slate-500">{isOn ? 'Active' : 'Offline'}</p>

        {/* Background glow when on */}
        {isOn && <motion.div layoutId={`glow-${index}`} className="absolute inset-0 bg-cyan-400/5 blur-2xl -z-10" />}
    </motion.div>
);

const SceneCard = ({ name, color, icon, index }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 + index * 0.1 }}
        className={`h-32 rounded-2xl bg-gradient-to-br ${color} p-4 flex flex-col justify-between cursor-pointer shadow-lg relative overflow-hidden group border border-white/10`}
    >
        <div className="absolute right-[-20px] top-[-20px] w-24 h-24 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
        <span className="text-2xl">{icon}</span>
        <span className="font-semibold text-white">{name}</span>
    </motion.div>
);

const Devices = () => {
    const [activeRoom, setActiveRoom] = useState("Living Room");
    const [devices, setDevices] = useState([
        { id: 1, name: "Main Lights", icon: Lightbulb, isOn: true, room: "Living Room" },
        { id: 2, name: "Smart TV", icon: Tv, isOn: false, room: "Living Room" },
        { id: 3, name: "AC Unit", icon: Fan, isOn: true, room: "Living Room" },
        { id: 4, name: "Sound System", icon: Speaker, isOn: false, room: "Living Room" },
        { id: 5, name: "Ambient Strip", icon: Lightbulb, isOn: true, room: "Living Room" },
        { id: 6, name: "Door Lock", icon: Lock, isOn: true, room: "Living Room" },
    ]);

    const toggleDevice = (id) => {
        setDevices(devices.map(d => d.id === id ? { ...d, isOn: !d.isOn } : d));
    };

    return (
        <div className="space-y-6 md:space-y-8 pb-20 md:pb-0">
            {/* Header & Stats */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-light mb-2">Home <span className="font-bold text-cyan-400">Control</span></h2>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-slate-400 text-xs md:text-sm">
                            <Thermometer size={16} className="text-orange-400" /> 22.5°C
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 text-xs md:text-sm">
                            <Wifi size={16} className="text-emerald-400" /> 250 Mbps
                        </div>
                    </div>
                </div>

                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition-colors text-sm w-full md:w-auto justify-center">
                    <Power size={16} /> System Off
                </button>
            </div>

            {/* Room Selector */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                {Rooms.map((room) => (
                    <button
                        key={room}
                        onClick={() => setActiveRoom(room)}
                        className={clsx(
                            "px-4 md:px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 border text-sm md:text-base",
                            activeRoom === room
                                ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                : "bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-white"
                        )}
                    >
                        {room}
                    </button>
                ))}
            </div>

            {/* Devices Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <AnimatePresence mode="popLayout">
                    {devices.filter(d => d.room === activeRoom).map((device, i) => (
                        <DeviceCard
                            key={device.id}
                            {...device}
                            index={i}
                            onToggle={() => toggleDevice(device.id)}
                        />
                    ))}
                    {/* Add placeholder devices if filtered list is short for demo */}
                    {devices.filter(d => d.room === activeRoom).length < 2 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center py-10 text-slate-500">
                            No other devices connected in {activeRoom}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Scenes */}
            <div className="pt-6">
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-slate-200">Quick Scenes</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                    <SceneCard name="Movie Night" icon="🎬" color="from-indigo-600 to-purple-600" index={0} />
                    <SceneCard name="Focus Mode" icon="🧠" color="from-cyan-600 to-blue-600" index={1} />
                    <SceneCard name="Relaxation" icon="🍃" color="from-emerald-600 to-teal-600" index={2} />
                    <SceneCard name="Party" icon="🎉" color="from-orange-500 to-pink-600" index={3} />
                </div>
            </div>
        </div>
    );
};

export default Devices;
