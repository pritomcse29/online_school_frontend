import React, { useEffect, useState } from "react";
import ApiClient from "../service/ApiClient";
import defaultImage from "../../assets/img/noContent.png";
import { BookOpen, DollarSign, Users } from "lucide-react";

const AdminCourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAdminCourses = async () => {
    try {
      const tokenData = localStorage.getItem("authTokens");

      if (!tokenData) {
        setError("No token found. Please log in again.");
        setLoading(false);
        return;
      }

      const parsedToken = JSON.parse(tokenData);
      const accessToken = parsedToken?.access;

      const res = await ApiClient.get("/admin/dashboard/", {
        headers: { Authorization: `JWT ${accessToken}` },
      });

      setCourses(res.data.my_courses || []);
    } catch (err) {
      console.error("❌ Fetch error:", err.response?.data || err.message);
      setError(err.response?.data?.detail || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminCourses();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-emerald-500 text-white text-2xl font-semibold">
        Loading courses...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 via-pink-500 to-orange-400 text-white text-xl font-semibold">
        Error: {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-emerald-500 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg">
          🎓 My Created Courses
        </h2>

        {courses.length === 0 ? (
          <div className="text-center bg-white/10 backdrop-blur-md p-10 rounded-2xl text-white font-medium text-lg border border-white/20">
            No courses created yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group relative bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border border-white/20 hover:shadow-2xl hover:scale-[1.03] transform transition-all duration-300"
              >
                {/* Course Image */}
                <img
                  src={course.courseImage?.[0]?.image || defaultImage}
                  alt={course.name}
                  className="h-52 w-full object-cover rounded-t-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Content */}
                <div className="p-5 text-white">
                  <h3 className="text-2xl font-bold mb-2 truncate">
                    {course.name}
                  </h3>
                  <p className="text-gray-200 text-sm line-clamp-3">
                    {course.description || "No description available."}
                  </p>

                  <div className="mt-4 flex justify-between items-center text-sm text-gray-200 border-t border-white/10 pt-3">
                    <span className="flex items-center gap-2">
                      <DollarSign size={16} /> ৳{course.price}
                    </span>
                    <span className="flex items-center gap-2">
                      <Users size={16} /> {course.available_seat ?? "—"} Seats
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300 text-xs mt-2">
                    <span className="flex items-center gap-1">
                      <BookOpen size={14} /> Duration: {course.duration ?? "—"}h
                    </span>
                    <span>ID: {course.id}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCourseList;
