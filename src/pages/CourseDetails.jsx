import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";
import ApiClient from '../components/service/ApiClient';
import AddToCourseButton from '../components/CourseDetails/AddToCourseButton';
import CourseImageGallery from '../components/CourseDetails/CourseImageGallery';
import WhatYouWillLearn from '../components/CourseDetails/WhatYouWillLearn';

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const { courseId } = useParams();

  useEffect(() => {
    ApiClient
      .get(`/courses/${courseId}`)
      .then((res) => setCourse(res.data))
      .catch(error => console.error("Error fetching course:", error));
  }, [courseId]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl text-gray-600">Loading course details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <Link
            to="/courses"
            className="inline-flex items-center text-gray-600 hover:text-emerald-700 font-semibold transition-colors duration-200 text-lg"
          >
            <FaLongArrowAltLeft className="mr-2" /> Back to Courses
          </Link>
        </div>

        {/* Course Section */}
        <div className="flex flex-col md:flex-row gap-10 p-8 md:p-12">
          {/* Left: Course Gallery */}
          <div className="md:w-1/2">
            <CourseImageGallery
              images={course.courseImage?.map(img => ({ image: img.image })) || []}
              CourseName={course.name}
            />
          </div>

          {/* Right: Course Info */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-4">
                {course.subject}
              </span>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
                {course.name}
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {course.description}
              </p>

              <div className="flex items-center gap-3 mb-8">
                <p className="text-5xl font-extrabold text-emerald-600">
                  ৳ {Number(course.price || 0).toFixed(2)}
                </p>
                <span className="text-gray-500 text-lg font-medium">
                  ({course.available_seat || 0} seats left)
                </span>
              </div>

              <AddToCourseButton course={course} courseId={course.id} />
            </div>

            <div className="mt-10 border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">This course includes:</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Access to exclusive ZTM community</li>
                <li>Certificate of Completion</li>
                <li>Learn and master beginner to advanced React topics</li>
                <li>Unlimited access to all courses, workshops, and career resources</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mb-3">Prerequisites:</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Basic HTML, CSS, and JavaScript knowledge</li>
                <li>A willingness and enthusiasm to learn</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="mt-12">
        <WhatYouWillLearn />
      </div>

      {/* Hero Section */}
      <div className="mt-16 bg-emerald-50 rounded-2xl py-16">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h1 className="text-4xl font-extrabold text-emerald-800 mb-4">Become a React Pro</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This React coding bootcamp by top instructors will take you from beginner to advanced. 
            Build real-world applications, master React fundamentals, and learn the best industry practices.
          </p>
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-all duration-300 shadow-md">
            <a href='https://online-school-frontend-wbqk.vercel.app/courses'>See All Courses</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
