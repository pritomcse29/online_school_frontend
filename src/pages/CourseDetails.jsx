// import React, { useEffect, useState } from 'react';
// import AddToCourseButton from '../components/CourseDetails/AddToCourseButton';
// import CourseImageGallery from '../components/CourseDetails/CourseImageGallery';
// import { useParams } from 'react-router';
// import ApiClient from '../components/service/ApiClient';
// import { FaArrowRight } from "react-icons/fa";
// import { FaLongArrowAltLeft } from "react-icons/fa";

// const CourseDetails = () => {
//     const [course, setCourse] = useState(null);
//     const {courseId} = useParams();

//     useEffect(()=>{
//         ApiClient
//         .get(`/courses/${courseId}`)
//         .then((res)=>{
//             setCourse(res.data);
//         })
//         .catch(error => {
//             console.error("Error fetching course:", error);
//         });
//     },[courseId]);

//     if (!course) return <div>Loading...</div>;

//     return (
//         <div className='container mx-auto px-4 py-8'>
//              <h1 className='flex items-center'><FaLongArrowAltLeft className='mr-3 '/> Back to Courses</h1>
//                  <div className='flex flex-col md:flex-row gap-8'>
//             <div className='md:w-1/2'>
               
//                 <CourseImageGallery 
//                     images={course.courseImage.map(img => ({ image: img.image }))} 
//                     CourseName={course.name} 
                    
//                 />
//             </div>
//             <div className='md:w-1/2'>
//                  <h1 className='mb-4'><span className='border-2 rounded-xl px-2 py-1'>Subject {course.subject}</span></h1>
//                 <h1 className='text-xl font-bold mb-4'>{course.name}</h1>

//                 <h1 className='text-4xl font-bold mb-4'>{course.price} Tk</h1>
//                 <p className='text-xl text-gray-300 mb-4'>{course.description}</p>
//                 <p className='flex flex-col lg:flex-row lg:items-center gap-2'>
//                  Availability: <span className='border border-2 py-2 px-2 rounded-xl mt-2 text-xl'>({course.available_seat} seat available)</span>
//                </p>
//                 <div className='mt-80'>
//                     <AddToCourseButton course={course} courseId={course.id} />
//                 </div>
//             </div>
//         </div>
//         </div>
       
//     );
// };

// export default CourseDetails;

import React, { useEffect, useState } from 'react';
import AddToCourseButton from '../components/CourseDetails/AddToCourseButton';
import CourseImageGallery from '../components/CourseDetails/CourseImageGallery';
import { useParams, Link } from 'react-router-dom'; // Import Link for navigation
import ApiClient from '../components/service/ApiClient';
import { FaLongArrowAltLeft } from "react-icons/fa"; // Keep the back arrow icon

const CourseDetails = () => {
    const [course, setCourse] = useState(null);
    const { courseId } = useParams();

    useEffect(() => {
        ApiClient
            .get(`/courses/${courseId}`)
            .then((res) => {
                setCourse(res.data);
            })
            .catch(error => {
                console.error("Error fetching course:", error);
                // Optionally handle error state, e.g., setCourse(null) or an error message
            });
    }, [courseId]);

    // Loading State
    if (!course) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <p className="text-xl text-gray-600">Loading course details...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8 md:p-12">
                {/* Back to Courses Link */}
                <Link
                    to="/courses" // Adjust this path to your actual courses listing page
                    className="inline-flex items-center text-gray-600 hover:text-emerald-700 font-semibold mb-8 transition-colors duration-200 text-lg"
                >
                    <FaLongArrowAltLeft className="mr-3 text-xl" /> Back to Courses
                </Link>

                <div className="flex flex-col md:flex-row gap-10"> {/* Increased gap */}
                    {/* Course Image Gallery */}
                    <div className="md:w-1/2">
                        <CourseImageGallery
                            images={course.courseImage?.map(img => ({ image: img.image })) || []} // Handle potential empty array
                            CourseName={course.name}
                        />
                    </div>

                    {/* Course Details */}
                    <div className="md:w-1/2">
                        {/* Subject Tag */}
                        <div className="mb-4">
                            <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                                {course.subject}
                            </span>
                        </div>

                        {/* Course Name */}
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                            {course.name}
                        </h1>

                        {/* Course Price */}
                        <p className="text-5xl font-extrabold text-emerald-600 mb-6">
                            ৳ {Number(course.price || 0).toFixed(2)}
                        </p>

                        {/* Description */}
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            {course.description}
                        </p>

                        {/* Availability */}
                        <p className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-800 text-lg font-medium mb-12"> {/* Adjusted margin-bottom */}
                            Availability:
                            <span className="inline-block bg-blue-100 text-blue-800 py-1.5 px-3 rounded-full text-base font-medium">
                                {course.available_seat || 0} seat available
                            </span>
                        </p>

                        {/* Add to Course Button - Removed mt-80 */}
                        <div>
                            <AddToCourseButton course={course} courseId={course.id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;