"use client"
import React, { useState } from 'react'

export default function Superpowers() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')

  const handleMagicClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Basic guard; integrate with backend later if needed
    if (!fullName || !email || !company) {
      alert('Please fill out all fields.')
      return
    }
    // Simulate success and reset
    alert('Thanks! We\'ll reach out shortly.')
    setFullName('')
    setEmail('')
    setCompany('')
    setIsModalOpen(false)
  }
  return (
    <div 
      className="relative"
      style={{
        backgroundImage: 'url(/images/q-6c12dbae.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20 sm:py-20">
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
              <button 
                className="-mb-12 px-4 py-2 text-white text-xs sm:text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 self-center"
                style={{
                  backgroundColor: '#8f2fe4',
                  boxShadow: '0 0 0 0 rgba(143, 47, 228, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#7a2ac7'
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(143, 47, 228, 0.6)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#8f2fe4'
                  e.currentTarget.style.boxShadow = '0 0 0 0 rgba(143, 47, 228, 0.4)'
                }}
                onClick={handleMagicClick}
              >
                Start recovering now
              </button>
            </div>
            <div className="text-white/70">
              <p className="flex items-start">
                <span className="text-white/50 mr-3 mt-1">•</span>
                <span className="text-sm sm:text-base">Send smart reminders via Email, SMS, <br /> WhatsApp & Push.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={closeModal}></div>
          <div className="relative z-10 w-[92%] max-w-3xl bg-white rounded-xl overflow-hidden shadow-2xl">
            <button
              aria-label="Close"
              onClick={closeModal}
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <div className="flex flex-col md:flex-row">
              {/* Left Image */}
              <div className="md:w-1/2 h-40 md:h-auto">
                <img
                  src="/images/Frame 4.png"
                  alt="Recover lost carts"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Right Form */}
              <div className="md:w-1/2 p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Started</h3>
                <p className="text-sm text-gray-600 mb-6">Tell us a bit about you.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      placeholder="Alex Johnson"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      placeholder="alex@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company name</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      placeholder="Acme Inc."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center rounded-lg bg-cyan-600 text-white font-medium px-4 py-2.5 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

