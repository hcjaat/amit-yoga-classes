'use client';

import { useState, useEffect } from 'react';

export default function MinimumLoading({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 2500);
    return () => clearTimeout(t);
  }, []);

  if (!ready) {
    return (
      <div className="fixed inset-0 z-[100] bg-yoga-bg flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-28 h-28 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-yoga-primary/10 animate-glow" />
            <div className="absolute inset-2 rounded-full border-2 border-yoga-primary/30 animate-breathe" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-yoga-primary to-[#3A6249] animate-breathe flex items-center justify-center shadow-lg overflow-hidden p-3">
              <img
                src="/images/yoga-logo.webp"
                alt="Amit's Yoga Classes"
                className="w-full h-full object-contain brightness-0 invert"
              />
            </div>
          </div>

          <div className="h-8 flex items-center justify-center relative w-40">
            <span className="absolute text-yoga-primary font-medium text-lg animate-fadeInOut">
              Breathe In...
            </span>
            <span
              className="absolute text-yoga-primary font-medium text-lg animate-fadeInOut"
              style={{ animationDelay: '2s', opacity: 0 }}
            >
              Breathe Out...
            </span>
          </div>

          <p className="text-gray-500 text-sm">Welcome to Amit&apos;s Yoga Classes</p>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes breathe {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.12); opacity: 1; }
          }
          @keyframes glow {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.4); opacity: 0.7; }
          }
          @keyframes fadeInOut {
            0%, 40% { opacity: 1; }
            50%, 90% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-breathe { animation: breathe 4s ease-in-out infinite; }
          .animate-glow { animation: glow 4s ease-in-out infinite; }
          .animate-fadeInOut { animation: fadeInOut 4s ease-in-out infinite; }
        `}} />
      </div>
    );
  }

  return <>{children}</>;
}
