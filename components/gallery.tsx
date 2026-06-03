'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

const galleryImages = [
  { id: 13, src: '/images/yoga/outdoor1.webp', alt: 'Outdoor Yoga' },
  { id: 12, src: '/images/yoga/yoga-pose1.webp', alt: 'Yoga Pose' },
  { id: 11, src: '/images/yoga/exercise.webp', alt: 'Exercise Pose' },
  { id: 10, src: '/images/center-yoga.webp', alt: 'Central Yoga Pose' },
  { id: 1, src: '/images/yoga/1.webp', alt: 'Yoga Pose 1' },
  { id: 2, src: '/images/yoga/2.webp', alt: 'Yoga Pose 2' },
  { id: 3, src: '/images/yoga/temple-yoga.webp', alt: 'Temple Yoga Pose' },
  { id: 4, src: '/images/yoga/meditation-park.webp', alt: 'Park Meditation' },
  { id: 5, src: '/images/yoga/bridge-plank.webp', alt: 'Bridge Plank Pose' },
  { id: 6, src: '/images/yoga/outdoor-stretch.webp', alt: 'Outdoor Stretch' },
  { id: 7, src: '/images/yoga/headstand.webp', alt: 'Headstand Pose' },
  { id: 8, src: '/images/yoga/mountaintop-meditation.webp', alt: 'Mountaintop Meditation' },
  { id: 9, src: '/images/yoga/mountaintop-warrior.webp', alt: 'Mountaintop Warrior Pose' },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  useEffect(() => {
    const nextIndex = (current + 1) % galleryImages.length;
    const img = document.createElement('img');
    img.src = galleryImages[nextIndex].src;
  }, [current]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % galleryImages.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const image = galleryImages[current];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-yoga-primary mb-4">
            Gallery
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our collection of yoga and wellness photography
          </p>
        </motion.div>

        {/* Carousel Card */}
        <motion.div
          className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="relative aspect-[16/10] md:aspect-[16/9] bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <button
                  onClick={() => setSelectedImage(image.id)}
                  className="w-full h-full relative block focus:outline-none focus-visible:ring-2 focus-visible:ring-yoga-primary"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={current === 0}
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-end justify-end p-4">
                    <span className="bg-white/80 backdrop-blur-sm text-yoga-primary text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <Expand className="w-3.5 h-3.5" />
                      View
                    </span>
                  </div>
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Nav Arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-yoga-primary hover:bg-white transition-all shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yoga-primary"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-yoga-primary hover:bg-white transition-all shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yoga-primary"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
              {current + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 py-4 px-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setAutoPlay(false);
                  setTimeout(() => setAutoPlay(true), 10000);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === current
                    ? 'bg-yoga-primary w-6 h-2.5'
                    : 'bg-gray-300 w-2.5 h-2.5 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-5xl w-full h-96 md:h-[85vh]"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
                  alt="Gallery view"
                  fill
                  className="object-contain"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
