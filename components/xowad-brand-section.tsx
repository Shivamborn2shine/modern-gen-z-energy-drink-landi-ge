"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function XowadBrandSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const categories = ["TEA", "BLACK RICE", "SPICES", "AND MORE"]

  return (
    <section
      id="xowad-brand"
      ref={ref}
      className="relative py-28 md:py-36 overflow-hidden paper-texture"
      style={{ background: "linear-gradient(180deg, #FAF7F2 0%, #F5F0E8 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Label */}
        <motion.span
          className="inline-block text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#B8963E] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Welcome to XOWAD
        </motion.span>

        {/* Main headline */}
        <div className="overflow-hidden mb-8">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-7xl text-[#2C2C20] tracking-tight leading-[1]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
            initial={{ y: 80, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
          >
            THE TASTE OF{" "}
            <span className="italic text-[#2D5016]">ORIGIN.</span>
          </motion.h2>
        </div>

        {/* Description */}
        <motion.p
          className="text-sm md:text-base text-[#6B5E4E] max-w-lg mx-auto leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          A house of brands inspired by where things begin.
        </motion.p>
        <motion.p
          className="text-sm md:text-base text-[#6B5E4E]/80 max-w-lg mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          From tea gardens and traditional ingredients to the stories, people and places behind them — XOWAD is built around experiences rooted in origin.
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="h-[1px] w-20 bg-[#B8963E]/40 mx-auto mb-10"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        />

        {/* Category display */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {categories.map((cat, i) => (
            <motion.span
              key={cat}
              className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#2C2C20]/70"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
            >
              {i > 0 && <span className="mr-3 md:mr-4 text-[#B8963E]">•</span>}
              {cat}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
