import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";
import { motion } from "framer-motion";
import { Users, CreditCard, Building2, GraduationCap } from "lucide-react";

// Department distribution data
const departmentData = [
  { name: "Mechanical", value: 20, color: "#ef4444" },
  { name: "Electrical", value: 17, color: "#f59e0b" },
  { name: "Civil", value: 14, color: "#10b981" },
  { name: "Electronics", value: 13, color: "#8b5cf6" },
  { name: "Information Tech", value: 11, color: "#f97316" },
  { name: "Computer Science", value: 25, color: "#3b82f6" },
];

// Hostel occupancy data
const hostelBlocks = [
  { name: "Block A", used: 85, total: 100 },
  { name: "Block B", used: 92, total: 120 },
  { name: "Block C", used: 67, total: 90 },
  { name: "Block D", used: 45, total: 80 },
];

// Admission trends
const admissionData = [
  { month: "Jan", actual: 120, target: 100 },
  { month: "Feb", actual: 90, target: 95 },
  { month: "Mar", actual: 75, target: 90 },
  { month: "Apr", actual: 60, target: 80 },
  { month: "May", actual: 40, target: 70 },
  { month: "Jun", actual: 20, target: 60 },
];

// Fee collection trends
const feeData = [
  { month: "Jan", revenue: 3.0 },
  { month: "Feb", revenue: 2.3 },
  { month: "Mar", revenue: 1.8 },
  { month: "Apr", revenue: 1.2 },
  { month: "May", revenue: 0.8 },
  { month: "Jun", revenue: 0.4 },
];

// Reusable card with animation
const AnimatedCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.03 }}
    className="p-4 bg-white shadow-lg rounded-2xl border border-gray-100"
  >
    {children}
  </motion.div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Header */}
      <motion.div
        className="flex justify-between items-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 tracking-wide">
          College ERP System
        </h1>
        <div className="flex space-x-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg shadow-sm font-medium">
            Administrator
          </span>
          <button className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition">
            Logout
          </button>
        </div>
      </motion.div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <AnimatedCard>
          <div className="flex items-center space-x-3">
            <Users className="text-blue-500 w-8 h-8" />
            <div>
              <p className="text-sm text-gray-500">Total Students</p>
              <h2 className="text-2xl font-semibold">1,400</h2>
              <p className="text-green-600 text-xs">+8.2% from last year</p>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex items-center space-x-3">
            <CreditCard className="text-green-500 w-8 h-8" />
            <div>
              <p className="text-sm text-gray-500">Fee Collection</p>
              <h2 className="text-2xl font-semibold">₹8.2M</h2>
              <p className="text-green-600 text-xs">85% collection rate</p>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex items-center space-x-3">
            <Building2 className="text-purple-500 w-8 h-8" />
            <div>
              <p className="text-sm text-gray-500">Hostel Occupancy</p>
              <h2 className="text-2xl font-semibold">74%</h2>
              <p className="text-gray-600 text-xs">289/390 rooms</p>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard>
          <div className="flex items-center space-x-3">
            <GraduationCap className="text-orange-500 w-8 h-8" />
            <div>
              <p className="text-sm text-gray-500">Departments</p>
              <h2 className="text-2xl font-semibold">6</h2>
              <p className="text-gray-600 text-xs">Active programs</p>
            </div>
          </div>
        </AnimatedCard>
      </div>

      {/* Charts & Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Department Distribution */}
        <AnimatedCard>
          <h3 className="font-semibold mb-2">Department Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={departmentData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {departmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </AnimatedCard>

        {/* Hostel Occupancy */}
        <AnimatedCard>
          <h3 className="font-semibold mb-2">Hostel Occupancy</h3>
          <ul className="space-y-3">
            {hostelBlocks.map((block) => (
              <li key={block.name}>
                <p className="text-sm font-medium">{block.name}</p>
                <div className="w-full bg-gray-200 h-3 rounded-lg overflow-hidden">
                  <motion.div
                    className="h-3 bg-blue-500 rounded-lg"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${(block.used / block.total) * 100}%`,
                    }}
                    transition={{ duration: 1 }}
                  ></motion.div>
                </div>
                <p className="text-xs text-gray-500">
                  {block.used}/{block.total} rooms
                </p>
              </li>
            ))}
          </ul>
        </AnimatedCard>

        {/* Recent Activities */}
        <AnimatedCard>
          <h3 className="font-semibold mb-2">Recent Activities</h3>
          <ul className="space-y-3 text-sm">
            <motion.li
              className="flex justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span>New admission: Rahul Sharma (CSE)</span>
              <span className="text-green-600">✔ success</span>
            </motion.li>
            <motion.li
              className="flex justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span>Fee payment received: ₹83,000</span>
              <span className="text-green-600">✔ success</span>
            </motion.li>
            <motion.li
              className="flex justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span>Hostel room allocated</span>
              <span className="text-blue-600">ℹ info</span>
            </motion.li>
            <motion.li
              className="flex justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span>Pending fee payment reminder</span>
              <span className="text-yellow-600">⚠ warning</span>
            </motion.li>
            <motion.li
              className="flex justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span>Mid-semester exam results uploaded</span>
              <span className="text-green-600">✔ success</span>
            </motion.li>
          </ul>
        </AnimatedCard>
      </div>

      {/* Bottom Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Admission Trends */}
        <AnimatedCard>
          <h3 className="font-semibold mb-2">Admission Trends</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={admissionData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="actual" stroke="#3b82f6" />
              <Line
                type="monotone"
                dataKey="target"
                stroke="#f87171"
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </AnimatedCard>

        {/* Fee Collection Trends */}
        <AnimatedCard>
          <h3 className="font-semibold mb-2">Fee Collection Trends</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={feeData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default Dashboard;
