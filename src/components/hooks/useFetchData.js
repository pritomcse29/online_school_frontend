import { useEffect, useState } from 'react';
import ApiClient from '../service/ApiClient';

const useFetchData = (currentPage, priceRange,selectedSubjects) => {
    const [courses, setCourses] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchCourses = async () => {
            const url = `courses/?price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentPage}&id=${selectedSubjects}`;
            try {
                const res = await ApiClient.get(url);
                setCourses(res.data.results);
                setTotalPages(Math.ceil(res.data.count / res.data.results.length));
            } catch (error) {
                console.error('Failed to fetch courses:', error);
            }
        };

        fetchCourses();
    }, [currentPage, priceRange,selectedSubjects]);

    return { courses, totalPages, priceRange};
};

export default useFetchData;
// import React, { useEffect, useState } from 'react';
// import ApiClient from '../service/ApiClient';

// const useFetchData = (currentPage,priceRange) => {
//     const [courses,setCourses] = useState([])
//     const [totalPages,setTotalPages] = useState(0)
//      useEffect(()=>{
//      fetchProducts()

//     },[currentPage])

//     // /products/?price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentPage}&category_id=${selectedCategory}&search=${searchQuery}&ordering=${sortOrder}

//     const url = `courses/?price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentPage}`
//     const fetchProducts =()=>{
//             // ApiClient.get('/courses/')
//             ApiClient.get(url)
//             // ApiClient.get(`courses/?page=${currentPage}`)
           
//             .then(res=>
//             {
//                 setCourses(res.data.results);
//                 setTotalPages(Math.ceil(res.data.count/res.data.results.length))
//             }
                
            
//             )

//     }      

//     return {courses,totalPages,priceRange}
// };

// export default useFetchData;