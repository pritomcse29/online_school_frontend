import { useEffect, useState } from "react";
import tariner1 from '../../assets/img/trainers/trainer-1.jpg'
import tariner2 from '../../assets/img/trainers/trainer-2.jpg'
import trainer3 from '../../assets/img/trainers/trainer-1-2.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
const TeacherAdmin = () => {
    const [teacherAdmin,setTeacherAdmin] = useState([])
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/v1/admin-teacher/')
        .then(res=>res.json())
        .then(data=>setTeacherAdmin(data))
    },[]) 
    const images = {
        'admin':tariner1,
        'teacher': trainer3,
        'teacher2': tariner2
    }
       
    
    return (
        
        <div className="p-8">
            <h1 className="text-4xl text-black font-bold mb-8">Meet With Our Team</h1>
   <div className="flex justify-evenly flex-wrap ">
            {teacherAdmin.map((teacheradmins)=>(
        <div key={teacheradmins.email} >
       
                <div className="card bg-white  w-96 shadow-sm mb-8 lg:mb-0 md:mb-8">
                    <figure>
                        <img
                        src={images[teacheradmins.group_names[0]]}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body text-black">
                        <h2 className="card-title">
                        {teacheradmins.group_names} Details
                        <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className="text-2xl font-bold">{teacheradmins.first_name} {teacheradmins.last_name}</p>
                        <p className="text-xl text-gray-500">{teacheradmins.group_names}</p>
                        <p className="text-xl text-gray-500">{teacheradmins.email}</p>
                        
                        <div className="card-actions justify-end">
                        {/* <div className="badge badge-outline">Edit</div>
                        <div className="badge badge-outline">Save</div> */}
                         <FaFacebook/>
                         <FaInstagramSquare/>
                         <BsTwitterX/>
                         <FaLinkedin/>
                        
                        </div>
                    </div>
                    </div>
        </div>
        )
    )
    }
         </div>
        
        </div>
      
    
       
        
);
};

export default TeacherAdmin;