import React from "react"
import * as buttonStyles from "./button.module.sass"
import { Link } from "gatsby"
import LinkWrap from "./link-wrap"

const Button = (props) => {
    const primary = props.primary ? buttonStyles.primary : ""
    const cNames = [buttonStyles.button, primary].join(" ")

    return (
        <LinkWrap to={props.link} className={cNames}>
            {props.children}
        </LinkWrap>
    )
}

export default Button