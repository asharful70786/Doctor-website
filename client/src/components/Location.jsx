import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaBus,
  FaTrain,
  FaCar,
} from "react-icons/fa";

function Location() {
  return (
    <div className="bg-[#f5f8ff] py-20 px-4 lg:px-10">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-slate-800">Clinic Location</h1>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mt-2" />
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            Visit our pediatric clinic or connect anytime. We’re open 7 days a week with expert care from Dr. Amit Roy.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info Card */}
          <div className="rounded-2xl shadow-xl bg-white overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-5">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <FaMapMarkerAlt className="text-yellow-300" /> Clinic Info
              </h2>
            </div>
            <div className="p-6 space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600"><FaMapMarkerAlt /></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    Dr. Amit Roy Clinic<br />
                    112 Wellness Street, Sector 5<br />
                    Salt Lake, Kolkata – 700091
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600"><FaPhone /></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Contact</h3>
                  <p className="text-gray-600 mt-1">
                    Phone: +91 90000 12345<br />
                    Email: clinic.demo@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600"><FaClock /></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Availability</h3>
                  <p className="text-gray-600 mt-1">Open Daily: 8:00 AM – 9:00 PM</p>
                </div>
              </div>
              <a
                href="tel:+919000012345"
                className="w-full inline-flex justify-center items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow hover:from-indigo-600 hover:to-blue-600 transition"
              >
                <FaPhone /> Call Now
              </a>
            </div>
          </div>

          {/* Map Card */}
          <div className="rounded-2xl shadow-xl bg-white overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-5">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <FaMapMarkerAlt className="text-yellow-300" /> Location Map
              </h2>
            </div>
            <div className="p-1">
              <iframe
                title="Clinic Location"
                className="w-full h-80 rounded-b-2xl"
                src="https://www.google.com/maps?q=Salt+Lake+Sector+5+Kolkata+700091&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* How to Reach Section */}
        <div className="bg-white shadow-xl rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">How To Reach Us</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaTrain className="text-blue-500 text-xl" />,
                label: "By Metro",
                desc: "Salt Lake Sector V Metro — 1 km away",
              },
              {
                icon: <FaBus className="text-blue-500 text-xl" />,
                label: "By Bus",
                desc: "Bus Routes: 215A, DN4, VS1, AC20",
              },
              {
                icon: <FaCar className="text-blue-500 text-xl" />,
                label: "Parking",
                desc: "Dedicated on-site parking available",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-blue-50 p-6 rounded-xl flex flex-col items-center shadow-sm"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-800">{item.label}</h4>
                <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
