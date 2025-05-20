import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white p-4 border-r">
      <h1 className="text-xl font-bold mb-4">Admin Panel</h1>
      <nav className="space-y-2">
        <Link to="/admin/dashboard" className="block hover:bg-gray-100 p-2 rounded">Dashboard</Link>
        <Link to="/admin/coupons" className="block hover:bg-gray-100 p-2 rounded">Coupons</Link>
        <Link to="/admin/users" className="block hover:bg-gray-100 p-2 rounded">Users</Link>
        <button
          className="mt-4 text-red-600 hover:underline"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </nav>
    </aside>
  );
}
