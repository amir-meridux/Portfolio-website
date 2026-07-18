import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Settings2, Cpu, Activity, BarChart3, Beaker } from 'lucide-react';

const expertiseCards = [
  {
    icon: Layers,
    title: "Systems Architecture",
    description: "Designing structured operational systems that align people, processes, and technology to support long-term business objectives."
  },
  {
    icon: Settings2,
    title: "Workflow Design",
    description: "Analysing existing processes, eliminating unnecessary complexity, and creating workflows that are efficient, reliable, and scalable."
  },
  {
    icon: Cpu,
    title: "AI Workflow Systems",
    description: "Applying artificial intelligence where it enhances decision-making, reduces repetitive work, and supports well-designed operational processes."
  },
  {
    icon: Activity,
    title: "Healthcare Operations",
    description: "Improving administrative workflows for healthcare providers through thoughtful process design and practical technology implementation."
  },
  {
    icon: BarChart3,
    title: "Operational Intelligence",
    description: "Transforming operational data into actionable insights that support informed decision-making and continuous improvement."
  },
  {
    icon: Beaker,
    title: "Engineering Research",
    description: "Applying analytical thinking, systems modelling, and evidence-based problem solving developed through an engineering research background."
  }
];

const progressionSteps = [
  "Engineering Thinking",
  "Systems Design",
  "Workflow Optimisation",
  "Practical AI",
  "Operational Improvement"
];

const Expertise = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section id="expertise" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-green/10 text-green font-semibold text-sm mb-6">
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">
              I Bring.
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Applying engineering principles to improve operational performance.
          </p>
        </motion.div>

        {/* 6-Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {expertiseCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={idx} 
                variants={itemVariants} 
                className="glass p-8 rounded-3xl group hover:bg-white/60 transition-all duration-300 border-white/50 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-green/10 flex items-center justify-center text-green mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Full-width Highlight Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card overflow-hidden border-green/20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green/5 via-white/40 to-transparent -z-10"></div>
          
          <div className="p-8 md:p-12 lg:p-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary leading-snug mb-8">
              My focus is not software. Technology changes. Business challenges evolve. What remains constant is the need for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">well-designed systems.</span>
            </h3>
            
            {/* Horizontal Node & Connector Design */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto gap-2 md:gap-0">
              {progressionSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <motion.div 
                    whileHover={{ scale: 1.05, borderColor: "#3b82f6" }}
                    className="px-4 py-3 bg-blue-50/50 backdrop-blur-sm border border-blue-100/50 shadow-sm rounded-xl font-semibold text-slate-800 text-sm md:text-base text-center w-full md:w-auto min-w-[140px] transition-all duration-300 cursor-default"
                  >
                    {step}
                  </motion.div>
                  
                  {idx < progressionSteps.length - 1 && (
                    <div className="flex md:flex-col items-center">
                      <div className="w-8 h-px md:w-px md:h-8 bg-gradient-to-r md:bg-gradient-to-b from-blue-400 to-teal-400" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Expertise;