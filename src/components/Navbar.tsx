"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function Navbar({ cartCount = 0 }: { cartCount?: number }) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-amber-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-3xl font-extrabold tracking-widest text-amber-700">PINAKI</span>
          <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-semibold">
            Homemade
          </span>
        </Link>

        <nav className="hidden md:flex space-x-6 font-medium text-slate-700">
          <Link href="/" className="hover:text-amber-700">Home</Link>
          <Link href="/products" className="hover:text-amber-700">All Products</Link>
        </nav>

        <Link
          href="/cart"
          className="relative p-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors flex items-center justify-center"
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
