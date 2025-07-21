// import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Navigation,Thumbs } from 'swiper/modules';
// import defaultImage from "../../assets/img/noContent.png"
// import { useState } from 'react';


// const CourseImageGallery = ({images,CourseName}) => {
//     const [thumbsSwiper] = useState(null);
//     const displayImage = images.length > 0? images:[{image:defaultImage}]
//     return (
//         <div className='rounded-lg border overflow-hidden'>
//             <Swiper modules={[Navigation,Thumbs]} navigation thumbs={{swiper:thumbsSwiper && !thumbsSwiper.destroyed? thumbsSwiper:null}}
//             className='product-main-slider'
//             >
//                 {displayImage.map((imageObjects,index)=>(
//                     <SwiperSlide key={index}>
//                         <div className='aspect-square bg-base-100 p-10'>  
//                              <img src={imageObjects.image} alt={CourseName} className="w-full min-h-full object-cover"/>
//                         </div>
//                     </SwiperSlide>
//                 ))}

//             </Swiper>
//         </div>
//     );
// };

// export default CourseImageGallery;


import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Thumbs } from 'swiper/modules';
import defaultImage from "../../assets/img/noContent.png";
import { useState } from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";

const CourseImageGallery = ({ images, CourseName }) => {
    const [thumbsSwiper] = useState(null);
    const displayImage = images.length > 0 ? images : [{ image: defaultImage }];

    return (
        <div className='rounded-xl border overflow-hidden shadow-md p-10'>
            <Swiper
                modules={[Navigation, Thumbs]}
                navigation
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                className='product-main-slider'
            >
                {displayImage.map((imageObjects, index) => (
                    <SwiperSlide key={index}>
                        <div className='aspect-square bg-base-100 flex items-center justify-center'>
                            <img 
                                src={imageObjects.image} 
                                alt={CourseName} 
                                className="object-cover w-full h-full" 
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CourseImageGallery;
