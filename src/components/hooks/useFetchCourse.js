import { useEffect, useState } from 'react';
import ApiClient from '../service/ApiClient';

const useFetchCourse = () => {
    const [subjects,setSubjects] = useState([]);
    useEffect(()=>{
      ApiClient.get('/subjects').then(res=>setSubjects(res.data.results));
    },[])
    return subjects
};

export default useFetchCourse;