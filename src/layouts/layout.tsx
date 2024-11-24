import NavigationBar from "../components/NavigationBar";
import FooterSection from "../components/FooterSection";
import {Toaster} from "@/components/ui/toaster";

const Layout = ({children}) => {

  return(
      <>
          <NavigationBar/>
          <Toaster />
          <div className="mx-auto xl:max-w-screen-xl md:max-w-screen-md">
              {children}
          </div>
          <div className='w-full sticky bottom-0'>
              <FooterSection/>
          </div>
      </>
  );
}

export default Layout;
