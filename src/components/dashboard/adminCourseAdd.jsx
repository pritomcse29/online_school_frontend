import React, { useEffect, useState } from "react";
import ApiClient from "../service/ApiClient";
import useAuth from "../hooks/useAuth";

const AdminCourseAdd = () => {
  const { authTokens } = useAuth();
  const [subjects, setSubjects] = useState([]);
  const [owners, setOwners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    available_seat: "",
    duration: "",
    subject: "",
    owner: "",
  });

  // ✅ Load subjects & owners
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [subjectsRes, ownersRes] = await Promise.all([
          ApiClient.get("/subjects/"),
          ApiClient.get("/admin-teacher/"),
        ]);
        setSubjects(subjectsRes.data.results || []);
        setOwners(ownersRes.data || []);
      } catch (err) {
        console.error("Failed to load data:", err);
        setError("Failed to load form data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Add Course
  const handleAddCourse = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      price: parseFloat(formData.price),
      available_seat: parseInt(formData.available_seat, 10),
      duration: parseInt(formData.duration, 10),
      subject: parseInt(formData.subject, 10),
      owner: parseInt(formData.owner, 10),
    };

    try {
      const res = await ApiClient.post("/courses/", payload, {
        headers: { Authorization: `JWT ${authTokens?.access}` },
      });
      alert(`✅ Course "${res.data.name}" added successfully!`);
      setFormData({
        name: "",
        description: "",
        price: "",
        available_seat: "",
        duration: "",
        subject: "",
        owner: "",
      });
    } catch (err) {
      console.error("Course creation failed:", err.response?.data || err.message);
      alert("❌ Failed to create course. Please check your input or authorization.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-xl">
        Loading form data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-8 border border-gray-200 text-success">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          ➕ Add New Course
        </h2>

        <form onSubmit={handleAddCourse} className="space-y-5">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Course Name"
            className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Course Description"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price (e.g. 500)"
            className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
            required
            min="0"
          />
          <input
            type="number"
            name="available_seat"
            value={formData.available_seat}
            onChange={handleChange}
            placeholder="Available Seats"
            className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
            required
            min="0"
          />
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Duration (in hours)"
            className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
            required
            min="0"
          />
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
            required
          >
            <option value="">Select Subject</option>
            {subjects.map((subj) => (
              <option key={subj.id} value={subj.id}>
                {subj.title}
              </option>
            ))}
          </select>
          <select
            name="owner"
            value={formData.owner}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
            required
          >
            <option value="">Select Course Owner</option>
            {owners.map((admin) => (
              <option key={admin.id} value={admin.id}>
                {/* {admin.email} ({admin.first_name} {admin.last_name}) */}
                   {admin.email} 
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 font-semibold text-lg transition-colors duration-200 focus:ring-4 focus:ring-emerald-300"
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminCourseAdd;
