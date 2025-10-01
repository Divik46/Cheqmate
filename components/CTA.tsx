import React from 'react'

export default function CTA() {
  return (
    <div id="contact" className="bg-black flex items-center justify-center p-2 sm:pb-[100px]">
      <div className="relative w-full max-w-6xl rounded-xl sm:rounded-2xl overflow-hidden min-h-[300px] sm:min-h-[350px] py-[60px] sm:py-[60px] backdrop-blur-sm" style={{backgroundColor: '#1b1043'}}>
      {/* Glassy overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10 backdrop-blur-sm"></div>
      
     
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/40">
       
        <div className="absolute right-6 sm:right-10 top-1/2 transform -translate-y-1/2 animate-pulse">
          <div className="w-20 h-24 sm:w-32 sm:h-40 bg-white/10 rounded-full opacity-20 backdrop-blur-sm animate-bounce"></div>
        </div>
        <div className="absolute right-16 sm:right-32 top-1/3 animate-pulse" style={{animationDelay: '1s'}}>
          <div className="w-16 h-20 sm:w-24 sm:h-32 bg-white/5 rounded-full opacity-15 backdrop-blur-sm animate-bounce" style={{animationDelay: '0.5s'}}></div>
        </div>
        <div className="absolute right-12 sm:right-20 bottom-1/4 animate-pulse" style={{animationDelay: '2s'}}>
          <div className="w-18 h-24 sm:w-28 sm:h-36 bg-white/15 rounded-full opacity-25 backdrop-blur-sm animate-bounce" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 px-6 sm:px-8 lg:px-12 flex items-center h-full">
        <div className="max-w-2xl">
          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
            <span className="text-white">Sign up today and unlock</span>{' '}
            <span className="text-[#8024d1]">AI-powered</span>{' '}
            <span className="text-white">cart recovery for free.</span>
          </h1>
          
          {/* CTA Button and Contact Info in Flex */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            {/* CTA Button */}
            <button className="bg-[#8024d1] hover:bg-[#6b1fb0] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl flex items-center gap-2 sm:gap-3 transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base">
              <span>Start Free Trial</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Contact Info */}
            <div className="text-white">
              <p className="text-xs sm:text-sm mb-1">Get a free 14-day trial</p>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-base sm:text-lg font-medium">(+480) 123 678 900</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

