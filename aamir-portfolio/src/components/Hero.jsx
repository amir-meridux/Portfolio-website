import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box, Layers, Activity, Settings } from 'lucide-react';
import { heroContent } from '../data/content';
import headshotImg from '../images/LinkedIn_Headshot_AI.png';

const icons = [Settings, Layers, Box, Activity];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8 relative z-10"
          >
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full glass border-blue/20 text-blue text-sm font-semibold mb-6"
              >
                {heroContent.tagline}
              </motion.div>
              
              {/* Two-Color Name */}
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-4">
                <span className="text-primary">Aamir </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">
                  Farooq, PhD
                </span>
              </h1>

              {/* Title */}
              <h3 className="text-xl font-semibold text-slate-500 uppercase tracking-widest mb-8">
                {heroContent.identity.title}
              </h3>

              {/* Two-Color, Two-Line Heading */}
              <h2 className="text-4xl lg:text-5xl font-extrabold text-primary leading-tight mb-6">
                Designing Intelligent <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">
                  Operational Systems.
                </span>
              </h2>

              <div className="space-y-4 text-lg text-slate-600 leading-relaxed max-w-xl">
                {heroContent.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {heroContent.buttons.map((btn, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={btn.href}
                  className={`px-8 py-4 rounded-xl font-medium flex items-center gap-2 transition-all shadow-sm ${
                    btn.primary 
                      ? 'bg-primary text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5' 
                      : 'glass hover:bg-white/80 text-primary'
                  }`}
                >
                  {btn.label}
                  {btn.primary && <ArrowRight size={18} />}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visuals */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Animated Gradient Backdrop */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[120%] h-[120%] bg-gradient-to-tr from-blue/20 via-sky/10 to-green/10 rounded-full blur-3xl -z-10"
            />

            {/* Main Portrait Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-md aspect-[4/5] glass-card overflow-hidden flex items-center justify-center border-white/60"
            >
              {/* Imported as a module so it survives the production build (see Vite note) */}
              <img 
                src={headshotImg} 
                alt="Aamir Farooq, PhD"
                className="w-full h-full object-cover"
              />
              
              {/* The Overlay (keep this for the glass aesthetic) */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 to-slate-50/20 mix-blend-overlay"></div>
            </motion.div>

            {/* Floating Credibility Cards */}
            {heroContent.floatingCards.map((card, idx) => {
              const Icon = icons[idx % icons.length];
              const positions = [
                { top: '10%', left: '-10%', delay: 0.5 },
                { top: '45%', right: '-5%', delay: 0.7 },
                { bottom: '25%', left: '-5%', delay: 0.9 },
                { bottom: '10%', right: '5%', delay: 1.1 },
              ];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: positions[idx].delay, duration: 0.8 }}
                  className={`absolute glass px-3 py-2 md:px-5 md:py-3 rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-3 shadow-lg z-20 scale-75 md:scale-100 origin-center`}
                  style={{ 
                    top: positions[idx].top, 
                    left: positions[idx].left, 
                    right: positions[idx].right,
                    bottom: positions[idx].bottom 
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-blue/10 flex items-center justify-center text-blue">
                    <Icon size={16} />
                  </div>
                  <span className="font-semibold text-sm text-slate-800">{card}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
