import React from "react"
import { AnimatePresence, motion } from "framer-motion"

const PageTransition = ({ location, children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location?.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ minHeight: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition


