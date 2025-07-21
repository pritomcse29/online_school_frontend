import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import ApiClient from "../service/ApiClient";
import useAuth from "../hooks/useAuth";
import OrderTable from "../../pages/OrderTable";

const AdminDashboard = () => {
  const { user,authTokens } = useAuth(); // from AuthContext
  console.log("user",user)
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  // // ✅ Role check for admin
  // if (!user || !user.groups.name("admin")) {
  //   return <Navigate to="/unauthorized" replace />;
  // }

  // useEffect(() => {
  //   ApiClient.get("/admin-view-set/")
  //     .then((res) => setData(res.data))
  //     .catch((err) => {
  //       console.error(err);
  //       setError("Failed to load dashboard data.");
  //     });
  // }, []);

   useEffect(() => {
      const fetchCart = async () => {
        try {
          const res = await ApiClient.get("/admin-view-set/", {
            headers: {
              Authorization: `JWT ${authTokens?.access}`,
            },
          });
          console.log("✅ Cart data:", res.data);
          setData(res.data)
        } catch (err) {
          console.error("❌ Failed to load dashboard data:", err.response?.data || err.message);
        }
      };
  
      fetchCart();
    }, [authTokens]);

  if (error) return <div className="p-6 text-red-600">{error}</div>;
  if (!data) return <div className="p-10 text-lg">Loading admin dashboard...</div>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">📊 Admin Dashboard</h1>

      {/* ==== Top Stats ==== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          ["Total Courses", data.Total_Course],
          ["Total Subjects", data.Total_Subject],
          ["Total Mentors", data.Total_Mentor],
          ["Total Students", data.Total_Student],
        ]
        // .map(([label, value]) => (
        //   <StatCard key={label} label={label} value={value} />
        // ))
        }
      </div>

      {/* ==== Last 7 Days Orders ==== */}
      
        <OrderTable orders={data.last_7_days_orders} />
      

      {/* ==== Last 30 Days Orders ==== */}
    
        <OrderTable orders={data.last_30_days_orders} />
    
    </div>
  );
};

export default AdminDashboard;
