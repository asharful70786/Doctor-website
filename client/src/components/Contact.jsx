import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const ContactUS = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    { icon: FaEnvelope, label: "Email", value: "clinic.demo@gmail.com" },
    { icon: FaPhoneAlt, label: "Call", value: "+91 7076091389" },
    { icon: FaMapMarkerAlt, label: "Visit", value: "CoderCamp HQ\nShyamnagar, Kolkata" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const res = await fetch("https://coder-camp-server.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitStatus({ success: true, message: data.message || "Message sent!" });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else throw new Error(data.message || "Failed to send");
    } catch (err) {
      setSubmitStatus({ success: false, message: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-6 w-full">
      <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
           How  can Help you
          </h2>
          {contactInfo.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white shadow-lg p-4 rounded-xl border flex gap-4 items-start"
            >
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full text-white">
                <item.icon size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="font-semibold whitespace-pre-line">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-200 relative"
        >
          <h3 className="text-xl font-bold mb-2 text-indigo-600">Have an idea?</h3>
          <p className="mb-4 text-gray-600">Let’s build something awesome together.</p>
          {submitStatus && (
            <div className={`mb-4 p-3 rounded ${submitStatus.success ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700"}`}>
              {submitStatus.message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${errors.name ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${errors.email ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone (optional)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="3"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none resize-none ${errors.message ? "border-red-500" : "border-gray-300"}`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white py-2 rounded-lg font-semibold transition-all"
            >
              {isSubmitting ? "Sending..." : (
                <span className="flex items-center justify-center gap-2">
                  <FaPaperPlane className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  Send Message
                </span>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUS;
