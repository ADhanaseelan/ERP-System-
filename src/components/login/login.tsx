import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const LoginPage: React.FC<{ onLogin: (role: "admin" | "student") => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Dummy role-based credentials
  const credentials = {
    admin: { username: "admin123", password: "adminpass" },
    student: { username: "student123", password: "studentpass" },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      username === credentials.admin.username &&
      password === credentials.admin.password
    ) {
      toast.success("Welcome Admin 🚀");
      onLogin("admin");
      setTimeout(() => navigate("/admin"), 1500);
      return;
    }

    if (
      username === credentials.student.username &&
      password === credentials.student.password
    ) {
      toast.success("Welcome Student 🎓");
      onLogin("student");
      setTimeout(() => navigate("/student"), 1500);
      return;
    }

    toast.error("Invalid username or password!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-40"
        animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, -120, 120, 0], y: [0, 70, -70, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Login Card */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200"
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-extrabold text-center text-gray-800 mb-6"
        >
          🔐 Secure Login
        </motion.h2>

        {/* Username */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          className="w-full px-4 py-3 mb-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Password */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          className="w-full px-4 py-3 mb-6 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 outline-none"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          Login
        </motion.button>
      </motion.form>

      {/* Toast messages */}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default LoginPage;
