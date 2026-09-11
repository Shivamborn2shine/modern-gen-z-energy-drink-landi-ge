"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function FinalCtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-40 overflow-hidden paper-texture"
      style={{ background: "linear-gradient(180deg, #FAF7F2 0%, #F5F0E8 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Floating Product */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
          >
            {/* Warm glow */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(ellipse, rgba(184,150,62,0.1) 0%, rgba(45,80,22,0.05) 40%, transparent 70%)",
                filter: "blur(50px)",
              }}
              animate={{
                scale: [0.85, 0.95, 0.85],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />

            {/* Shadow */}
            <motion.div
              className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[50%] h-5 rounded-full"
              style={{
                background: "radial-gradient(ellipse, rgba(45,80,22,0.12) 0%, transparent 70%)",
              }}
              animate={{
                scaleX: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />

            <motion.div
              animate={{
                y: [0, -16, 0],
                rotate: [0, 1.5, 0],
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
                width={360}
                height={500}
                className="relative z-10 rounded-lg"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(45,80,22,0.15))",
                  maxHeight: "50vh",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <div className="overflow-hidden mb-6">
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-editorial text-[#2C2C20] tracking-tight leading-[1.05]"
                initial={{ y: 80, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
              >
                YOUR NEXT CUP
                <br />
                <span className="italic text-[#2D5016]">STARTS HERE.</span>
              </motion.h2>
            </div>

            <motion.div
              className="space-y-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-base md:text-lg font-editorial text-[#2C2C20] tracking-wide">
                TAPU Signature Assam Blend
              </p>
              <p className="text-xs text-[#6B5E4E] tracking-wider uppercase">
                A Blend of Assam CTC Teas
              </p>
            </motion.div>

            <motion.div
              className="h-[1px] w-16 bg-[#B8963E]/40 mb-6 mx-auto md:mx-0"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />

            <motion.p
              className="text-sm text-[#6B5E4E] italic mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Rich. Bold. Unmistakably Assam.
            </motion.p>

            <motion.button
              className="bg-[#2D5016] text-[#F5F0E8] px-8 py-4 rounded-full font-medium text-xs tracking-[0.15em] uppercase flex items-center gap-2 mx-auto md:mx-0 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B8963E]/20 to-transparent -translate-x-full"
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Explore Tapu</span>
              <svg className="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
