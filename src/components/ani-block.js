import React from "react"
import { motion } from "framer-motion"

const AniBlock = ({children, delay = 0, ...rest}) => {
    return (
        <div data-sal="slide-up" {...rest}>
            {children}
        </div>

    )
}

export default AniBlock