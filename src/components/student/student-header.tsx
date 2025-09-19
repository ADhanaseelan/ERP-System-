// App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Home, CreditCard, Building2, BookOpen, User } from "lucide-react";

function Navigation() {
  // Tab config; update as needed
  const tabs = [
    { name: "Dashboard", icon: <Home className="w-5 h-5 mr-2" />, path: "/" },
    { name: "Fees", icon: <CreditCard className="w-5 h-5 mr-2" />, path: "/fees" },
    { name: "Hostel", icon: <Building2 className="w-5 h-5 mr-2" />, path: "/hostel" },
    { name: "Academic", icon: <BookOpen className="w-5 h-5 mr-2" />, path: "/academic" },
    { name: "Profile", icon: <User className="w-5 h-5 mr-2" />, path: "/profile" },
  ];
  return (
    <nav className="mx-auto mt-4 mb-8 max-w-4xl">
      <div className="flex justify-between bg-white border rounded-xl px-4 py-2 shadow">
        {tabs.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.path}
            end
            className={({ isActive }) =>
              `flex items-center px-5 py-1.5 rounded-lg font-medium transition 
               ${isActive ? "text-blue-600" : "text-gray-700"}`
            }
          >
            {tab.icon}
            {tab.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

// Example page components (replace with real pages)
const Dashboard = () => <div className="max-w-4xl mx-auto p-8">Dashboard Content</div>;
const Fees = () => <div className="max-w-4xl mx-auto p-8">Fees Content</div>;
const Hostel = () => <div className="max-w-4xl mx-auto p-8">Hostel Content</div>;
const Academic = () => <div className="max-w-4xl mx-auto p-8">Academic Content</div>;
const Profile = () => <div className="max-w-4xl mx-auto p-8">Profile Content</div>;

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/hostel" element={<Hostel />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
