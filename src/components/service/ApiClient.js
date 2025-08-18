import axios from "axios";


export default axios.create({
    // baseURL:"http://127.0.0.1:8000/api/v1",
    // http://localhost:5173/dashboard/order
    baseURL:"https://online-school-backend-1.onrender.com/api/v1",
})