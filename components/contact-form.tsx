'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { HiPaperAirplane, HiPhone, HiChatBubbleBottomCenterText, HiMapPin, HiEnvelope } from 'react-icons/hi2';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Only allow digits for phone
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, phone: digitsOnly }));
      if (digitsOnly.length === 10) setErrors(prev => ({ ...prev, phone: '' }));
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors while typing
    if (name === 'name' && value.trim().length >= 2) {
      setErrors(prev => ({ ...prev, name: '' }));
    }
    if (name === 'message') {
      const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
      if (wordCount >= 5) setErrors(prev => ({ ...prev, message: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate name: at least 2 characters
    const nameError = formData.name.trim().length < 2 ? 'Please enter your full name' : '';

    // Validate phone: exactly 10 digits
    const phoneDigits = formData.phone.replace(/\D/g, '');
    const phoneError = phoneDigits.length !== 10 ? 'Phone number must be exactly 10 digits' : '';

    // Validate message: at least 5 words
    const wordCount = formData.message.trim().split(/\s+/).filter(Boolean).length;
    const messageError = wordCount < 5 ? 'Message must be at least 5 words' : '';

    if (nameError || phoneError || messageError) {
      setErrors({ name: nameError, phone: phoneError, message: messageError });
      return;
    }

    setIsSubmitting(true);
    setErrors({ name: '', phone: '', message: '' });

    const whatsappMessage = `Hello, I would like to enquire about your yoga classes.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Message:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919352600526?text=${encodedMessage}`, '_blank');

    toast.success('WhatsApp opened in a new tab!', {
      description: "We'll get back to you shortly.",
    });

    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-yoga-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-yoga-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to start your yoga journey? Reach out to us today!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <motion.a
            href="tel:+919352600526"
            className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4 mx-auto shadow-lg shadow-green-500/30"
              style={{ perspective: 600, transformStyle: 'preserve-3d' }}
              animate={{ rotateX: [0, 10, 0, -10, 0], rotateZ: [0, 3, 0, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <HiPhone className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="font-serif text-xl font-bold text-yoga-primary mb-2">
              Call Now
            </h3>
            <p className="text-gray-600">
              +91 9352600526
            </p>
          </motion.a>

          <motion.a
            href="https://wa.me/919352600526"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4 mx-auto shadow-lg shadow-green-500/30"
              style={{ perspective: 600, transformStyle: 'preserve-3d' }}
              animate={{ rotateX: [0, 10, 0, -10, 0], rotateZ: [0, 3, 0, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            >
              <HiChatBubbleBottomCenterText className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="font-serif text-xl font-bold text-yoga-primary mb-2">
              WhatsApp
            </h3>
            <p className="text-gray-600">
              Message us on WhatsApp
            </p>
          </motion.a>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-md text-center"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4 mx-auto shadow-lg shadow-green-500/30"
              style={{ perspective: 600, transformStyle: 'preserve-3d' }}
              animate={{ rotateX: [0, 10, 0, -10, 0], rotateZ: [0, 3, 0, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            >
              <HiMapPin className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="font-serif text-xl font-bold text-yoga-primary mb-2">
              Location
            </h3>
            <p className="text-gray-600 text-sm">
              AMIT&apos;S YOGA CLASSES<br />
              C-512, Mahesh Nagar, C-Block<br />
              Near Vivek School, Gopal Pura Mode<br />
              Jaipur, Rajasthan 302015
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a
                href="mailto:dabasamit740@gmail.com"
                className="inline-flex items-center gap-2 text-yoga-primary hover:underline text-sm font-medium"
              >
                <HiEnvelope className="w-4 h-4" />
                dabasamit740@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label htmlFor="contact-name" className="block text-sm font-medium text-yoga-primary mb-2">
                Name *
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.name ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-yoga-primary'}`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label htmlFor="contact-phone" className="block text-sm font-medium text-yoga-primary mb-2">
                Phone Number *
              </label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                maxLength={10}
                autoComplete="tel"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.phone ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-yoga-primary'}`}
                placeholder="10 digit number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="contact-message" className="block text-sm font-medium text-yoga-primary mb-2">
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none min-h-[120px] ${errors.message ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-yoga-primary'}`}
                placeholder="Tell us about your yoga goals (at least 5 words)..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 bg-green-700 text-white rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:bg-green-800 ${
                isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
              }`}
              whileHover={isSubmitting ? {} : { scale: 1.02 }}
              whileTap={isSubmitting ? {} : { scale: 0.98 }}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <motion.span
                  style={{ display: 'inline-block', perspective: 600, transformStyle: 'preserve-3d' }}
                  animate={{ rotateX: [0, 8, 0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <HiPaperAirplane className="w-5 h-5" />
                </motion.span>
              )}
              {isSubmitting ? 'Opening WhatsApp...' : 'Submit via WhatsApp'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
