// import heroImage from '../assets/img/hero-bg.jpg'
// import courseThree from '../../assets/img/course-3.jpg'
// const HeroCarousel = () => {
//     return (
//         <div className='w-full h-[475px] bg-cover bg-center shadow-sm bg-base-100' style={{backgroundImage:`url(${heroImage})`}}>
//             {/* <div className='bg-gradient-to-r from-gray-300 via-purple-500 to-pink-500'> */}
//                       {/* left side */}
            
//                 <div className='p-24'>
//                 <h2 className='text-5xl font-bold text-white'>Learning Today,</h2>
//                 <h2 className='text-5xl font-bold mt-4 text-white'>Leading Tomorrow</h2>
//                 <p className='text-2xl mt-4 text-white'>We are team of talented designers making websites with Bootstrap</p>
//                 <button className="btn btn-neutral btn-outline border-white text-white mt-4 rounded-xl">Get Started</button>
//                 </div>
//                     {/* <div className="max-w-lg bg-black bg-opacity-50 p-8 rounded-md shadow-lg">
//           <h2 className="text-5xl font-bold drop-shadow-lg">Learning Today,</h2>
//           <h2 className="text-5xl font-bold mt-4 drop-shadow-lg">Leading Tomorrow</h2>
//           <p className="text-2xl mt-4 drop-shadow-md">
//             We are a team of talented designers making websites with Bootstrap
//           </p>
//           <button className="btn btn-neutral btn-outline border-white text-white mt-6 drop-shadow-md">
//             Get Started
//           </button>
//         </div> */}
//             {/* right side */}
//                 <div>
//                 <img src={courseThree} alt="" />
//                 {/* <img src={'../assets/img/course-3.jpg'} alt="" /> */}
//                 </div>
            
           
//         </div>
//     );
// };

// export default HeroCarousel;

import heroImage from '../assets/img/hero-bg.jpg';
import courseThree from '../../assets/img/course-3.jpg';

const HeroCarousel = () => {
    return (
        <div className='w-full h-[475px] bg-cover bg-center shadow-sm bg-base-100' style={{backgroundImage:`url(${heroImage})`}}>
            {/* left side */}
            <div className='p-24'>
                <h2 className='text-5xl font-bold text-white'>Learning Today,</h2>
                <h2 className='text-5xl font-bold mt-4 text-white'>Leading Tomorrow</h2>
                <p className='text-2xl mt-4 text-white'>We are team of talented designers making websites with Bootstrap</p>
                <button className="btn btn-neutral btn-outline border-white text-white mt-4 rounded-xl">Get Started</button>
            </div>
            {/* right side */}
            <div>
                <img src={courseThree} alt="Course Image" /> 
            </div>
        </div>
    );
};

export default HeroCarousel;
