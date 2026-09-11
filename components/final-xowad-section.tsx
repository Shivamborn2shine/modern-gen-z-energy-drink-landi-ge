"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function FinalXowadSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const categories = ["TEA", "BLACK RICE", "SPICES", "AND MORE"]

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-40 overflow-hidden noise-overlay"
      style={{ background: "linear-gradient(180deg, #1A3A0A 0%, #2D5016 40%, #1A3A0A 100%)" }}
    >
      {/* Atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, rgba(184,150,62,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* XOWAD wordmark */}
        <div className="overflow-hidden mb-4">
          <motion.h2
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-editorial text-[#F5F0E8] tracking-wider leading-none"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            XOWAD
          </motion.h2>
        </div>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl font-editorial italic text-[#B8963E] tracking-wide mb-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          THE TASTE OF ORIGIN.
        </motion.p>

        {/* Copy */}
        <motion.p
          className="text-sm md:text-base text-[#F5F0E8]/60 max-w-lg mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Because the things we experience every day become more meaningful when we understand where they begin.
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="h-[1px] w-20 bg-[#B8963E]/40 mx-auto mb-10"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        />

        {/* Categories */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-14"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {categories.map((cat, i) => (
            <motion.span
              key={cat}
              className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#F5F0E8]/60"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
            >
              {i > 0 && <span className="mr-3 md:mr-4 text-[#B8963E]">•</span>}
              {cat}
            </motion.span>
          ))}
        </motion.div>

        {/* Final statement */}
        <motion.div
          className="space-y-1"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#B8963E]/80">
            Rooted in Origin.
          </p>
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#B8963E]/80">
            Created for Experience.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
