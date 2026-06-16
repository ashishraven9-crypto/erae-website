"use client";
import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section style={{
      padding: '12rem 2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'var(--color-alabaster)'
    }}>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        style={{ maxWidth: '800px', textAlign: 'center' }}
      >
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--color-graphite)', fontFamily: 'var(--font-sans)' }}>
          Your Daily Retreat.
        </h2>
        <h3 style={{ fontSize: '4rem', fontFamily: 'var(--font-caveat)', marginBottom: '3rem', color: 'var(--color-graphite)', opacity: 0.9 }}>
          Breathable. Lasting. Effortless.
        </h3>
        <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--color-graphite)', opacity: 0.8, fontFamily: 'var(--font-sans)' }}>
          You aren't just buying a garment; you are investing in staples that bring clarity and confidence to your daily routine.
        </p>
      </motion.div>
    </section>
  );
}
