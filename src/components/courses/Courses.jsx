// import React, { useState,useEffect } from 'react';
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// import defaultImage from '../../assets/img/noContent.png';  
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { TfiLayoutLineSolid } from "react-icons/tfi";
// import { Link } from 'react-router';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// const Courses = () => {
//     const [courses,setCourses] = useState([])

//     useEffect(()=>{
//        fetch('https://online-school-backend-1.onrender.com/api/v1/courses/')
//        .then(res=>res.json())
//        .then(data=>setCourses(data.results))
//     },[])
//     // const defaultImage = '../../assets/img/noContent.png';  
//     return (
//         <>
//         {/* <Route path='courses' element={<ShopPage/>} /> */}
//         <div >

//         </div>
//         <div className=' bg-gradient-to-r from-emerald-50 to-teal-50 px-4 pt-8  shadow-lg'>
//             <h3 className='text-black text-2xl'>Courses <TfiLayoutLineSolid className=' text-emerald-500 inline'/></h3>
//             <h2 className='text-black text-5xl font-bold'>Popular Courses</h2>
//         </div>
//           <Link to={`/courses/`}>
//           <Swiper 
//           className='bg-gradient-to-r from-emerald-50 to-teal-50 px-4 mb-4 pt-8 shadow-lg '
//       // install Swiper modules
//       modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
//       spaceBetween={50}
//       breakpoints={{
//         320:{
//            slidesPerView:1
//         },
//         768:{
//             slidesPerView:2

//         },
//         1024:{
//           slidesPerView:3
//         }
//       }}
//       navigation
//       pagination={{ clickable: true }}
//     //   scrollbar={{ draggable: false }}
//       autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//     //   onSwiper={(swiper) => console.log(swiper)}
//     //   onSlideChange={() => console.log('slide change')}
//     >
//       {courses.map(course=>(
//       <SwiperSlide key={course.id} >

          
//                 {/* <div className=' md:py-8 py-4'>
//                     <div className="card bg-white w-96 shadow-sm">
//                        <figure>
                          
//                             {course.courseImage && course.courseImage.length>0?(
//                             course.courseImage.map((courseImage)=>(
//                                <div key={courseImage.id}>
//                             <img
//                             src={courseImage.image || defaultImage}
//                             alt={course.name} className='w-full'/>
//                               </div>
//                             ))):
//                             (<img
//                             src={defaultImage}
//                             alt={course.name} className='w-full'/>)
//                           }
                            
                           
//                         </figure>
//                     <div className="card-body text-black">
//                          <h2 className="card-title">
//                           {course.name}
//                           <div className="badge badge-secondary">NEW</div>
//                          </h2>
//                         <p>{course.description}</p>
//                         <div className="flex justify-between">
//                         <div className="badge badge-outline">Price: {course.price}</div>
//                         <div className="badge badge-outline">Duration: {course.duration}h</div>
//                     </div>
//                 </div>
//                 </div>
//         </div>
//            */}
       
         

// <div class="w-full max-w-sm mt-8 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
//     <a href="#">
//        {course.courseImage && course.courseImage.length>0?(
//                             course.courseImage.map((courseImage)=>(
//                                <div key={courseImage.id}>
//                             <img
//                             src={courseImage.image || defaultImage}
//                             alt={course.name} className='w-full'/>
//                               </div>
//                             ))):
//                             (<img
//                             src={defaultImage}
//                             alt={course.name} className='w-full'/>)
//                           }
//     </a>
//     <div class="px-5 pb-5">
//         <a href="#">
//             <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{course.name}</h5>
//         </a>
//         <div class="flex items-center mt-2.5 mb-5">
//             <div class="flex items-center space-x-1 rtl:space-x-reverse">
//                 <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//                 </svg>
//                 <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//                 </svg>
//                 <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//                 </svg>
//                 <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//                 </svg>
//                 <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//                 </svg>
//             </div>
//             <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
//         </div>
//         <div class="flex items-center justify-between">
//             <span class="text-3xl font-bold text-gray-900 dark:text-white">{course.price}</span>
//             <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
//         </div>
//     </div>
// </div>


//       </SwiperSlide>
// ))}
      
//     </Swiper>
//         </Link>
        
//         </>
        
//     );
// };

// export default Courses;

import React, { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import defaultImage from '../../assets/img/noContent.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { Link } from 'react-router-dom'; // Using react-router-dom for Link

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('https://online-school-backend-1.onrender.com/api/v1/courses/');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCourses(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    // Helper to render stars (can be dynamic based on course data later)
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const emptyStars = 5 - fullStars;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<svg key={`full-${i}`} className="w-4 h-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/></svg>);
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<svg key={`empty-${i}`} className="w-4 h-4 text-gray-300 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/></svg>);
        }
        return stars;
    };


    if (loading) {
        return (
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 py-16 text-center text-gray-700">
                Loading courses...
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 py-16 text-center text-red-600">
                Error loading courses: {error}
            </div>
        );
    }

    return (
        <section className="bg-gradient-to-r from-emerald-50 to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto mb-12"> {/* Centered content, added bottom margin */}
                <p className='text-gray-700 text-lg font-medium flex items-center mb-2'>
                    Courses <TfiLayoutLineSolid className='text-emerald-500 ml-2 inline-block transform -translate-y-0.5' />
                </p>
                <h2 className='text-gray-900 text-4xl sm:text-5xl font-extrabold leading-tight'>
                    Popular Courses
                </h2>
            </div>

            <div className="max-w-7xl mx-auto"> {/* Max width for the swiper container */}
                <Swiper
                    className='py-8 ' // Added vertical padding to the swiper for navigation/pagination space
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={30} // Consistent spacing between slides
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 30 }
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true} // Enables continuous looping
                >
                    {courses.map(course => (
                        <SwiperSlide key={course.id} className="h-auto"> {/* Ensure slides take auto height */}
                            <Link to={`/courses/${course.id}`} className="block h-full"> {/* Make entire card clickable and stretch to fill slide height */}
                                <div className="w-full h-full bg-white border border-emerald-100 rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
                                    {/* Course Image */}
                                    <div className="relative w-full pt-[56.25%] overflow-hidden"> {/* 16:9 aspect ratio container */}
                                        {course.courseImage && course.courseImage.length > 0 ? (
                                            <img
                                                src={course.courseImage[0].image || defaultImage}
                                                alt={course.name}
                                                className="absolute inset-0 w-full h-full object-cover"
                                                onError={(e) => { e.target.onerror = null; e.target.src = defaultImage; }} // Fallback on image load error
                                            />
                                        ) : (
                                            <img
                                                src={defaultImage}
                                                alt="No image available"
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        )}
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h5 className="text-xl font-semibold text-gray-900 mb-2 truncate"> {/* Added truncate for long titles */}
                                            {course.name}
                                        </h5>
                                        {/* You had a description, but it was commented out. If you re-add, consider `line-clamp-2` here (requires plugin) */}
                                        {/* <p className="text-gray-600 text-sm mb-4">
                                            {course.description || 'No description available.'}
                                        </p> */}

                                        {/* Star Rating */}
                                        <div className="flex items-center mt-2.5 mb-4">
                                            <div className="flex items-center space-x-0.5 rtl:space-x-reverse">
                                                {renderStars(5.0)} {/* Using fixed 5.0 for now, replace with actual rating */}
                                            </div>
                                            <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded-full ml-3">
                                                5.0 {/* Display actual rating here */}
                                            </span>
                                        </div>

                                        {/* Price and Duration/Add to cart */}
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                            <span className="text-2xl font-bold text-emerald-700">
                                                ${course.price || 'N/A'}
                                            </span>
                                            {/* Changed "Add to cart" button to be more generic "View Details" or similar */}
                                            <div className="text-gray-600 text-sm font-medium">
                                                Duration: {course.duration ? `${course.duration}h` : 'N/A'}
                                            </div>
                                            {/* If you want an "Add to cart" button: */}
                                            {/* <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300">
                                                Add to cart
                                            </button> */}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Courses;