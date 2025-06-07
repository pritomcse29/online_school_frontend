import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
const TotalCount = () => {
    const [counts,setCounts] = useState([])
    const [error, setError] = useState(null);
   useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/v1/count-view/');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCounts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCounts();
  }, []); // Empty dependency array for one-time fetch

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2  lg:mb-1 sm:mb-8 py-8 px-8 text-center bg-white shadow-fuchsia-50'>
         
           <div>
  
       
             {counts.Total_Course && (
                 
                 
                      <h3 className="text-emerald-500 text-5xl font-bold">
            <CountUp
              start={1}
              end={counts.Total_Course}
              duration={2.5}
              aria-live="polite"
              aria-label={`${counts.Total_Course} courses`}
            />
          </h3>
                   
                )}
                <p className='text-gray-400 text-2xl '>Courses</p>
           </div>
           <div>
            {counts.Total_Subject && (
                    <h3 className='text-emerald-500 text-5xl font-bold'>
                        <CountUp
                        start={1}
                        end={counts.Total_Subject}
                        duration={2.5}
                        aria-live="polite"
                        aria-label={`${counts.Total_Subject} subjects`}
                        />
                        
                    </h3>
                )}
                 <p className='text-gray-400 text-2xl '>Subjects</p>
           </div>
           <div>
             {counts.Total_Mentor && (
                    <h3 className='text-emerald-500 text-5xl font-bold'>
                       {/* <span>{counts.Total_Mentor}</span>  */}
                       <CountUp
                       start={1}
                       end={counts.Total_Mentor}
                       duration={2.5}
                       aria-live = "polite"
                       aria-label = {`${counts.Total_Mentor} mentors`}
                       />
                    </h3>
                )}
                <p className='text-gray-400 text-2xl '>Mentors</p>
           </div>
           <div>
             {counts.Total_Student && (
                    <h3 className='text-emerald-500 text-5xl font-bold'>
                       {/* <span>{counts.Total_Student}</span>  */}
                       <CountUp
                       start={1}
                       end={counts.Total_Student}
                       duration={2.5}
                       aria-live = "polite"
                       aria-label = {`${counts.Total_Student} students`}
                       />
                    </h3>
                )}
                <p className='text-gray-400 text-2xl'>Students</p>
           </div>
           
           
        </div>
    );
};

export default TotalCount;