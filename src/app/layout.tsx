// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry"; // create this next

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: 'Lin Hong',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
  },
  other: {
    'mask-icon': '/safari-pinned-tab.svg',
    'theme-color': '#0A1110',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0A1110" />
        <meta name="theme-color" content="#0A1110" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased min-h-screen bg-[#0A1110]`}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}