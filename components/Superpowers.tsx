"use client"

import React, { useState } from 'react'

export default function Superpowers() {
  const [isStopped, setIsStopped] = useState(false)

  const handleMagicClick = () => {
    setIsStopped(true)
  }
  return (
    <div 
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: 'url(/images/q-6c12dbae.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Glowing Light Column */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-96">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500 via-blue-400 to-cyan-300 opacity-60 blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-purple-400 via-blue-300 to-cyan-200 opacity-40 blur-md"></div>
        </div>
        
        {/* Star Field */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => {
            const randomX = Math.random() * 100
            const randomY = Math.random() * 100
            const randomSpeed = 3 + Math.random() * 5 // 3-8 seconds
            const randomDelay = Math.random() * 5
            
            return (
              <div
                key={i}
                className={`absolute w-4 h-4 opacity-20 ${
                  isStopped ? '' : 'animate-float'
                }`}
                style={{
                  left: `${randomX}%`,
                  top: `${randomY}%`,
                  animationDelay: isStopped ? '0s' : `${randomDelay}s`,
                  animationDuration: isStopped ? '0s' : `${randomSpeed}s`,
                  animationPlayState: isStopped ? 'paused' : 'running',
                  transition: isStopped ? 'all 0.5s ease-out' : 'none'
                }}
              >
                <img 
                  src="/icons/shopping-cart.png" 
                  alt="shopping cart" 
                  className="w-full h-full object-contain"
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 sm:py-20">
        {/* Reflect AI Button */}
        <div className="mb-6 sm:mb-8">
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-black/50 border border-white/20 rounded-full text-white text-xs sm:text-sm font-medium hover:bg-white/10 transition-all duration-300">
          Recover Lost Carts
          </button>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4 sm:mb-6 leading-tight px-4">
        Recover Lost Sales with Abandoned Cart Recovery
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-white/80 text-center max-w-2xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4">
        Bring back customers who didn't finish checkout with smart reminders via Email, SMS, WhatsApp & Push.
        </p>

        {/* Interactive Question Box */}
        <div className="w-full max-w-2xl px-4">
          <div className="bg-black/50 border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-black/60 transition-all duration-300 cursor-pointer group">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3 sm:gap-0">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
              How to recover lost carts
              </h3>
              <div 
                className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors cursor-pointer"
                onClick={handleMagicClick}
              >
                <span className="text-yellow-400 mr-2">✨</span>
                <span className="text-xs sm:text-sm font-medium">Start recovering now</span>
              </div>
            </div>
            <div className="text-white/70">
              <p className="flex items-start">
                <span className="text-white/50 mr-3 mt-1">•</span>
                <span className="text-sm sm:text-base">Send smart reminders via Email, SMS, WhatsApp & Push.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

