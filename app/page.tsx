import dynamic from 'next/dynamic';
import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import MinimumLoading from '@/components/minimum-loading';

const QuoteBanner = dynamic(() => import('@/components/quote-banner'));
const About = dynamic(() => import('@/components/about'));
const Services = dynamic(() => import('@/components/services'));
const WhyChoose = dynamic(() => import('@/components/why-choose').then(m => ({ default: m.WhyChoose })));
const YogaCategories = dynamic(() => import('@/components/yoga-categories'));
const Benefits = dynamic(() => import('@/components/benefits'));
const MindfulnessBreak = dynamic(() => import('@/components/mindfulness-break'));
const Gallery = dynamic(() => import('@/components/gallery'));
const Testimonials = dynamic(() => import('@/components/testimonials'));
const FAQ = dynamic(() => import('@/components/faq'));
const GoogleMap = dynamic(() => import('@/components/google-map').then(m => ({ default: m.GoogleMap })));
const ContactForm = dynamic(() => import('@/components/contact-form'));
const Footer = dynamic(() => import('@/components/footer'));
const WhatsAppFloat = dynamic(() => import('@/components/whatsapp-float'));
const BackToTop = dynamic(() => import('@/components/back-to-top'));

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'YogaStudio',
    'name': "AMIT'S YOGA CLASSES",
    'alternateName': ["Amit Sir's Yoga Classes", 'Amit Yoga Classes', 'Amit Sir Yoga Classes Jaipur'],
    'description': "Transform your mind, body & soul through certified yoga classes at AMIT'S YOGA CLASSES in Mahesh Nagar, Jaipur. Government certified yoga teacher offering center classes, home tuition, and online sessions. Located near Vivek School, Gopal Pura Mode.",
    'url': 'https://amit-yoga-classes.netlify.app',
    'logo': 'https://amit-yoga-classes.netlify.app/images/yoga-logo.webp',
    'image': [
      'https://amit-yoga-classes.netlify.app/images/yoga/headstand.webp',
      'https://amit-yoga-classes.netlify.app/images/yoga/meditation-park.webp'
    ],
    'telephone': '+919352600526',
    'priceRange': '₹₹',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'C-512, Mahesh Nagar, Near Vivek School, C-Block',
      'addressLocality': 'Jaipur',
      'addressRegion': 'Rajasthan',
      'postalCode': '302015',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 26.8773846,
      'longitude': 75.7790733
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      'opens': '05:30',
      'closes': '20:30'
    },
    'sameAs': [
      'https://www.instagram.com/amit.yoga.classes_jaipur/',
      'https://www.youtube.com/@AMITSYOGACLASSES/shorts'
    ]
  };

  return (
    <MinimumLoading>
      <main className="bg-yoga-bg">
        {/* Google Local Business Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        <Hero />
        <QuoteBanner />
        <About />
        <Services />
        <WhyChoose />
        <YogaCategories />
      <Benefits />
      <Gallery />
      <MindfulnessBreak />
        <Testimonials />
        <FAQ />
        <GoogleMap />
        <ContactForm />
        <Footer />
        <WhatsAppFloat />
        <BackToTop />
      </main>
    </MinimumLoading>
  );
}
