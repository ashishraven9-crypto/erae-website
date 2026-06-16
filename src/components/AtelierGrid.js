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
    <section ref={containerRef} className="atelier-section">
      <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4rem', color: 'var(--color-merlot)' }}>The Process</h3>
      
      <div className="atelier-grid">
        <motion.div style={{ y: y1, position: 'relative' }}>
          <div style={{ width: '100%', paddingTop: '130%', backgroundColor: '#e2ddcf', position: 'relative', overflow: 'hidden' }}>
            <img 
              src="/solace-comfort.jpg" 
              alt="Solace Rooted in comfort"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </motion.div>
        
        <motion.div className="atelier-grid-item-2" style={{ y: y2, position: 'relative' }}>
          <div className="atelier-grid-image-2">
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
