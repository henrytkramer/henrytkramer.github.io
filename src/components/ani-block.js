import React from "react"
import { motion } from "framer-motion"

const AniBlock = ({children, delay = 0, ...rest}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay }}
            {...rest}
        >
            {children}
        </motion.div>
    )
}

export default AniBlock