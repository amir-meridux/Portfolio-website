import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Quote } from 'lucide-react';

const articles = [
  {
    title: "Workflow Before Automation",
    description: "Technology should support a well-designed process, not compensate for a poorly designed one. Effective automation begins with understanding how work flows through an organisation."
  },
  {
    title: "Thinking in Systems",
    description: "Many operational problems are symptoms rather than root causes. Viewing organisations as interconnected systems helps reveal opportunities for meaningful and sustainable improvement."
  },
  {
    title: "Engineering Better Operations",
    description: "Engineering is fundamentally about designing reliable systems. Those same principles can be applied to administrative workflows, helping organisations improve efficiency without increasing complexity."
  }
];

const Insights = () => {
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
    <section id="insights" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-sky/10 text-sky font-semibold text-sm mb-6">
            Writing
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
  Architectural <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">
    Insights.
  </span>
</h2>
          <p className="text-xl text-sky font-medium mb-8">
            Thoughts on systems thinking, workflow design, and operational improvement.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            I write about the principles behind effective operational systems, drawing on experience from engineering research, workflow design, and practical implementation. The focus is on ideas that help organisations improve the way they work, rather than on specific software or technologies.
          </p>
        </motion.div>

        {/* Article Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {articles.map((article, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants} 
              className="glass p-8 rounded-3xl flex flex-col h-full hover:bg-white/60 transition-colors duration-300 border-white/50"
            >
              <h3 className="text-xl font-semibold text-primary mb-4 leading-snug">
                {article.title}
              </h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {article.description}
              </p>
              
              {/* Coming Soon Button/Indicator */}
              <div className="mt-8 pt-6 border-t border-slate-200/50 flex items-center">
                <div className="inline-flex items-center gap-2 text-slate-400 font-medium text-sm tracking-wider uppercase bg-slate-50 px-4 py-2 rounded-lg w-fit">
                  <Clock size={16} />
                  Coming Soon
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Quote Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-10 md:p-14 lg:p-20 border-sky/20 bg-gradient-to-br from-sky/5 via-transparent to-transparent text-center relative overflow-hidden"
        >
          {/* Decorative Quote Icon Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sky/5 pointer-events-none -z-10">
            <Quote size={200} fill="currentColor" />
          </div>

          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-800 leading-snug max-w-4xl mx-auto italic">
            "The best operational systems are often the simplest. Simplicity is achieved through thoughtful design, not by reducing functionality."
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Insights;