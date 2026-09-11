"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.85, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      delay: 0.4,
    },
  },
}

/* Floating tea leaf SVG */
function TeaLeaf({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 40 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M20 2C12 10 4 22 4 35C4 48 12 58 20 58C28 58 36 48 36 35C36 22 28 10 20 2Z"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <path
        d="M20 8C20 8 20 28 20 55"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="0.8"
      />
      <path
        d="M20 20C15 18 10 22 8 28"
        stroke="currentColor"
        strokeOpacity="0.15"
        strokeWidth="0.6"
      />
      <path
        d="M20 30C25 28 30 32 32 38"
        stroke="currentColor"
        strokeOpacity="0.15"
        strokeWidth="0.6"
      />
    </svg>
  )
}

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const rawY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y = useSpring(rawY, springConfig)

  const rawTextX1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const textX1 = useSpring(rawTextX1, springConfig)

  const rawTextX2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const textX2 = useSpring(rawTextX2, springConfig)

  const rawScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const scale = useSpring(rawScale, springConfig)

  const rawOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const opacity = useSpring(rawOpacity, springConfig)

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden paper-texture"
      style={{ background: "linear-gradient(180deg, #F5F0E8 0%, #FAF7F2 50%, #F5F0E8 100%)" }}
    >
      {/* Subtle warm atmospheric orbs */}
      <motion.div
        className="absolute top-20 left-10 w-48 h-48 rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(184,150,62,0.08) 0%, transparent 70%)" }}
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-64 h-64 rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(45,80,22,0.06) 0%, transparent 70%)" }}
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Faint organic line pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at 30% 50%, rgba(45,80,22,0.1) 0%, transparent 60%),
                            radial-gradient(ellipse at 70% 30%, rgba(184,150,62,0.08) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          {/* Text Content — Left Side */}
          <motion.div style={{ opacity }} className="space-y-5">
            {/* Premium badge */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 bg-[#2D5016] text-[#F5F0E8] px-4 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase"
            >
              <motion.span
                className="w-1.5 h-1.5 bg-[#B8963E] rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              Rooted in Origin
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-1 overflow-hidden">
              <motion.h1
                style={{ x: textX1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#2C2C20] leading-[0.95]"
              >
                <motion.span
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  className="inline-block font-editorial"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
                >
                  EVERY GREAT TASTE
                </motion.span>
              </motion.h1>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#2C2C20] leading-[0.95]"
              >
                <motion.span
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                  className="inline-block font-editorial"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
                >
                  HAS AN ORIGIN.
                </motion.span>
              </motion.h1>
              <motion.h1
                style={{ x: textX2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] pt-1"
              >
                <motion.span
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  custom={3}
                  className="inline-block font-editorial italic"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700,
                    color: "#2D5016",
                  }}
                >
                  OURS IS ASSAM.
                </motion.span>
              </motion.h1>

              {/* Supporting copy */}
              <motion.p
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={4}
                className="text-sm md:text-base text-[#6B5E4E] tracking-wide pt-3 max-w-md leading-relaxed"
              >
                From the gardens of Assam to the moments that matter,
                XOWAD brings you closer to where every story begins.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex flex-wrap gap-3 pt-2"
            >
              <motion.button
                className="bg-[#2D5016] text-[#F5F0E8] px-7 py-3.5 rounded-full font-medium text-xs tracking-[0.15em] uppercase flex items-center gap-2 group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B8963E]/20 to-transparent -translate-x-full"
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Explore Tapu</span>
                <motion.svg
                  className="w-4 h-4 relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.button>
              <motion.button
                className="border border-[#2C2C20]/30 text-[#2C2C20] px-7 py-3.5 rounded-full font-medium text-xs tracking-[0.15em] uppercase relative overflow-hidden hover:border-[#2D5016] transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Our Story
              </motion.button>
            </motion.div>

            {/* Bottom Feature Indicators */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={6}
              className="flex flex-wrap gap-5 pt-3"
            >
              {["Rooted in Assam", "Crafted with Purpose", "Tapu — Now Launching"].map((benefit, i) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-[#6B5E4E]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.12 }}
                >
                  <div className="w-1.5 h-1.5 bg-[#B8963E] rounded-full" />
                  {benefit}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Product Visual — Right Side */}
          <motion.div style={{ y, scale }} className="relative flex justify-center">
            <motion.div variants={scaleInVariants} initial="hidden" animate="visible" className="relative">
              {/* Warm golden glow behind product */}
              <motion.div
                className="absolute inset-0 rounded-full scale-90"
                style={{
                  background: "radial-gradient(ellipse, rgba(184,150,62,0.12) 0%, rgba(45,80,22,0.06) 40%, transparent 70%)",
                  filter: "blur(40px)",
                }}
                animate={{
                  scale: [0.85, 0.95, 0.85],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />

              {/* Shadow under product */}
              <motion.div
                className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-[55%] h-6 rounded-full"
                style={{
                  background: "radial-gradient(ellipse, rgba(45,80,22,0.15) 0%, transparent 70%)",
                }}
                animate={{
                  scaleX: [1, 1.05, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />

              {/* Floating tea leaves */}
              <motion.div
                className="absolute -top-6 -left-6 text-[#2D5016]"
                animate={{
                  y: [0, -10, 0],
                  x: [0, 5, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <TeaLeaf className="w-8 h-12 opacity-40" />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -right-4 text-[#2D5016]"
                animate={{
                  y: [0, -8, 0],
                  x: [0, -6, 0],
                  rotate: [0, -12, 0],
                }}
                transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
              >
                <TeaLeaf className="w-6 h-10 opacity-30" style={{ transform: "scaleX(-1)" }} />
              </motion.div>
              <motion.div
                className="absolute top-1/3 -right-10 text-[#B8963E]"
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 15, 0],
                }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
              >
                <TeaLeaf className="w-5 h-8 opacity-25" />
              </motion.div>

              {/* TAPU Package — Floating */}
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
                  alt="TAPU — Signature Assam Blend — Premium Tea Package"
                  width={400}
                  height={550}
                  className="relative z-10 drop-shadow-2xl rounded-lg"
                  style={{
                    filter: "drop-shadow(0 30px 60px rgba(45,80,22,0.2))",
                    maxHeight: "60vh",
                    width: "auto",
                    objectFit: "contain",
                  }}
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <div className="w-5 h-8 border border-[#2C2C20]/25 rounded-full flex justify-center pt-1.5">
              <motion.div
                className="w-1 h-2 bg-[#B8963E]/60 rounded-full"
                animate={{ y: [0, 6, 0], opacity: [1, 0.4, 1] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
