'use client';

import { motion } from 'framer-motion';
import {
  HiHome,
  HiUsers,
  HiComputerDesktop,
  HiGlobeAmericas,
  HiArrowPath,
  HiFire,
  HiLightBulb,
  HiUser,
  HiBolt,
} from 'react-icons/hi2';
import { fadeInUp, staggerContainer, listItemVariants } from '@/lib/animations';

const services = [
  {
    icon: HiUsers,
    title: 'Center Classes',
    description: 'Group sessions at our center. Includes a special Saturday outdoor activity where we visit a new scenic spot (like nearby mountains) to meditate in nature!',
  },
  {
    icon: HiHome,
    title: 'Home Tuition',
    description: 'Personalized yoga training in the comfort of your own home',
  },
  {
    icon: HiComputerDesktop,
    title: 'Online Classes',
    description: 'Flexible online yoga sessions with live instruction and support',
  },
  {
    icon: HiGlobeAmericas,
    title: 'Meditation',
    description: 'Guided meditation sessions to calm the mind and reduce stress',
  },
  {
    icon: HiArrowPath,
    title: 'Pranayama',
    description: 'Breathing exercises to enhance energy and mental clarity',
  },
  {
    icon: HiFire,
    title: 'Weight Loss Program',
    description: 'Targeted yoga practice combined with wellness guidance',
  },
  {
    icon: HiLightBulb,
    title: 'Stress Management',
    description: 'Holistic approach to managing stress and anxiety',
  },
  {
    icon: HiUser,
    title: 'Senior Yoga',
    description: 'Gentle and safe yoga practices designed for seniors',
  },
  {
    icon: HiBolt,
    title: 'Flexibility Training',
    description: 'Improve flexibility and mobility through targeted practice',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-yoga-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-yoga-primary mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive yoga and wellness programs tailored to your needs
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer(0.1)}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-yoga-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yoga-primary"
                variants={listItemVariants}
                whileHover={{ y: -5 }}
                tabIndex={0}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-yoga-primary rounded-full mb-4 shadow-lg shadow-yoga-primary/30"
                  style={{ perspective: 600, transformStyle: 'preserve-3d' }}
                  animate={{ rotateX: [0, 10, 0, -10, 0], rotateZ: [0, 3, 0, -3, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.15 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-serif text-xl font-bold text-yoga-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
