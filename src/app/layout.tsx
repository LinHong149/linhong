// app/layout.tsx
import type { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry"; // create this next

const varelaRound = Varela_Round({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-varela-round",
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
      <body className={`${varelaRound.variable} font-sans antialiased min-h-screen`}>
        
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}