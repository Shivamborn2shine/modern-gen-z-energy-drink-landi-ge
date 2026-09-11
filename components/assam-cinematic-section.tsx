"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function AssamCinematicSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="assam-story"
      ref={ref}
      className="relative py-28 md:py-40 overflow-hidden noise-overlay"
      style={{ background: "linear-gradient(180deg, #1A3A0A 0%, #2D5016 50%, #1A3A0A 100%)" }}
    >
      {/* Atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(184,150,62,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Main statement */}
        <div className="overflow-hidden mb-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#F5F0E8] leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            SOME PLACES ARE SEEN.
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#B8963E] leading-[1.1] tracking-tight italic"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
          >
            ASSAM IS FELT.
          </motion.h2>
        </div>

        {/* Supporting copy */}
        <motion.p
          className="text-sm md:text-base text-[#F5F0E8]/60 max-w-xl mx-auto leading-relaxed mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          XOWAD was born from a simple belief: the things we experience every day feel different when we know where they come from.
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="h-[1px] w-16 bg-[#B8963E]/40 mx-auto my-8"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        />

        {/* Closing statement */}
        <motion.p
          className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#B8963E]/80"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Rooted in Origin. Crafted for the Moment.
        </motion.p>
      </div>
    </section>
  )
}
