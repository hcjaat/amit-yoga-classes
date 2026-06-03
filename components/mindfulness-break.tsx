'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Brain, RefreshCw, X } from 'lucide-react';

type BreathState = 'idle' | 'inhale' | 'hold' | 'exhale';

export default function MindfulnessBreak() {
  const [isActive, setIsActive] = useState(false);
  const [breathState, setBreathState] = useState<BreathState>('idle');
  const [cycleCount, setCycleCount] = useState(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (!isActive) {
      setBreathState('idle');
      return;
    }

    setBreathState('inhale');
    setCycleCount(1);

    const schedule = (fn: () => void, delay: number) => {
      const id = setTimeout(() => {
        timersRef.current = timersRef.current.filter(t => t !== id);
        fn();
      }, delay);
      timersRef.current.push(id);
    };

    const runBreathingCycle = () => {
      schedule(() => {
        setBreathState('hold');
        schedule(() => {
          setBreathState('exhale');
          schedule(() => {
            setBreathState('inhale');
            setCycleCount((prev) => prev + 1);
          }, 4000);
        }, 4000);
      }, 4000);
    };

    runBreathingCycle();

    const cycleInterval = setInterval(runBreathingCycle, 12000);
    timersRef.current.push(cycleInterval);

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
    setBreathState('idle');
    setCycleCount(0);
  };

  // Label configuration based on state
  const getBreathLabel = () => {
    switch (breathState) {
      case 'inhale':
        return { text: 'Inhale deeply', color: 'text-emerald-300' };
      case 'hold':
        return { text: 'Hold your breath', color: 'text-amber-200' };
      case 'exhale':
        return { text: 'Exhale slowly', color: 'text-[#8FB996]' };
      default:
        return { text: 'Ready to relax?', color: 'text-white' };
    }
  };

  const labelInfo = getBreathLabel();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1E3A2B] to-[#14261C] text-white overflow-hidden relative">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,124,89,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold tracking-wider text-yoga-accent mb-4 uppercase">
            <Brain className="w-3.5 h-3.5" />
            Mindfulness Zone
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Mindful Breathing Break
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Take a 60-second break to calm your nervous system and realign your energy. Perfect for mid-day stress relief.
          </p>
        </motion.div>

        {/* Dynamic Card Container */}
        <motion.div
          layout
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 sm:p-8 md:p-12 rounded-3xl max-w-lg mx-auto shadow-2xl relative"
        >
          <AnimatePresence mode="wait">
            {!isActive ? (
              // Idle/Intro Screen
              <motion.div
                key="idle"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center py-4"
              >
                {/* Minimal preview circle */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-6 sm:mb-8 rounded-full border-2 border-white/20 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yoga-accent/15 rounded-full animate-pulse flex items-center justify-center">
                    <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yoga-accent" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-semibold mb-2">Breathing Meditation</h3>
                <p className="text-white/60 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed max-w-xs px-2">
                  A simple 4-4-4 breathing cycle designed to lower your heart rate and induce calmness.
                </p>

                <motion.button
                  onClick={handleStart}
                  className="px-6 py-3 sm:px-8 sm:py-3.5 bg-yoga-accent text-[#14261C] rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-yoga-accent/20 hover:bg-[#85b08c] hover:shadow-yoga-accent/30 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Breathing
                </motion.button>
              </motion.div>
            ) : (
              // Active Guided Session
              <motion.div
                key="active"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center py-2"
              >
                {/* Header Actions */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button 
                    onClick={handleStop} 
                    className="p-1.5 sm:p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    title="Exit"
                  >
                    <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>

                {/* Main animated breathing ring */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center mb-6 sm:mb-8">
                  {/* Outer Pulsing Aura Ring */}
                  <motion.div
                    animate={{
                      scale: breathState === 'inhale' ? 1.25 : breathState === 'hold' ? 1.25 : 0.75,
                      opacity: breathState === 'inhale' ? 0.35 : breathState === 'hold' ? 0.5 : 0.15,
                    }}
                    transition={{
                      duration: 4,
                      ease: 'easeInOut',
                    }}
                    className={`absolute inset-0 rounded-full blur-xl border-8 ${
                      breathState === 'hold' ? 'bg-amber-500/20' : 'bg-yoga-accent/20'
                    }`}
                  />

                  {/* Breathing Circle Container */}
                  <motion.div
                    animate={{
                      scale: breathState === 'inhale' ? 1.15 : breathState === 'hold' ? 1.15 : 0.7,
                    }}
                    transition={{
                      duration: 4,
                      ease: 'easeInOut',
                    }}
                    className={`relative w-32 h-32 sm:w-44 sm:h-44 rounded-full flex flex-col items-center justify-center transition-colors duration-1000 shadow-2xl ${
                      breathState === 'inhale'
                        ? 'bg-gradient-to-br from-emerald-600 to-[#1E3A2B] border border-emerald-400/30'
                        : breathState === 'hold'
                        ? 'bg-gradient-to-br from-[#d97706] to-[#78350f] border border-amber-400/30'
                        : 'bg-gradient-to-br from-yoga-primary to-[#14261C] border border-[#8FB996]/30'
                    }`}
                  >
                    {/* Inner status text */}
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 mb-0.5 sm:mb-1">
                      Cycle {cycleCount}
                    </span>
                    <motion.span
                      layout
                      className="text-lg sm:text-2xl font-serif font-bold text-white capitalize drop-shadow-md"
                    >
                      {breathState}
                    </motion.span>
                  </motion.div>
                </div>

                {/* Live Instruction Text */}
                <motion.div 
                  key={breathState}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 sm:mb-8"
                >
                  <p className={`text-base sm:text-xl font-medium tracking-wide ${labelInfo.color} transition-colors duration-500`}>
                    {labelInfo.text}
                  </p>
                </motion.div>

                {/* Control Action */}
                <button
                  onClick={handleStop}
                  className="flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Stop Exercise
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
