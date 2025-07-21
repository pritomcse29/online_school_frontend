import {  useState } from "react";
import ApiClient from "../service/ApiClient";
import CourseList from "./CourseList";
import FIlterSection from "./FIlterSection";
import Pagination from "./Pagination";
import useFetchData from "../hooks/useFetchData";
import useFetchCourse from "../hooks/useFetchCourse";


const ShopPage = () => {
    const [currentPage,setCurrentPage] = useState(1)
    const [priceRange,setPriceRange] = useState([0,1000])
    const [selectedSubjects,setSelectedSubjects] = useState("")

    const {courses,totalPages} = useFetchData(currentPage,priceRange,selectedSubjects)
    const handlePriceRange=(index,value)=>{
         setPriceRange((prev)=>{
            const newRange = [...prev];
            newRange[index] = value;
            return newRange;

         })
         setCurrentPage(1)
    }

    const subjects = useFetchCourse()
    // const [courses,setCourses] = useState([])
   
    // const [totalPages,setTotalPages] = useState(0)
    //  useEffect(()=>{
    //  fetchProducts()

    // },[currentPage])
    // const fetchProducts =()=>{
    //         // ApiClient.get('/courses/')
    //         ApiClient.get(`courses/?page=${currentPage}`)
           
    //         .then(res=>
    //         {
    //             setCourses(res.data.results);
    //             setTotalPages(Math.ceil(res.data.count/res.data.results.length))
    //         }
                
            
    //         )

    // }
   
    return (
        <div className="bg-white px-8">
         <FIlterSection 
         handlePriceRange={handlePriceRange}
         priceRange={priceRange}
         subjects={subjects} 
         selectedSubjects={selectedSubjects} 
         handleSubjectsChange={setSelectedSubjects}/>
         <CourseList courses={courses} />
         <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={setCurrentPage}/>
         
         
        </div>
    );
};

export default ShopPage;