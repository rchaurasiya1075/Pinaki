"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag, PhoneCall } from "lucide-react";
import { useCart } from "@/lib/context";

export default function Navbar() {
  const { totalCount } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-3xl font-black tracking-widest text-amber-800">PINAKI</span>
          <span className="text-[10px] uppercase tracking-wider bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-bold">
            Homemade
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8 font-semibold text-slate-700">
          <Link href="/" className="hover:text-amber-700 transition">Home</Link>
          <Link href="/cart" className="hover:text-amber-700 transition">My Cart</Link>
          <Link href="/checkout" className="hover:text-amber-700 transition">Checkout</Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Link
            href="/cart"
            className="relative p-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-full transition-colors flex items-center justify-center shadow-md"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                {totalCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
