import {Routes , Route} from "react-router-dom"
import "./App.css"
import NavBar from "./components/NavBar"

import Homepage from "./Pages/HomePage"
import About from "./Pages/About"
import Specializations from "./components/Specializations"
import Testimonial from "./components/Testimonial"
import Services from "./components/Services"
import ContactUS from "./components/Contact"
import Footer from "./components/Footer"
import Ask_Ai_Doctor from "./components/Ask-Ai-Doctor"
import Appointment from "./components/Appointment"
function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center pt-17">
      <NavBar />
    
      <Routes >
        <Route path="/" element={<Homepage />} />
        <Route path="/about-Doctor" element={<About />} />
        <Route path="/specialties" element={<Specializations/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<ContactUS/>} />
        <Route path="/appointment" element={<Appointment/>} />
        <Route  path="/ai-doctor" element={<Ask_Ai_Doctor/>} />
        <Route path="/testimonials" element={<Testimonial/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App