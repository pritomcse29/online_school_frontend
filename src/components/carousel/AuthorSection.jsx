import authorImage from '../../assets/img/team/team-7.png'
import { BsArrowRight } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const AuthorSection = () => {
    return (
        <div className='flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap bg-amber-50 p-16'>
            {/* Author Section */}
            {/* left text */}
            <div className='w-1/12 mt-4'>
                <BsFacebook className='text-black'/>
                <BsLinkedin className='text-black my-3'/>
                <FaSquareInstagram className='text-black'/>
                <FaGithub className='text-black mt-3'></FaGithub>
            </div>
            <div className='w-11/12 lg:w-6/12 md:w-11/12 '>
            
               <img src={authorImage} alt="" className='md:h-[600px] h-[400]' />
            </div>
            {/* right text */}
            <div className='w-full lg:w-5/12 md:w-full text-black mr-32 '>
                <h3 className='text-xl font-bold mb-4'>About The Author</h3>
                 <p className='text-5xl tracking-wide mb-4'>Dylan Collin Is a Senior Javascript Developer Based in New York.</p>
                <p className='my-4'>Sapien hendrerit consequat pulvinar hac porttitor congue ac imperdiet vitae porta sed duis tristique arcu eget purus sit id quisque amet ornare et aliquet neque tellus amet.

                
                </p>
                <p className='text-gray-400'>
                    Auctor pretium, sit vulputate diam egestas mauris, urna scelerisque dignissim volutpat purus velit lacus, vitae volutpat lacus amet quisque integer in urna adipiscing diam tincidunt enim vestibulum maecenas laoreet aliquam sed porttitor.
                </p>
                <button className='mt-8'>Read More <BsArrowRight className='inline'/></button>
            </div>
        </div>
    );
};

export default AuthorSection;