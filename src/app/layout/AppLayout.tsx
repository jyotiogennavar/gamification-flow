import { Outlet } from "react-router-dom";
import { Sidebar } from "@/app/layout/sidebar";
import { Navbar } from "@/app/layout/navbar";

export function AppLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}