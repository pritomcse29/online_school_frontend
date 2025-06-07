import CourseItem from "./CourseItem";

const CourseList = ({courses}) => {
    
    return (
 
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               {courses.map((course)=>(
          
                <CourseItem course={course} key={course.id}></CourseItem>
            ))}
        </div>
     
    );
};

export default CourseList;