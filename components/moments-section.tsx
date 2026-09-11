"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const moments = [
  "EARLY MORNINGS.",
  "LONG CONVERSATIONS.",
  "RAINY AFTERNOONS.",
  "UNEXPECTED GUESTS.",
  "QUIET EVENINGS."
]

export function MomentsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-40 bg-[#F5F0E8] overflow-hidden paper-texture"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="sticky top-32"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-editorial text-[#2C2C20] leading-[1.1] tracking-tight">
              FOR THE MOMENTS
              <br />
              <span className="italic text-[#2D5016]">THAT DESERVE</span>
              <br />
              A BETTER CUP.
            </h2>
            
            <motion.div
              className="h-[1px] w-24 bg-[#B8963E]/40 mt-10 mb-8"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            
            <p className="text-xs tracking-[0.25em] uppercase text-[#6B5E4E]">
              Everyday Rituals
            </p>
          </motion.div>

          <div className="space-y-8 md:space-y-12 pt-8 md:pt-0">
            {moments.map((moment, i) => (
              <motion.div
                key={moment}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                transition={{ duration: 0.6, delay: 0.4 + (i * 0.15) }}
                className="flex items-center gap-6 group"
              >
                <div className="w-2 h-2 rounded-full bg-[#B8963E] opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-editorial text-[#2C2C20] tracking-wide group-hover:text-[#2D5016] transition-colors duration-300">
                  {moment}
                </h3>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="pt-12"
            >
              <p className="text-lg md:text-xl font-editorial italic text-[#B8963E]">
                THERE'S ALWAYS A REASON FOR CHAI.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
