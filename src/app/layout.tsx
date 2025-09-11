import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAMO Athletics - CrossFit Gym",
  description: "KAMO Athletics is the collaborative effort of Andy Arson Newton and Nick Petersen, two of Kansas City's most revered CrossFit coaches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-['Segoe_UI',_sans-serif]">
        {children}
      </body>
    </html>
  );
}
