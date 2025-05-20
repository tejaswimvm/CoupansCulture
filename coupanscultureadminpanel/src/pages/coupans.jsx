import { useEffect, useState } from "react";
import API from "../api";
import { Pencil, Trash2, MoreHorizontal, Save, X } from "lucide-react";

export default function Coupons() {
  const [coupons, setCoupons] = useState([]);
  const [editCoupon, setEditCoupon] = useState(null);
  const [form, setForm] = useState({ title: "", code: "", website: "", description: "" });
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const fetchCoupons = async () => {
    const res = await API.get("/api/coupon/getAllCoupon");
    setCoupons(res.data.data);
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this coupon?")) return;
    await API.delete(`/api/coupon/delete/${id}`);
    fetchCoupons();
  };

  const openEditModal = (coupon) => {
    setEditCoupon(coupon._id);
    setForm({ title: coupon.title, code: coupon.code, website: coupon.website, description: coupon.description });
  };

  const closeEditModal = () => {
    setEditCoupon(null);
    setForm({ title: "", code: "", website: "", description: "" });
  };

  const handleUpdate = async () => {
    await API.put(`/api/coupon/update/${editCoupon}`, form);
    closeEditModal();
    fetchCoupons();
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Manage Coupons</h2>

        <div className="overflow-x-auto bg-white shadow rounded-xl">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-[#F1F3F9] text-xs uppercase text-gray-500">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Title</th>
                <th className="px-6 py-4 text-left font-semibold">Code</th>
                <th className="px-6 py-4 text-left font-semibold">Website</th>
                <th className="px-6 py-4 text-left font-semibold">Description</th>
                <th className="px-6 py-4 text-center font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {coupons.map((coupon) => (
                <tr key={coupon._id} className="border-b last:border-none hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{coupon.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{coupon.code}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{coupon.website}</td>
                  <td className="px-6 py-4 max-w-sm truncate">{coupon.description}</td>
                  <td className="px-6 py-4 text-center relative">
                    <button
                      onClick={() => setSelectedCoupon(selectedCoupon === coupon._id ? null : coupon._id)}
                      className="inline-flex items-center p-2 rounded-full hover:bg-gray-100"
                    >
                      <MoreHorizontal size={18} />
                    </button>
                    {selectedCoupon === coupon._id && (
                      <div className="absolute right-6 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                        <button
                          onClick={() => openEditModal(coupon)}
                          className="block w-full px-4 py-2 text-sm hover:bg-gray-100 text-left"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(coupon._id)}
                          className="block w-full px-4 py-2 text-sm hover:bg-gray-100 text-left text-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
              {coupons.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No coupons found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {editCoupon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">
            <button
              onClick={closeEditModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Edit Coupon</h3>
            <div className="grid gap-4">
              <input
                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Title"
              />
              <input
                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={form.code}
                onChange={(e) => setForm({ ...form, code: e.target.value })}
                placeholder="Code"
              />
              <input
                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                placeholder="Website"
              />
              <textarea
                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Description"
                rows={3}
              />
              <div className="flex gap-3 mt-2">
                <button
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  onClick={handleUpdate}
                >
                  <Save size={16} /> Save
                </button>
                <button
                  className="flex items-center gap-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                  onClick={closeEditModal}
                >
                  <X size={16} /> Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
