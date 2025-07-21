// import { Route, Routes } from 'react-router';
// import Home from '../pages/Home/Home';
// import About from '../About';
// import MainLayout from '../Layouts/MainLayout';
// import ShopPage from '../components/shop/ShopPage';
// import Sidebar from '../components/dashboard/sidebar';
// import Cart from '../pages/Cart';
// import Login from '../pages/Home/Login';
// import Register from '../pages/Home/Register';
// import PrivateRoute from '../components/PrivateRoute';
// import ActivateAccount from '../components/Registration/ActivateAccount';
// import DashboardLayout from '../Layouts/DashboardLayout';
// import Dashboard from '../pages/Dashboard';
// import Profile from '../pages/Home/Profile';
// import CourseDetails from '../pages/CourseDetails';
// import CartItemList from '../components/cart/CartItemList';
// import Order from '../pages/Order';
// import AdminDashboard from '../components/dashboard/AdminDashboard';
// import TeacherDashboard from '../components/dashboard/TeacherDashboard';
// import useAuth from '../components/hooks/useAuth';
// // import TestSidebar from '../components/dashboard/TestSidebar';
// // import Courses from '../components/courses/Courses';
// // import Courses from '../courses/Courses';

// const AppRoutes = () => {
//     const {user} = useAuth()
//     const isAdmin = user?.groups?.include("admin")
//     const isStudent = user?.groups?.include("student")
//     const isTeacher = user?.groups?.include("teacher")
//     return (
//         <div>
//             <Routes>
//                 <Route element={<MainLayout/>}>
//                      <Route index element={<Home/>}></Route>
//                      <Route path='courses' element={<ShopPage/>} />
//                      {/* <Route path='courses' element={<Courses/>}></Route> */}
//                      <Route path='about' element={<About/>}></Route>
                    
//                      <Route path='cart' element={<Cart/>}></Route>
//                      <Route path='login' element={<Login/>}></Route>
//                      <Route path='register' element={<Register/>}></Route>
//                      {/* <Route path='testDashboard' element={<TestSidebar/>}></Route> */}
//                     <Route path='activate/:uid/:token' element={<ActivateAccount/>}></Route>
//                     < Route path='courses/:courseId' element={<CourseDetails/>}></Route>
//                       {/* <Route
//                     path='dashboard'
//                     element={
//                         <PrivateRoute>
//                             <Sidebar />
//                         </PrivateRoute>
//                     }
//                 /> */}
          


//                 </Route>

              
//          <Route  path="dashboard" element={
           
//             <PrivateRoute>
//                <DashboardLayout/>
//             </PrivateRoute>
            
//             }>
                
//            <Route index element={<Dashboard/>}></Route>
//            <Route path='profile' element={<Profile/>}></Route>
//            <Route path='cart' element={<Cart/>}></Route>
//            {isAdmin && (
// <Route path='admin-dashboard' element={<AdminDashboard/>}></Route>
//            )}
//             {isStudent && (
// <Route path='order' element={<Order/>}></Route>
//            )}
           
//             {isTeacher && (
// <Route path='teacher-dashboard' element={<TeacherDashboard/>}></Route>
//            )}
           

//            {/* <Route path='cart' element={<Cart/>}></Route> */}
//            {/* <Route path='profile' element={<Profile/>}></Route>
//            <Route path='cart' element={<Cart/>}></Route>
//            <Route path="orders" element={<Orders />} />
//            <Route path='payment/success/' element={PaymentSuccess}></Route> */}
        

//         </Route>

        
       
                
//             </Routes>
            
//         </div>
//     );
// };

// export default AppRoutes;


// import { Route, Routes } from 'react-router';
// import Home from '../pages/Home/Home';
// import About from '../About';
// import MainLayout from '../Layouts/MainLayout';
// import ShopPage from '../components/shop/ShopPage';
// import Cart from '../pages/Cart';
// import Login from '../pages/Home/Login';
// import Register from '../pages/Home/Register';
// import PrivateRoute from '../components/PrivateRoute';
// import ActivateAccount from '../components/Registration/ActivateAccount';
// import DashboardLayout from '../Layouts/DashboardLayout';
// import Dashboard from '../pages/Dashboard';
// import Profile from '../pages/Home/Profile';
// import CourseDetails from '../pages/CourseDetails';
// import Order from '../pages/Order';
// import AdminDashboard from '../components/dashboard/AdminDashboard';
// import TeacherDashboard from '../components/dashboard/TeacherDashboard';
// import useAuth from '../components/hooks/useAuth';

// const AppRoutes = () => {
//   const { user } = useAuth();
//   const groupNames = user?.groups?.map((g) => g.name?.toLowerCase()) || [];

//   const isAdmin = groupNames.includes("admin");
//   const isStudent = groupNames.includes("student");
//   const isTeacher = groupNames.includes("teacher");

//   return (
//     <Routes>
//       <Route element={<MainLayout />}>
//         <Route index element={<Home />} />
//         <Route path="courses" element={<ShopPage />} />
//         <Route path="about" element={<About />} />
//         <Route path="cart" element={<Cart />} />
//         <Route path="login" element={<Login />} />
//         <Route path="register" element={<Register />} />
//         <Route path="activate/:uid/:token" element={<ActivateAccount />} />
//         <Route path="courses/:courseId" element={<CourseDetails />} />
//       </Route>

//       <Route
//         path="dashboard"
//         element={
//           <PrivateRoute>
//             <DashboardLayout />
//           </PrivateRoute>
//         }
//       >
//         {/* <Route index element={<Dashboard />} /> */}
//         <Route path="profile" element={<Profile />} />
//         <Route path="cart" element={<Cart />} />

//         {isAdmin && <Route index element={<AdminDashboard />} />}
//         {isTeacher && <Route index element={<TeacherDashboard />} />}
//         {isStudent && <Route index element={<Order />} />}
//       </Route>
//     </Routes>
//   );
// };

// export default AppRoutes;


import { Route, Routes } from 'react-router';
import Home from '../pages/Home/Home';
import About from '../About';
import MainLayout from '../Layouts/MainLayout';
import ShopPage from '../components/shop/ShopPage';
import Cart from '../pages/Cart';
import Login from '../pages/Home/Login';
import Register from '../pages/Home/Register';
import PrivateRoute from '../components/PrivateRoute';
import ActivateAccount from '../components/Registration/ActivateAccount';
import DashboardLayout from '../Layouts/DashboardLayout';
import DashboardRedirect from './DashboardRedirect';
import Profile from '../pages/Home/Profile';
import CourseDetails from '../pages/CourseDetails';
import Order from '../pages/Order';
import AdminDashboard from '../components/dashboard/AdminDashboard';
import TeacherDashboard from '../components/dashboard/TeacherDashboard';
import PaymentSuccess from '../pages/PaymentSuccess';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<ShopPage />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="activate/:uid/:token" element={<ActivateAccount />} />
        <Route path="courses/:courseId" element={<CourseDetails />} />
      </Route>

      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<DashboardRedirect />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="admin-dashboard" element={<AdminDashboard />} />
        <Route path="teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="order" element={<Order />} />
        <Route path='payment/success/' element={<PaymentSuccess/>}></Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
