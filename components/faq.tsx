'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi2';
import { fadeInUp, staggerContainer, listItemVariants } from '@/lib/animations';

const faqs = [
  {
    question: 'Do you provide home yoga training?',
    answer: 'Yes, we offer personalized home tuition services where our certified instructor visits your place for one-on-one yoga sessions tailored to your specific needs and goals.',
  },
  {
    question: 'Are online yoga classes available?',
    answer: 'Absolutely! We provide flexible online yoga classes via video call. You can join from anywhere at your convenient time with expert guidance.',
  },
  {
    question: 'Can beginners join your classes?',
    answer: 'Of course! We welcome students of all levels, including complete beginners. Our classes are designed to accommodate everyone with modifications for different abilities.',
  },
  {
    question: 'What are the class timings?',
    answer: 'We offer flexible timings for both morning and evening sessions. Center classes, home tuitions, and online sessions have customizable schedules to suit your routine.',
  },
  {
    question: 'Do you provide personal sessions?',
    answer: 'Yes, we offer personalized one-on-one sessions for students who prefer individualized attention. These can be conducted at our center, your home, or online.',
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-yoga-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our yoga programs
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer(0.1)}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={listItemVariants}
              className="border border-yoga-accent/20 rounded-lg overflow-hidden"
            >
              <motion.button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-yoga-bg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yoga-primary focus-visible:ring-inset"
                whileHover={{ backgroundColor: 'var(--yoga-bg)' }}
              >
                <h3 className="text-lg font-semibold text-yoga-primary text-left">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: expanded === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  {expanded === index ? (
                    <HiMinus className="w-5 h-5 text-yoga-primary" />
                  ) : (
                    <HiPlus className="w-5 h-5 text-yoga-primary" />
                  )}
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {expanded === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-yoga-bg border-t border-yoga-accent/20"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
