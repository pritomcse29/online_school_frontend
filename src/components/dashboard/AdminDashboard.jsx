// import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import ApiClient from "../service/ApiClient";
// import useAuth from "../hooks/useAuth";
// import OrderTable from "../../pages/OrderTable";

// const AdminDashboard = () => {
//   const { user,authTokens } = useAuth(); // from AuthContext
//   console.log("user",user)
//   const [data, setData] = useState(null);
//   const [error, setError] = useState("");

//   // // ✅ Role check for admin
//   // if (!user || !user.groups.name("admin")) {
//   //   return <Navigate to="/unauthorized" replace />;
//   // }

//   // useEffect(() => {
//   //   ApiClient.get("/admin-view-set/")
//   //     .then((res) => setData(res.data))
//   //     .catch((err) => {
//   //       console.error(err);
//   //       setError("Failed to load dashboard data.");
//   //     });
//   // }, []);

//    useEffect(() => {
//       const fetchCart = async () => {
//         try {
//           const res = await ApiClient.get("/admin-view-set/", {
//             headers: {
//               Authorization: `JWT ${authTokens?.access}`,
//             },
//           });
//           console.log("✅ Cart data:", res.data);
//           setData(res.data)
//         } catch (err) {
//           console.error("❌ Failed to load dashboard data:", err.response?.data || err.message);
//         }
//       };
  
//       fetchCart();
//     }, [authTokens]);

//   if (error) return <div className="p-6 text-red-600">{error}</div>;
//   if (!data) return <div className="p-10 text-lg">Loading admin dashboard...</div>;

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-2xl font-bold mb-4 text-blue-700">📊 Admin Dashboard</h1>

//       {/* ==== Top Stats ==== */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {[
//           ["Total Courses", data.Total_Course],
//           ["Total Subjects", data.Total_Subject],
//           ["Total Mentors", data.Total_Mentor],
//           ["Total Students", data.Total_Student],
//         ]
//         // .map(([label, value]) => (
//         //   <StatCard key={label} label={label} value={value} />
//         // ))
//         }
//       </div>

//       {/* ==== Last 7 Days Orders ==== */}
      
//         <OrderTable orders={data.last_7_days_orders} />
      

//       {/* ==== Last 30 Days Orders ==== */}
    
//         <OrderTable orders={data.last_30_days_orders} />
    
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom"; // Assuming react-router-dom for Navigate
import ApiClient from "../service/ApiClient";
import useAuth from "../hooks/useAuth";
import CountUp from 'react-countup'; // Needed for StatCard

// StatCard Component - Can be moved to its own file if preferred (e.g., components/StatCard.jsx)
const StatCard = ({ label, value, colorClass = 'text-emerald-600' }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl border border-gray-100">
      <div className={`text-5xl font-extrabold mb-2 ${colorClass}`}>
        {value !== undefined && value !== null ? (
          <CountUp
            start={0}
            end={value}
            duration={2.5}
            separator=","
            enableScrollSpy={true}
            scrollSpyOnce={true}
          />
        ) : (
          'N/A'
        )}
      </div>
      <p className="text-gray-700 text-lg font-semibold uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
};

const AdminDashboard = () => {
  const { user, authTokens } = useAuth();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Basic role check (uncomment and adjust if you have proper user roles)
  // if (!user || !user.groups.some(group => group.name === "admin")) {
  //   return <Navigate to="/unauthorized" replace />; // Redirect to an unauthorized page
  // }

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await ApiClient.get("/admin-view-set/", {
          headers: {
            Authorization: `JWT ${authTokens?.access}`,
          },
        });
        console.log("✅ Admin Dashboard data:", res.data);
        setData(res.data);
      } catch (err) {
        console.error("❌ Failed to load dashboard data:", err.response?.data || err.message);
        setError("Failed to load dashboard data. Please ensure you have admin privileges.");
      } finally {
        setLoading(false);
      }
    };

    if (authTokens?.access) { // Only fetch if authTokens are available
      fetchDashboardData();
    } else {
      setLoading(false); // If no tokens, stop loading and potentially show login prompt
      setError("Authentication required to view dashboard.");
    }
  }, [authTokens]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading admin dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-red-600">Error: {error}</p>
      </div>
    );
  }

  // Helper function for status badges
  const getStatusBadgeClass = (status) => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-semibold uppercase";
    switch (status?.toLowerCase()) {
      case "pending":
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case "completed":
      case "paid":
        return `${baseClasses} bg-emerald-100 text-emerald-700`;
      case "canceled":
        return `${baseClasses} bg-red-100 text-red-700`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-600`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center leading-tight">
          📊 Admin Dashboard
        </h1>

        {/* ==== Top Stats ==== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard label="Total Courses" value={data.Total_Course} />
          <StatCard label="Total Subjects" value={data.Total_Subject} />
          <StatCard label="Total Mentors" value={data.Total_Mentor} />
          <StatCard label="Total Students" value={data.Total_Student} />
        </div>

        {/* ==== Last 7 Days Orders ==== */}
        <div className="bg-white shadow-xl rounded-xl p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Last 7 Days Orders</h2>
          <OrderTable orders={data.last_7_days_orders} getStatusBadgeClass={getStatusBadgeClass} />
        </div>

        {/* ==== Last 30 Days Orders ==== */}
        <div className="bg-white shadow-xl rounded-xl p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Last 30 Days Orders</h2>
          <OrderTable orders={data.last_30_days_orders} getStatusBadgeClass={getStatusBadgeClass} />
        </div>

        {/* ==== All Orders (Optional, if data.all_orders exists) ==== */}
        {data.all_orders && (
          <div className="bg-white shadow-xl rounded-xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Orders</h2>
            <OrderTable orders={data.all_orders} getStatusBadgeClass={getStatusBadgeClass} />
          </div>
        )}
      </div>
    </div>
  );
};

// OrderTable Component - Moved into the same file for simplicity
const OrderTable = ({ orders, getStatusBadgeClass }) => {
  if (!orders || orders.length === 0) {
    return (
      <div className="text-center text-gray-600 py-6 bg-gray-50 rounded-lg">
        <p>No orders found for this period.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-emerald-600 text-white">
          <tr>
            <th scope="col" className="px-4 py-3 text-left font-semibold uppercase tracking-wider rounded-tl-lg">Order ID</th>
            <th scope="col" className="px-4 py-3 text-left font-semibold uppercase tracking-wider">Student</th>
            <th scope="col" className="px-4 py-3 text-left font-semibold uppercase tracking-wider">Total</th>
            <th scope="col" className="px-4 py-3 text-left font-semibold uppercase tracking-wider">Status</th>
            <th scope="col" className="px-4 py-3 text-left font-semibold uppercase tracking-wider rounded-tr-lg">Courses</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {orders.map((o) => (
            <tr key={o.id} className="hover:bg-emerald-50 hover:text-emerald-900 transition-colors duration-150">
              <td className="px-4 py-3 font-mono text-emerald-700">{o.id.slice(0, 8)}</td>
              <td className="px-4 py-3 text-gray-800">{o.student_details?.email || o.student || "N/A"}</td>
              <td className="px-4 py-3 text-gray-800">৳ {Number(o.total_price || 0).toFixed(2)}</td>
              <td className="px-4 py-3">
                <span className={getStatusBadgeClass(o.status)}>{o.status}</span>
              </td>
              <td className="px-4 py-3">
                <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
                  {o.items && o.items.length > 0 ? (
                    o.items.map((item) => (
                      <li key={item.id}>
                        {item.course_details?.name || "N/A"} — ৳ {Number(item.price || 0).toFixed(2)}
                      </li>
                    ))
                  ) : (
                    <li>No courses</li>
                  )}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
