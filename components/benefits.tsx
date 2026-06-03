'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer, listItemVariants } from '@/lib/animations';

const stats = [
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Yoga Sessions', value: 800, suffix: '+' },
  { label: 'Satisfied Students', value: 300, suffix: '+' },
  { label: 'Training Programs', value: 9, suffix: '' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const increment = value / (duration / 16);
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-yoga-primary">
      {count}
      {suffix}
    </div>
  );
}

export default function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-yoga-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-yoga-primary mb-4">
            By The Numbers
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our proven track record of helping students transform their lives
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer(0.1)}
        >
          {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg text-center shadow-md border border-yoga-accent/10"
                variants={listItemVariants}
                whileHover={{ y: -5 }}
                tabIndex={0}
              >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-yoga-primary font-medium mt-4">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
