// import React, { useEffect, useState } from 'react';
// import CountUp from 'react-countup';
// const TotalCount = () => {
//     const [counts,setCounts] = useState([])
//     const [error, setError] = useState(null);
//    useEffect(() => {
//     const fetchCounts = async () => {
//       try {
//         const response = await fetch('https://online-school-backend-1.onrender.com/api/v1/count-view/');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setCounts(data);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchCounts();
//   }, []); // Empty dependency array for one-time fetch

//   if (error) {
//     return <div className="text-red-500 text-center">Error: {error}</div>;
//   }
//     return (
//         <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2  lg:mb-1 sm:mb-8 py-8 px-8 text-center bg-white shadow-fuchsia-50'>
         
//            <div>
  
       
//              {counts.Total_Course && (
                 
                 
//                       <h3 className="text-emerald-500 text-5xl font-bold">
//             <CountUp
//               start={1}
//               end={counts.Total_Course}
//               duration={2.5}
//               aria-live="polite"
//               aria-label={`${counts.Total_Course} courses`}
//             />
//           </h3>
                   
//                 )}
//                 <p className='text-gray-400 text-2xl '>Courses</p>
//            </div>
//            <div>
//             {counts.Total_Subject && (
//                     <h3 className='text-emerald-500 text-5xl font-bold'>
//                         <CountUp
//                         start={1}
//                         end={counts.Total_Subject}
//                         duration={2.5}
//                         aria-live="polite"
//                         aria-label={`${counts.Total_Subject} subjects`}
//                         />
                        
//                     </h3>
//                 )}
//                  <p className='text-gray-400 text-2xl '>Subjects</p>
//            </div>
//            <div>
//              {counts.Total_Mentor && (
//                     <h3 className='text-emerald-500 text-5xl font-bold'>
//                        {/* <span>{counts.Total_Mentor}</span>  */}
//                        <CountUp
//                        start={1}
//                        end={counts.Total_Mentor}
//                        duration={2.5}
//                        aria-live = "polite"
//                        aria-label = {`${counts.Total_Mentor} mentors`}
//                        />
//                     </h3>
//                 )}
//                 <p className='text-gray-400 text-2xl '>Mentors</p>
//            </div>
//            <div>
//              {counts.Total_Student && (
//                     <h3 className='text-emerald-500 text-5xl font-bold'>
//                        {/* <span>{counts.Total_Student}</span>  */}
//                        <CountUp
//                        start={1}
//                        end={counts.Total_Student}
//                        duration={2.5}
//                        aria-live = "polite"
//                        aria-label = {`${counts.Total_Student} students`}
//                        />
//                     </h3>
//                 )}
//                 <p className='text-gray-400 text-2xl'>Students</p>
//            </div>
           
           
//         </div>
//     );
// };

// export default TotalCount;


import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const TotalCount = () => {
    const [counts, setCounts] = useState({
        Total_Course: 0,
        Total_Subject: 0,
        Total_Mentor: 0,
        Total_Student: 0,
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                // const response = await fetch('http://127.0.0.1:8000/api/v1/count-view/');

                const response = await fetch('https://online-school-backend-1.onrender.com/api/v1/count-view/');
                if (!response.ok) {  
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setCounts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCounts();
    }, []); // Empty dependency array for one-time fetch

    if (loading) {
        return <div className="flex justify-center items-center py-12 text-gray-600">Loading counts...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center py-12">Error: {error}</div>;
    }

    // Array of objects for easier mapping and consistency
    const stats = [
        { label: 'Courses', value: counts.Total_Course },
        { label: 'Subjects', value: counts.Total_Subject },
        { label: 'Mentors', value: counts.Total_Mentor },
        { label: 'Students', value: counts.Total_Student },
    ];

    return (
        <section className="bg-gradient-to-r from-emerald-50 to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-12 animate-fade-in-up">
                    Our Achievements
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 ease-in-out border border-emerald-100"
                        >
                            <h3 className="text-6xl font-extrabold text-emerald-600 mb-2">
                                <CountUp
                                    start={0}
                                    end={stat.value}
                                    duration={2.75}
                                    separator=","
                                    aria-live="polite"
                                    aria-label={`${stat.value} ${stat.label.toLowerCase()}`}
                                    enableScrollSpy={true} // Only count when element is visible
                                    scrollSpyOnce={true} // Count only once
                                />
                            </h3>
                            <p className="text-gray-600 text-xl font-semibold uppercase tracking-wide">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TotalCount;