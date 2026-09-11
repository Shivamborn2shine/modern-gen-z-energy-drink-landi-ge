"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function SensorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-150px" })

  const lines = [
    { text: "WATCH THE COLOUR DEEPEN.", delay: 0.2 },
    { text: "FEEL THE AROMA RISE.", delay: 0.6 },
    { text: "TAKE THE FIRST SIP.", delay: 1.0 },
    { text: "CLOSE YOUR EYES.", delay: 1.8, isItalic: true },
    { text: "FEEL ASSAM.", delay: 2.6, isLarge: true, isItalic: true, color: "#B8963E" },
  ]

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#1A1A14] py-24"
    >
      {/* Subtle steam animations in background */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#F5F0E8]/5 rounded-full blur-[80px]"
        animate={{
          y: [0, -100],
          scale: [1, 1.5],
          opacity: [0, 0.2, 0],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#B8963E]/5 rounded-full blur-[100px]"
        animate={{
          y: [0, -150],
          scale: [1, 1.8],
          opacity: [0, 0.15, 0],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6 md:space-y-10">
        {lines.map((line, index) => (
          <div key={index} className="overflow-hidden">
            <motion.h3
              className={`
                ${line.isLarge ? 'text-4xl md:text-6xl lg:text-8xl mt-12' : 'text-xl md:text-3xl lg:text-4xl'}
                ${line.isItalic ? 'italic' : ''}
                font-editorial tracking-wide
              `}
              style={{ color: line.color || "#F5F0E8" }}
              initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
              animate={isInView ? { y: 0, opacity: 1, filter: "blur(0px)" } : { y: 100, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 1.2, delay: line.delay, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {line.text}
            </motion.h3>
          </div>
        ))}
      </div>
    </section>
  )
}
