import { Phone, Stethoscope, Menu, X, Bot } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-Doctor", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/specialties", label: "Specialties" },
    { href: "/testimonials", label: "Reviews" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-slate-200 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg md:text-xl text-slate-800">Dr. Amit Roy</span>
              <p className="text-xs md:text-sm text-slate-500">Pediatric Specialist</p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                className="text-slate-600 hover:text-emerald-600 transition-colors duration-200 font-medium"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/ai-doctor">
              <Button
                variant="outline"
                className="border-blue-200 text-blue-700 hover:bg-blue-50 transition-all duration-200"
              >
                <Bot className="w-4 h-4 mr-2" />
                Ask AI Doctor
              </Button>
            </Link>

            <Link to="/appointment">
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg transition-all duration-200">
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Animated) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-2 border-t pt-4 pb-6 flex flex-col space-y-4"
            >
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  to={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-emerald-600 font-medium transition-colors px-2"
                >
                  {label}
                </Link>
              ))}

              <div className="flex flex-col mt-4 space-y-2 px-2">
                <Link to="/ai-doctor" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="border-blue-200 text-blue-700 hover:bg-blue-50 w-full"
                  >
                    <Bot className="w-4 h-4 mr-2" />
                    Ask AI Doctor
                  </Button>
                </Link>

                <Link to="/appointment" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg w-full">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default NavBar;
