"use client";
import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '2rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        color: 'var(--color-graphite)'
      }}
    >
      <div style={{ fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>The Atelier</div>
      <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <img src="/logo.png" alt="Eraé Logo" style={{ height: '40px', objectFit: 'contain' }} />
      </div>
      <div style={{ fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Inner Circle</div>
    </motion.nav>
  );
}
