function Specializations() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Pediatric Excellence
          </span>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Comprehensive <span className="text-blue-600">Child Healthcare</span> Services
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Specialized pediatric care tailored to every stage of your child's growth and development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Newborn Care */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-3">Newborn Care</h3>
            <p className="text-slate-600 mb-4">
              Comprehensive care for newborns including specialized neonatal assessments, breastfeeding support, 
              and early developmental screening to ensure optimal health from day one.
            </p>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Neonatal health assessments
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Breastfeeding/lactation support
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Newborn screening tests
              </li>
            </ul>
          </div>

          {/* Childhood Infections */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-3">Childhood Infections</h3>
            <p className="text-slate-600 mb-4">
              Expert diagnosis and evidence-based treatment for viral/bacterial infections, with specialized 
              protocols for recurrent infections and complex cases.
            </p>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                Respiratory infection management
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                Fever and infection protocols
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                Antibiotic stewardship
              </li>
            </ul>
          </div>

          {/* Growth & Development */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-200">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-3">Growth & Development</h3>
            <p className="text-slate-600 mb-4">
              Comprehensive developmental surveillance using standardized tools to identify and address 
              delays in motor, language, cognitive, and social-emotional domains.
            </p>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Developmental milestone tracking
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Early intervention coordination
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                School readiness assessments
              </li>
            </ul>
          </div>

          {/* Vaccination */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-200">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-3">Vaccination</h3>
            <p className="text-slate-600 mb-4">
              Complete immunization programs following AAP/WHO guidelines, including catch-up schedules 
              and specialized vaccines for high-risk children.
            </p>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Routine immunization schedules
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Travel vaccinations
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Vaccine safety counseling
              </li>
            </ul>
          </div>

          {/* Nutritional Counseling */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-pink-200">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-3">Nutritional Counseling</h3>
            <p className="text-slate-600 mb-4">
              Evidence-based nutritional guidance from infancy through adolescence, addressing 
              deficiencies, allergies, and establishing lifelong healthy eating patterns.
            </p>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                Breastfeeding/formula support
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                Picky eating strategies
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                Childhood obesity management
              </li>
            </ul>
          </div>

          {/* Adolescent Health */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 hover:border-indigo-200">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-3">Adolescent Health</h3>
            <p className="text-slate-600 mb-4">
              Confidential, comprehensive care addressing puberty, mental health, risk behaviors, 
              and transition to adult healthcare with sensitivity and expertise.
            </p>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                Puberty and sexual health
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                Mental health screening
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                Transition to adult care
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Specializations