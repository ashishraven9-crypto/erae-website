"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AtelierGrid() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} style={{
      padding: '10rem 4rem',
      backgroundColor: 'var(--color-woven-flax)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4rem', color: 'var(--color-merlot)' }}>The Process</h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        maxWidth: '1200px',
        width: '100%',
        alignItems: 'center'
      }}>
        <motion.div style={{ y: y1, position: 'relative' }}>
          <div style={{ width: '100%', paddingTop: '130%', backgroundColor: '#e2ddcf', position: 'relative', overflow: 'hidden' }}>
            <img 
              src="/solace-comfort.jpg" 
              alt="Solace Rooted in comfort"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </motion.div>
        
        <motion.div style={{ y: y2, marginTop: '8rem', position: 'relative' }}>
          <div style={{ width: '80%', paddingTop: '120%', backgroundColor: '#cfd4ce', marginLeft: 'auto', position: 'relative', overflow: 'hidden' }}>
            <img 
              src="/shirt-sketch.jpg" 
              alt="Shirt Design Details"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
