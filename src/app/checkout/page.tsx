"use client";

import Navbar from "@/components/Navbar";
import React, { useState } from "react";

export default function CheckoutPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <Navbar />
      <main className="max-w-xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-6">Delivery Details</h1>
        {submitted ? (
          <div className="bg-green-100 text-green-800 p-6 rounded-2xl text-center">
            <h2 className="text-xl font-bold">Order Placed Successfully!</h2>
            <p className="text-sm mt-2">Thank you for ordering from PINAKI.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl border space-y-4">
            <input required type="text" placeholder="Full Name" className="w-full p-3 border rounded-xl" />
            <input required type="tel" placeholder="Mobile Number" className="w-full p-3 border rounded-xl" />
            <textarea required placeholder="Delivery Address" className="w-full p-3 border rounded-xl h-24" />
            <button type="submit" className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl">
              Place Order (Cash on Delivery / UPI)
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
