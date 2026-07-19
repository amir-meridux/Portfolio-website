import React from 'react';
import { motion } from 'framer-motion';
import { Network, Target, Box } from 'lucide-react';

const philosophies = [
  {
    icon: Target,
    title: "Root Causes Over Symptoms",
    text: "Many operational issues are simply symptoms of a deeper structural flaw. I focus on identifying and resolving the underlying system architecture rather than patching individual problems with temporary fixes."
  },
  {
    icon: Network,
    title: "Process Precedes Technology",
    text: "Software is a tool, not a solution. Introducing automation into a broken or undefined process only accelerates the chaos. Technology must always serve a clearly designed workflow."
  },
  {
    icon: Box,
    title: "Structured Simplicity",
    text: "Complex, overly engineered workflows create friction and resistance. The objective of systems architecture is not to build the most sophisticated system, but the most reliable and intuitive one for the people using it."
  }
];

const flowSteps = [
  "Business Goals",
  "People",
  "Workflow",
  "System Design",
  "Technology",
  "Continuous Improvement"
];

const HowIThink = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="how-i-think" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-sky/10 text-sky font-semibold text-sm mb-6">
            Philosophy
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">
              I Think.
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            A structured engineering approach to solving operational problems.
          </p>
        </motion.div>

        {/* 3 Core Philosophies Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {philosophies.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx} 
                variants={itemVariants} 
                className="glass p-8 rounded-3xl hover:bg-white/60 transition-colors duration-300 border-white/50"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky/10 flex items-center justify-center text-sky mb-6">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Section: Larger Statement & Node Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-12 border-sky/20 bg-gradient-to-br from-sky/5 via-transparent to-transparent"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side text */}
            <div className="max-w-xl">
              <h3 className="text-3xl font-bold text-primary mb-6">Workflow before Automation</h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>Many automation projects fail because they begin with technology.</p>
                <p>My approach is different.</p>
                <p>
                  I believe effective automation starts with understanding the workflow, 
                  designing a reliable operational system, and only then introducing technology 
                  where it creates measurable value.
                </p>
              </div>
            </div>

            {/* Right side visual: Node & Connector Design */}
            <div className="relative flex flex-col items-center justify-center glass p-8 rounded-3xl border-white/60">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky/5 to-transparent rounded-3xl"></div>
              
              <div className="flex flex-col gap-2 items-center w-full">
                {flowSteps.map((step, i) => (
                  <React.Fragment key={step}>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      whileHover={{ scale: 1.02, borderColor: "#3b82f6" }}
                      className="px-6 py-4 bg-blue-50/50 backdrop-blur-sm border border-blue-100/50 shadow-sm rounded-xl font-semibold text-primary w-full max-w-xs text-center transition-all duration-300 cursor-default"
                    >
                      {step}
                    </motion.div>
                    
                    {i < flowSteps.length - 1 && (
                      <div className="flex flex-col items-center">
                        <div className="w-px h-6 bg-gradient-to-b from-blue-400 to-teal-400" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HowIThink;
