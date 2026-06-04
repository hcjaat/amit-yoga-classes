'use client';

import { motion } from 'framer-motion';
import { HiCheckCircle, HiTrophy, HiHome, HiGlobeAmericas, HiClock, HiArrowsRightLeft, HiHeart, HiWallet } from 'react-icons/hi2';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const features = [
  {
    icon: HiTrophy,
    title: 'Government Certified',
    description: 'Certified yoga instructor with professional qualifications and credentials'
  },
  {
    icon: HiCheckCircle,
    title: 'Personalized Guidance',
    description: 'Customized yoga programs tailored to your individual needs and goals'
  },
  {
    icon: HiHome,
    title: 'Home Tuition Available',
    description: 'Convenient one-on-one sessions in the comfort of your home'
  },
  {
    icon: HiGlobeAmericas,
    title: 'Online Classes',
    description: 'Join from anywhere with flexible online yoga sessions'
  },
  {
    icon: HiClock,
    title: 'Flexible Timing',
    description: 'Classes scheduled according to your availability and preferences'
  },
  {
    icon: HiArrowsRightLeft,
    title: 'Practical Training',
    description: 'Hands-on guidance focusing on correct posture and breathing techniques'
  },
  {
    icon: HiHeart,
    title: 'Wellness Focused',
    description: 'Holistic approach to health, stress relief, and mental well-being'
  },
  {
    icon: HiWallet,
    title: 'Affordable Pricing',
    description: 'Premium yoga classes at competitive and accessible rates'
  }
];

export function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-yoga-primary mb-4">
            Why Choose Amit Sir
          </h2>
          <div className="w-20 h-1 bg-yoga-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Eight reasons why students choose Amit Sir for their yoga journey
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="bg-yoga-bg p-6 rounded-lg border border-yoga-accent/20 hover:border-yoga-secondary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yoga-primary"
                variants={fadeInUp}
                tabIndex={0}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-yoga-primary rounded-full mb-4 shadow-lg shadow-yoga-primary/30"
                  style={{ perspective: 600, transformStyle: 'preserve-3d' }}
                  animate={{ rotateX: [0, 10, 0, -10, 0], rotateZ: [0, 3, 0, -3, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.15 }}
                  whileHover={{ scale: 1.15 }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="font-semibold text-lg text-yoga-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
