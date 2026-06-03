'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

const heroImages = [
  '/images/center-yoga.webp',
  '/images/yoga/yoga-pose2.webp',
  '/images/yoga/1.webp',
  '/images/yoga/mountaintop-meditation.webp',
  '/images/yoga/mountaintop-warrior.webp',
  '/images/yoga/meditation-park.webp',
  '/images/yoga/temple-yoga.webp',
  '/images/yoga/bridge-plank.webp',
  '/images/yoga/outdoor-stretch.webp',
  '/images/yoga/headstand.webp',
  '/images/yoga/yoga-pose1.webp',
];

function Typewriter({ phrases, className, startDelay = 0 }: { phrases: string[]; className?: string; startDelay?: number }) {
  const [started, setStarted] = useState(startDelay === 0);
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'deleting' | 'done'>('typing');
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0);
  const charIndex = useRef(0);
  const isLast = index >= phrases.length - 1;

  useEffect(() => {
    if (startDelay && !started) {
      const t = setTimeout(() => setStarted(true), startDelay);
      return () => clearTimeout(t);
    }
  }, [startDelay, started]);

  useEffect(() => {
    if (!started) return;
    const current = phrases[index];
    let timer: NodeJS.Timeout;

    if (phase === 'typing') {
      if (charIndex.current < current.length) {
        timer = setTimeout(() => {
          charIndex.current += 1;
          setDisplayText(current.slice(0, charIndex.current));
          setTick((prev) => prev + 1);
        }, 60);
      } else if (isLast) {
        timer = setTimeout(() => setPhase('done'), 2000);
      } else {
        timer = setTimeout(() => setPhase('deleting'), 2000);
      }
    } else if (phase === 'deleting') {
      if (charIndex.current > 0) {
        timer = setTimeout(() => {
          charIndex.current -= 1;
          setDisplayText(current.slice(0, charIndex.current));
          setTick((prev) => prev + 1);
        }, 30);
      } else {
        setPhase('typing');
        setIndex((prev) => prev + 1);
      }
    }

    return () => clearTimeout(timer);
  }, [started, phase, index, tick]);

  return (
    <span className={className}>
      {displayText}
      {phase !== 'done' && (
        <span className="inline-block w-0.5 h-[1em] bg-white/70 ml-0.5 animate-pulse" />
      )}
    </span>
  );
}

function MagneticButton({ children, className, href, ...props }: any) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPosition({ x, y });
  };

  const handleLeave = () => setPosition({ x: 0, y: 0 });

  const Component = href ? motion.a : motion.button;
  return (
    <Component
      ref={ref}
      href={href}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      {...props}
    >
      {children}
    </Component>
  );
}

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  useEffect(() => {
    const nextIndex = (currentImageIndex + 1) % heroImages.length;
    const img = document.createElement('img');
    img.src = heroImages[nextIndex];
  }, [currentImageIndex]);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <section id="home" ref={sectionRef} className="relative h-screen w-full overflow-hidden pt-20 bg-black">
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0"
          style={{ y: parallaxY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="relative w-full h-[130%] -top-[15%]">
            <Image
              src={heroImages[currentImageIndex]}
              alt={`Yoga pose ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              priority={currentImageIndex === 0}
              fetchPriority={currentImageIndex === 0 ? 'high' : undefined}
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-20">
        <motion.div
          className="text-center max-w-2xl"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <p className="text-yoga-accent text-xs md:text-base font-semibold tracking-widest uppercase mb-2 md:mb-4">
            AMIT&apos;S YOGA CLASSES — Mahesh Nagar, Jaipur
          </p>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-3 md:mb-6 leading-tight">
            Yoga, Meditation & Wellness Classes in Jaipur
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-gray-100 mb-2 md:mb-4 font-light min-h-[2rem] md:min-h-[3rem]">
            <Typewriter
              phrases={[
                'Through Certified Yoga & Wellness Training',
                'Begin Your Journey to Inner Peace',
                'Strengthen Body, Calm Mind',
                'Discover the Power of Breath',
                'Transform Body, Mind & Soul',
              ]}
            />
          </p>
          <p className="text-sm md:text-lg text-gray-200 mb-4 md:mb-6 min-h-[1.25rem] md:min-h-[1.75rem]">
            <Typewriter
              phrases={['Govt Certified • 5+ Years • 800+ Sessions • WhatsApp 9352600526']}
              startDelay={26000}
            />
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <MagneticButton
              href="#contact"
              className="px-8 py-4 bg-yoga-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-yoga-primary"
            >
              Book Free Consultation
            </MagneticButton>
            <MagneticButton
              href="tel:+919352600526"
              className="px-8 py-4 bg-white text-yoga-primary rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yoga-primary focus-visible:ring-offset-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </MagneticButton>
            <MagneticButton
              href="https://wa.me/919352600526?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20yoga%20classes"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-500"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentImageIndex
                ? 'bg-white w-8 h-3'
                : 'bg-white/50 w-3 h-3 hover:bg-white/75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </motion.div>
    </section>
  );
}
