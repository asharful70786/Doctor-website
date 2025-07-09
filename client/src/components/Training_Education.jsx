import { Award, BookOpen } from "lucide-react"


function Training_Education() {
  return (
           <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Education & Training</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-slate-800">MD in Pediatrics</h3>
                      <span className="text-sm text-slate-500">2008-2011</span>
                    </div>
                    <p className="text-blue-600 font-medium mb-2">All India Institute of Medical Sciences (AIIMS), Delhi</p>
                    <p className="text-slate-600">Specialized training in pediatric medicine, child development, and pediatric emergency care.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-slate-800">MBBS</h3>
                      <span className="text-sm text-slate-500">2003-2008</span>
                    </div>
                    <p className="text-emerald-600 font-medium mb-2">Medical College Kolkata</p>
                    <p className="text-slate-600">Comprehensive medical education with focus on patient care and clinical excellence.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-slate-800">Fellowship in Pediatric Cardiology</h3>
                      <span className="text-sm text-slate-500">2012</span>
                    </div>
                    <p className="text-purple-600 font-medium mb-2">Narayana Health, Bangalore</p>
                    <p className="text-slate-600">Advanced training in pediatric heart conditions and congenital heart diseases.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Training_Education