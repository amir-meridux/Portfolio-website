import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Lightbulb, ExternalLink } from 'lucide-react';

const researchCards = [
  {
    icon: GraduationCap,
    title: "Engineering Research",
    description: "A PhD in Electrical & Electronic Engineering established the analytical foundation for my work. Research in sensors, microelectronics, and system design developed a structured approach to modelling, experimentation, and evidence-based problem solving."
  },
  {
    icon: BookOpen,
    title: "Publications",
    description: "Research outcomes include peer-reviewed journal publications and conference papers covering sensing technologies, system modelling, and engineering design.",
    button: {
      label: "View Publications",
      href: "#" // Placeholder for Google Scholar link
    }
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Research is valuable when it leads to practical improvements. The same engineering principles that guided my academic work now influence the design of operational systems that are reliable, measurable, and built for continuous improvement."
  }
];

const Research = () => {
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
    <section id="research" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Opening Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-200 text-slate-700 font-semibold text-sm mb-6">
            Academic Background
          </div>
          <h2 className="text-4xl font-bold text-primary mb-4">Research & Publications</h2>
          <p className="text-xl text-blue font-medium mb-8">
            The engineering foundation behind my approach to systems design.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Before focusing on operational systems, my work centred on engineering research involving complex systems, sensor technologies, and microelectronics. Although my current work addresses business operations rather than physical systems, the same analytical principles continue to shape how I approach workflow design, reliability, and continuous improvement.
          </p>
        </motion.div>

        {/* 3-Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {researchCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={idx} 
                variants={itemVariants} 
                className="glass p-8 rounded-3xl flex flex-col h-full hover:bg-white/60 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700 mb-6">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">
                  {card.description}
                </p>
                
                {/* Conditional Button for Card 2 */}
                {card.button && (
                  <div className="mt-8 pt-6 border-t border-slate-200/50">
                    <a 
                      href={card.button.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue font-semibold hover:gap-3 transition-all"
                    >
                      {card.button.label} <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Highlight Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-10 md:p-14 lg:p-16 border-slate-200 bg-gradient-to-br from-slate-50 via-white/40 to-transparent relative overflow-hidden"
        >
          {/* Decorative subtle background element */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-slate-200/50 rounded-full blur-3xl -z-10"></div>
          
          <div className="max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 leading-snug">
              Research informs practice.
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              My academic work provided the analytical framework that I now apply to operational challenges. Rather than separating engineering from business, I view them as complementary disciplines connected by systems thinking, structured analysis, and evidence-based design.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Research;