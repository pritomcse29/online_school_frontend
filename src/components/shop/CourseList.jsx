import React from "react";
import CourseItem from "./CourseItem";

const CourseList = ({ courses }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseItem course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
