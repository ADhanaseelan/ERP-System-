import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC<{ onLogin: (role: "admin" | "student") => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"admin" | "student" | "">("");
  const navigate = useNavigate();

  const credentials = {
    admin: { username: "admin123", password: "adminpass" },
    student: { username: "student123", password: "studentpass" },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      role &&
      username === credentials[role].username &&
      password === credentials[role].password
    ) {
      onLogin(role);
      navigate(`/${role}`);
    } else {
      alert("Invalid username, password, or role!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0e7ff] via-[#f5e3ff] to-[#faf7fc]">
      <form
        className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white/90 rounded-2xl shadow-2xl px-8 py-8 flex flex-col items-center"
        onSubmit={handleSubmit}
        style={{ backdropFilter: "blur(6px)" }}
      >
        <div className="text-3xl mb-2">🔐</div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Secure Login</h2>

        {/* Role selector */}
        <select
          required
          value={role}
          onChange={(e) => setRole(e.target.value as "admin" | "student" | "")}
          className="w-full mb-4 px-4 py-3 border border-blue-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        >
          <option value="" disabled>
            Select role
          </option>
          <option value="admin">Admin</option>
          <option value="student">Student</option>
        </select>

        <input
          className="w-full mb-4 px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          type="text"
          placeholder="Username"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="w-full mb-6 px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 shadow-md hover:from-blue-600 hover:to-purple-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
