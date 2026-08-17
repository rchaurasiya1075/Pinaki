"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { useCart } from "@/lib/context";
import { Send, CheckCircle } from "lucide-react";

export default function CheckoutPage() {
  const { cart, totalAmount, clearCart } = useCart();
  const [formData, setFormData] = useState({ name: "", phone: "", address: "", city: "", pincode: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate WhatsApp Order Text
    const itemsList = cart.map((i) => `• ${i.name} (${i.weight}) x ${i.quantity} = ₹${i.price * i.quantity}`).join("\n");
    const message = `*NEW ORDER - PINAKI FOODS*\n\n*Customer Details:*\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}, ${formData.city} - ${formData.pincode}\n\n*Items Ordered:*\n${itemsList}\n\n*Total Amount:* ₹${totalAmount}\n*Payment:* Cash on Delivery / UPI`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    clearCart();
  };

  return (
    <div>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-slate-800 mb-8">Delivery Details</h1>

        {submitted ? (
          <div className="bg-white p-8 rounded-2xl border text-center space-y-4 shadow-sm">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
            <h2 className="text-2xl font-bold text-slate-800">Order Sent via WhatsApp!</h2>
            <p className="text-slate-500 text-sm">
              We have received your order details on WhatsApp. Our team will verify and dispatch your fresh homemade products soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Full Name</label>
              <input
                required
                type="text"
                placeholder="Rahul Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-amber-500 text-sm outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Phone Number</label>
              <input
                required
                type="tel"
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-amber-500 text-sm outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Delivery Address</label>
              <textarea
                required
                placeholder="House No., Street Name, Landmark"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-amber-500 text-sm outline-none h-20"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">City</label>
                <input
                  required
                  type="text"
                  placeholder="New Delhi"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-amber-500 text-sm outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Pincode</label>
                <input
                  required
                  type="text"
                  placeholder="110001"
                  value={formData.pincode}
                  onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-amber-500 text-sm outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={cart.length === 0}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition flex items-center justify-center space-x-2 shadow-md mt-6 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
              <span>Confirm Order on WhatsApp (₹{totalAmount})</span>
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
