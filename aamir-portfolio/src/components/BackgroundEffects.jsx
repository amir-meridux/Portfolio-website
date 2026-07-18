import React from 'react';
import { motion } from 'framer-motion';
const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-background">
      <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-blue/10 blur-[120px]" />
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-sky/10 blur-[100px]" />
      <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-green/10 blur-[100px]" />
    </div>
  );
};
export default BackgroundEffects;
