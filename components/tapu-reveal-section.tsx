"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function TapuRevealSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="tapu-reveal"
      ref={ref}
      className="relative py-28 md:py-36 overflow-hidden noise-overlay"
      style={{ background: "linear-gradient(180deg, #1A1A14 0%, #1A3A0A 30%, #2D5016 60%, #1A3A0A 100%)" }}
    >
      {/* Atmospheric golden glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 60%, rgba(184,150,62,0.08) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            {/* Label */}
            <motion.span
              className="inline-block text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#B8963E] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Introducing
            </motion.span>

            {/* TAPU headline */}
            <div className="overflow-hidden mb-4">
              <motion.h2
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F5F0E8] tracking-tight leading-[0.9]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800 }}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
              >
                TAPU
              </motion.h2>
            </div>

            {/* Subheadline */}
            <motion.p
              className="text-xs md:text-sm tracking-[0.2em] uppercase text-[#B8963E] mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              The Unmatched Taste of Assam
            </motion.p>

            {/* Product details */}
            <motion.div
              className="space-y-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p className="text-sm md:text-base text-[#F5F0E8]/90 tracking-wide"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Signature Assam Blend
              </p>
              <p className="text-xs text-[#F5F0E8]/50 tracking-wider uppercase">
                A Blend of Assam CTC Teas
              </p>
            </motion.div>

            {/* Decorative line */}
            <motion.div
              className="h-[1px] w-16 bg-[#B8963E]/40 mb-8 mx-auto md:mx-0"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            />

            {/* Sensory line */}
            <motion.div
              className="space-y-1 mb-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <p className="text-lg md:text-xl text-[#F5F0E8]/90 tracking-wide"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                SIP.
              </p>
              <p className="text-lg md:text-xl text-[#F5F0E8]/70 tracking-wide"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                CLOSE YOUR EYES.
              </p>
              <p className="text-lg md:text-xl text-[#B8963E] tracking-wide italic"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}>
                FEEL ASSAM.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.button
              className="bg-[#B8963E] text-[#1A1A14] px-7 py-3.5 rounded-full font-medium text-xs tracking-[0.15em] uppercase flex items-center gap-2 mx-auto md:mx-0 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Explore Tapu</span>
              <svg className="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>

          {/* Product Image */}
          <motion.div
            className="relative flex justify-center order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.85, rotate: -3 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
          >
            {/* Glow behind product */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(ellipse, rgba(184,150,62,0.15) 0%, transparent 60%)",
                filter: "blur(50px)",
              }}
              animate={{
                scale: [0.8, 0.9, 0.8],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />

            <motion.div
              animate={{
                y: [0, -14, 0],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/tapu-package.png"
                alt="TAPU — Signature Assam Blend"
                width={380}
                height={520}
                className="relative z-10 rounded-lg"
                style={{
                  filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.4))",
                  maxHeight: "55vh",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
