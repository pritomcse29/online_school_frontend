
import { FiPackage, FiShoppingCart, FiUsers, FiStar } from "react-icons/fi";
import Navbar from "../components/dashboard/Navbar";
// import Sidebar from "../components/dashboard/sidebar";
// import Sidebar from "../components/dashboard/sidebar";
// import Sidebar from "../components/dashboard/Sidebar2";
import StarCart from "../components/dashboard/StarCart";

import { Outlet } from "react-router";
import Sidebar2 from "../components/dashboard/Sidebar2";

export default function DashboardLayout() {

  return (
    <div className="drawer lg:drawer-open">
  
      <div className="drawer-content flex flex-col">
        <Navbar  />

        <main className="p-6">
          <Outlet/>

        
        
        </main>
      </div>
      <Sidebar2/>
    </div>
  );
}