"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function WaitlistFooter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer style={{
      padding: '10rem 2rem 4rem 2rem',
      backgroundColor: 'var(--color-graphite)',
      color: 'var(--color-alabaster)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
      >
        The Atelier is preparing.
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ fontSize: '1rem', opacity: 0.7, marginBottom: '4rem', fontFamily: 'var(--font-sans)', letterSpacing: '0.05em' }}
      >
        Enter your email to receive early access to the SOLACE collection.
      </motion.p>
      
      {!submitted ? (
        <motion.form 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          style={{ display: 'flex', borderBottom: '1px solid rgba(249, 248, 246, 0.5)', paddingBottom: '0.5rem', width: '100%', maxWidth: '400px' }}
        >
          <input 
            type="email" 
            placeholder="Email Address" 
            required
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: 'var(--color-alabaster)', 
              outline: 'none', 
              flex: 1,
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              letterSpacing: '0.05em'
            }} 
          />
          <button type="submit" style={{ 
            background: 'transparent', 
            border: 'none', 
            color: 'var(--color-alabaster)', 
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontSize: '0.8rem'
          }}>Join</button>
        </motion.form>
      ) : (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ fontStyle: 'italic', fontFamily: 'var(--font-cormorant)', fontSize: '1.2rem' }}
        >
          You are on the list. We will write to you soon.
        </motion.p>
      )}
      
      <div style={{ marginTop: '10rem', fontSize: '0.8rem', opacity: 0.4, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        © {new Date().getFullYear()} Eraé
      </div>
    </footer>
  );
}
