'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations';

export default function About() {
  const features = [
    { icon: '🎓', label: 'Government Certified' },
    { icon: '📅', label: '5+ Years Experience' },
    { icon: '👥', label: '800+ Sessions Conducted' },
    { icon: '🌍', label: 'Online & Offline' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* Image with clip-path reveal */}
          <motion.div
            className="relative h-96 md:h-full min-h-[500px] rounded-lg overflow-hidden shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0 bg-yoga-primary z-10"
              initial={{ clipPath: 'inset(0 0 0 0)' }}
              whileInView={{ clipPath: 'inset(0 100% 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />
            <motion.div
              className="w-full h-full"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              <Image
                src="/images/yoga/meditation-park.webp"
                alt="Amit Sir - Yoga Instructor"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeInRight}
            className="space-y-6"
          >
            <div>
              <motion.h2
                className="font-serif text-4xl md:text-5xl font-bold text-yoga-primary mb-4"
                variants={fadeInUp}
              >
                Meet Amit Sir — Your Yoga Teacher in Jaipur
              </motion.h2>
              <motion.p
                className="text-gray-600 text-lg leading-relaxed"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                A dedicated and government-certified yoga instructor with a passion for helping
                individuals transform their lives through the ancient science of yoga. With over
                5+ years of experience, Amit Sir has successfully guided hundreds of students in
                their wellness journey from his center in Mahesh Nagar, Jaipur.
              </motion.p>
            </div>

            <div>
              <motion.h3
                className="font-serif text-2xl font-bold text-yoga-primary mb-3"
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
              >
                Why Choose Amit Sir?
              </motion.h3>
              <motion.p
                className="text-gray-600 leading-relaxed"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                With personalized attention, evidence-based teaching methods, and a holistic approach
                to wellness, Amit Sir ensures that every student receives the best possible guidance
                for their unique needs.
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4 pt-6"
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-yoga-bg p-4 rounded-lg border border-yoga-accent/20 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <p className="text-sm font-medium text-yoga-primary">{feature.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
