import Link from "next/link";
import Navbar from "@/components/Navbar";
import { PRODUCTS } from "@/lib/data";
import { ArrowRight, Star } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-amber-200 text-sm font-semibold tracking-wider uppercase">
            100% Pure & Purely Natural
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold">
            Authentic Homemade Ghee, Achar & Oils
          </h1>
          <p className="text-amber-100 text-lg">
            Traditional recipes prepared in hygienic home kitchens with zero preservatives.
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-amber-800 font-bold px-6 py-3 rounded-xl shadow hover:bg-amber-100 transition"
          >
            Explore All Products
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-5 space-y-2">
                <div className="flex items-center space-x-1 text-amber-500 text-sm">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <span className="font-bold">{product.rating}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">{product.name}</h3>
                <p className="text-slate-500 text-sm">{product.description}</p>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-xl font-bold text-amber-800">₹{product.price}</span>
                  <Link
                    href={`/products/${product.id}`}
                    className="bg-amber-700 text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center space-x-1"
                  >
                    <span>View Product</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
