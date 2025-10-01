import React from 'react'

export default function Integrations() {
  return (
    <div id="integrations" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 px-4">Platform Comparison</h2>
          <p className="text-gray-400 text-base sm:text-lg px-4">See how our platform compares to traditional cart recovery tools</p>
        </div>
        
        <div className="relative backdrop-blur-3xl backdrop-saturate-150 bg-white/8 border border-white/20 ring-1 ring-white/25 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-[0_10px_40px_rgba(17,24,39,0.45)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/12 before:to-white/0 before:opacity-80 before:rounded-xl sm:before:rounded-2xl before:pointer-events-none after:absolute after:inset-0 after:rounded-xl sm:after:rounded-2xl after:pointer-events-none after:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.25)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="backdrop-blur-sm bg-white/5 border-b border-white/10">
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-200 uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-green-400 uppercase tracking-wider">
                    Our Platform
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-red-400 uppercase tracking-wider">
                    Traditional Cart Recovery Tools
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/5 hover:backdrop-blur-sm transition-all duration-300">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-white">
                    Real-time Cart Tracking
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-300 text-center">Instant logging across devices</span>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-400 text-center">Limited / delayed updates</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="hover:bg-white/5 hover:backdrop-blur-sm transition-all duration-300">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-white">
                    Multi-channel Support
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-300 text-center">Email, SMS, WhatsApp, Push</span>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-400 text-center">Mostly Email-only</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="hover:bg-white/5 hover:backdrop-blur-sm transition-all duration-300">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-white">
                    AI Personalization
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-300 text-center">Natural, contextual & dynamic</span>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-400 text-center">Generic templates</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="hover:bg-white/5 hover:backdrop-blur-sm transition-all duration-300">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-white">
                    Admin Dashboard
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-300 text-center">Powerful, user-friendly & AI-assisted</span>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-400 text-center">Basic & cluttered</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="hover:bg-white/5 hover:backdrop-blur-sm transition-all duration-300">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-white">
                    Time Delay Control
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-300 text-center">Flexible scheduling & STO (Send Time Optimization)</span>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-400 text-center">Static, manual timings</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="hover:bg-white/5 hover:backdrop-blur-sm transition-all duration-300">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-white">
                    Analytics & Reports
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-300 text-center">Detailed, exportable, revenue-focused</span>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-400 text-center">Minimal, surface-level data</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="hover:bg-white/5 hover:backdrop-blur-sm transition-all duration-300">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-white">
                    Global Market Support
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-300 text-center">Multi-language support (e.g. English + Tamil)</span>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-400 text-center">English-only</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="hover:bg-white/5 hover:backdrop-blur-sm transition-all duration-300">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-white">
                    CRM & Retargeting Ads
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-300 text-center">Built-in integrations</span>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-400 text-center">Requires third-party tools</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="hover:bg-white/5 hover:backdrop-blur-sm transition-all duration-300">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-white">
                    AI-Driven Features
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-300 text-center">Abandonment prediction, product recommendations, chatbots</span>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-400 text-center">Not available / extra cost</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

