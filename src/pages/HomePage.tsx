import CarouselSlider from "../components/Carousel";
import HeroSection from "../components/HeroSection";
import AnalyticsSection from "../components/AnalyticsSection";

const HomePage = () => {
  return(
    <>
        <div className="mx-auto xl:max-w-screen-xl md:max-w-screen-md">
            <HeroSection/>
            <div className="mt-12 p-3 mx-auto w-4/5 h-[114px] bg-[#195973] flex items-center justify-center text-white text-xl font-bold gap-5 border border-black">
                <div className="text-center">Sea food family Restaurant</div>
                <div className="text-center">Blue Ocean Hotel</div>
                <div className="text-center">Jetwings Restaurant</div>
                <div className="text-center">Katagasma Restaurant</div>
                <div className="text-center">Hotel LunuMirisa</div>
            </div>
            <AnalyticsSection/>
            <div className="mt-4 mx-auto text-center font-bold text-6xl mt-12">Read What Other<br/> have to Say</div>
            <CarouselSlider/>
        </div>
    </>
  );
}

export default HomePage;
