import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Understand",
    text: "Understand the organisation, stakeholders, goals, and operational challenges before considering solutions."
  },
  {
    num: "02",
    title: "Analyse",
    text: "Examine workflows, identify constraints, uncover inefficiencies, and understand how information moves through the organisation."
  },
  {
    num: "03",
    title: "Design",
    text: "Create a structured operational system that simplifies processes, supports people, and prepares the workflow for technology."
  },
  {
    num: "04",
    title: "Implement",
    text: "Introduce AI, automation, and integrations only after the workflow has been carefully designed and validated."
  },
  {
    num: "05",
    title: "Improve",
    text: "Measure outcomes, gather feedback, and refine the system continuously as organisational needs evolve."
  }
];

const Methodology = () => {
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
    <section id="methodology" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-24"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange font-semibold text-sm mb-6">
            Methodology
          </div>
          <h2 className="text-4xl font-bold text-primary mb-6">My Process</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            From understanding the problem to continuous improvement.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative mb-24"
        >
          {/* Desktop connecting track line */}
          <div className="hidden lg:block absolute top-[28px] left-[40px] right-[40px] h-[2px] bg-slate-200" />
          
          {/* Mobile connecting track line */}
          <div className="lg:hidden absolute top-[40px] bottom-[40px] left-[28px] w-[2px] bg-slate-200" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative">
            {steps.map((step, idx) => (
              <motion.div key={idx} variants={itemVariants} className="relative flex flex-col pl-20 lg:pl-0">
                
                {/* Timeline Node & Number */}
                <div className="absolute lg:relative left-0 lg:left-auto top-0 w-14 h-14 rounded-full bg-white border-[3px] border-orange/20 shadow-md flex items-center justify-center text-sm font-bold text-orange mb-8 z-10 mx-auto lg:mx-0 lg:mb-8 group-hover:border-orange transition-colors duration-300">
                  {step.num}
                </div>
                
                {/* Content */}
                <div className="lg:pr-4">
                  <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.text}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-10 md:p-14 border-orange/20 bg-gradient-to-br from-orange/5 via-transparent to-transparent text-center"
        >
          <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-snug max-w-4xl mx-auto">
            Good systems are not built once. They evolve through observation, measurement, and continuous improvement.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Methodology;