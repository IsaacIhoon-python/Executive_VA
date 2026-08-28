import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

export const metadata: Metadata = {
  title: {
    default: "Ihoon Isaac | Executive Virtual Assistant, Digital Operations & AI Automation",
    template: "%s | Ihoon Isaac",
  },
  description: "Executive Virtual Assistant providing executive support, digital operations, CRM support, AI automation and technical assistance for founders, CEOs and growing businesses.",
  keywords: [
    "Executive Virtual Assistant",
    "Executive Assistant",
    "Virtual Executive Assistant",
    "Digital Operations",
    "AI Automation",
    "CRM Management",
    "Workflow Automation",
    "Executive Support",
    "Remote Executive Assistant",
    "Ihoon Isaac",
  ],
  authors: [{ name: "Ihoon Isaac" }],
  creator: "Ihoon Isaac",
  publisher: "Ihoon Isaac",
  category: "business",
  applicationName: "Ihoon Isaac Executive Portfolio",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } } : {}),
  openGraph: {
    title: "Ihoon Isaac | Executive Virtual Assistant",
    description: "Executive support backed by digital operations, AI automation and technical capability.",
    type: "website",
    locale: "en_US",
    siteName: "Ihoon Isaac",
    images: [{ url: "/og-cover.webp", width: 1200, height: 630, alt: "Ihoon Isaac — Executive Virtual Assistant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ihoon Isaac | Executive Virtual Assistant",
    description: "Executive support backed by digital operations, AI automation and technical capability.",
    images: ["/og-cover.webp"],
  },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#07100f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ihoon Isaac",
    jobTitle: "Executive Virtual Assistant",
    description: "Executive Virtual Assistant specializing in digital operations, AI automation and technical support.",
    url: siteUrl || undefined,
    email: "mailto:Isaacihoon@gmail.com",
    telephone: "+2348069436267",
    sameAs: [
      "https://www.linkedin.com/in/ihoon-a-isaac",
      "https://github.com/IsaacIhoon-python",
      "https://www.instagram.com/isaac_ihoon",
      "https://youtube.com/@ihoonisaac",
      "https://replit.com/refer/demightisaac",
      "https://www.upwork.com/freelancers/~01c38988a8b4cf9de1",
      "https://danovatesolutions.org/isaac-aondohemba-ihoon/",
    ],
    knowsAbout: ["Executive support", "Digital operations", "AI automation", "CRM", "Workflow automation", "Web development"],
  };
  return <html lang="en"><body className={`${dmSans.variable} ${manrope.variable}`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></body></html>;
}
