import { Route, Routes } from 'react-router';
import Home from '../pages/Home/Home';
import About from '../About';
import MainLayout from '../Layouts/MainLayout';
import ShopPage from '../components/shop/ShopPage';
// import Courses from '../components/courses/Courses';
// import Courses from '../courses/Courses';
const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route element={<MainLayout/>}>
                     <Route index element={<Home/>}></Route>
                     <Route path='courses' element={<ShopPage/>} />
                     {/* <Route path='courses' element={<Courses/>}></Route> */}
                     <Route path='about' element={<About/>}></Route>

                </Route>
                
            </Routes>
        </div>
    );
};

export default AppRoutes;