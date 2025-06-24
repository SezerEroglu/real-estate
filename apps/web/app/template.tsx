'use client';

import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0.75 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0.75 }}
      transition={{ ease: 'linear', duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
