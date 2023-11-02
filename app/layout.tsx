import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Euger Bonete",
  description: "Euger Bonete's Personal Portfolio",
  keywords: ["Web Developer", "Personal Website", "Portfolio Website"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "antialiased min-h-screen max-w-4xl mx-auto p-5",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme-2"
        >
          <Navbar />
          <main className="my-10 md:my-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
