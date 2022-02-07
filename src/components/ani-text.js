import React from "react"
import { motion } from "framer-motion"

const AniText = ({text = "", variants = {}, containerVariants = {}, delay = 0, ...rest}) => {
    if (!Object.keys(variants).length) variants = DEFAULT_VARIANTS;
    if (!Object.keys(containerVariants).length) containerVariants = DEFAULT_CONTAINER;

    return (
        <motion.div 
            key={text}
            custom={delay}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            style={{overflow: `hidden`, position: `relative`}}
            {...rest}>
            {[...text].map( (letter, i) =>  (
                <motion.span
                    style={{display: `inline-block`}}
                    custom={0.1 * i + delay}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={variants}
                >
                    {letter}
                </motion.span>
            ))}
        </motion.div>
    )
}

const DEFAULT_CONTAINER = {
    initial: {
        opacity: 0
    },
    animate: i => ({
        opacity: 1,
        transition: {
            duration: .4,
            delay: i
        }
    }),

}

const DEFAULT_VARIANTS = {
    animate: i => ({
        y: 0,
        transition: {
            type: "spring",
            delay: i,
            duration: .8,
        }
    }),
    initial: {
        y: 300
    }
}

export default AniText