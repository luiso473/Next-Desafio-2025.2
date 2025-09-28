import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AdminSidebar from "@/src/components/AdminSidebar";


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
      <body className="m-0 p-0">
        {/* usamos h-screen para altura da viewport */}
        <div className="flex h-screen">
          {/* Sidebar fixa ocupando altura total */}
          <AdminSidebar />
          {/* Conteúdo scrollável */}
          <div className="flex-1 overflow-y-auto bg-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
