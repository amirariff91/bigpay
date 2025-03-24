import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BigPay Growth Hacks | Innovative Strategies for Market Expansion",
  description: "Explore innovative growth strategies for BigPay, including Facebook Marketplace integration, Touch n Go reloads, Lazada/Shopee buyer matching, and more. Join our community to submit your own growth hack proposals.",
  keywords: "BigPay, growth hacks, fintech, digital payments, market expansion, user acquisition, transaction volume, revenue growth, Facebook Marketplace, Touch n Go, Lazada, Shopee, remittance, Telegram groups, bill scanning, salary split",
  authors: [{ name: "BigPay Team" }],
  creator: "BigPay",
  publisher: "BigPay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://bigpay.amrff.com/growth-hacks",
    siteName: "BigPay Growth Hacks",
    title: "BigPay Growth Hacks | Innovative Strategies for Market Expansion",
    description: "Explore innovative growth strategies for BigPay, including Facebook Marketplace integration, Touch n Go reloads, Lazada/Shopee buyer matching, and more.",
    images: [
      {
        url: "/logo_bigpay.avif",
        width: 800,
        height: 600,
        alt: "BigPay Growth Hacks Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BigPay Growth Hacks | Innovative Strategies for Market Expansion",
    description: "Explore innovative growth strategies for BigPay, including Facebook Marketplace integration, Touch n Go reloads, Lazada/Shopee buyer matching, and more.",
    images: ["/logo_bigpay.avif"],
    creator: "@bigpay",
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
  verification: {
    google: "your-google-site-verification",
  },
  alternates: {
    canonical: "https://bigpay.amrff.com/growth-hacks",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
