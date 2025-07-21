
import { FiPackage, FiShoppingCart, FiUsers, FiStar } from "react-icons/fi";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/sidebar";
import StarCart from "../components/dashboard/StarCart";

import { Outlet } from "react-router";

export default function DashboardLayout() {

  return (
    <div className="drawer lg:drawer-open">
  
      <div className="drawer-content flex flex-col">
        <Navbar  />

        <main className="p-6">
          <Outlet/>

        
        
        </main>
      </div>
      <Sidebar />
    </div>
  );
}