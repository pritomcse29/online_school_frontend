import aboutImage from '../../assets/img/about.jpg'
import { IoIosCheckmarkCircleOutline } from "react-icons/io"; 
import { FaArrowRight } from "react-icons/fa6";

const AboutUs = () => {
  return (
        <div className='flex md:flex justify-around flex-wrap md:flex-wrap lg:flex-nowrap bg-white p-16'>
            {/* left side */}
            <div className='w-full lg:w-1/2 md:w-full text-black mr-4'>
                 <h2 className='text-4xl font-bold mb-4'>Unlock Your Potential with Online Learning School: Learn, Grow, Succeed.</h2>
                 <p className='text-xl italic text-gray-500'>
               "Welcome to Online Learning School, your dedicated hub for online learning and skill development. We believe in making quality education accessible to everyone, empowering you to achieve your personal and professional goals through a diverse range of expertly crafted courses. Whether you're looking to advance your career, explore a new hobby, or simply expand your knowledge, our flexible and engaging platform is designed to support your learning journey."
                    </p>
                <div className='my-4'>
                     
                    <p className='text-xl'>
                        <IoIosCheckmarkCircleOutline className='inline text-emerald-500'/> 
                  <b> Diverse Course Catalog:</b> <span className='text-gray-500'>Explore hundreds of courses across various disciplines, from technology and business to creative arts and personal development.</span>
                    </p>
                    <p className='text-xl my-4'><IoIosCheckmarkCircleOutline className='inline text-emerald-500'/> <b> Expert Instructors:</b><span className='text-gray-500'>Learn from industry leaders and passionate educators who bring real-world experience to every lesson.</span>
                    </p>
                    <p className='text-xl'><IoIosCheckmarkCircleOutline className='inline text-emerald-500'/> 
                  <b> Flexible Learning:</b> <span className='text-gray-500'>Access your courses 24/7 from any device, allowing you to learn at your own pace and fit education into your busy schedule.</span>
                   </p>
                    
                </div>
              
                
                 <button className="btn btn-success mt-8 mb-8 lg:mb-0 text-white">Read More <FaArrowRight className=' inline text-white'/></button>
            </div>

            {/* right side */}
            <div className='w-full lg:w-1/2 md:w-full md:mt-0 mt-4'>
                 <img src={aboutImage} alt="" />
            </div>
        </div>
    );
};

export default AboutUs;