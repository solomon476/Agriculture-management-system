import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata = {
  title: "AgriBloom | Empowering Kenyan Farmers",
  description: "Comprehensive farm management system tailored for Kenyan farmers. Track crops, livestock, expenses, and profits offline and online.",
  manifest: "/manifest.json",
  themeColor: "#16A34A",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "AgriBloom",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-base">
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
