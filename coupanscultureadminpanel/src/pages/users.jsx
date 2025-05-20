import { useEffect, useState } from "react";
import API from "../api";
import { Trash2, PlusCircle } from "lucide-react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ email: "", firstName: "", lastName: "", password: "" });

  const fetchUsers = async () => {
    const res = await API.get("/api/user/users");
    setUsers(res.data.users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    await API.delete(`/api/user/delete/${id}`);
    fetchUsers();
  };

  const handleAddUser = async () => {
    if (!form.email || !form.firstName || !form.lastName || !form.password) return alert("Fill all fields");
    await API.post("/api/user/register", form);
    setForm({ email: "", firstName: "", lastName: "", password: "" });
    fetchUsers();
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">User Management</h2>

      {/* Add User Form */}
      <div className="bg-white p-6 rounded-xl shadow mb-8 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4 text-gray-700 flex items-center gap-2">
          <PlusCircle size={20} /> Add New User
        </h3>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mb-4">
          <input className="input" placeholder="First Name" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
          <input className="input" placeholder="Last Name" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
          <input className="input" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input className="input" type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        </div>
        <button onClick={handleAddUser} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Add User
        </button>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left p-4 font-semibold">Name</th>
              <th className="text-left p-4 font-semibold">Email</th>
              <th className="text-left p-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-t hover:bg-gray-50">
                <td className="p-4">{user.firstName} {user.lastName}</td>
                <td className="p-4 text-gray-600">{user.email}</td>
                <td className="p-4">
                  <button onClick={() => handleDelete(user._id)} className="text-red-500 hover:text-red-600">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td className="p-4 text-center text-gray-500" colSpan="3">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
