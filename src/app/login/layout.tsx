import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eletrons",
  description: "Os melhores produtos você encontra somente na Eletrons",
  icons: {
    icon: "/logo-cortadapng.png",
  },

};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* usamos h-screen para altura da viewport */}
        <div className="flex h-screen">
          <div className="flex-1 overflow-y-auto bg-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
