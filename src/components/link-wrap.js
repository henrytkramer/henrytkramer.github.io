import React from "react"
import { Link } from "gatsby"

const LinkWrap = (props) => (
    <Link {...props}>
        {props.children}
    </Link>
)

export default LinkWrap