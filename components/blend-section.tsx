"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function BlendSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="blend"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-[#FAF7F2] paper-texture"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#B8963E] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            THE TAPU BLEND
          </motion.span>
          
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-editorial text-[#2C2C20] tracking-tight leading-[1.1]"
              initial={{ y: 80, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            >
              NOT JUST MIXED.
              <br />
              <span className="italic text-[#2D5016]">CRAFTED.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-[#6B5E4E] font-editorial italic">
              Every component plays a role.
            </p>
            
            <div className="space-y-4 text-2xl md:text-3xl font-editorial text-[#2C2C20] tracking-wide">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                STRENGTH.
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                BODY.
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                CHARACTER.
              </motion.div>
            </div>

            <motion.p
              className="text-sm md:text-base text-[#6B5E4E] pt-4 leading-relaxed max-w-sm"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Together, they create the TAPU experience.
            </motion.p>
          </motion.div>

          <motion.div
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              src="/images/explodeview-tapu.png"
              alt="TAPU Blend Components"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
