import { useEffect, useState } from 'react';
import defaultImage from '../../assets/img/noContent.png'
const Subject = () => {
    const [subjects,setSubjects] = useState([])
    useEffect(()=>{
        
        fetch('http://127.0.0.1:8000/api/v1/subjects/')
        .then(res=>res.json())
        .then(data=>setSubjects(data.results))
    },[])
    return (
        <div className='mt-8'>
                <div className='flex justify-between px-8 '>
                    <h1 className='text-2xl text-emerald-500'>All subjects</h1>
                    <h1 className='text-2xl text-emerald-500'>Get all</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center py-8 mb-8'>
                    
                    {subjects.map(subject=>(
                        <div className="card bg-white w-5/6 mb-4 shadow-sm" key={subject.id}>
                <figure>
                       {subject.subjectImage && subject.subjectImage.length>0?(
                                                subject.subjectImage.map((subjectImage)=>(
                                                   <div key={subjectImage.id}>
                                                <img
                                                src={subjectImage.image || defaultImage}
                                                alt={subject.name} className='w-full'/>
                                                  </div>
                                                ))):
                                                (<img
                                                src={defaultImage}
                                                alt={subject.name} className='w-full'/>)
                                              }
                    {/* <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" /> */}
                </figure>
                <div className="card-body text-gray-500">
                    <h2 className="card-title">{subject.title}</h2>
                    <p>{subject.slug}</p>
                    {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
  
        </div>

        ))}
        </div>
        </div>

    );
};


export default Subject;