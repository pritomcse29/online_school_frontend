import { useEffect, useState } from "react";
import ApiClient from "../service/ApiClient";
import CourseList from "./CourseList";
import FIlterSection from "./FIlterSection";
import Pagination from "./Pagination";


const ShopPage = () => {
    const [courses,setCourses] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const [totalPages,setTotalPages] = useState(0)
     useEffect(()=>{
     fetchProducts()

    },[currentPage])
    const fetchProducts =()=>{
            // ApiClient.get('/courses/')
            ApiClient.get(`courses/?page=${currentPage}`)
           
            .then(res=>
            {
                setCourses(res.data.results);
                setTotalPages(Math.ceil(res.data.count/res.data.results.length))
            }
                
            
            )

    }
   
    return (
        <div className="bg-white px-8">
            <FIlterSection/>
         <CourseList courses={courses}/>
         <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={setCurrentPage}/>
         
         
        </div>
    );
};

export default ShopPage;