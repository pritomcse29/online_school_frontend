// import React, { useEffect, useState } from "react";
// import ApiClient from "../service/ApiClient";
// import useAuth from "../hooks/useAuth";

// const TeacherDashboard = () => {
//   const { authTokens } = useAuth(); // find login user
//   const [courses, setCourses] = useState([]); // for set course
//   const [subjects,setSubjects] = useState([])
//   const [owner,setOwner] =  useState([])

//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     available_seat: "",
//     duration: "",
//     subject: "",
//     owner:"",
//   });  // form data
// useEffect(() => {
//   const fetchSubjects = async () => {
//     try {
//       const subjectsRes = await ApiClient.get("/subjects/");
//       const ownerRes = await ApiClient.get("/admin-teacher/");
//       setSubjects(subjectsRes.data.results);
//       setOwner(ownerRes.data);
//       console.log("Subjects:", subjectsRes.data.results);
//       console.log("Admin Teacher:", ownerRes.data);
//     } catch (err) {
//       console.error("❌ Failed to fetch Subjects:", err.response?.data || err.message);
//       console.error("❌ Failed to fetch Admin Teachers:", err.response?.data || err.message);
//       console.log("Submitting course with formData:", formData);
// console.log("Owner type:", typeof formData.owner);
//     }
//   };

//   fetchSubjects();
// }, []); // ✅ empty array added here



//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await ApiClient.get("/dashboard/teacher/", {
//           headers: {
//             Authorization: `JWT ${authTokens?.access}`,
//           },
//         });
//         setCourses(res.data?.my_courses || []);
//         console.log("✅ Teacher courses fetched:", res.data);
//       } catch (err) {
//         console.error("❌ Failed to fetch courses:", err.response?.data || err.message);
//       }
//     };

//     if (authTokens?.access) {
//       fetchCourses();
//     }
//   }, [authTokens]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAddCourse = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await ApiClient.post("/courses/", formData, {
//         headers: {
//           Authorization: `JWT ${authTokens?.access}`,
//         },
//       });
//       setCourses((prev) => [...prev, res.data]);
//       setFormData({ name: "", description: "", price: "" ,available_seat: "",duration: "",subject: "",owner:"",});
//       console.log("✅ Course created:", res.data);
//     } catch (err) {
//       console.error("❌ Course creation failed:", err.response?.data || err.message);
//       alert("Failed to create course. Please check the input.");
//     }
//   };

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-2xl font-bold text-black">📚 Teacher Dashboard</h1>

//       {/* === Course Add Form === */}
//       <form
//         onSubmit={handleAddCourse}
//         className="bg-white shadow rounded p-4 space-y-4 max-w-md text-black"
//       >
//         <h2 className="text-lg font-semibold">➕ Add New Course</h2>
//         <input
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Course Name"
//           className="w-full border p-2 rounded"
//           required
//         />
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           placeholder="Course Description"
//           className="w-full border p-2 rounded"
//           required
//         />
//         <input
//           type="number"
//           name="price"
//           value={formData.price}
//           onChange={handleChange}
//           placeholder="Price (e.g. 500)"
//           className="w-full border p-2 rounded"
//           required
//         />
//         <input
//          type="number"
//          name="available_seat"
//          value={formData.available_seat}
//          onChange={handleChange}
//          placeholder="Available Seat"
//          className="w-full border p-2 rounded"
//          required
//         />
//         <input
//         type="number"
//         name="duration"
//         value={formData.duration}
//         onChange={handleChange}
//         placeholder="Duration"
//         className="w-full border p-2 rounded"
//         required
//         />
// <select
//   name="subject"
//   value={formData.subject}
//   onChange={handleChange}
//   className="w-full border p-2 rounded"
//   required
// >
//   <option value="">Select Subject</option>
//   {subjects.map((subj) => (
//     <option key={subj.id} value={subj.id}>
//       {subj.title}
//     </option>
//   ))}
// </select>

// <select
//   name="owner"
//   value={formData.owner}
//   onChange={handleChange}
//   className="w-full border p-2 rounded"
//   required
// >
//   <option value="">Select Course Owner</option>
//   {owner.map((admin) => (
//     <option key={admin.id} value={admin.id}>
//       {admin.email}
      
//     </option>
//   ))}
// </select>


//         {/* <input
//         type=""
//         /> */}
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Add Course
//         </button>
//       </form>

//       {/* === Course List === */}
//       <div>
//         <h2 className="text-xl font-semibold mb-2">📦 My Courses</h2>
//         <div className="grid md:grid-cols-2 gap-4">
//           {courses.length > 0 ? (
//             courses.map((course) => (
//               <div
//                 key={course.id}
//                 className="bg-white shadow rounded p-4 space-y-2"
//               >
//                 <h3 className="text-lg font-bold">{course.name}</h3>
//                 <p className="text-gray-700">{course.description}</p>
//                 <p className="text-green-600 font-semibold">৳ {course.price}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">
//               You haven't created any courses yet.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeacherDashboard;
import React, { useEffect, useState } from "react";
import ApiClient from "../service/ApiClient";
import useAuth from "../hooks/useAuth";

const TeacherDashboard = () => {
  const { authTokens } = useAuth();
  const [courses, setCourses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [owner, setOwner] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    available_seat: "",
    duration: "",
    subject: "",
    owner: "",
  });

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const subjectsRes = await ApiClient.get("/subjects/");
        const ownerRes = await ApiClient.get("/admin-teacher/");
        setSubjects(subjectsRes.data.results);
        setOwner(ownerRes.data);
        console.log("Subjects:", subjectsRes.data.results);
        console.log("Admin Teacher:", ownerRes.data);
      } catch (err) {
        console.error("❌ Failed to fetch Subjects:", err.response?.data || err.message);
        console.error("❌ Failed to fetch Admin Teachers:", err.response?.data || err.message);
      }
    };
    fetchSubjects();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await ApiClient.get("/dashboard/teacher/", {
          headers: {
            Authorization: `JWT ${authTokens?.access}`,
          },
        });
        setCourses(res.data?.my_courses || []);
        console.log("✅ Teacher courses fetched:", res.data);
      } catch (err) {
        console.error("❌ Failed to fetch courses:", err.response?.data || err.message);
      }
    };

    if (authTokens?.access) {
      fetchCourses();
    }
  }, [authTokens]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();

    // Build payload with correct numeric types
    const payload = {
      ...formData,
      price: parseFloat(formData.price),
      available_seat: parseInt(formData.available_seat, 10),
      duration: parseInt(formData.duration, 10),
      subject: parseInt(formData.subject, 10),
      owner: parseInt(formData.owner, 10),
    };

    console.log("🟨 Submitting Course:", payload);

    try {
      const res = await ApiClient.post("/courses/", payload, {
        headers: {
          Authorization: `JWT ${authTokens?.access}`,
        },
      });
      setCourses((prev) => [...prev, res.data]);
      setFormData({
        name: "",
        description: "",
        price: "",
        available_seat: "",
        duration: "",
        subject: "",
        owner: "",
      });
      console.log("✅ Course created:", res.data);
    } catch (err) {
      console.error("❌ Course creation failed:", err.response?.data || err.message);
      alert("Failed to create course. Please check the input values.");
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-black">📚 Teacher Dashboard</h1>

      {/* === Course Add Form === */}
      <form
        onSubmit={handleAddCourse}
        className="bg-white shadow rounded p-4 space-y-4 max-w-md text-black"
      >
        <h2 className="text-lg font-semibold">➕ Add New Course</h2>

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Course Name"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Course Description"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price (e.g. 500)"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="available_seat"
          value={formData.available_seat}
          onChange={handleChange}
          placeholder="Available Seat"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="Duration"
          className="w-full border p-2 rounded"
          required
        />

        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border p-2 rounded"
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
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select Course Owner</option>
          {owner.map((admin) => (
            <option key={admin.id} value={admin.id}>
              {admin.email}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Course
        </button>
      </form>

      {/* === Course List === */}
      <div>
        <h2 className="text-xl font-semibold mb-2">📦 My Courses</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div
                key={course.id}
                className="bg-white shadow rounded p-4 space-y-2"
              >
                <h3 className="text-lg font-bold">{course.name}</h3>
                <p className="text-gray-700">{course.description}</p>
                <p className="text-green-600 font-semibold">৳ {course.price}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              You haven't created any courses yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;


