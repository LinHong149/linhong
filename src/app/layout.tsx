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
  title: "Lin Hong",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased min-h-screen bg-[#0A1110]`}>
        <meta name="theme-color" content="#0A1110" />
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}