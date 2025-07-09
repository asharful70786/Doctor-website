import { Activity, Clock, MapPin, Phone } from 'lucide-react'
import React from 'react'

function Banner() {
  return (
    <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-800">Mon - Sat</div>
                <div className="text-sm text-slate-500">9:00 AM - 8:00 PM</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-800">+91 9876543210</div>
                <div className="text-sm text-slate-500">24/7 Emergency</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-800">New Garia, Kolkata</div>
                <div className="text-sm text-slate-500">Easy Parking Available</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-800">Online Consultation</div>
                <div className="text-sm text-slate-500">Video & Chat Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Banner