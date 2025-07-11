import React, { useState } from 'react';
import {
  Baby,
  Heart,
  Shield,
  Brain,
  Activity,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Calendar,
  Star,
  Thermometer,
  Eye,
  Ear,
  Pill,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 1,
    icon: Baby,
    title: "Newborn & Infant Care",
    description: "Comprehensive care for your newborn from birth to 2 years",
    features: [
      "Newborn health assessments",
      "Feeding guidance & lactation support",
      "Growth & weight monitoring",
      "Sleep pattern guidance",
      "Umbilical cord care",
      "Jaundice management"
    ],
    price: "₹800 - ₹1,200",
    duration: "45-60 mins",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: 2,
    icon: Shield,
    title: "Vaccination & Immunization",
    description: "Complete immunization schedule as per IAP guidelines",
    features: [
      "Birth to 18 years vaccination",
      "Travel vaccination consultation",
      "Vaccine schedule planning",
      "Side effects management",
      "Digital vaccination records",
      "Reminder notifications"
    ],
    price: "₹500 - ₹2,500",
    duration: "20-30 mins",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 3,
    icon: Activity,
    title: "Growth & Development",
    description: "Monitor your child's physical and cognitive development",
    features: [
      "Growth chart monitoring",
      "Developmental milestone tracking",
      "Early intervention screening",
      "Behavioral assessment",
      "Learning disability evaluation",
      "Nutritional counseling"
    ],
    price: "₹1,000 - ₹1,500",
    duration: "60-90 mins",
    image: "https://images.pexels.com/photos/6203462/pexels-photo-6203462.jpeg",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 4,
    icon: Thermometer,
    title: "Acute Illness Management",
    description: "Expert treatment for common childhood illnesses",
    features: [
      "Fever & infection treatment",
      "Respiratory illness care",
      "Gastrointestinal problems",
      "Skin conditions & allergies",
      "Ear, nose & throat issues",
      "Emergency consultation"
    ],
    price: "₹600 - ₹1,000",
    duration: "30-45 mins",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-sky-500 to-blue-600"
  },
  {
    id: 5,
    icon: Heart,
    title: "Pediatric Cardiology",
    description: "Specialized care for heart conditions in children",
    features: [
      "Congenital heart disease screening",
      "Heart murmur evaluation",
      "ECG & Echocardiography",
      "Chest pain assessment",
      "Exercise tolerance testing",
      "Cardiac medication management"
    ],
    price: "₹1,500 - ₹2,500",
    duration: "60-75 mins",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-blue-600 to-violet-600"
  },
  {
    id: 6,
    icon: Brain,
    title: "Adolescent Health",
    description: "Comprehensive healthcare for teenagers (10-18 years)",
    features: [
      "Puberty & growth concerns",
      "Mental health screening",
      "Nutritional guidance",
      "Sports medicine consultation",
      "Acne & skin care",
      "Confidential counseling"
    ],
    price: "₹800 - ₹1,200",
    duration: "45-60 mins",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-green-500 to-emerald-500"
  }
];

const specialServices = [
  { icon: Eye, title: "Vision Screening", description: "Early detection of vision problems" },
  { icon: Ear, title: "Hearing Assessment", description: "Comprehensive hearing evaluation" },
  { icon: Pill, title: "Allergy Testing", description: "Food and environmental allergy testing" },
  { icon: Users, title: "Family Counseling", description: "Parenting guidance and family support" }
];

function Modal({ service, onClose }) {
  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-white p-6 rounded-xl max-w-md w-full relative"
          >
            <button onClick={onClose} className="absolute top-2 right-2 text-slate-600 hover:text-black">
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
              {service.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={service.image} className="object-cover w-full h-full" alt={service.title} />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-4 right-4 backdrop-blur-sm bg-white/80 px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-slate-800">{service.price}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800 mb-1">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-3">{service.description}</p>
                <div className="text-slate-500 text-xs flex justify-between items-center mb-3">
                  <span className="flex items-center"><Clock className="w-3 h-3 mr-1" />{service.duration}</span>
                  <span className="flex items-center"><Star className="w-3 h-3 mr-1 text-yellow-400 fill-yellow-400" />4.9/5</span>
                </div>
                <ul className="space-y-1 text-sm text-slate-600 mb-3">
                  {service.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />{f}</li>
                  ))}
                </ul>
                {service.features.length > 3 && (
                  <button onClick={() => setSelectedService(service)} className="text-blue-600 text-sm hover:underline">+{service.features.length - 3} more services</button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <Modal service={selectedService} onClose={() => setSelectedService(null)} />
      </div>
    </section>
  );
}
