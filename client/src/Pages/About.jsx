import Specializations from '../components/Specializations'
import Training_Education from '../components/Training_Education'
import PerSonalStory from '../components/PerSonalStory'
import { Phone } from 'lucide-react'

function About() {
  return (
    <section id="about" className=" bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ">    

       
       <PerSonalStory />

      
      <Training_Education />

       
       <Specializations />

        {/* Personal Interests */}
        <div className="bg-slate-50 rounded-2xl p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Beyond Medicine</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  When I'm not at the clinic, you'll find me reading the latest pediatric research journals 
                  or spending time with my own family. I believe that being a parent myself has made me a 
                  better pediatrician - I understand the worries, joys, and challenges that come with 
                  raising children.
                </p>
                <p>
                  I'm passionate about medical education and regularly conduct workshops for young doctors 
                  entering pediatrics. I also volunteer at local schools, conducting health awareness 
                  programs and free health check-ups for underprivileged children.
                </p>
                <p>
                  In my free time, I enjoy photography, particularly capturing candid moments of children 
                  at play. These moments remind me why I chose this profession - to preserve and protect 
                  the innocence and joy of childhood.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Dr. Roy with young patients"
                className="w-full h-48 object-cover rounded-xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Community health program"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

       
      </div>
    </section>
  )
}

export default About
