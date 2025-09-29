'use client'

import React, { useState } from 'react'

export default function Meetings() {
  const [isYearly, setIsYearly] = useState(false)

  const pricingPlans = [
    {
      name: "Basic Package",
      description: "Perfect for individuals, freelancers, small teams starting the Starter plan.",
      monthlyPrice: 30,
      yearlyPrice: 24,
      icon: "🎁",
      features: [
        "Maximum 1 User Services",
        "Basic Dashboard Access", 
        "Limited Integrations",
        "Community Support",
        "Simple Collaboration"
      ],
      cta: "Start 14th Days Free Trial",
      popular: false
    },
    {
      name: "Professional Package", 
      description: "Best for growing businesses that need more power and flexibility.",
      monthlyPrice: 49,
      yearlyPrice: 39,
      icon: "📄",
      features: [
        "Maximum 3 User Services",
        "Basic Dashboard Access",
        "Limited Integrations", 
        "Community Support",
        "Simple Collaboration"
      ],
      cta: "Start 10th Days Free Trial",
      popular: true
    },
    {
      name: "Enterprise Package",
      description: "Tailored for large teams and complex needs for SaaS services.",
      monthlyPrice: 98,
      yearlyPrice: 78,
      icon: "💎",
      features: [
        "Maximum 7 User Services",
        "Basic Dashboard Access",
        "Limited Integrations",
        "Community Support", 
        "Simple Collaboration"
      ],
      cta: "Get Started This Package",
      popular: false
    }
  ]

  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium" style={{backgroundColor: '#6b21a8'}}>
              Choose a plan
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
          Invest in Growth, Not Lost Carts
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
          Every abandoned cart is lost revenue. Our plans help you win it back
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-3 sm:space-x-4">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors ${
                !isYearly 
                  ? 'bg-gray-700 text-white' 
                  : 'bg-gray-600 text-gray-300'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors relative ${
                isYearly 
                  ? 'bg-gray-700 text-white' 
                  : 'bg-gray-600 text-gray-300'
              }`}
            >
              Yearly
              <span className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 text-white text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full" style={{backgroundColor: '#6b21a8'}}>
                Save 23%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-xl sm:rounded-2xl p-6 sm:p-8 ${
                plan.popular 
                  ? 'text-white' 
                  : 'bg-gray-800 text-white'
              }`}
              style={plan.popular ? {backgroundColor: '#6b21a8'} : {}}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-2 sm:-top-3 right-4 sm:right-6">
                  <span className="text-white text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full" style={{backgroundColor: '#6b21a8'}}>
                    POPULAR
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{plan.icon}</div>

              {/* Plan Name */}
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{plan.name}</h3>

              {/* Description */}
              <p className={`mb-4 sm:mb-6 text-sm sm:text-base ${plan.popular ? 'text-white/80' : 'text-white/80'}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-bold">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className={`ml-2 text-sm sm:text-base ${plan.popular ? 'text-white/80' : 'text-white/80'}`}>
                  /per month cost
                </span>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-sm sm:text-base font-medium mb-3 sm:mb-4 flex items-center justify-center space-x-2 transition-colors ${
                  plan.popular
                    ? 'text-white hover:opacity-80'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
                style={plan.popular ? {backgroundColor: '#6b21a8'} : {}}
              >
                <span>{plan.cta}</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* No Credit Card Required */}
              <div className={`flex items-center justify-center space-x-2 mb-6 sm:mb-8 ${
                plan.popular ? 'text-white/80' : 'text-white/80'
              }`}>
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span className="text-xs sm:text-sm">No credit card required</span>
              </div>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 sm:space-x-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#6b21a8'}}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

