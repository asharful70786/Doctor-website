import { Calendar, Globe, MapPin, Users } from 'lucide-react'
import React from 'react'

function PerSonalStory() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">My Journey in Medicine</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  My passion for pediatric medicine began during my childhood in Kolkata, where I witnessed 
                  the profound impact a caring doctor could have on a child's life. This early inspiration 
                  led me to pursue medicine with a clear vision: to become the kind of doctor who not only 
                  treats illnesses but also brings comfort and hope to young patients and their families.
                </p>
                <p>
                  After completing my MBBS from Medical College Kolkata in 2008, I specialized in Pediatrics 
                  at AIIMS Delhi. The rigorous training there shaped my approach to medicine - combining 
                  evidence-based treatment with compassionate care. I believe that healing begins with 
                  understanding, and every child deserves to be heard and cared for with patience and kindness.
                </p>
                <p>
                  Over the past 15 years, I've had the privilege of caring for thousands of children, 
                  from newborns taking their first breaths to teenagers navigating the challenges of 
                  adolescence. Each patient has taught me something new about resilience, hope, and 
                  the incredible strength of the human spirit.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">My Philosophy</h3>
              <blockquote className="text-lg text-slate-700 italic leading-relaxed">
                "Every child is unique, and their healthcare should be too. I believe in treating not 
                just the condition, but the whole child - understanding their fears, celebrating their 
                bravery, and working closely with families to ensure the best possible outcomes."
              </blockquote>
              <div className="mt-4 text-right text-slate-600">- Dr. Amit Roy</div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Main Photo */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dr. Amit Roy in his clinic"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Quick Facts */}
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-600">Practicing since 2008</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-600">Based in Kolkata, West Bengal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-600">Treated over 5,000 children</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-600">Fluent in Bengali, Hindi & English</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default PerSonalStory