import NavigationBar from "../components/NavigationBar";
import FooterSection from "../components/FooterSection";

const Layout = ({children}) => {

  return(
      <>
          <NavigationBar/>
          <div className="mx-auto xl:max-w-screen-xl md:max-w-screen-md">
              {children}
          </div>
          <div className='w-full fixed bottom-0'>
              <FooterSection/>
          </div>
      </>
  );
}

export default Layout;
