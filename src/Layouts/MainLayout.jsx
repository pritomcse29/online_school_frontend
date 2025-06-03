import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import { Outlet } from "react-router";
const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
             <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;