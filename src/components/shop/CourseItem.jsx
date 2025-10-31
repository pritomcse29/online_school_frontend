import React, { useState } from "react";
import { Link } from "react-router";
import { FaClock, FaTag } from "react-icons/fa";
import defaultImage from "../../assets/img/noContent.png";

const CourseItem = ({ course }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const imageSrc = 
    course.courseImage && course.courseImage.length > 0
      ? course.courseImage[0].image
      : defaultImage;

  return (
    <div
      key={course.id}
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 mx-auto w-11/12 my-4"
    >
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={imageSrc || defaultImage}
          alt={course.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        {/* Optional badge */}
        <span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          Featured
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h2 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">
          {course.name}
        </h2>

        <div className="flex items-center justify-between text-gray-600 text-sm">
          <p className="flex items-center gap-1">
            <FaTag className="text-emerald-500" />
            {course.price ? `${course.price} TK` : "Free"}
          </p>
          <p className="flex items-center gap-1">
            <FaClock className="text-emerald-500" />
            {course.duration || "N/A"}
          </p>
        </div>

        <p className="text-sm text-gray-500 line-clamp-2">
          {course.description || "No description available."}
        </p>

        <Link
          to={`/courses/${course.id}`}
          className="inline-block w-full text-center bg-emerald-500 text-white font-semibold py-2.5 rounded-lg hover:bg-emerald-600 transition-all duration-200"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
};

export default CourseItem;
