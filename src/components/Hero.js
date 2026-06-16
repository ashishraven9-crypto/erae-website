"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section style={{ height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-alabaster)' }}>
      {/* Background Image */}
      <motion.div style={{ position: 'absolute', width: '100%', height: '120%', top: '-10%', y }}>
        <img 
          src="/hero-sheer.jpg" 
          alt="Sheer Fabric - Everyday Wear Redefined"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', color: '#F9F8F6', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', zIndex: 10 }}
      >
        Scroll to explore
      </motion.div>
    </section>
  );
}
