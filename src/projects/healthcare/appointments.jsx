import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Star, Calendar, Clock, ChevronLeft, ChevronRight, Video, ArrowRight } from 'lucide-react';

const Doctors = [
    { id: 1, name: "Dr. Sarah Smith", specialty: "Cardiologist", rating: 4.9, location: "New York, NY", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop", available: true },
    { id: 2, name: "Dr. James Wilson", specialty: "Dermatologist", rating: 4.8, location: "Los Angeles, CA", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop", available: false },
    { id: 3, name: "Dr. Emily Chen", specialty: "Pediatrician", rating: 5.0, location: "Chicago, IL", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2574&auto=format&fit=crop", available: true },
    { id: 4, name: "Dr. Michael Brown", specialty: "Neurologist", rating: 4.7, location: "Houston, TX", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2664&auto=format&fit=crop", available: true },
];

const DoctorCard = ({ doctor, onSelect, selected }) => (
    <div
        onClick={onSelect}
        className={`bg-white p-4 rounded-2xl border transition-all cursor-pointer group hover:shadow-md ${selected ? 'border-cyan-500 ring-2 ring-cyan-100 shadow-lg' : 'border-slate-100 hover:border-cyan-200'}`}
    >
        <div className="flex gap-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100">
                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-bold text-slate-800">{doctor.name}</h3>
                        <p className="text-cyan-600 font-medium text-sm">{doctor.specialty}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                        <Star size={12} fill="currentColor" /> {doctor.rating}
                    </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-slate-400 mt-2 mb-3">
                    <MapPin size={12} /> {doctor.location}
                </div>

                <div className="flex items-center gap-2">
                    {doctor.available ? (
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Available Today
                        </span>
                    ) : (
                        <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">
                            Next Availability: Mon
                        </span>
                    )}
                </div>
            </div>
        </div>
    </div>
);

const TimeSlot = ({ time, selected, onSelect }) => (
    <button
        onClick={onSelect}
        className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all ${selected ? 'bg-cyan-600 text-white border-cyan-600 shadow-md transform scale-105' : 'bg-white text-slate-500 border-slate-200 hover:border-cyan-400 hover:text-cyan-600'}`}
    >
        {time}
    </button>
);

const Appointments = () => {
    const [selectedDoc, setSelectedDoc] = useState(1);
    const [selectedTime, setSelectedTime] = useState(null);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20 md:pb-0">
            <div className="lg:col-span-2">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">Find a Specialist</h2>
                        <p className="text-slate-500 text-sm">Book a video consultation with top doctors.</p>
                    </div>

                    <div className="relative">
                        <input type="text" placeholder="Search doctors, specialties..." className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-50 w-64" />
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {Doctors.map(doc => (
                        <DoctorCard
                            key={doc.id}
                            doctor={doc}
                            selected={selectedDoc === doc.id}
                            onSelect={() => setSelectedDoc(doc.id)}
                        />
                    ))}
                </div>

                <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-6 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-cyan-600 shadow-sm">
                            <Video size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-cyan-900">Telehealth Advantages</h4>
                            <p className="text-sm text-cyan-700">Connect securely from the comfort of your home.</p>
                        </div>
                    </div>
                    <button className="text-cyan-700 font-bold text-sm hover:underline">Learn More</button>
                </div>
            </div>

            {/* Booking Sidebar */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl h-fit sticky top-8">
                <h3 className="font-bold text-lg text-slate-800 mb-6">Book Appointment</h3>

                <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <button className="p-1 hover:bg-slate-50 rounded-lg"><ChevronLeft size={20} className="text-slate-400" /></button>
                        <span className="font-bold text-slate-800">October 2025</span>
                        <button className="p-1 hover:bg-slate-50 rounded-lg"><ChevronRight size={20} className="text-slate-400" /></button>
                    </div>

                    <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <span key={i} className="text-slate-400 font-bold text-xs">{d}</span>)}
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center">
                        {[...Array(31)].map((_, i) => (
                            <div
                                key={i}
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm cursor-pointer hover:bg-slate-50 ${i === 23 ? 'bg-black text-white font-bold hover:bg-black' : i === 24 ? 'bg-cyan-600 text-white font-bold shadow-md hover:bg-cyan-700' : 'text-slate-600'}`}
                            >
                                {i + 1}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-8">
                    <h4 className="font-bold text-sm text-slate-800 mb-3 flex items-center gap-2">
                        <Clock size={16} className="text-slate-400" /> Available Times
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                        {['09:00 AM', '10:30 AM', '11:00 AM', '02:00 PM', '03:15 PM', '04:30 PM'].map(time => (
                            <TimeSlot
                                key={time}
                                time={time}
                                selected={selectedTime === time}
                                onSelect={() => setSelectedTime(time)}
                            />
                        ))}
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-6">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-slate-500 text-sm">Consultation Fee</span>
                        <span className="font-bold text-slate-800">$150.00</span>
                    </div>
                    <button className="w-full py-4 bg-cyan-600 text-white rounded-xl font-bold shadow-lg shadow-cyan-200 hover:bg-cyan-700 transition-all flex items-center justify-center gap-2">
                        Confirm Booking <ArrowRight size={18} />
                    </button>
                    <div className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" /> Covered by Insurance
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointments;
