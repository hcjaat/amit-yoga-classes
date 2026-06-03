'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export default function QuoteBanner() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-6 sm:px-8 bg-yoga-bg relative overflow-hidden border-b border-yoga-accent/10">
      {/* Subtle decorative background circle */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-yoga-accent/5 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center"
        >
          {/* Elegant light-green Quote Icon */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-yoga-secondary/20 mb-4 sm:mb-6 rotate-180" />
          </motion.div>

          {/* Deep italicized serif quote text */}
          <blockquote className="font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl italic text-yoga-primary font-medium leading-relaxed mb-4 sm:mb-6 max-w-3xl">
            &ldquo;Your <span className="text-yoga-secondary not-italic font-semibold">body</span> exists in the past and your <span className="text-yoga-secondary not-italic font-semibold">mind</span> exists in the future. In <span className="text-yoga-secondary not-italic font-semibold">yoga</span>, they come together in the <span className="text-yoga-secondary not-italic font-semibold">present</span>.&rdquo;
          </blockquote>

          {/* Author Name */}
          <cite className="not-italic text-xs sm:text-sm font-semibold tracking-widest uppercase text-gray-500 block">
            &mdash; B.K.S. Iyengar
          </cite>
        </motion.div>
      </div>
    </section>
  );
}
