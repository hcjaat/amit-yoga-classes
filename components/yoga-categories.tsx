'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, listItemVariants } from '@/lib/animations';

const categories = [
  { id: 'yoga', label: 'Yoga' },
  { id: 'meditation', label: 'Meditation' },
  { id: 'pranayama', label: 'Pranayama' },
  { id: 'flexibility', label: 'Flexibility' },
  { id: 'balance', label: 'Balance' },
  { id: 'strength', label: 'Strength' },
];

const displayImages = [
  '/images/yoga/temple-yoga.webp',
  '/images/yoga/meditation-park.webp',
  '/images/yoga/bridge-plank.webp',
  '/images/yoga/outdoor-stretch.webp',
  '/images/yoga/headstand.webp',
];

export default function YogaCategories() {
  return (
    <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-yoga-primary mb-4">
            Yoga Programs
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our diverse yoga categories designed for all levels
          </p>
        </motion.div>

        {/* Category Badges - Visual Only */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {categories.map((category, index) => (
              <motion.span
                  key={category.id}
                  className="px-5 py-3 sm:px-6 sm:py-2.5 rounded-full font-medium bg-yoga-secondary/20 text-yoga-primary border border-yoga-secondary/30 cursor-default select-none text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: '0 8px 20px rgba(74, 124, 89, 0.15)',
                backgroundColor: 'rgba(143, 185, 150, 0.3)'
              }}
            >
              {category.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer(0.1)}
        >
          {displayImages.slice(0, 3).map((image, index) => (
            <motion.div
              key={index}
              className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
              variants={listItemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={image}
                alt={`Yoga practice - Image ${index + 1}`}
                fill
                className="object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
