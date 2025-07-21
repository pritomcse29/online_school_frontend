import React, { useEffect, useState } from 'react';
import AddToCourseButton from '../components/CourseDetails/AddToCourseButton';
import CourseImageGallery from '../components/CourseDetails/CourseImageGallery';
import { useParams } from 'react-router';
import ApiClient from '../components/service/ApiClient';
import { FaArrowRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

const CourseDetails = () => {
    const [course, setCourse] = useState(null);
    const {courseId} = useParams();

    useEffect(()=>{
        ApiClient
        .get(`/courses/${courseId}`)
        .then((res)=>{
            setCourse(res.data);
        })
        .catch(error => {
            console.error("Error fetching course:", error);
        });
    },[courseId]);

    if (!course) return <div>Loading...</div>;

    return (
        <div className='container mx-auto px-4 py-8'>
             <h1 className='flex items-center'><FaLongArrowAltLeft className='mr-3 '/> Back to Courses</h1>
                 <div className='flex flex-col md:flex-row gap-8'>
            <div className='md:w-1/2'>
               
                <CourseImageGallery 
                    images={course.courseImage.map(img => ({ image: img.image }))} 
                    CourseName={course.name} 
                    
                />
            </div>
            <div className='md:w-1/2'>
                 <h1 className='mb-4'><span className='border-2 rounded-xl px-2 py-1'>Subject {course.subject}</span></h1>
                <h1 className='text-xl font-bold mb-4'>{course.name}</h1>

                <h1 className='text-4xl font-bold mb-4'>{course.price} Tk</h1>
                <p className='text-xl text-gray-300 mb-4'>{course.description}</p>
                <p className='flex flex-col lg:flex-row lg:items-center gap-2'>
                 Availability: <span className='border border-2 py-2 px-2 rounded-xl mt-2 text-xl'>({course.available_seat} seat available)</span>
               </p>
                <div className='mt-80'>
                    <AddToCourseButton course={course} courseId={course.id} />
                </div>
            </div>
        </div>
        </div>
       
    );
};

export default CourseDetails;