import LandingPage from "./Landingpage";
import Banner from "./Banner";

import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import ContactUS from "../components/Contact";
import Location from "../components/Location";
import FloatingButtons from "../components/FloatingButton";
import Appointment from "../components/Appointment";
import Gallery from "../components/Gallery";






function Homepage() {
  return (
    <div className="bg-slate-50 text-slate-800 font-inter antialiased w-full">
       <LandingPage />
       <FloatingButtons />
       <Banner />
      {/* <About /> */}
        <Services />       
        <ContactUS />
        <Gallery />
         <Testimonial />
       
         {/* <Appointment /> */}
         <Location />     
      
    </div>
  );
}

export default Homepage ;