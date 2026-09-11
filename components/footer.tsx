"use client"

import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

export function Footer() {
  const [email, setEmail] = useState("")
  const [isHovering, setIsHovering] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: "-100px" })

  const handleSubmit = () => {
    setIsSubmitting(true)
    setTimeout(() => setIsSubmitting(false), 2000)
  }

  const footerLinks = [
    {
      title: "Explore",
      links: ["Our Story", "Our Brands", "TAPU", "Origin"],
    },
    {
      title: "Quick Links",
      links: ["Home", "About XOWAD", "Contact", "FAQ"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Press", "Partners"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
  ]

  return (
    <footer ref={footerRef} className="relative bg-[#1A1A14] pt-20 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-editorial text-[#F5F0E8] tracking-tight leading-[0.95] overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              STAY CLOSE TO
            </motion.span>
            <motion.span
              className="block italic text-[#B8963E]"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
            >
              THE ORIGIN.
            </motion.span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto mb-16"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.div className="flex-1 relative" whileFocus={{ scale: 1.02 }}>
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-[#F5F0E8]/5 border border-[#B8963E]/20 rounded-xl px-4 py-3 text-[#F5F0E8] placeholder:text-[#F5F0E8]/30 text-sm focus:outline-none focus:border-[#B8963E] transition-all duration-300"
                whileFocus={{ borderColor: "#B8963E" }}
              />
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                animate={
                  email.length > 0
                    ? { boxShadow: "0 0 20px rgba(184,150,62,0.15)" }
                    : { boxShadow: "none" }
                }
              />
            </motion.div>
            <motion.button
              className="bg-[#B8963E] text-[#1A1A14] px-6 py-3 rounded-xl font-medium text-xs tracking-[0.1em] uppercase whitespace-nowrap relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={handleSubmit}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <motion.span
                className="relative z-10"
                animate={isSubmitting ? { opacity: [1, 0.5, 1] } : {}}
                transition={{ duration: 0.5, repeat: isSubmitting ? Number.POSITIVE_INFINITY : 0 }}
              >
                {isSubmitting ? "Joining..." : "Join the Journey"}
              </motion.span>
            </motion.button>
          </div>
          <motion.p
            className="text-[#F5F0E8]/30 text-xs mt-3 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Be the first to know when TAPU launches. No spam, just origin stories.
          </motion.p>
        </motion.div>

        {/* Brand description */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-[#F5F0E8]/40 text-xs max-w-xl mx-auto leading-relaxed">
            XOWAD is a premium house of brands rooted in origin. From the tea gardens of Assam to the
            moments that matter, we bring you closer to where every story begins.
          </p>
        </motion.div>

        {/* Footer links */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-t border-[#F5F0E8]/10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="font-medium text-[#F5F0E8] text-sm mb-3 tracking-wide">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((item) => (
                  <li key={item}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Link
                        href="#"
                        className="text-[#F5F0E8]/40 hover:text-[#B8963E] text-xs transition-colors inline-block"
                      >
                        {item}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-[#F5F0E8]/10 gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="text-xl font-editorial text-[#F5F0E8] tracking-wide">
              XOWAD
            </span>
          </motion.div>

          <p className="text-[#F5F0E8]/30 text-xs">
            © 2026 XOWAD. All rights reserved.
          </p>

          <motion.p
            className="text-[#F5F0E8]/20 text-xs cursor-pointer font-editorial italic"
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            animate={
              isHovering
                ? {
                    scale: [1, 1.05, 1],
                    color: "#B8963E",
                  }
                : {
                    scale: 1,
                    color: "rgba(245,240,232,0.2)",
                  }
            }
            transition={{ duration: 0.5 }}
          >
            rooted in origin
          </motion.p>
        </motion.div>
      </div>

      {/* Background watermark */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[12rem] md:text-[25rem] font-editorial text-[#F5F0E8]/[0.015] pointer-events-none select-none leading-none tracking-wider"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        XOWAD
      </motion.div>
    </footer>
  )
}
