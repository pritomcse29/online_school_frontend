import React from "react";

const Star = ({ filled = true }) => (
  <svg
    className={`w-4 h-4 me-1 ${
      filled ? "text-yellow-300" : "text-gray-300 dark:text-gray-500"
    }`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 20"
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
  </svg>
);

const RatingBar = ({ label, percent }) => (
  <div className="flex items-center mt-4">
    <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
      {label} star
    </a>
    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded-sm dark:bg-gray-700">
      <div className="h-5 bg-yellow-300 rounded-sm" style={{ width: `${percent}%` }} />
    </div>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{percent}%</span>
  </div>
);

const Review = () => {
  return (
    <div className="p-16">
      {/* Rating Stars */}
      <div className="flex items-center mb-2">
        <Star /><Star /><Star /><Star /><Star filled={false} />
        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
      </div>

      {/* Global Ratings */}
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>

      {/* Rating Distribution */}
      <RatingBar label="5" percent={70} />
      <RatingBar label="4" percent={17} />
      <RatingBar label="3" percent={8} />
      <RatingBar label="2" percent={4} />
      <RatingBar label="1" percent={1} />
    </div>
  );
};

export default Review;
