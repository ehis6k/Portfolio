import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/Footer";
import Snow from "@/components/ui/snow";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap", // Optimize font loading - show fallback until font loads
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap", // Optimize font loading - show fallback until font loads
});

export const metadata: Metadata = {
  title: "Gabriel Uwaila – Full‑stack / Backend Engineer",
  description:
    "Backend-focused portfolio and engineering journal. Full-stack developer specializing in Spring Boot, .NET 9, and React. Featured case study: Asset Management System built with .NET 9 and Blazor Server.",
  keywords: [
    "Gabriel Uwaila",
    "Full-stack Developer",
    "Backend Engineer",
    "Spring Boot",
    ".NET 9",
    "React",
    "Blazor Server",
    "Software Engineer",
    "Portfolio",
    "Belgium",
  ],
  authors: [{ name: "Gabriel Uwaila" }],
  creator: "Gabriel Uwaila",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gabrieluwaila.com",
    title: "Gabriel Uwaila – Full‑stack / Backend Engineer",
    description:
      "Backend-focused portfolio and engineering journal. Full-stack developer specializing in Spring Boot, .NET 9, and React.",
    siteName: "Gabriel Uwaila Portfolio",
    images: [
      {
        url: "/assets/img/profile/profile_pic.jpeg",
        width: 1200,
        height: 630,
        alt: "Gabriel Uwaila - Full-stack / Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Uwaila – Full‑stack / Backend Engineer",
    description:
      "Backend-focused portfolio and engineering journal. Full-stack developer specializing in Spring Boot, .NET 9, and React.",
    images: ["/assets/img/profile/profile_pic.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/img/Logo_Gabriel.png",
    shortcut: "/assets/img/Logo_Gabriel.png",
    apple: "/assets/img/Logo_Gabriel.png",
  },
  metadataBase: new URL("https://gabrieluwaila.com"),
  alternates: {
    canonical: "/",
  },
};

// JSON-LD structured data for Person
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: "https://gabrieluwaila.com",
  sameAs: [
    profile.links.github,
    profile.links.linkedin,
  ],
  image: `https://gabrieluwaila.com${profile.profileImage}`,
  description: profile.summary,
  address: {
    "@type": "PostalAddress",
    addressCountry: "BE",
  },
};

// JSON-LD structured data for featured CreativeWork (Asset Management System)
const featuredProject = projects.find((p) => p.featured);
const creativeWorkSchema = featuredProject
  ? {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: featuredProject.name,
      description: featuredProject.summary,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      creator: {
        "@type": "Person",
        name: profile.name,
      },
      codeRepository: featuredProject.links.github || undefined,
      url: featuredProject.links.demo || undefined,
    }
  : null;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD structured data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        {/* JSON-LD structured data for featured CreativeWork */}
        {creativeWorkSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(creativeWorkSchema),
            }}
          />
        )}
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen font-sans antialiased`}
        style={{
          backgroundColor: 'var(--bg)',
          color: 'var(--fg)',
        }}
      >
        <ThemeProvider>
          <Snow />
          {/* Skip to content link for accessibility */}
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal focus:text-white focus:rounded-md focus:font-medium focus:ring-2 focus:ring-offset-2 focus:ring-teal"
          >
            Skip to content
          </a>

          <Navbar />
          <main id="main" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
