import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Send, MoreHorizontal, User, Sparkles } from 'lucide-react';
import clsx from 'clsx';

const Message = ({ text, isUser, timestamp }) => (
    <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className={clsx(
            "flex gap-4 mb-6 max-w-[80%]",
            isUser ? "ml-auto" : "mr-auto"
        )}
    >
        {!isUser && (
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                <Sparkles size={18} className="text-white" />
            </div>
        )}

        <div className={clsx(
            "p-4 rounded-2xl relative overflow-hidden backdrop-blur-md border border-white/10 shadow-lg",
            isUser
                ? "bg-gradient-to-br from-indigo-600/80 to-purple-600/80 text-white rounded-br-sm"
                : "bg-white/5 text-slate-200 rounded-bl-sm"
        )}>
            {/* Glow effect for AI messages */}
            {!isUser && <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent pointer-events-none" />}

            <p className="relative z-10 leading-relaxed">{text}</p>
            <div className="text-[10px] mt-2 opacity-50 flex justify-end">{timestamp}</div>
        </div>

        {isUser && (
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 border border-white/10">
                <User size={18} className="text-slate-300" />
            </div>
        )}
    </motion.div>
);

const Orb = ({ speaking }) => (
    <div className="relative w-32 h-32 flex items-center justify-center mb-8 mx-auto">
        <motion.div
            animate={{
                scale: speaking ? [1, 1.2, 1] : [1, 1.05, 1],
                opacity: speaking ? [0.8, 1, 0.8] : 0.5
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 blur-[40px] opacity-60"
        />
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 shadow-[0_0_20px_#22d3ee] relative flex items-center justify-center backdrop-blur-sm"
        >
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                <div className={clsx("w-3 h-3 rounded-full transition-colors duration-300", speaking ? "bg-white shadow-[0_0_10px_white]" : "bg-cyan-500/50")} />
            </div>
        </motion.div>
    </div>
);

const VoiceVisualizer = () => {
    return (
        <div className="flex justify-center items-center gap-1 h-8">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{ height: ['20%', '100%', '20%'] }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.05,
                        repeatType: "reverse"
                    }}
                    className="w-1 bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full opacity-80"
                    style={{ height: '40%' }}
                />
            ))}
        </div>
    )
}

const ChatInterface = () => {
    const [messages, setMessages] = useState([
        { text: "Good morning, Vibhu. I've analyzed your schedule and current biometrics. You have 3 high-priority tasks today. Should we start with the system review?", isUser: false, timestamp: "09:41 AM" }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isListening, setIsListening] = useState(false);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newUserMsg = { text: inputValue, isUser: true, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
        setMessages(prev => [...prev, newUserMsg]);
        setInputValue("");
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, { text: "I've updated your queue. Would you like me to initiate the neural sync protocol now?", isUser: false, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
        }, 2000);
    };

    return (
        <div className="flex flex-col h-[calc(100vh-140px)] max-w-4xl mx-auto pb-20 md:pb-0">
            <div className="flex-1 overflow-y-auto pr-2 md:pr-4 scrollbar-hide">
                <div className="text-center mb-10 mt-4">
                    <Orb speaking={isTyping || isListening} />
                    {isListening && <VoiceVisualizer />}
                    {!isListening && !isTyping && <p className="text-slate-500 text-sm tracking-widest uppercase">Awaiting Input</p>}
                </div>

                <div className="space-y-4 pb-4">
                    {messages.map((msg, i) => (
                        <Message key={i} {...msg} />
                    ))}

                    {isTyping && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex ml-14 gap-2">
                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Input Area */}
            <div className="mt-4 fixed bottom-4 left-4 right-4 md:static z-40 bg-[#050511] md:bg-transparent pt-4 md:pt-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050511] via-[#050511]/80 to-transparent -top-20 -z-10 h-20 pointer-events-none md:block hidden" />

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 flex items-center gap-2 shadow-2xl">
                    <button className="p-2 md:p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                        <MoreHorizontal size={20} />
                    </button>

                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type or speak..."
                        className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-slate-600 px-2 text-sm md:text-base"
                    />

                    <button
                        onClick={() => setIsListening(!isListening)}
                        className={clsx("p-2 md:p-3 rounded-xl transition-all duration-300", isListening ? "bg-red-500/20 text-red-500 animate-pulse" : "hover:bg-white/10 text-slate-400")}
                    >
                        <Mic size={20} />
                    </button>

                    <button
                        onClick={handleSend}
                        className="p-2 md:p-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_15px_rgba(8,145,178,0.5)] transition-all"
                    >
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;
