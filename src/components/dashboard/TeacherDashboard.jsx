import React, { useEffect, useState } from "react";
import ApiClient from "../service/ApiClient";
import useAuth from "../hooks/useAuth";
import { BookOpen, Clock, Users, DollarSign } from "lucide-react"; // for icons

const TeacherDashboard = () => {
  const { authTokens } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await ApiClient.get("/dashboard/teacher/", {
          headers: {
            Authorization: `JWT ${authTokens?.access}`,
          },
        });
        setCourses(res.data?.my_courses || []);
      } catch (err) {
        console.error("❌ Failed to fetch courses:", err.response?.data || err.message);
        setError("Failed to load courses. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (authTokens?.access) {
      fetchCourses();
    }
  }, [authTokens]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-emerald-600 to-blue-500 flex items-center justify-center">
        <p className="text-2xl text-white font-semibold animate-pulse">
          Loading your courses...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <p className="text-xl text-red-700 font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-emerald-600 to-blue-500 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-extrabold text-white text-center mb-14 drop-shadow-lg">
          📘 My Courses
        </h1>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div
                key={course.id}
                className="group relative bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-white/20 text-white transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-indigo-500/10 to-blue-400/20 opacity-40 rounded-2xl" />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl font-bold text-white">{course.name}</h3>
                  <p className="text-gray-200 line-clamp-3 text-sm">
                    {course.description}
                  </p>

                  <div className="border-t border-white/20 pt-4 mt-3 space-y-2">
                    <div className="flex justify-between items-center text-gray-100 text-sm">
                      <span className="flex items-center gap-2">
                        <DollarSign size={16} /> ৳ {Number(course.price || 0).toFixed(2)}
                      </span>
                      <span className="flex items-center gap-2">
                        <Users size={16} /> {course.available_seat} Seats
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-gray-100 text-sm">
                      <span className="flex items-center gap-2">
                        <Clock size={16} /> {course.duration} hrs
                      </span>
                      <span className="flex items-center gap-2">
                        <BookOpen size={16} /> Subject #{course.subject}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center bg-white/20 backdrop-blur-xl text-white py-10 rounded-2xl shadow-lg border border-white/10">
              <p className="text-xl font-medium">
                You haven’t created any courses yet 😔
              </p>
              <p className="text-sm opacity-80 mt-1">
                Add your first course to start teaching!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
