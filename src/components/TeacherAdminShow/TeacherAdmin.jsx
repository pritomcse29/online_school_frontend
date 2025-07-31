// import { useEffect, useState } from "react";
// import tariner1 from '../../assets/img/trainers/trainer-1.jpg'
// import tariner2 from '../../assets/img/trainers/trainer-2.jpg'
// import trainer3 from '../../assets/img/trainers/trainer-1-2.jpg'
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
// import { FaLinkedin } from "react-icons/fa";
// const TeacherAdmin = () => {
//     const [teacherAdmin,setTeacherAdmin] = useState([])
//     useEffect(()=>{
//         fetch('https://online-school-backend-1.onrender.com/api/v1/admin-teacher/')
//         .then(res=>res.json())
//         .then(data=>setTeacherAdmin(data))
//     },[]) 
//     const images = {
//         'admin':tariner1,
//         'teacher': trainer3,
//         'teacher2': tariner2
//     }
       
    
//     return (
        
//         <div className="p-8">
//             <h1 className="text-4xl text-black font-bold mb-8">Meet With Our Team</h1>
//    <div className="flex justify-evenly flex-wrap ">
//             {teacherAdmin.map((teacheradmins)=>(
//         <div key={teacheradmins.email} >
       
//                 <div className="card bg-white  w-96 shadow-sm mb-8 lg:mb-0 md:mb-8">
//                     <figure>
//                         <img
//                         src={images[teacheradmins.group_names[0]]}
//                         alt="Shoes" />
//                     </figure>
//                     <div className="card-body text-black">
//                         <h2 className="card-title">
//                         {teacheradmins.group_names} Details
//                         <div className="badge badge-secondary">NEW</div>
//                         </h2>
//                         <p className="text-2xl font-bold">{teacheradmins.first_name} {teacheradmins.last_name}</p>
//                         <p className="text-xl text-gray-500">{teacheradmins.group_names}</p>
//                         <p className="text-xl text-gray-500">{teacheradmins.email}</p>
                        
//                         <div className="card-actions justify-end">
//                         {/* <div className="badge badge-outline">Edit</div>
//                         <div className="badge badge-outline">Save</div> */}
//                          <FaFacebook/>
//                          <FaInstagramSquare/>
//                          <BsTwitterX/>
//                          <FaLinkedin/>
                        
//                         </div>
//                     </div>
//                     </div>
//         </div>
//         )
//     )
//     }
//          </div>
        
//         </div>
      
    
       
        
// );
// };

// export default TeacherAdmin;

// import { useEffect, useState } from "react";
// import tariner1 from '../../assets/img/trainers/trainer-1.jpg';
// import tariner2 from '../../assets/img/trainers/trainer-2.jpg';
// import trainer3 from '../../assets/img/trainers/trainer-1-2.jpg';
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// const TeacherAdmin = () => {
//     const [teacherAdmin, setTeacherAdmin] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchTeam = async () => {
//             try {
//                 const response = await fetch('https://online-school-backend-1.onrender.com/api/v1/admin-teacher/');
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setTeacherAdmin(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchTeam();
//     }, []);

//     const images = {
//         'admin': tariner1,
//         'teacher': trainer3,
//         'teacher2': tariner2,
//     };

//     const getTrainerImage = (groupName) => {
//         return images[groupName] || tariner1; // Default to trainer1 if groupName not found
//     };

//     if (loading) {
//         return (
//             <div className="bg-gray-50 py-16 text-center text-gray-700"> {/* Changed background */}
//                 Loading team members...
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="bg-gray-50 py-16 text-center text-red-600"> {/* Changed background */}
//                 Error loading team: {error}
//             </div>
//         );
//     }

//     return (
//         <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"> {/* Changed background here */}
//             <div className="max-w-7xl mx-auto text-center mb-12">
//                 <h2 className="text-gray-900 text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
//                     Meet Our Expert Team
//                 </h2>
//                 <p className="text-gray-700 text-lg max-w-2xl mx-auto">
//                     Get to know the dedicated professionals who make our online learning platform exceptional.
//                 </p>
//             </div>

//             <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {teacherAdmin.map((member) => (
//                     <div
//                         key={member.email}
//                         className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
//                     >
//                         <div className="relative w-full pt-[100%] overflow-hidden">
//                             <img
//                                 src={getTrainerImage(member.group_names[0])}
//                                 alt={`${member.first_name} ${member.last_name}`}
//                                 className="absolute inset-0 w-full h-full object-cover"
//                             />
//                             <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                                 <div className="flex space-x-4">
//                                     <a href="#" className="text-white hover:text-emerald-300 transition-colors text-2xl">
//                                         <FaFacebookF />
//                                     </a>
//                                     <a href="#" className="text-white hover:text-emerald-300 transition-colors text-2xl">
//                                         <FaInstagram />
//                                     </a>
//                                     <a href="#" className="text-white hover:text-emerald-300 transition-colors text-2xl">
//                                         <FaXTwitter />
//                                     </a>
//                                     <a href="#" className="text-white hover:text-emerald-300 transition-colors text-2xl">
//                                         <FaLinkedinIn />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="p-6 text-center">
//                             <h3 className="text-2xl font-bold text-gray-900 mb-1">
//                                 {member.first_name} {member.last_name}
//                             </h3>
//                             <p className="text-emerald-600 text-lg font-semibold mb-3">
//                                 {member.group_names[0] ? member.group_names[0].charAt(0).toUpperCase() + member.group_names[0].slice(1) : 'Team Member'}
//                             </p>
//                             <p className="text-gray-600 text-sm mb-4">
//                                 {member.email}
//                             </p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default TeacherAdmin;


import { useEffect, useState } from "react";
import tariner1 from '../../assets/img/trainers/trainer-1.jpg';
import tariner2 from '../../assets/img/trainers/trainer-2.jpg';
import trainer3 from '../../assets/img/trainers/trainer-1-2.jpg';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Modern Twitter icon

const TeacherAdmin = () => {
    const [teacherAdmin, setTeacherAdmin] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const response = await fetch('https://online-school-backend-1.onrender.com/api/v1/admin-teacher/');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setTeacherAdmin(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTeam();
    }, []);

    // A more robust way to map images, considering potential missing keys
    const images = {
        'admin': tariner1,
        'teacher': trainer3,
        'teacher2': tariner2, // Assuming 'teacher2' is a specific group name
        // Add more mappings if other group_names have specific images
    };

    // Fallback image if no specific image is found
    const getTrainerImage = (groupName) => {
        // Ensure groupName is valid before accessing images[groupName]
        if (groupName && images[groupName]) {
            return images[groupName];
        }
        return tariner1; // Default to trainer1 if groupName not found or invalid
    };

    if (loading) {
        return (
            <div className="bg-gray-50 py-16 text-center text-gray-700">
                Loading team members...
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-gray-50 py-16 text-center text-red-600">
                Error loading team: {error}
            </div>
        );
    }

    return (
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-gray-900 text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                    Meet Our Expert Team
                </h2>
                <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                    Get to know the dedicated professionals who make our online learning platform exceptional.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teacherAdmin.map((member) => (
                    <div
                        key={member.email} // Using email as key, assuming it's unique
                        className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
                    >
                        {/* Image Section */}
                        <div className="relative w-full pt-[100%] overflow-hidden"> {/* 1:1 aspect ratio for profile images */}
                            <img
                                src={getTrainerImage(member.group_names && member.group_names.length > 0 ? member.group_names[0] : null)} // Pass first group name or null
                                alt={`${member.first_name} ${member.last_name}`}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Optional: Overlay for social icons on hover */}
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <div className="flex space-x-4">
                                    <a href="#" className="text-white hover:text-emerald-300 transition-colors text-2xl" aria-label="Facebook">
                                        <FaFacebookF />
                                    </a>
                                    <a href="#" className="text-white hover:text-emerald-300 transition-colors text-2xl" aria-label="Instagram">
                                        <FaInstagram />
                                    </a>
                                    <a href="#" className="text-white hover:text-emerald-300 transition-colors text-2xl" aria-label="Twitter">
                                        <FaXTwitter />
                                    </a>
                                    <a href="#" className="text-white hover:text-emerald-300 transition-colors text-2xl" aria-label="LinkedIn">
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                {member.first_name} {member.last_name}
                            </h3>
                            <p className="text-emerald-600 text-lg font-semibold mb-3">
                                {member.group_names && member.group_names.length > 0
                                    ? member.group_names[0].charAt(0).toUpperCase() + member.group_names[0].slice(1)
                                    : 'Team Member'}
                            </p>
                            <p className="text-gray-600 text-sm mb-4">
                                {member.email}
                            </p>
                            {/* You can add a short bio or description here if available in data */}
                            {/* <p className="text-gray-700 text-base leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeacherAdmin;
