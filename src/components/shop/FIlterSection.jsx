import React, { useState } from "react";
import { IoFilterSharp, IoSearchOutline } from "react-icons/io5";

const FilterSection = ({
  handlePriceRange,
  priceRange,
  subjects,
  selectedSubjects,
  handleSubjectsChange,
}) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-800 py-14">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Find Your Perfect Course
          </h1>
          <p className="text-gray-600 mt-2">Filter and explore easily</p>
        </div>

        {/* Filter Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="mt-6 sm:mt-0 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-md font-semibold transition-all duration-200"
        >
          <IoFilterSharp className="text-xl" />
          Filter
        </button>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="max-w-7xl mx-auto px-4 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            {/* Price Range */}
            <div>
              <h2 className="text-lg font-semibold mb-3">💰 Price Range</h2>
              <div className="space-y-3">
                <div className="flex justify-between gap-3">
                  <input
                    type="number"
                    className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-emerald-500 focus:border-emerald-500"
                    value={priceRange[0]}
                    onChange={(e) =>
                      handlePriceRange(0, Number(e.target.value))
                    }
                    placeholder="Min"
                  />
                  <input
                    type="number"
                    className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-emerald-500 focus:border-emerald-500"
                    value={priceRange[1]}
                    onChange={(e) =>
                      handlePriceRange(1, Number(e.target.value))
                    }
                    placeholder="Max"
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) =>
                    handlePriceRange(1, Number(e.target.value))
                  }
                  className="w-full accent-emerald-500"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <h2 className="text-lg font-semibold mb-3">📚 Subject</h2>
              <select
                value={selectedSubjects}
                onChange={(e) => handleSubjectsChange(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">All Subjects</option>
                {subjects.map((subject) => (
                  <option key={subject.id} value={subject.id}>
                    {subject.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Search */}
            <div>
              <h2 className="text-lg font-semibold mb-3">🔍 Search</h2>
              <div className="relative">
                <IoSearchOutline className="absolute top-3 left-3 text-gray-400 text-lg" />
                <input
                  type="text"
                  placeholder="Search course..."
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Sort */}
            <div>
              <h2 className="text-lg font-semibold mb-3">⚙️ Sort By</h2>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-emerald-500 focus:border-emerald-500">
                <option>Default</option>
                <option value="low-to-high">Price: Low → High</option>
                <option value="high-to-low">Price: High → Low</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Course Title */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          All Available Courses
        </h2>
      </div>
    </div>
  );
};

export default FilterSection;
