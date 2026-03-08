import type { Metadata } from "next";
import { Providers } from "./providers";
import { SiteNavbar } from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaquib — Full-Stack Developer & Freelancer",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-black antialiased overflow-x-hidden">
        <Providers>
          <SiteNavbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
