import defaultImage from "../../assets/img/noContent.png"

const CourseItem = ({course}) => {
      return (      
                <div className="card bg-white w-5/6 mb-4 shadow-sm p-4" key={course.id}>
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
                    <div className="card-body text-gray-500">
                        <h2 className="card-title">{course.name}</h2>
                        <p>{course.price}</p>
                        <p>{course.duration}</p> 
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-md">Enroll Now</button>               
                    </div>

            </div>   
        );
};

export default CourseItem;