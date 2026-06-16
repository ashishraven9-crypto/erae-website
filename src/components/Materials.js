"use client";
import { motion } from "framer-motion";

export default function Materials() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Block 1: The Details Whisper */}
      <section style={{
        display: 'flex',
        minHeight: '80vh',
        flexWrap: 'wrap'
      }}>
        <div style={{ flex: '1 1 400px', backgroundColor: 'var(--color-alabaster)', padding: '8rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--color-graphite)', fontFamily: 'var(--font-sans)' }}>
              The Details Whisper.
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.8, maxWidth: '450px', marginBottom: '4rem' }}>
              We believe in the precision of a seam, the functionality of a tie-up, and the subtle balance of a tailored hem. From the first sketch to the final hand-stamped package, we create every piece with intentionality.
            </p>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--color-graphite)', fontFamily: 'var(--font-sans)' }}>
              Conscious Production.
            </h2>
            <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-caveat)', marginBottom: '1rem', color: 'var(--color-graphite)', opacity: 0.9 }}>
              Quality takes patience.
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.8, maxWidth: '450px' }}>
              We work in small, intentional batches to ensure every garment meets our high standards. Even our packaging is handled with care—each bag is hand-stamped by us, making every delivery as unique as the piece inside.
            </p>
          </motion.div>
        </div>
        <div style={{ flex: '1 1 400px', backgroundColor: 'var(--color-sage-ash)', position: 'relative', minHeight: '50vh', overflow: 'hidden' }}>
          <img 
            src="/tencel-macro.jpg" 
            alt="Tencel Fabric Macro"
            style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Block 2: Why Tencel / Why it feels different */}
      <section style={{
        display: 'flex',
        minHeight: '80vh',
        flexWrap: 'wrap-reverse'
      }}>
        <div style={{ flex: '1 1 400px', backgroundColor: 'var(--color-merlot)', position: 'relative', minHeight: '50vh', overflow: 'hidden' }}>
          <img 
            src="/fluid-drape.jpg" 
            alt="Fluid Drape Garment"
            style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ flex: '1 1 400px', backgroundColor: 'var(--color-alabaster)', padding: '8rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--color-graphite)', fontFamily: 'var(--font-sans)' }}>
              Why Tencel?
            </h2>
            <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-caveat)', marginBottom: '2rem', color: 'var(--color-graphite)', opacity: 0.9 }}>
              Swipe to feel the difference.
            </h3>
            
            <h2 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--color-graphite)', fontFamily: 'var(--font-sans)', marginTop: '3rem' }}>
              Why it feels different!!!
            </h2>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, opacity: 0.9, maxWidth: '450px', marginBottom: '2rem' }}>
              Cool against the skin, silky-soft to the touch, & naturally breathable with a fluid drape that moves beautifully.
            </p>
            <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-caveat)', color: 'var(--color-graphite)' }}>
              Comfort you'll keep reaching for...
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
