import React from 'react';
import { Linkedin, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'How I Think', href: '#how-i-think' },
    { name: 'Projects', href: '#selected-projects' },
    { name: 'Research', href: '#research' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/dr-aamir-farooq-7a2a1515', 
      label: 'LinkedIn' 
    },
    { 
      icon: Mail, 
      href: 'mailto:aamir@meridux.com', 
      label: 'Email' 
    },
    { 
      icon: Globe, 
      href: 'https://www.meridux.com/', 
      label: 'Meridux' 
    }
  ];

  return (
    <footer className="relative z-10 border-t border-slate-200 bg-white/60 backdrop-blur-xl pt-16 pb-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          
          {/* Left Column: Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-2xl font-bold text-primary tracking-tight mb-2">
              Aamir Farooq, PhD
            </span>
            <p className="text-slate-500 font-medium">
              Systems Architect | Founder, Meridux
            </p>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-6">
              Quick Links
            </span>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-center md:text-left">
              {footerLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-slate-500 hover:text-blue transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Socials */}
          <div className="flex flex-col items-center md:items-end">
            <span className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-6">
              Connect
            </span>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue/10 hover:text-blue transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-200/60 flex items-center justify-center text-sm text-slate-400">
          &copy; 2026 Aamir Farooq. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;