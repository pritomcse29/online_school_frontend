import HeroCarousel from "../../carousel/HeroCarousel";
import AboutUs from "../../components/carousel/AboutUs";
import AuthorSection from "../../components/carousel/AuthorSection";
import Courses from "../../components/courses/Courses"
import Subject from "../../components/courses/Subject";
import TeacherAdmin from "../../components/TeacherAdminShow.jsx/TeacherAdmin";
import TotalCount from "../../components/totalcount/TotalCount";
import Hero from "./Hero";

const Home = () => {
    return (
        <div className="bg-white">
           <HeroCarousel/>
           <AboutUs/>
           <TotalCount/>
           <AuthorSection/>
           <Subject/>
           <Courses/>
           <TeacherAdmin/>
        </div>
    );
};

export default Home;