import { Button } from "@/components/ui/button";
import {
  Calendar,
  Star,
  Award,
  Users,
  Heart,
  Shield,
  Play,
} from "lucide-react";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <section id="home" className="relative  pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                <span>15+ Years of Excellence in Pediatric Care</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-800">
                Dr. Amit Roy
              </h1>

              <div className="space-y-2">
                <p className="text-xl md:text-2xl font-semibold text-emerald-700">
                  Pediatrician & Child Specialist
                </p>
                <p className="text-base md:text-lg text-slate-600">
                  MBBS, MD (Pediatrics), Fellowship in Neonatology
                </p>
              </div>

              <p className="text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                Providing compassionate, comprehensive healthcare for children from
                birth to adolescence. Your child's health, growth, and happiness is my
                mission.
              </p>
            </motion.div>

            {/* Achievement Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                ["15+", "Years Experience"],
                ["8000+", "Happy Families"],
                ["4.9★", "Patient Rating"],
                ["24/7", "Emergency Care"],
              ].map(([value, label], idx) => (
                <div
                  key={idx}
                  className="text-center p-4 bg-white rounded-2xl shadow-sm"
                >
                  <div className="text-3xl font-bold text-emerald-600">{value}</div>
                  <div className="text-sm text-slate-500 font-medium">{label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 text-lg shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Introduction
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-emerald-600" />
                <span className="text-sm text-slate-600">Licensed & Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-emerald-600" />
                <span className="text-sm text-slate-600">Trusted by 8000+ Families</span>
              </div>
            </div>
          </div>

          {/* Right Content - Doctor Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-6 md:p-8">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dr. Sahanaj Parveen"
                className="w-full h-96 rounded-2xl shadow-2xl object-cover"
              />
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-slate-100"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                </div>
                <div>
                  <div className="font-bold text-slate-800">4.9/5 Rating</div>
                  <div className="text-sm text-slate-500">1200+ Reviews</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-slate-100"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-800">8000+ Patients</div>
                  <div className="text-sm text-slate-500">Successfully Treated</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default LandingPage;
