import type { Metadata } from "next";

import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

export const metadata: Metadata = {
  title: "Batuhan Kurkut — Full-Stack Geliştirici",
  description:
    "Batuhan Kurkut — güvenli ve ölçeklenebilir web uygulamaları geliştiren Full-Stack Geliştirici. Skelvric, SkelVault ve SkelVault Desktop projeleri.",
};

const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem('skelvric-theme');
    var theme = (stored === 'light' || stored === 'dark') ? stored : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <div className="bg-grid" />
        <div className="dot-grid" />
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
