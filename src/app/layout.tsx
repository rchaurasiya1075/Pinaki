import type { Metadata } from "next";
import { CartProvider } from "@/lib/context";
import "./globals.css";

export const metadata: Metadata = {
  title: "PINAKI - Pure Homemade Ghee, Achar & Cold-Pressed Oils",
  description: "Buy 100% pure homemade food products made with traditional recipes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-amber-50/30 text-slate-800 flex flex-col justify-between antialiased">
        <CartProvider>
          {children}
          <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800 mt-20">
            <div className="max-w-7xl mx-auto px-4 text-center space-y-3">
              <div className="text-2xl font-bold text-amber-500 tracking-wider">PINAKI</div>
              <p className="text-sm">Pure Homemade Food Products | Delivered Fresh To Your Doorstep</p>
              <p className="text-xs text-slate-600">&copy; 2026 PINAKI Foods. All rights reserved.</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
