"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { PRODUCTS } from "@/lib/data";
import { useCart } from "@/lib/context";
import { Star, ShieldCheck, Truck, Sparkles, Check } from "lucide-react";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  const filtered = PRODUCTS.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  const handleAdd = (product: any) => {
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <div>
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-amber-800 via-amber-700 to-amber-900 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center space-x-2 bg-amber-600/50 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-amber-400/30">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>100% Chemical & Preservative Free</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            Authentic Taste Of Pure <br />
            <span className="text-amber-300">Homemade Goodness</span>
          </h1>
          <p className="text-amber-100 text-lg sm:text-xl max-w-2xl mx-auto font-light">
            Crafted in hygienic home kitchens using traditional family recipes passed down generations.
          </p>
        </div>
      </section>

      {/* Guarantees */}
      <section className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
          <div className="flex items-center space-x-4 p-2">
            <ShieldCheck className="w-10 h-10 text-amber-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-slate-800">100% Pure Ingredients</h4>
              <p className="text-xs text-slate-500">No artificial colors or preservatives</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-2 border-t md:border-t-0 md:border-l border-slate-100">
            <Sparkles className="w-10 h-10 text-amber-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-slate-800">Traditional Bilona & Wood Press</h4>
              <p className="text-xs text-slate-500">Authentic slow processing for full nutrition</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-2 border-t md:border-t-0 md:border-l border-slate-100">
            <Truck className="w-10 h-10 text-amber-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-slate-800">Fast Express Delivery</h4>
              <p className="text-xs text-slate-500">Safely sealed glass jar packaging</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-800">Explore Our Products</h2>
            <p className="text-slate-500 text-sm">Freshly prepared batches ready to ship</p>
          </div>

          <div className="flex gap-2 bg-amber-100/60 p-1.5 rounded-xl">
            {["All", "Ghee", "Achar", "Oil"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition ${
                  selectedCategory === cat
                    ? "bg-amber-700 text-white shadow-sm"
                    : "text-slate-700 hover:text-amber-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-amber-700 text-white text-xs px-3 py-1 rounded-full font-bold shadow">
                      {product.tag}
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-slate-900 text-xs px-3 py-1 rounded-lg font-extrabold shadow-sm">
                    {product.weight}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-1 text-amber-500 text-sm">
                    <Star className="w-4 h-4 fill-amber-500" />
                    <span className="font-bold text-slate-800">{product.rating}</span>
                    <span className="text-slate-400 text-xs">({product.reviews} reviews)</span>
                  </div>
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-xl font-bold text-slate-800 hover:text-amber-700 transition">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-slate-500 text-sm line-clamp-2">{product.description}</p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-50 mt-4">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Price</span>
                  <span className="text-2xl font-black text-amber-800">₹{product.price}</span>
                </div>
                <button
                  onClick={() => handleAdd(product)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition flex items-center space-x-2 ${
                    addedId === product.id
                      ? "bg-green-600 text-white"
                      : "bg-slate-900 hover:bg-amber-700 text-white"
                  }`}
                >
                  {addedId === product.id ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added!</span>
                    </>
                  ) : (
                    <span>Add to Cart</span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
