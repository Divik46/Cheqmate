"use client";

import { useState } from "react";
import { Play, Search, Mic, PenTool, List, CheckSquare, MapPin, Pin, Share, Clock, ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden pt-16 sm:pt-20 md:pt-32 lg:pt-52">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('/images/div.hero-black-hole.png')`,
          opacity: 0.4,
          filter: 'brightness(0.9) contrast(1.1)'
        }}
      />
      
      {/* Background Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center z-1">
        <div className="w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] rounded-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-[100px] sm:blur-[150px] md:blur-[200px] animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        {/* New Feature Banner */}
        <span className="text-xs sm:text-sm text-purple-300 border border-purple-400 rounded-full px-3 py-1 inline-block mb-4 sm:mb-6">
          ✨ New: Our AI integration just landed
        </span>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
           Recover More. <span className="text-purple-400">Grow Smarter</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto">
        Turn abandoned carts into recovered revenue with Cheqmate
        </p>

        {/* Main Interface Mockup */}
        <div className="relative max-w-6xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden border border-gray-800 shadow-2xl bg-gray-900 mt-[100px] sm:mt-[150px] md:mt-[200px] lg:mt-[250px] mb-8 sm:mb-12 md:mb-16 lg:mb-24">
          {!isPlaying ? (
            <>
              {/* Interface Mockup */}
              <div className="bg-gray-900 p-3 sm:p-4 md:p-6">
                <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6">
                  {/* Left Sidebar */}
                  <div className="w-full lg:w-64 bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4">
                    {/* Search Bar */}
                    <div className="relative mb-4 sm:mb-6">
                      <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search anything..."
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-8 sm:px-10 py-1.5 sm:py-2 text-xs sm:text-sm focus:outline-none focus:border-purple-500"
                      />
                      <div className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 sm:gap-2">
                        <span className="text-xs text-gray-400 hidden sm:inline">⌘K</span>
                        <Mic className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                      </div>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-1 sm:space-y-2">
                      <div className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg bg-purple-600/20 text-purple-300">
                        <PenTool className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm">Daily notes</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg hover:bg-gray-700 transition">
                        <List className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                        <span className="text-xs sm:text-sm text-gray-300">All notes</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg hover:bg-gray-700 transition">
                        <CheckSquare className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                        <span className="text-xs sm:text-sm text-gray-300">Tasks</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg hover:bg-gray-700 transition">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                        <span className="text-xs sm:text-sm text-gray-300">Map</span>
                      </div>
                    </nav>

                    {/* Additional Links */}
                    <div className="mt-4 sm:mt-6 space-y-1 sm:space-y-2">
                      <div className="text-xs text-gray-500 mb-1 sm:mb-2">Pinned notes</div>
                      <div className="text-xs text-gray-400 space-y-0.5 sm:space-y-1">
                        <div>How to use Reflect</div>
                        <div>The power of backlinks</div>
                        <div>Saving websites</div>
                        <div>Tips and tricks</div>
                      </div>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6">
                    <h2 className="text-sm sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-white">
                      Sun, April 2nd, 2023
                    </h2>
                    
                    <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-gray-300">
                      <div>Today I started using Reflect!</div>
                      
                      <div>
                        <div className="font-medium mb-1 sm:mb-2">What is Reflect?</div>
                        <div>
                          Reflect is a note-taking tool that mirrors how you think through associations and backlinking. 
                          This leads to superhuman recall skills. Learn more about backlinking{" "}
                          <span className="text-purple-400 underline cursor-pointer">here</span>.
                        </div>
                      </div>

                      <div>
                        <div className="font-medium mb-1 sm:mb-2">What should I record within Reflect?</div>
                        <ul className="space-y-0.5 sm:space-y-1 ml-3 sm:ml-4">
                          <li>• What happens in your day</li>
                          <li>• Meeting notes</li>
                          <li>• To-do and Top of Mind lists</li>
                          <li>• People you encounter (CRM)</li>
                          <li>• Daily reflections (like gratitude journaling)</li>
                          <li>• Save clips from the web or your Kindle</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right Sidebar - Calendar */}
                  <div className="w-full lg:w-64 bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <h3 className="font-medium text-sm sm:text-base">April 2023</h3>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 cursor-pointer" />
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 cursor-pointer" />
                      </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-0.5 sm:gap-1 text-xs mb-3 sm:mb-4">
                      {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                        <div key={day} className="text-center text-gray-400 py-0.5 sm:py-1 text-xs">{day}</div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-0.5 sm:gap-1 text-xs">
                      {[27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((date, index) => (
                        <div
                          key={index}
                          className={`text-center py-0.5 sm:py-1 rounded text-xs ${
                            date === 2 
                              ? 'bg-purple-600 text-white' 
                              : date < 27 || date > 30 
                                ? 'text-gray-400' 
                                : 'text-gray-300 hover:bg-gray-700 cursor-pointer'
                          }`}
                        >
                          {date}
                        </div>
                      ))}
                    </div>

                    {/* Note Actions */}
                    <div className="mt-4 sm:mt-6">
                      <h4 className="text-xs sm:text-sm font-medium mb-2 sm:mb-3">Note actions</h4>
                      <div className="space-y-1 sm:space-y-2">
                        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300 hover:text-white cursor-pointer">
                          <Pin className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Pin this note</span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300 hover:text-white cursor-pointer">
                          <Share className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Share with private link</span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300 hover:text-white cursor-pointer">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Show history</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Play Button Overlay */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ml-0.5 sm:ml-1" />
                </div>
              </button>
            </>
          ) : (
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Reflect Demo Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </main>
  );
}
