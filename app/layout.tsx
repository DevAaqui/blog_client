import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { SiteNavbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const SITE_URL = "https://buildwithaaquib.in";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aaquib — Full-Stack Developer & Freelancer",
    template: "%s | Aaquib",
  },
  description:
    "Expert full-stack developer specializing in building scalable web applications, APIs, and digital products. Available for freelance projects.",
  keywords: [
    "freelance developer",
    "full-stack developer",
    "web developer",
    "react",
    "node.js",
    "next.js",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Aaquib — Build With Aaquib",
    title: "Aaquib — Full-Stack Developer & Freelancer",
    description:
      "Expert full-stack developer specializing in building scalable web applications, APIs, and digital products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaquib — Full-Stack Developer & Freelancer",
    description:
      "Expert full-stack developer specializing in building scalable web applications, APIs, and digital products.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.className}`} style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <body className="min-h-screen bg-black antialiased overflow-x-hidden">
        <Providers>
          <SiteNavbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
