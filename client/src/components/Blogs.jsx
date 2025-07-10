import React, { useState, useEffect } from 'react'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

function Blogs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.querySelector('.blogs-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "Essential Vaccination Schedule for Children",
      excerpt: "A guide for parents to stay on top of child immunizations.",
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/4769135/pexels-photo-4769135.jpeg'
    },
    {
      id: 2,
      title: "Nutrition Guidelines for Growing Children",
      excerpt: "Tips on building healthy eating habits and balanced meals.",
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/32828949/pexels-photo-32828949.jpeg'
    },
    {
      id: 3,
      title: "Managing Common Childhood Illnesses",
      excerpt: "Practical home remedies and signs to see a doctor.",
      date: '2024-01-05',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/32828949/pexels-photo-32828949.jpeg'
    }
  ]

  const latestPosts = blogPosts.slice(0, 2)

  return (
    <section className={`blogs-section ${isVisible ? 'animate-in' : ''} w-full py-16 bg-gradient-to-b from-slate-50 to-white`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800">📰 Latest Blog Posts</h2>
          <p className="text-slate-500 mt-2">Practical pediatric advice and parent-friendly insights</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover transform hover:scale-105 transition duration-300 ease-in-out"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{post.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="inline-flex items-center text-blue-600 font-medium hover:underline transition duration-300" onClick={()=>alert("This feature is coming soon")}>
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs
