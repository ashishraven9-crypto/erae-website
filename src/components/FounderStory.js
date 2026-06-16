"use client";
import { motion } from "framer-motion";

export default function FounderStory() {
  return (
    <section style={{
      padding: '10rem 2rem',
      backgroundColor: 'var(--color-alabaster)',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '1000px',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          style={{ flex: '1 1 400px' }}
        >
          <div style={{ width: '100%', paddingTop: '125%', position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-woven-flax)' }}>
            <img 
              src="/founder.jpg" 
              alt="Shreya, Founder of Eraé"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          style={{ flex: '1 1 400px', padding: '2rem 0' }}
        >
          <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: 'var(--color-merlot)' }}>
            Notes from the Atelier
          </h3>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--color-graphite)', fontFamily: 'var(--font-sans)' }}>
            Curated in Hyderabad.
          </h2>
          <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-caveat)', marginBottom: '1.5rem', color: 'var(--color-graphite)', opacity: 0.9 }}>
            Eraé was born from a simple desire:
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.8, marginBottom: '2rem' }}>
            To bridge the gap between refined structure and everyday comfort. Every piece is a result of intentional design, created for women on the move.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <p style={{ fontFamily: 'var(--font-caveat)', fontSize: '2.5rem' }}>Shreya</p>
            <span style={{ width: '30px', height: '1px', backgroundColor: 'var(--color-graphite)' }}></span>
            <a 
              href="https://www.instagram.com/barely.shreya/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase', borderBottom: '1px solid var(--color-graphite)', paddingBottom: '0.2rem', textDecoration: 'none', color: 'inherit' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              @barely.shreya
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
