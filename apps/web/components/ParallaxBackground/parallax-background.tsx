'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function FullscreenParallaxBackground() {
  const { scrollY } = useScroll();

  // y goes from -200px (initially shifted up) to 0px (aligned bottom)
  const y = useTransform(scrollY, [0, 1000], [200, 0]);

  return (
    <motion.div
      style={{ y }}
      className="pointer-events-none fixed inset-0 z-[-1] -translate-y-[200px] bg-[url('/images/parallax-background.png')] bg-cover bg-center opacity-30"
    />
  );
}
