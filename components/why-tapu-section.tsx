"use client"

import type React from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState } from "react"

const features = [
  {
    title: "ROOTED IN ASSAM",
    description: "A tea experience inspired by one of the world's most celebrated tea regions.",
    icon: "🌿",
  },
  {
    title: "CRAFTED AS A BLEND",
    description: "Carefully combined Assam teas, created for a distinctive everyday chai experience.",
    icon: "🍃",
  },
  {
    title: "MADE FOR THE CUP YOU LOVE",
    description: "A blend designed for memorable chai moments.",
    icon: "☕",
  },
]

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    x.set(mouseX / width - 0.5)
    y.set(mouseY / height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group cursor-pointer"
    >
      {/* Hover glow */}
      <motion.div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, rgba(184,150,62,0.3), transparent, rgba(45,80,22,0.3))",
          filter: "blur(8px)",
        }}
      />

      {/* Card body */}
      <div className="relative bg-[#1A1A14] rounded-2xl p-8 md:p-10 border border-[#B8963E]/10 overflow-hidden h-full min-h-[280px] flex flex-col">
        {/* Subtle shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          initial={false}
          animate={
            isHovered
              ? {
                  background: [
                    "linear-gradient(105deg, transparent 20%, rgba(184,150,62,0.03) 25%, transparent 30%)",
                    "linear-gradient(105deg, transparent 70%, rgba(184,150,62,0.03) 75%, transparent 80%)",
                  ],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <motion.div
            className="text-3xl mb-6"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {feature.icon}
          </motion.div>

          {/* Title */}
          <h3
            className="text-lg md:text-xl font-editorial text-[#F5F0E8] tracking-wide mb-4"
          >
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#F5F0E8]/50 leading-relaxed flex-1">
            {feature.description}
          </p>

          {/* Bottom accent line */}
          <motion.div
            className="h-[1px] rounded-full mt-6 bg-[#B8963E]/30"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export function WhyTapuSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="why-tapu" className="relative py-24 md:py-32 bg-[#1A1A14] overflow-hidden noise-overlay">
      <div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.span
            className="inline-block text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#B8963E]"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.1 }}
          >
            WHY TAPU
          </motion.span>

          <div className="overflow-hidden mt-3">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-editorial text-[#F5F0E8] tracking-tight"
              initial={{ y: 60 }}
              animate={isInView ? { y: 0 } : { y: 60 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
            >
              A Cup Worth <span className="italic text-[#B8963E]">Choosing.</span>
            </motion.h2>
          </div>

          <motion.div
            className="h-[1px] w-12 bg-[#B8963E]/40 mx-auto mt-4 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
