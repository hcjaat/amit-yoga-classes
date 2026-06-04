'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiHome, HiArrowLeft } from 'react-icons/hi2'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-yoga-bg flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-8xl md:text-9xl font-serif font-bold text-yoga-primary/20 mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          404
        </motion.div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-yoga-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Looks like you&apos;ve wandered off the mat. This page doesn&apos;t exist — but your yoga journey is still waiting.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yoga-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-lg"
          >
            <HiHome className="w-5 h-5" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-yoga-primary rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg border border-yoga-primary/20"
          >
            <HiArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  )
}
