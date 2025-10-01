import React from 'react'


export default function Information() {
  return (
    <section className=" py-16 sm:py-[100px] px-4" style={{background: 'linear-gradient(135deg, #030014 0%, #030014 50%, #000000 100%)'}}>
      <div className="max-w-6xl mx-auto">
        {/* Research and reading tag */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="inline-block bg-purple-800 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium">
            Research and reading
          </span>
        </div>

        {/* Main heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
          Recover More Sales, Effortlessly
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
          Turn abandoned carts into completed purchases with our all-in-one cart recovery solution.
          </p>
        </div>

        {/* Two column features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
          {/* Left column - Integrated with your devices */}
          <div className="text-center px-4">
            <div className="mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-white/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            One platform. Endless possibilities.
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            Stop juggling multiple tools. Our platform combines cart tracking, reminders, discounts, analytics, and AI, all in one seamless experience.
            </p>
          </div>

          {/* Right column - Secure but open */}
          <div className="text-center px-4">
            <div className="mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-white/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            Built-in AI, not an add-on
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            Smart automation that predicts drop-offs, writes natural reminders, and optimizes delivery times, AI is at the core, not an extra feature.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

