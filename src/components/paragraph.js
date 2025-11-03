import React from "react"
import { motion } from "framer-motion"
import * as paragraphStyles from "./paragraph.module.sass"

const Paragraph = ({children, ...rest}) => {
    if (children.length) return (
        <>
            {children.map( (child, index) => (
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`${paragraphStyles.paragraph} ${index % 2 == 0  ? paragraphStyles.leftCol : paragraphStyles.rightCol}`}
                >
                    {child}
                </motion.p>
            ))}
        </>
    );
    
    return (
        <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={paragraphStyles.paragraph}
        >
            {children}
        </motion.p>
    );
}

export default Paragraph