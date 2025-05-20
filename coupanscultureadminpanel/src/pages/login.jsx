import { useState } from "react";
import API from "../api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/login", form);
    localStorage.setItem("token", res.data.token);
    window.location.href = "/admin/dashboard";
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-40 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-4 border rounded"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border rounded"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
    </form>
  );
}
