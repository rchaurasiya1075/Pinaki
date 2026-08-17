import Navbar from "@/components/Navbar";
import { PRODUCTS } from "@/lib/data";
import Link from "next/link";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = PRODUCTS.find((p) => p.id === params.id) || PRODUCTS[0];

  return (
    <div>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-2xl border" />
        <div className="space-y-4">
          <span className="text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-bold">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold text-slate-800">{product.name}</h1>
          <p className="text-slate-600">{product.description}</p>
          <div className="text-2xl font-bold text-amber-800">
            ₹{product.price} <span className="text-sm text-slate-400 font-normal">({product.weight})</span>
          </div>
          
          <Link
            href="/cart"
            className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-xl transition"
          >
            Add to Cart & Checkout
          </Link>
        </div>
      </main>
    </div>
  );
}
