'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronUp } from 'react-icons/hi2';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down past 400px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-24 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-[#1E3A2B] text-white shadow-lg border border-white/20 hover:bg-yoga-primary hover:text-white transition-all duration-300 focus:outline-none"
          whileHover={{ 
            scale: 1.1,
            y: -4,
            boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll back to top"
        >
          <motion.span
            style={{ perspective: 600, transformStyle: 'preserve-3d' }}
            animate={{ rotateX: [0, 10, 0, -10, 0], rotateZ: [0, 3, 0, -3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HiChevronUp className="w-6 h-6" />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
