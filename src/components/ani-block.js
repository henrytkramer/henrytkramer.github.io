import React from "react"
import { motion } from "framer-motion"

const AniBlock = ({children, key, variants = {}, delay = 0, ...rest}) => {
    if (!Object.keys(variants).length) variants = DEFAULT_VARIANTS;

    return (
        <div style={{overflow: "hidden"}} {...rest}>
            <motion.div 
                custom={delay}
                variants={variants}
                initial="initial"
                animate="animate"
                key={key}
            >
                {children}
            </motion.div>
        </div>

    )
}

const DEFAULT_VARIANTS = {
    animate: delay => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: delay,
            y: {type: "easeOut", duration: .8},
            default: { duration: .8},
        }
    }),
    initial: {
        opacity: 0,
        y: "2.5em"
    }
}

export default AniBlock