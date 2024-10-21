import './Carousel.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import chef1 from "../assets/chef1.png";
import chef2 from "../assets/chef2.png";
import chef3 from "../assets/chef3.png";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const CarouselSlider = () => {
    return(
        <>
            <Carousel
                responsive={responsive}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={5000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
            >
                <figure className="snip1390">
                    <img src={chef1}
                         alt="profile-sample3" className="profile"/>
                    <figcaption>
                        <h1 className="text-white text-2xl font-bold">Oliva Perera</h1>
                        <h2 className="text-white text-xl font-bold">Head Chef</h2>
                        <h2 className="text-white text-xl font-bold">Blue Ocean Hotel</h2>
                        <blockquote>
                            "Marcus Fish Supply is a great place to find fresh seafood at reasonable prices. I've compared their prices to other local fish markets, and they consistently offer competitive deals. The quality of the fish is excellent, and I've never had any issues with spoilage. I highly recommend this place to anyone looking for a good value on seafood."
                        </blockquote>
                    </figcaption>
                </figure>
                <figure className="snip1390 gap-1"><img
                    src={chef3} alt="profile-sample5"
                    className="profile"/>
                    <figcaption>
                        <h1 className="text-white text-2xl font-bold">Gordon Norman</h1>
                        <h2 className="text-white text-xl font-bold">Head Chef</h2>
                        <h2 className="text-white text-xl font-bold">Jetwings LunuMirisa</h2>
                        <blockquote>
                            "I appreciate that Marcus Fish Supply is committed to sustainable seafood practices. They source their fish from responsible suppliers and are transparent about their sourcing methods. This is important to me as a consumer, and it gives me peace of mind knowing that I'm supporting a business that cares about the environment."
                        </blockquote>
                    </figcaption>
                </figure>

                <figure className="snip1390 gap-1"><img
                    src={chef2} alt="profile-sample6"
                    className="profile"/>
                    <figcaption>
                        <h1 className="text-white text-2xl font-bold">Evan White</h1>
                        <h2 className="text-white text-xl font-bold">Head Chef</h2>
                        <h2 className="text-white text-xl font-bold">Jetwings Restaurant</h2>
                        <blockquote>
                            "I've been a loyal customer of Marcus Fish Supply for years, and I've never been disappointed. Their seafood is consistently fresh and high-quality. The variety they offer is impressive, from classic favorites like salmon and shrimp to more exotic options. The staff is always friendly and helpful, and they go out of their way to ensure customer satisfaction."
                        </blockquote>
                    </figcaption>
                </figure>
                <figure className="snip1390 hover"><img
                    src={chef3} alt="profile-sample5"
                    className="profile"/>
                    <figcaption>
                        <h1 className="text-white text-2xl font-bold">Chris Fernando</h1>
                        <h2 className="text-white text-xl font-bold">Head Chef</h2>
                        <h2 className="text-white text-xl font-bold">Hotel LunuMirisa</h2>
                        <blockquote>
                            "As someone who is new to cooking with seafood, I found Marcus Fish Supply to be incredibly helpful. The staff was patient and knowledgeable, and they were able to recommend some great recipes for beginners. I've had a lot of success with their products, and I've learned a lot about how to cook and prepare different types of fish."
                        </blockquote>
                    </figcaption>
                </figure>
            </Carousel>
        </>
    );
}

export default CarouselSlider;
