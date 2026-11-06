import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christian Bohdan · Junior Penetration Tester",
  description:
    "Bewerbungsseite von Christian Bohdan — angehender Junior Penetration Tester: Praxislabs auf Hack The Box, CompTIA Security+ (November 2026), EC-Council SOC Essentials. — Application site of Christian Bohdan, aspiring Junior Penetration Tester.",
  keywords: [
    "Christian Bohdan",
    "Junior Penetration Tester",
    "Penetration Tester",
    "Pentester",
    "Offensive Security",
    "CompTIA Security+",
    "Hack The Box",
    "Cybersecurity",
    "Bewerbung",
  ],
  authors: [{ name: "Christian Bohdan" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Christian Bohdan · Junior Penetration Tester",
    description:
      "Praxislabs auf Hack The Box · CompTIA Security+ (Nov. 2026) · Hands-on offensive security.",
    type: "profile",
  },
};

// Applies the theme before first paint (prevents a light/dark flash).
// Priority: explicit choice ("cb-theme" in localStorage) > system preference
// ("prefers-color-scheme") > light (site default).
const themeInitScript = `(function(){var t=null;try{t=localStorage.getItem("cb-theme")}catch(e){}if(t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches){document.documentElement.classList.add("dark")}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
