import { Star, Quote, ChevronLeft, ChevronRight, CalendarHeart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookAppointmentButton from './BookAppointButtopn';


const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Mother of 2',
    location: 'Kolkata',
    rating: 5,
    image: 'https://images.pexels.com/photos/31158645/pexels-photo-31158645.jpeg',
    text: 'Dr. Amit Roy has been our family pediatrician for over 3 years. His gentle approach with children and thorough explanations to parents make every visit comfortable. My kids actually look forward to seeing him!',
    highlight: 'Gentle approach with children'
  },
  {
    name: 'Rajesh Sharma',
    role: 'Father of 1',
    location: 'Salt Lake',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    text: 'When our newborn had feeding issues, Dr. Roy provided 24/7 support and guidance. His expertise in newborn care is exceptional. We couldn\'t have asked for a better pediatrician during those crucial early months.',
    highlight: 'Exceptional newborn care expertise'
  },
  {
    name: 'Priya Banerjee',
    role: 'Mother of 3',
    location: 'Park Street',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    text: 'Dr. Roy diagnosed my daughter\'s developmental delay early and connected us with the right specialists. His comprehensive approach to child health goes beyond just treating symptoms - he cares about the whole child.',
    highlight: 'Comprehensive child health approach'
  },
  {
    name: 'Amit Ghosh',
    role: 'Father of 2',
    location: 'New Town',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    text: 'The clinic environment is child-friendly and Dr. Roy\'s staff is incredibly supportive. Appointment scheduling is smooth and he always takes time to address all our concerns without rushing.',
    highlight: 'Child-friendly environment'
  },
  {
    name: 'Meera Das',
    role: 'Mother of 1',
    location: 'Ballygunge',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    text: 'As a first-time mother, I had countless questions and worries. Dr. Roy patiently answered every question and provided excellent guidance on vaccination, nutrition, and child development.',
    highlight: 'Patient guidance for new parents'
  },
  {
    name: 'Sunil Roy',
    role: 'Father of 2',
    location: 'Howrah',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    text: 'Dr. Roy\'s expertise in handling childhood emergencies is remarkable. When my son had a severe allergic reaction, his quick diagnosis and treatment saved the day. Truly a lifesaver!',
    highlight: 'Expert emergency care'
  }
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const navigate = useNavigate();

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden w-full"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6"
          >
            Patient Testimonials
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-4xl font-bold text-slate-800 mb-6"
          >
            They Can say  better than us   <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Dr. Amit Roy
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Real experiences from families who trust Dr. Roy with their children's health and well-being
          </motion.p>
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 relative">
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-1" />
                  ))}
                </div>
                
                <blockquote className="text-xl text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                
                <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  {testimonials[currentIndex].highlight}
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-100"
                />
                <h4 className="font-semibold text-slate-800 text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-slate-600 text-sm">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-slate-500 text-xs">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        {/* Testimonial Grid */}
       

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Trusted by Families Across Kolkata</h3>
            <p className="text-blue-100 text-lg">Join thousands of satisfied parents who trust Dr. Roy</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-blue-100">Happy Patients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Emergency Support</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Ready to Experience Exceptional Pediatric Care?
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Schedule a Consultation with Dr. Roy today and take the first step towards a healthier, brighter future for your child.
          </p>
               <BookAppointmentButton />

        </div>
      </div>
    </section>
  );
}