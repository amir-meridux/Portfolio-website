import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue/10 text-blue font-semibold text-sm mb-6">
            About
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary leading-[1.2]">
            Engineering principles applied to modern business operations.
          </h2>
        </motion.div>

        {/* Chapters Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {/* Chapter 1 */}
          <motion.div variants={itemVariants} className="glass p-8 rounded-3xl relative overflow-hidden group hover:bg-white/60 transition-colors duration-300">
            <div className="absolute -right-4 -top-4 text-9xl font-bold text-slate-100/50 -z-10 group-hover:text-blue/5 transition-colors duration-300">1</div>
            <h3 className="text-xl font-semibold text-primary mb-4">Engineering Foundation</h3>
            <p className="text-slate-600 leading-relaxed">
              I began my career in engineering research, specialising in the analysis and design of complex systems. My academic work culminated in a PhD in Electrical & Electronic Engineering, where I developed a structured approach to modelling, problem solving, and system reliability.
            </p>
          </motion.div>

          {/* Chapter 2 */}
          <motion.div variants={itemVariants} className="glass p-8 rounded-3xl relative overflow-hidden group hover:bg-white/60 transition-colors duration-300">
            <div className="absolute -right-4 -top-4 text-9xl font-bold text-slate-100/50 -z-10 group-hover:text-sky/5 transition-colors duration-300">2</div>
            <h3 className="text-xl font-semibold text-primary mb-4">From Research to Operations</h3>
            <p className="text-slate-600 leading-relaxed">
              Although the technologies have changed, the way I approach problems has remained consistent. Today, I apply the same engineering discipline to business operations, analysing workflows, identifying inefficiencies, and designing systems that improve reliability, consistency, and operational performance.
            </p>
          </motion.div>

          {/* Chapter 3 */}
          <motion.div variants={itemVariants} className="glass p-8 rounded-3xl relative overflow-hidden group hover:bg-white/60 transition-colors duration-300">
            <div className="absolute -right-4 -top-4 text-9xl font-bold text-slate-100/50 -z-10 group-hover:text-green/5 transition-colors duration-300">3</div>
            <h3 className="text-xl font-semibold text-primary mb-4">Current Focus</h3>
            <p className="text-slate-600 leading-relaxed">
              As the founder of Meridux, my work centres on designing intelligent operational systems for healthcare and service businesses. Rather than starting with software, I begin by understanding how people, processes, and information interact before introducing technology that supports long-term operational improvement.
            </p>
          </motion.div>
        </motion.div>

        {/* Philosophy Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8 md:p-12 border-blue/20 bg-gradient-to-br from-blue/5 via-transparent to-transparent relative overflow-hidden"
        >
          {/* Decorative subtle gradient blob inside the card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue/10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="max-w-4xl">
            <h4 className="text-sm font-semibold text-blue tracking-wider uppercase mb-4">
              My Philosophy
            </h4>
            <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-snug">
              "Technology should support well-designed systems, not compensate for poorly designed workflows."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;