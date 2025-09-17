import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Laboratório Uehara - Próteses Dentárias Especializadas",
  description: "Laboratório especializado em próteses dentárias com mais de 40 anos de experiência. Qualidade, pontualidade e sorrisos perfeitos.",
  keywords: "próteses dentárias, laboratório odontológico, Passo Fundo, RS",
  authors: [{ name: "Laboratório Uehara" }],
  openGraph: {
    title: "Laboratório Uehara - Próteses Dentárias Especializadas",
    description: "Especialistas em próteses dentárias com compromisso de qualidade e pontualidade.",
    url: "https://laboratoriouehara.com.br",
    siteName: "Laboratório Uehara",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laboratório Uehara - Próteses Dentárias Especializadas",
    description: "Especialistas em próteses dentárias com compromisso de qualidade e pontualidade.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code', // Substitua pelo código real
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Laboratório Uehara",
  "description": "Laboratório especializado em próteses dentárias com mais de 40 anos de experiência",
  "url": "https://laboratoriouehara.com.br",
  "telephone": "+55-54-3045-7786",
  "email": "milton@laboratoriouehara.com.br",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Sete de Agosto 51A",
    "addressLocality": "Passo Fundo",
    "addressRegion": "RS",
    "postalCode": "99025-030",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-28.2628", // Coordenadas aproximadas de Passo Fundo
    "longitude": "-52.4094"
  },
  "openingHours": "Mo-Sa 07:30-18:00",
  "priceRange": "$$",
  "sameAs": [
    "https://www.facebook.com/ueharalab",
    "https://www.instagram.com/ueharalab"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={false}
          storageKey="uehara-theme"
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
