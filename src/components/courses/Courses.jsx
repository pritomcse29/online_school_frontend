import React, { useState,useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import defaultImage from '../../assets/img/noContent.png';  
import { Swiper, SwiperSlide } from 'swiper/react';
import { TfiLayoutLineSolid } from "react-icons/tfi";

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
        <div className='mt-4 px-4 pt-8 bg-white  shadow-lg'>
            <h3 className='text-black text-2xl'>Courses <TfiLayoutLineSolid className=' text-emerald-500 inline'/></h3>
            <h2 className='text-black text-5xl font-bold'>Popular Courses</h2>
        </div>
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

          
                <div className=' md:py-8 py-4'>
                    <div className="card bg-white w-96 shadow-sm">
                       <figure>
                            {/* {course.map(courseImage=>(
                              <div key={courseImage.id}>
                            <img
                            src={courseImage.image?courseImage.image:defaultImage}
                            alt="Shoes" className='w-full'/>
                              </div>
                            ))} */}
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
          
       
      </SwiperSlide>
))}
      
    </Swiper>
        
        
        </>
        
    );
};

export default Courses;