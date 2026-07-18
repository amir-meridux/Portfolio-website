import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Globe, FileText, ArrowRight, Calendar } from 'lucide-react';

const contactCards = [
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Connect professionally and follow my latest insights on systems thinking, workflow design, and operational improvement.",
    buttonText: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/dr-aamir-farooq-7a2a1515",
    color: "text-blue",
    bgColor: "bg-blue/10"
  },
  {
    icon: Mail,
    title: "Email",
    description: "For professional enquiries, collaborations, or speaking opportunities.",
    buttonText: "Send an Email",
    href: "mailto:aamir@meridux.com",
    color: "text-sky",
    bgColor: "bg-sky/10"
  },
  {
    icon: Globe,
    title: "Meridux",
    description: "Discover how structured workflow design and intelligent operational systems can support healthcare and service businesses.",
    buttonText: "Visit Meridux",
    href: "https://www.meridux.com/",
    color: "text-green",
    bgColor: "bg-green/10"
  },
  {
    icon: FileText,
    title: "Resume",
    description: "Download my latest professional résumé, including experience, research, and selected projects.",
    buttonText: "Download Resume",
    href: "/Dr_Aamir_Farooq_AI_Automation_Engineer_Resume.pdf",
    download: true,
    color: "text-orange",
    bgColor: "bg-orange/10"
  }
];

const Contact = () => {
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
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
            Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">
              Connect.
            </span>
          </h2>
          <p className="text-xl text-slate-700 font-medium mb-6">
            Whether you're exploring new ideas, improving operations, or discussing potential opportunities, I'd be pleased to hear from you.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            If you're interested in systems architecture, workflow design, operational improvement, research collaborations, or opportunities to work together, feel free to get in touch. I'm always interested in thoughtful conversations about engineering, business operations, and the practical application of technology.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          
          {/* Primary CTA: Operational Discovery (Full Width) */}
          <motion.div 
            variants={itemVariants}
            className="glass p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-6 border-blue/20 bg-gradient-to-r from-blue/5 to-transparent"
          >
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue/10 flex items-center justify-center text-blue shrink-0">
                  <Calendar size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-primary">Operational Discovery</h3>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
                A 30-minute conversation to map your current operational bottlenecks and identify if a structured system redesign can help.
              </p>
            </div>
            
            <div className="shrink-0">
              {/* Since no specific scheduling link was provided, this opens an email pre-filled with a relevant subject line */}
              <a 
                href="mailto:aamir@meridux.com?subject=Schedule%20an%20Operational%20Discovery%20Call"
                className="inline-flex items-center justify-center gap-2 text-base font-semibold text-white bg-blue px-8 py-4 rounded-xl shadow-lg shadow-blue/20 hover:bg-blue/90 hover:shadow-xl transition-all"
              >
                Schedule a Call <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Secondary Options: 4-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {contactCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div 
                  key={idx} 
                  variants={itemVariants} 
                  className="glass p-8 rounded-3xl flex flex-col h-full hover:bg-white/60 transition-colors duration-300 border-white/50"
                >
                  <div className={`w-12 h-12 rounded-2xl ${card.bgColor} flex items-center justify-center ${card.color} mb-6`}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed flex-grow mb-8">
                    {card.description}
                  </p>
                  
                  <div>
                    {/* Conditionally adding the download attribute if it's the resume card */}
                    <a 
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={card.download ? true : undefined}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 bg-white px-5 py-2.5 rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow transition-all"
                    >
                      {card.buttonText} <ArrowRight size={16} className="text-slate-400" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </motion.div>

        {/* Bottom Statement Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-10 md:p-14 border-slate-200 bg-gradient-to-br from-slate-50 via-white/40 to-transparent text-center"
        >
          <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-snug max-w-4xl mx-auto">
            I believe well-designed systems create lasting improvements. If you're working on complex operational challenges, I'd welcome the opportunity to connect.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;