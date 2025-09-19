// components/student/StudentDashboard.tsx

import React from "react";
import { motion } from "framer-motion";

type FeeStatus = "Paid" | "Partial" | "Pending";

interface FeeItem {
  label: string;
  paid: number;
  total: number;
  status: FeeStatus;
  color: string;
}

const feeBreakdown: FeeItem[] = [
  {
    label: "Tuition Fee",
    paid: 45000,
    total: 45000,
    status: "Paid",
    color: "bg-green-100 text-green-600",
  },
  {
    label: "Hostel Fee",
    paid: 13000,
    total: 25000,
    status: "Partial",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    label: "Bus Fee",
    paid: 0,
    total: 8000,
    status: "Pending",
    color: "bg-red-100 text-red-600",
  },
  {
    label: "Miscellaneous",
    paid: 0,
    total: 3000,
    status: "Pending",
    color: "bg-red-100 text-red-600",
  },
];

const totalFees = 83000;
const paidAmount = 58000;
const pendingAmount = totalFees - paidAmount;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: "spring" },
  }),
};

const StudentDashboard: React.FC = () => (
  <motion.div
    className="bg-gray-50 min-h-screen px-6 py-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
  >
    {/* Student Info Row */}
    <motion.div
      className="flex justify-between items-center mb-8"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <div>
        <h2 className="text-2xl font-bold">Rahul Sharma</h2>
        <p className="text-gray-500">CSE001 · 2nd Year</p>
      </div>
      <motion.button
        className="bg-gray-200 px-5 py-2 rounded-lg shadow hover:bg-red-200 transition"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.08 }}
      >
        Logout
      </motion.button>
    </motion.div>

    {/* Navigation Tabs */}
    <motion.div className="flex gap-4 mb-8"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, delay: 0.4 }}
    >
      {["Dashboard", "Fees", "Hostel", "Academic", "Profile"].map((tab, i) => (
        <motion.button
          key={tab}
          className="flex items-center px-4 py-1 text-gray-700 hover:text-blue-600 rounded-lg border-b-2 border-transparent hover:border-blue-600 transition font-medium"
          whileHover={{ scale: 1.1 }}
        >
          {tab}
        </motion.button>
      ))}
    </motion.div>

    {/* Summary Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      {[
        { label: "Total Fees", value: `₹${totalFees.toLocaleString()}` },
        { label: "Paid Amount", value: `₹${paidAmount.toLocaleString()}`, valueClass: "text-green-600" },
        { label: "Pending Amount", value: `₹${pendingAmount.toLocaleString()}`, valueClass: "text-red-600" },
      ].map((item, i) => (
        <motion.div
          key={item.label}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg flex flex-col items-center cursor-pointer"
          variants={fadeInUp}
          custom={i}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.04, y: -4 }}
        >
          <p className="text-gray-500">{item.label}</p>
          <h2 className={`text-2xl font-bold mt-2 ${item.valueClass || ""}`}>
            {item.value}
          </h2>
        </motion.div>
      ))}
    </div>

    {/* Payment Progress */}
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <p className="mb-1 font-medium">Payment Progress</p>
      <div className="w-full h-2 bg-gray-200 rounded-lg overflow-hidden">
        <motion.div
          className="h-2 bg-blue-500 rounded-lg"
          style={{ width: `${Math.round((paidAmount / totalFees) * 100)}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${Math.round((paidAmount / totalFees) * 100)}%` }}
          transition={{ duration: 1.2, delay: 1.0, type: "spring" }}
        />
      </div>
      <div className="text-right text-sm mt-1">{Math.round((paidAmount / totalFees) * 100)}%</div>
    </motion.div>

    {/* Fee Breakdown Section */}
    <motion.section
      className="bg-white p-6 rounded-xl shadow max-w-2xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <h3 className="font-semibold mb-3 text-lg">Fee Breakdown</h3>
      <p className="text-gray-500 mb-4">Detailed breakdown of all fee categories</p>
      <ul>
        {feeBreakdown.map((item, i) => (
          <motion.li
            key={item.label}
            className="flex justify-between items-center py-3 border-b last:border-b-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 + 1.2 }}
            whileHover={{ scale: 1.01, backgroundColor: "#f4f7ff" }}
          >
            <div>
              <p className="font-medium">{item.label}</p>
              <p className="text-sm text-gray-500">
                Paid: ₹{item.paid.toLocaleString()} / ₹{item.total.toLocaleString()}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 text-xs rounded-lg ${item.color}`}>{item.status}</span>
              {item.status !== "Paid" &&
                <motion.button
                  className="ml-2 px-4 py-1 text-white bg-blue-500 rounded-lg"
                  whileHover={{ scale: 1.08, backgroundColor: "#2563eb" }}
                >
                  Pay ₹{(item.total - item.paid).toLocaleString()}
                </motion.button>
              }
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  </motion.div>
);

export default StudentDashboard;
