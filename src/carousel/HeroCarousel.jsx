import heroImage from "../assets/img/hero-bg.jpg";

const HeroCarousel = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-start overflow-hidden">
      {/* background image */}
      <img
        src={heroImage}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-contain md:object-cover md:object-center"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* text content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-24 text-white">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Learning Today,
          <br />
          Leading Tomorrow
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-200 drop-shadow-md">
          We are a team of talented designers making websites with Bootstrap
        </p>

        <button className="mt-8 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
