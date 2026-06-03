'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Car } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

const googleMapsUrl = "https://www.google.com/maps/place/AMIT'S+YOGA+CLASSES/@26.8773894,75.7764984,17z/data=!3m1!4b1!4m6!3m5!1s0x396db5c827795157:0xc83b0265cad333e1!8m2!3d26.8773846!4d75.7790733!16s%2Fg%2F11wnf8wsw2";

export function GoogleMap() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-yoga-primary mb-4">
            Visit Our Center
          </h2>
          <div className="w-20 h-1 bg-yoga-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Experience yoga in the heart of Jaipur
          </p>
        </motion.div>

        {/* Premium Location Card */}
        <motion.div
          className="bg-gradient-to-br from-yoga-primary to-[#3A6249] rounded-2xl overflow-hidden shadow-2xl"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Top Section - Location Info */}
          <div className="p-8 md:p-10 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
                  AMIT&apos;S YOGA CLASSES
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  C-512, Mahesh Nagar, C-Block<br />
                  Near Vivek School, Gopal Pura Mode<br />
                  Jaipur, Rajasthan 302015
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="w-5 h-5 text-yoga-accent" />
                <div>
                  <p className="text-white/70 text-xs uppercase tracking-wider">Landmark</p>
                  <p className="text-white font-medium">Near Vivek School</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Car className="w-5 h-5 text-yoga-accent" />
                <div>
                  <p className="text-white/70 text-xs uppercase tracking-wider">Area</p>
                  <p className="text-white font-medium">Gopal Pura Mode</p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 bg-white text-[#4A7C59] rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4A7C59]"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </motion.a>
            </div>
          </div>

          {/* Bottom Decorative Pattern */}
          <div className="h-2 bg-gradient-to-r from-yoga-accent via-yoga-secondary to-yoga-accent"></div>
        </motion.div>
      </div>
    </section>
  );
}
