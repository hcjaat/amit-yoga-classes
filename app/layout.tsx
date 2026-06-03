import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const _geistSans = Geist({ subsets: ["latin"], variable: '--font-sans' });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-mono' });
const _playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair', display: 'swap' });

export const metadata: Metadata = {
  title: "AMIT'S YOGA CLASSES Jaipur | Amit Sir Yoga Classes | Home & Online Yoga Training",

  description:
    "AMIT'S YOGA CLASSES in Mahesh Nagar, Jaipur — Government Certified Yoga Teacher. Home Yoga Classes, Online Yoga Sessions, Meditation, Pranayama & Wellness Training near Vivek School, Gopal Pura Mode. Call 9352600526.",

  keywords: [
    "AMIT'S YOGA CLASSES",
    'Amit Sir Yoga Classes Jaipur',
    'Amit Yoga Classes',
    'Yoga Classes Jaipur',
    'Home Yoga Classes Jaipur',
    'Online Yoga Classes',
    'Meditation Classes Jaipur',
    'Pranayama Classes',
    'Yoga Trainer Jaipur',
    'Government Certified Yoga Teacher',
    'Yoga in Mahesh Nagar Jaipur',
    'Yoga near Vivek School Jaipur',
    'Gopal Pura Mode Yoga Classes',
    'Best Yoga Classes Jaipur',
    'Weight Loss Yoga Jaipur',
  ],
  openGraph: {
    title: "AMIT'S YOGA CLASSES Jaipur — Certified Yoga Teacher",
    description:
      "AMIT'S YOGA CLASSES in Mahesh Nagar, Jaipur. Government Certified Yoga Teacher offering Home Tuition, Online Classes, Meditation & Pranayama near Vivek School, Gopal Pura Mode. Call 9352600526.",
    url: 'https://amit-yoga-classes.netlify.app',
    siteName: "AMIT'S YOGA CLASSES",
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://amit-yoga-classes.netlify.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" className={`${_geistSans.variable} ${_geistMono.variable} ${_playfairDisplay.variable} bg-yoga-bg`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preload" href="/images/yoga/yoga-pose2.webp" as="image" fetchPriority="high" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J4WV5E0B3B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J4WV5E0B3B');
          `}
        </Script>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "AMIT'S YOGA CLASSES",
              alternateName: "Amit Sir Yoga Classes",
              description:
                "Government Certified Yoga Teacher offering Home Yoga Classes, Online Yoga Sessions, Meditation and Pranayama Training in Jaipur. Located in Mahesh Nagar near Vivek School, Gopal Pura Mode.",
              telephone: "+91 9352600526",
              url: "https://amit-yoga-classes.netlify.app",
              image: "https://amit-yoga-classes.netlify.app/icon.svg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "C-512, Mahesh Nagar, Near Vivek School, C-Block",
                addressLocality: "Jaipur",
                addressRegion: "Rajasthan",
                postalCode: "302015",
                addressCountry: "IN",
              },
              areaServed: "Jaipur",
              sameAs: [
                "https://maps.app.goo.gl/SVG5CjoYqEeVPctd9"
              ],
              priceRange: "₹₹",
              serviceType: [
                "Home Yoga Classes",
                "Online Yoga Classes",
                "Meditation Training",
                "Pranayama Classes",
                "Yoga Training",
                "Weight Loss Program",
                "Stress Management",
                "Senior Yoga",
                "Flexibility Training",
              ],
            }),
          }}
        />
        {children}

        <Toaster position="bottom-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
