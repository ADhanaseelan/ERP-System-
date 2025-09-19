import React from "react";
import { Download } from "lucide-react"; // Or use any download icon you prefer

const receipts = [
  {
    label: "Tuition Fee",
    code: "RCP-001",
    date: "15/1/2024",
    amount: 45000,
  },
  {
    label: "Hostel Fee",
    code: "RCP-002",
    date: "1/2/2024",
    amount: 13000,
  },
];

const fees = () => (
  <section className="bg-white shadow rounded-xl p-6 mt-8 max-w-2xl mx-auto">
    <h3 className="font-semibold text-lg mb-1">Payment Receipts</h3>
    <p className="text-gray-500 text-sm mb-4">Download your payment receipts</p>
    <div className="flex flex-col gap-3">
      {receipts.map((r) => (
        <div
          key={r.code}
          className="flex justify-between items-center bg-gray-50 rounded-lg p-4 border border-gray-100"
        >
          <div>
            <div className="font-medium">{r.label}</div>
            <div className="text-xs text-gray-500">{r.code} &middot; {r.date}</div>
          </div>
          <div className="flex items-center gap-6">
            <div className="font-semibold text-gray-800">₹{r.amount.toLocaleString()}</div>
            <button className="flex items-center gap-1 px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-200 text-gray-700 transition">
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">Download</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default fees;
