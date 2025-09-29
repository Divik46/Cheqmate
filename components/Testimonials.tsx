"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Testimonials() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does cart recovery work?",
      a: " We track incomplete purchases in real time and send personalized reminders across Email, SMS, WhatsApp, and Push to bring customers back.",
    },
    {
      q: "Do I need coding skills to set this up?",
      a: " Not at all. Our tool integrates with Shopify, WooCommerce, and other platforms in just a few clicks.",
    },
    {
      q: "Is AI included in all plans?",
      a: "Yes. AI is built-in from smart reminders to personalized offers, you get advanced automation without paying extra.",
    },
    {
      q: "Can I customize the messages and templates?",
      a: " Absolutely. You can add your branding, tweak layouts, and even let AI generate natural-sounding reminders for you.",
    },
    {
      q: "How secure is my data?",
      a: " We use enterprise-grade encryption to protect your store and customer data. You’re always in full control with exportable reports.",
    },
  ];

  return (
    <section className="relative w-full bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 sm:py-24">
        {/* Top heading row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-8">
          <div>
            <h2 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[96px] leading-none font-light tracking-tight text-white/90">
              CLARITY
            </h2>
            <h3 className="mt-1 sm:mt-2 text-[28px] sm:text-[36px] md:text-[44px] lg:text-[72px] leading-none font-light tracking-tight text-white/60">
              STARTS HERE
            </h3>
          </div>
          <p className="max-w-xs text-xs md:text-sm text-white/60 mt-4 sm:mt-0">
            THE ANSWERS TO THE
            <br />
            QUESTIONS OUR CLIENTS
            <br />
            ASK MOST—MADE SIMPLE.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-white/10" />

        {/* Labels */}
        <div className="mt-6 flex items-center justify-between text-[11px] tracking-wider text-white/40">
          <span>FAQ</span>
          <span>YOUR QUESTION</span>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-10">
          {/* Left column callout */}
          <div className="md:col-span-2">
            <div className="select-none">
              <div className="text-2xl sm:text-3xl md:text-4xl font-light text-white/70">NOT FOUND?</div>
              <div className="mt-2 text-xl sm:text-2xl md:text-3xl font-light text-white/40">STILL CURIOUS?</div>
            </div>
            <button className="mt-8 sm:mt-10 inline-flex items-center gap-2 text-xs tracking-wider text-white/70 hover:text-white transition-colors">
              CONTACT US
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/70" />
            </button>
          </div>

          {/* Right column accordion */}
          <div className="md:col-span-3">
            <ul className="divide-y divide-white/10">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <li key={index} className="py-3">
                    <button
                      className="group w-full flex items-center justify-between gap-4 sm:gap-6 text-left"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span className="flex-1 text-sm md:text-base text-white/90 group-hover:text-white transition-colors">
                        {item.q}
                      </span>
                      <span className="shrink-0 rounded-md border border-white/15 p-1.5 text-white/70 group-hover:border-white/30 group-hover:text-white transition-colors">
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    {/* answer */}
                    {isOpen && (
                      <div className="mt-3 text-sm text-white/60 leading-relaxed">
                        {item.a}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

