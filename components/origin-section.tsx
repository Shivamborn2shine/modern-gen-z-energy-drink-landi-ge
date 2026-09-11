"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function OriginSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.3])

  return (
    <section
      id="origin"
      ref={ref}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#1A1A14]"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-[120%]"
        style={{ y }}
      >
        <Image
          src="/images/tapu-collage.jpg"
          alt="Assam Tea Gardens"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1A1A14]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A3A0A]/80 via-transparent to-[#1A1A14]" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="space-y-8"
        >
          <div className="overflow-hidden mb-6">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5F0E8] leading-[1.2] tracking-tight font-editorial"
              initial={{ y: 80 }}
              animate={isInView ? { y: 0 } : { y: 80 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            >
              BEFORE IT REACHES YOUR CUP,
              <br />
              IT BEGINS ITS STORY IN{" "}
              <span className="italic text-[#B8963E]">ASSAM.</span>
            </motion.h2>
          </div>

          <motion.div 
            className="space-y-4 text-sm md:text-base text-[#F5F0E8]/80 max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>Mist-covered gardens.</p>
            <p>Generations of craftsmanship.</p>
            <p>A land known around the world for its bold and distinctive tea.</p>
          </motion.div>

          <motion.div
            className="pt-8 space-y-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="text-xs tracking-[0.2em] uppercase text-[#B8963E]">
              Every cup begins somewhere.
            </p>
            <p className="text-xl md:text-2xl font-editorial text-[#F5F0E8] italic tracking-wide">
              OURS BEGINS HERE.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
