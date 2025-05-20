import Sidebar from "../sidebar/sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-50 p-6">
        <Outlet /> {/* Important to show nested routes */}
      </main>
    </div>
  );
}
