import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: "Meridux",
    category: "Operational Systems for Healthcare & Service Businesses",
    description: "Meridux was established to help organisations improve administrative workflows through structured system design and practical AI implementation. Rather than replacing existing processes, the focus is on creating reliable operational systems that support people, reduce unnecessary manual work, and enable sustainable improvement.",
    outcomes: [
      "Eliminated redundant manual data entry across administrative systems",
      "Reduced operational bottlenecks to free up clinical and support staff"
    ],
    tags: ["Systems Architecture", "Workflow Design", "Healthcare Operations", "AI Implementation"],
    diagram: [
      "Business",
      "Workflow Analysis",
      "System Design",
      "Automation",
      "Operational Improvement"
    ]
  },
  {
    title: "PatientCore",
    category: "Healthcare Workflow System",
    description: "PatientCore demonstrates how appointment management can be redesigned by analysing the complete workflow before introducing automation. The result is a structured operational process that improves consistency, reduces administrative effort, and supports better patient communication.",
    outcomes: [
      "Standardised the patient intake pipeline for operational consistency",
      "Significantly reduced administrative effort required for appointment confirmation"
    ],
    tags: ["Workflow Analysis", "Administrative Processes", "Patient Journey", "Operational Reliability"],
    diagram: [
      "Patient",
      "Appointment Request",
      "Workflow Engine",
      "Clinic Review",
      "Confirmation"
    ]
  },
  {
    title: "Prospect Intelligence Engine (PIE)",
    category: "Operational Intelligence Platform",
    description: "The Prospect Intelligence Engine was designed to automate business research while maintaining a structured decision-making process. By combining workflow automation with operational intelligence, it enables systematic prospect evaluation and supports more informed business development.",
    outcomes: [
      "Automated structured data gathering for systematic prospect evaluation",
      "Increased decision-making speed and accuracy for business development"
    ],
    tags: ["Operational Intelligence", "Data Workflows", "Research Automation", "Decision Support"],
    diagram: [
      "Discovery",
      "Research",
      "Scoring",
      "Qualification",
      "Outreach"
    ]
  },
  {
    title: "Research & Innovation",
    category: "Academic Background",
    description: "My engineering research continues to influence the way I approach operational system design. Future projects will explore the intersection of engineering methodology, business operations, and intelligent workflow systems.",
    outcomes: [
      "Applying analytical evidence to resolve practical operational inefficiencies",
      "Translating complex system modelling into tangible business value"
    ],
    tags: ["Systems Thinking", "Engineering Research", "Operational Design", "Continuous Improvement"],
    diagram: [
      "Engineering",
      "Systems Thinking",
      "Workflow Design",
      "Business Operations"
    ]
  }
];

const SelectedProjects = () => {
  return (
    <section id="selected-projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue/10 text-blue font-semibold text-sm mb-6">
            Work
          </div>
          <h2 className="text-4xl font-bold text-primary mb-6">Selected Projects</h2>
          <p className="text-xl text-slate-600">Examples of applying systems thinking to operational challenges.</p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <span className="text-sm font-semibold text-blue tracking-wider uppercase mb-3 block">{project.category}</span>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">{project.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">{project.description}</p>
                
                {/* Business Outcomes / Metrics */}
                <div className="space-y-3 mb-8">
                  {project.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-blue shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{outcome}</span>
                    </div>
                  ))}
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-3 py-1 bg-slate-100 rounded-lg text-sm font-medium text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 text-blue font-semibold hover:gap-3 transition-all">
                  Learn More <ArrowRight size={18} />
                </button>
              </div>

              {/* Visual System Diagram Side */}
              <div className="w-full lg:w-1/2 min-h-[400px] glass-card flex items-center justify-center p-8 relative overflow-hidden border-blue/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-white opacity-50"></div>
                
                {/* System Flow Diagram */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full">
                  {project.diagram.map((step, stepIdx) => (
                    <React.Fragment key={stepIdx}>
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (stepIdx * 0.1) }}
                        className="px-6 py-3 rounded-xl bg-white text-slate-800 font-medium text-sm md:text-base shadow-sm border border-slate-100 w-full max-w-[240px] text-center"
                      >
                        {step}
                      </motion.div>
                      
                      {stepIdx < project.diagram.length - 1 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + (stepIdx * 0.1) }}
                          className="py-2 text-blue/30 relative z-10"
                        >
                          <ArrowDown size={20} />
                        </motion.div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 text-center glass-card p-12 md:p-20 border-blue/10 bg-gradient-to-b from-white to-slate-50"
        >
          <h4 className="text-sm font-semibold text-blue tracking-widest uppercase mb-6">Every project begins with the same question.</h4>
          <p className="text-3xl md:text-4xl font-bold text-primary leading-tight max-w-2xl mx-auto">
            "How should this system work before deciding how it should be automated?"
          </p>
          <p className="mt-8 text-slate-500 font-medium max-w-xl mx-auto italic">
            This principle guides every project, regardless of the industry or technology involved.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default SelectedProjects;