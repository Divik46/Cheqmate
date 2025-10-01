import React from 'react'
import Image from 'next/image'

// SVG Icons for each feature - matching the design description
const SpeedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-6l-2-2"/>
    <path d="M6 10l6 6"/>
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6l4 4-4 4"/>
  </svg>
)

const NetworkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <circle cx="19" cy="5" r="2"/>
    <circle cx="5" cy="19" r="2"/>
    <circle cx="19" cy="19" r="2"/>
    <circle cx="5" cy="5" r="2"/>
    <line x1="12" y1="9" x2="19" y2="7"/>
    <line x1="12" y1="15" x2="5" y2="17"/>
    <line x1="12" y1="9" x2="5" y2="7"/>
    <line x1="12" y1="15" x2="19" y2="17"/>
  </svg>
)

const IOSIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
    <path d="M8 14l2-2 2 2 4-4"/>
    <path d="M10 6h4"/>
  </svg>
)

const EncryptionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    <path d="M12 15h.01"/>
  </svg>
)

const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
    <circle cx="8" cy="14" r="1"/>
    <circle cx="12" cy="14" r="1"/>
    <circle cx="16" cy="14" r="1"/>
    <circle cx="8" cy="18" r="1"/>
    <circle cx="12" cy="18" r="1"/>
  </svg>
)

const PublishingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h6v6"/>
    <path d="M10 14 21 3"/>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <circle cx="18" cy="8" r="1" fill="currentColor"/>
  </svg>
)

const CaptureIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
    <path d="M8 12l2-2 2 2 4-4"/>
    <path d="M18 8h.01"/>
  </svg>
)

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11H5a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h4m6-6h4a2 2 0 0 1 2 2v3c0 1.1-.9 2-2 2h-4m-6-6v6m6-6v6"/>
    <path d="M9 7h6v4H9z"/>
    <circle cx="12" cy="4" r="1"/>
    <path d="M12 8l2 2"/>
  </svg>
)

const features = [
  {
    icon: '/icons/tracking.png',
    title: "Cart Tracking",
    description: "Track, monitor incomplete purchases in real-time"
  },
  {
    icon: '/icons/email.png',
    title: "Automated Reminder Emails/Notifications",
    description: "Automatically send timely reminders to customers and Reduce manual work with follow-up campaigns "
  },
  {
    icon: '/icons/envelope.png',
    title: "Personalized Messages",
    description: "Boost engagement and trust with tailored messages"
  },
  {
    icon: '/icons/voucher.png',
    title: "Discount / Coupon Integration",
    description: "Create urgency with special time-limited offers"
  },
  {
    icon: '/icons/checklist.png',
    title: "Multiple Follow-up Sequences",
    description: "Create urgency with stock alerts without bombarding customers."
  },
  {
    icon: '/icons/network-connection.png',
    title: " Multi-Channel Support",
    description: "Reach customers via Email, SMS, WhatsApp, or Push Notifications"
  },
  {
    icon: '/icons/ai-powered-models.png',
    title: "AI-Powered Abandonment Prediction",
    description: "Predict drop-offs before they happen."
  },
  {
    icon: '/icons/analytics.png',
    title: "Analytics & Reporting",
    description: "Track abandoned vs. recovered carts in real-time."
  }
]

export default function AIFeatures() {
  return (
    <section id="features" className="py-12 sm:py-16 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {features.map((feature, index) => {
            // First row (index 0-3): remove top border
            // Second row (index 4-7): remove bottom border
            const isFirstRow = index < 4;
            const isSecondRow = index >= 4;
            
            let borderClasses = "border-white/10 hover:border-blue-400/40";
            if (isFirstRow) {
              borderClasses += " border-l border-r border-b";
            } else if (isSecondRow) {
              borderClasses += " border-l border-r border-t";
            } else {
              borderClasses += " border";
            }
            
            return (
            <div 
              key={index}
              className={`relative overflow-hidden bg-primary p-4 sm:p-6 hover:bg-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 hover:ring-1 hover:ring-blue-400/40 transition-all duration-300 group ${borderClasses}`}
            >
              <div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 blur-2xl" />
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/90 group-hover:text-blue-400 transition-colors duration-300 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] group-hover:-translate-y-2" style={{ transition: 'transform 300ms' }}>
                  <Image src={feature.icon} alt={feature.title} width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 group-hover:text-blue-200 leading-relaxed transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  )
}

