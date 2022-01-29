import React from "react"

import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const LinkWrap = (props) => (
    <AniLink cover direction="left" duration={0.7} bg="#fff"
        // exit={{
        //     length: 0
        // }}
        // entry={{
        //     length: 1,
        //     delay: 2
        // }}
        {...props}
    >
        {props.children}
    </AniLink>
)

export default LinkWrap