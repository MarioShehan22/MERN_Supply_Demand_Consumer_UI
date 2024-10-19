import Analytical from "../assets/Analytical.png";
import {Link} from "react-router-dom";

const AnalyticsSection = () => {
  return(
      <>
          <div className="flex mt-12">
              <div className="h-auto w-[680px] bg-center bg-no-repeat bg-cover">
                  <img src={Analytical} alt="Hero Image" height={385} width={580}/>
              </div>
              <div className="ml-1 xl:pt-9">
                  <div className="xl:text-5xl lg:text-4xl md:text-3xl font-semibold leading-normal">
                      We deliver fresh fish<br/>
                      to you
                  </div>
                  <p className="xl:mt-4 md:mt-2 text-gray-500 xl:text-base md:text-sm leading-relaxed">
                      We deliver fresh fish to you within 24 hours <br/>of being caught from the sea.
                  </p>
                  <div className="xl:mt-8 md:mt-3 flex justify-center border-current">
                      <Link
                          to="/product-page"
                          type="button"
                          className="rounded-lg bg-[#63E4F2] xl:w-52 md:w-40 px-4 py-2 text-center xl:text-2xl md:text-lg font-medium text-white hover:bg-[#0FA8B8] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Buy Product
                      </Link>
                  </div>
              </div>
          </div>
      </>
  );
}
export default AnalyticsSection;
