import aboutImage from '../../assets/img/about.jpg'
import { IoIosCheckmarkCircleOutline } from "react-icons/io"; 
import { FaArrowRight } from "react-icons/fa6";

const AboutUs = () => {
  return (
        <div className='flex md:flex justify-around flex-wrap md:flex-wrap lg:flex-nowrap bg-white p-16'>
            {/* left side */}
            <div className='w-full lg:w-1/2 md:w-full text-black mr-4'>
                 <h2 className='text-4xl font-bold mb-4'>Voluptatem dignissimos provident quasi corporis</h2>
                 <p className='text-xl italic text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='my-4'>
                     
                    <p className='text-xl '><IoIosCheckmarkCircleOutline className='inline text-emerald-500'/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className='text-xl my-4'><IoIosCheckmarkCircleOutline className='inline text-emerald-500'/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className='text-xl'><IoIosCheckmarkCircleOutline className='inline text-emerald-500'/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    
                </div>
                <p className='text-xl'>irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
                
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