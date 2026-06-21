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

import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-base">
        <ServiceWorkerRegister />
        
        <div className="desktop-layout">
          <Sidebar />
          
          <div className="desktop-main flex flex-col pb-16 lg:pb-0">
            <div className="hidden-desktop">
              <Header />
            </div>
            
            <main className="flex-grow">
              {children}
            </main>
            
            <div className="hidden-desktop">
              <Navigation />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
