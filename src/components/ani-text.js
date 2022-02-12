import React from "react"
import { motion } from "framer-motion"

const AniText = ({text = "", variants = {}, containerVariants = {}, delay = 0, ...rest}) => {
    if (!Object.keys(variants).length) variants = DEFAULT_VARIANTS;
    if (!Object.keys(containerVariants).length) containerVariants = DEFAULT_CONTAINER;

    return (
        // Letter scroll effect
        // <motion.div 
        //     key={text}
        //     custom={delay}
        //     variants={containerVariants}
        //     initial="initial"
        //     animate="animate"
        //     style={{overflow: `hidden`, position: `relative`}}
        //     {...rest}>
        //     {[...text].map( (letter, i) =>  (
        //         <motion.span
        //             style={{display: `inline-block`}}
        //             custom={0.1 * i + delay}
        //             initial="initial"
        //             animate="animate"
        //             exit="exit"
        //             variants={variants}
        //         >
        //             {letter}
        //         </motion.span>
        //     ))}
        // </motion.div>

        <div style={{overflow: "hidden"}} {...rest}>
            <motion.div 
                key={text}
                custom={delay}
                variants={variants}
                initial="initial"
                animate="animate"
            >
                {text}
            </motion.div>
        </div>

    )
}

const DEFAULT_CONTAINER = {
    initial: {
        opacity: 0
    },
    animate: i => ({
        opacity: 1,
        transition: {
            duration: 1.2,
            delay: i
        }
    }),

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
        y: ".8em"
    }
}


// For letter swiping
// const DEFAULT_VARIANTS = {
//     animate: i => ({
//         y: 0,
//         transition: {
//             type: "spring",
//             delay: i,
//             duration: .8,
//         }
//     }),
//     initial: {
//         y: 300
//     }
// }

export default AniText