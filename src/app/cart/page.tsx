import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function CartPage() {
  return (
    <div>
      <Navbar cartCount={1} />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-4">
          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <h3 className="font-bold text-slate-800">Pure A2 Desi Cow Ghee</h3>
              <p className="text-sm text-slate-400">Qty: 1 (500ml)</p>
            </div>
            <span className="font-bold text-amber-800">₹750</span>
          </div>

          <div className="flex justify-between font-bold text-lg pt-2">
            <span>Total Amount</span>
            <span>₹750</span>
          </div>

          <Link
            href="/checkout"
            className="block w-full text-center bg-amber-600 text-white font-bold py-3 rounded-xl"
          >
            Proceed to Checkout
          </Link>
        </div>
      </main>
    </div>
  );
}
