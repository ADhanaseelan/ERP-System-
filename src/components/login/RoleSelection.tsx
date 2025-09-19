import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelection: React.FC<{ onSelectRole: (role: "admin"|"student") => void }> = ({ onSelectRole }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <h1 className="text-3xl font-bold mb-4">Select Role</h1>
      <div className="flex gap-8">
        <button
          className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold"
          onClick={() => {
            onSelectRole("student");
            navigate("/student");
          }}
        >
          Student Portal
        </button>
        <button
          className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold"
          onClick={() => {
            onSelectRole("admin");
            navigate("/admin");
          }}
        >
          Admin Portal
        </button>
      </div>
    </div>
  );
};
export default RoleSelection;
