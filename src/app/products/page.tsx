"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { PRODUCTS } from "@/lib/data";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = PRODUCTS.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Our Catalog</h1>
        
        {/* Category Filters */}
        <div className="flex gap-2 mb-8">
          {["All", "Ghee", "Achar", "Oil"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl font-medium ${
                selectedCategory === cat ? "bg-amber-700 text-white" : "bg-white text-slate-700 border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-xl border shadow-sm">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-3" />
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-amber-700 font-bold mt-1">₹{product.price} / {product.weight}</p>
              <Link
                href={`/products/${product.id}`}
                className="mt-3 block text-center bg-slate-900 text-white py-2 rounded-lg font-semibold"
              >
                Details & Buy
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
