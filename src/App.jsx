import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Box, Leaf, Activity, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

// Import Showcases
import AIAssistantShowcase from './showcases/AIAssistantShowcase';
import ARVRShowcase from './showcases/ARVRShowcase';
import EcoLivingShowcase from './showcases/EcoLivingShowcase';
import HealthcareShowcase from './showcases/HealthcareShowcase';
import SmartCityShowcase from './showcases/SmartCityShowcase';

// Import Projects (for direct access)
import AIAssistantProject from './projects/ai-assistant';
import ARVRProject from './projects/ar-vr-learning';
import EcoProject from './projects/eco-living';
import HealthProject from './projects/healthcare';
import CityProject from './projects/smart-city';

const ProjectCard = ({ title, desc, to, icon: Icon, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="group relative"
  >
    <Link to={to} className="block h-full">
      <div className={`h-full bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:border-${color}-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-${color}-500/10 group-hover:-translate-y-2 relative overflow-hidden`}>
        {/* Background Gradient */}
        <div className={`absolute top-0 right-0 w-64 h-64 bg-${color}-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-${color}-500/10 transition-colors duration-500`} />

        <div className="relative z-10 flex flex-col h-full">
          <div className={`w-14 h-14 rounded-2xl bg-${color}-50 dark:bg-${color}-900/20 flex items-center justify-center text-${color}-600 dark:text-${color}-400 mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <Icon size={28} />
          </div>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-${color}-600 transition-colors">
            {title}
          </h3>

          <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 flex-1">
            {desc}
          </p>

          <div className={`flex items-center gap-2 font-bold text-sm text-${color}-600 dark:text-${color}-400`}>
            View Showcase <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black font-sans selection:bg-indigo-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <header className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} /> Premium UI/UX Showcase
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Future Operating <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Systems.</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
            A collection of 5 high-fidelity, interactive React application mockups demonstrating next-gen design aesthetics and fluid animations.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="AI Life Assistant"
            desc="Futuristic glassmorphism dashboard featuring holographic elements, voice visualization, and smart home integration."
            to="/showcase/ai-assistant"
            icon={Sparkles}
            color="purple"
            delay={0.1}
          />

          <ProjectCard
            title="AR/VR Learning"
            desc="Phygital interface design blending 3D objects with physical space, spacial UI, and immersive course cards."
            to="/showcase/ar-vr-learning"
            icon={Box}
            color="indigo"
            delay={0.2}
          />

          <ProjectCard
            title="Eco-Conscious Living"
            desc="Clean, minimalist aesthetic focusing on data visualization, earthy tones, and sustainable habit tracking."
            to="/showcase/eco-living"
            icon={Leaf}
            color="emerald"
            delay={0.3}
          />

          <ProjectCard
            title="Healthcare Companion"
            desc="Professional medical interface with clear typography, calming colors, and accessible daily vital monitoring."
            to="/showcase/healthcare"
            icon={Activity}
            color="cyan"
            delay={0.4}
          />

          <ProjectCard
            title="Smart City OS"
            desc="Cyberpunk-inspired dashboard with neon accents, isometric maps, and brutalist data grids."
            to="/showcase/smart-city"
            icon={Zap}
            color="pink"
            delay={0.5}
          />

          <div className="flex flex-col items-center justify-center p-8 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 text-slate-400">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
              <span className="font-bold text-xl">+</span>
            </div>
            <p className="font-medium">More Concepts Coming Soon</p>
          </div>
        </div>

        <footer className="mt-32 text-center text-slate-400 text-sm">
          <p>© 2025 Antigravity Design System. Built with React, Tailwind & Framer Motion.</p>
        </footer>
      </div>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* Showcases (Phone Mockups) */}
      <Route path="/showcase/ai-assistant/*" element={<AIAssistantShowcase />} />
      <Route path="/showcase/ar-vr-learning/*" element={<ARVRShowcase />} />
      <Route path="/showcase/eco-living/*" element={<EcoLivingShowcase />} />
      <Route path="/showcase/healthcare/*" element={<HealthcareShowcase />} />
      <Route path="/showcase/smart-city/*" element={<SmartCityShowcase />} />

      {/* Direct Project Access (Full Screen) */}
      <Route path="/ai-assistant/*" element={<AIAssistantProject />} />
      <Route path="/ar-vr-learning/*" element={<ARVRProject />} />
      <Route path="/eco-living/*" element={<EcoProject />} />
      <Route path="/healthcare/*" element={<HealthProject />} />
      <Route path="/smart-city/*" element={<CityProject />} />
    </Routes>
  );
}

export default App;
