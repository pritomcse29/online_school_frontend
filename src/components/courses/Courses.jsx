import React, { useState,useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import defaultImage from '../../assets/img/noContent.png';  
import { Swiper, SwiperSlide } from 'swiper/react';
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { Link } from 'react-router';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Courses = () => {
    const [courses,setCourses] = useState([])

    useEffect(()=>{
       fetch('http://127.0.0.1:8000/api/v1/courses/')
       .then(res=>res.json())
       .then(data=>setCourses(data.results))
    },[])
    // const defaultImage = '../../assets/img/noContent.png';  
    return (
        <>
        {/* <Route path='courses' element={<ShopPage/>} /> */}
        <div >

        </div>
        <div className='mt-4 px-4 pt-8 bg-white  shadow-lg'>
            <h3 className='text-black text-2xl'>Courses <TfiLayoutLineSolid className=' text-emerald-500 inline'/></h3>
            <h2 className='text-black text-5xl font-bold'>Popular Courses</h2>
        </div>
          <Link to={`/courses/`}>
          <Swiper 
          className='bg-white shadow-lg py-8'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      breakpoints={{
        320:{
           slidesPerView:1
        },
        768:{
            slidesPerView:2

        },
        1024:{
          slidesPerView:3
        }
      }}
      navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: false }}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    >
      {courses.map(course=>(
      <SwiperSlide key={course.id} >

          
                {/* <div className=' md:py-8 py-4'>
                    <div className="card bg-white w-96 shadow-sm">
                       <figure>
                          
                            {course.courseImage && course.courseImage.length>0?(
                            course.courseImage.map((courseImage)=>(
                               <div key={courseImage.id}>
                            <img
                            src={courseImage.image || defaultImage}
                            alt={course.name} className='w-full'/>
                              </div>
                            ))):
                            (<img
                            src={defaultImage}
                            alt={course.name} className='w-full'/>)
                          }
                            
                           
                        </figure>
                    <div className="card-body text-black">
                         <h2 className="card-title">
                          {course.name}
                          <div className="badge badge-secondary">NEW</div>
                         </h2>
                        <p>{course.description}</p>
                        <div className="flex justify-between">
                        <div className="badge badge-outline">Price: {course.price}</div>
                        <div className="badge badge-outline">Duration: {course.duration}h</div>
                    </div>
                </div>
                </div>
        </div>
           */}
       
         

<div class="w-full max-w-sm mt-8 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
       {course.courseImage && course.courseImage.length>0?(
                            course.courseImage.map((courseImage)=>(
                               <div key={courseImage.id}>
                            <img
                            src={courseImage.image || defaultImage}
                            alt={course.name} className='w-full'/>
                              </div>
                            ))):
                            (<img
                            src={defaultImage}
                            alt={course.name} className='w-full'/>)
                          }
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{course.name}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">{course.price}</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>


      </SwiperSlide>
))}
      
    </Swiper>
        </Link>
        
        </>
        
    );
};

export default Courses;