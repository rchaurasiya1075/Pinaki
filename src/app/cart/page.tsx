"use client";

import Navbar from "@/components/Navbar";
import { useCart } from "@/lib/context";
import Link from "next/link";
import { Plus, Minus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalAmount } = useCart();

  if (cart.length === 0) {
    return (
      <div>
        <Navbar />
        <main className="max-w-2xl mx-auto px-4 py-24 text-center space-y-4">
          <div className="w-20 h-20 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Your Cart is Empty</h2>
          <p className="text-slate-500 text-sm">Explore our homemade Ghee, Achar & Oils to add items.</p>
          <Link
            href="/"
            className="inline-block bg-amber-700 text-white font-bold px-6 py-3 rounded-xl shadow hover:bg-amber-800 transition"
          >
            Start Shopping
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-slate-800 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between gap-4"
              >
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                <div className="flex-1 space-y-1">
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base">{item.name}</h3>
                  <div className="text-xs text-slate-400">{item.weight}</div>
                  <div className="text-amber-800 font-bold">₹{item.price}</div>
                </div>

                <div className="flex items-center space-x-2 bg-slate-50 border p-1 rounded-lg">
                  <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-white rounded">
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-bold text-sm w-5 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-white rounded">
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button onClick={() => removeFromCart(item.id)} className="text-slate-400 hover:text-red-600 p-2">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-fit space-y-6">
            <h3 className="font-bold text-lg border-b pb-3 text-slate-800">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>₹{totalAmount}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Delivery Charge</span>
                <span className="text-green-600 font-semibold">FREE</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-slate-900 border-t pt-3">
                <span>Total Amount</span>
                <span className="text-amber-800">₹{totalAmount}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center space-x-2 shadow-md"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
