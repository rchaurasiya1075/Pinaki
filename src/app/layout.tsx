import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PINAKI - Pure Homemade Ghee, Achar & Oils",
  description: "Authentic homemade products made with pure natural ingredients.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-amber-50/40 text-slate-800 flex flex-col justify-between">
        {children}
        <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t">
          <p>&copy; 2026 PINAKI Homemade Products. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
