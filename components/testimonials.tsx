'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { fadeInUp } from '@/lib/animations';

const testimonials = [
  {
    name: 'Hemant',
    role: 'Local Guide',
    content: 'A Calm and Healing Space — Yoga here is not just a physical workout—it\'s a healing experience. The instructor creates a calm, safe, and nurturing space where you can truly focus on your breath and body. The sessions are challenging yet soothing, and I feel balanced and centered after every class. I love this place!',
    rating: 5,
  },
  {
    name: 'Parul Sharma',
    role: 'Student',
    content: 'I\'ve had a wonderful experience with this yoga class! It has greatly improved my strength and flexibility, and helped me in recovery—both physically and mentally. The sessions bring a deep sense of peace to the mind, and I truly feel refreshed after each class. The teacher is excellent, guiding us with care and positivity.',
    rating: 5,
  },
  {
    name: 'Arvindmeenaji',
    role: 'Student',
    content: 'Amazing yoga guidance, Full of positivity, Very peaceful session..!!',
    rating: 5,
  },
  {
    name: 'Kamlesh Deora',
    role: 'Student',
    content: 'These yoga classes are truly enjoyable, offering a deep dive into every yoga activity with a peaceful and positive vibe. The trekking days are so interesting, blending nature with mindfulness on beautiful mountain trails. What makes it special is the seamless coordination between students and teachers, creating a supportive community.',
    rating: 5,
  },
  {
    name: 'Ramcharan Sharma',
    role: 'Student',
    content: 'Nice yoga centre. Trainer Amit sir behaviour best 😊😊🤗 TQ Amit sir...',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-yoga-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-yoga-primary mb-4">
            Student Testimonials
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear what our students have to say about their yoga journey
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                "{testimonials[current].content}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-yoga-primary">
                  {testimonials[current].name}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <motion.button
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-2 rounded-full bg-yoga-primary text-white hover:bg-opacity-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yoga-primary focus-visible:ring-offset-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                    setAutoPlay(false);
                    setTimeout(() => setAutoPlay(true), 10000);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === current
                      ? 'bg-yoga-primary w-3 h-3'
                      : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              aria-label="Next testimonial"
              className="p-2 rounded-full bg-yoga-primary text-white hover:bg-opacity-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yoga-primary focus-visible:ring-offset-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
