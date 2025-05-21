import { useEffect, useState } from "react";
import API from "../api";
import { Pencil, Trash2, MoreHorizontal, Save, X } from "lucide-react";

export default function Coupons() {
  const [coupons, setCoupons] = useState([]);
  const [editCoupon, setEditCoupon] = useState(null);
  const [form, setForm] = useState({
    title: "",
    code: "",
    website: "",
    description: "",
    logo: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const fetchCoupons = async () => {
    try {
      const res = await API.get("/api/coupon/getAllCoupon");
      setCoupons(res.data.data);
    } catch (error) {
      console.error("Failed to load coupons", error);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Confirm delete?")) return;
    try {
      await API.delete(`/api/coupon/delete/${id}`);
      fetchCoupons();
    } catch (error) {
      console.error(error);
    }
  };

  const openEditModal = (coupon) => {
    setEditCoupon(coupon);
    setForm({
      title: coupon.title,
      code: coupon.code,
      website: coupon.website,
      description: coupon.description,
      logo: coupon.logo || "",
    });
  };

  const closeEditModal = () => {
    setEditCoupon(null);
  };

  const handleUpdate = async () => {
    try {
      await API.put(`/api/coupon/update/${editCoupon._id}`, form);
      closeEditModal();
      fetchCoupons();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <main className="max-w-4xl mx-auto mt-8 px-6">
        <section className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Manage Coupons</h2>

          <div className="overflow-x-auto">
            <table className="w-full table-fixed text-sm">
              <thead>
                <tr className="bg-gray-700 text-gray-300 uppercase text-xs">
                  <th className="p-3 w-16">Logo</th>
                  <th className="p-3 w-32">Title</th>
                  <th className="p-3 w-24">Code</th>
                  <th className="p-3 w-48">Website</th>
                  <th className="p-3">Description</th>
                  <th className="p-3 w-24 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {coupons.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-gray-500">
                      No coupons found.
                    </td>
                  </tr>
                ) : (
                  coupons.map((c) => (
                    <tr
                      key={c._id}
                      className="border-b border-gray-700 hover:bg-gray-700 transition"
                    >
                      <td className="p-3 text-center">
                        <img
                          src={c.logo}
                          alt="Logo"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </td>
                      <td className="p-3" title={c.title}>
                        {c.title}
                      </td>
                      <td
                        className="p-3 text-blue-300 font-semibold"
                        title={c.code}
                      >
                        {c.code}
                      </td>
                      <td className="p-3" title={c.website}>
                        <a
                          href={c.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="truncate block hover:text-blue-400"
                        >
                          {new URL(c.website).host}
                        </a>
                      </td>
                      <td
                        className="p-3 truncate line-clamp-3"
                        title={c.description}
                      >
                        {c.description}
                      </td>
                      <td className="p-3 text-center relative">
                        <button
                          onClick={() =>
                            setDropdownOpen(
                              dropdownOpen === c._id ? null : c._id
                            )
                          }
                          className="p-2 hover:bg-gray-700 rounded-full"
                        >
                          <MoreHorizontal className="text-gray-300" />
                        </button>
                        {dropdownOpen === c._id && (
                          <div className="absolute right-0 mt-2 w-32 bg-gray-800 border border-gray-700 rounded shadow-lg z-10">
                            <button
                              onClick={() => openEditModal(c)}
                              className="w-full px-4 py-2 text-left hover:bg-gray-700 flex items-center"
                            >
                              <Pencil className="mr-2" /> Edit
                            </button>
                            <button
                              onClick={() => handleDelete(c._id)}
                              className="w-full px-4 py-2 text-left text-red-500 hover:bg-gray-700 flex items-center"
                            >
                              <Trash2 className="mr-2" /> Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Edit Modal */}
        {editCoupon && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Edit Coupon</h3>
                <button
                  onClick={closeEditModal}
                  className="text-gray-400 hover:text-gray-200"
                >
                  <X />
                </button>
              </div>
              <div className="space-y-4">
                {["title", "code", "website", "logo"].map((field) => (
                  <input
                    key={field}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={form[field]}
                    onChange={(e) =>
                      setForm({ ...form, [field]: e.target.value })
                    }
                  />
                ))}
                <textarea
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                  placeholder="Description"
                  rows={3}
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
                {form.logo && (
                  <img
                    src={form.logo}
                    alt="Logo Preview"
                    className="w-16 h-16 rounded-full mx-auto"
                  />
                )}
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={handleUpdate}
                  className="flex items-center bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                >
                  <Save className="mr-2" /> Save
                </button>
                <button
                  onClick={closeEditModal}
                  className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
