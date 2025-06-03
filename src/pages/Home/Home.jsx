import HeroCarousel from "../../carousel/HeroCarousel";
import AboutUs from "../../components/carousel/AboutUs";
import AuthorSection from "../../components/carousel/AuthorSection";
import Hero from "./Hero";

const Home = () => {
    return (
        <div>
           <HeroCarousel/>
           <AboutUs/>
           <AuthorSection/>
        </div>
    );
};

export default Home;