"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function EmotionalSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-40 overflow-hidden noise-overlay"
      style={{ background: "linear-gradient(180deg, #2D5016 0%, #1A3A0A 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Main heading */}
        <div className="overflow-hidden mb-10">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-editorial text-[#F5F0E8] tracking-tight leading-[1.15]"
            initial={{ y: 80, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            MADE FOR YOUR
            <br />
            <span className="italic text-[#B8963E]">EVERYDAY CHAI.</span>
          </motion.h2>
        </div>

        {/* Copy */}
        <motion.div
          className="space-y-4 text-sm md:text-base text-[#F5F0E8]/70 max-w-md mx-auto leading-relaxed mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p>One cup can start a conversation.</p>
          <p>Bring people together.</p>
          <p>Or simply give you a moment to yourself.</p>
        </motion.div>

        {/* Large emotional statement */}
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h3
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-editorial italic text-[#F5F0E8]/10 leading-none select-none"
          >
            &ldquo;CHAI?&rdquo;
          </h3>
        </motion.div>
      </div>
    </section>
  )
}
