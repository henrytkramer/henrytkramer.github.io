import React from "react"
import * as buttonStyles from "./button.module.sass"
import { Link } from "gatsby"

const Button = (props) => {
    const primary = props.primary ? buttonStyles.primary : ""
    const cNames = [buttonStyles.button, primary].join(" ")

    return (
        <Link to={props.link} className={cNames}>
            {props.children}
        </Link>
    )
}

export default Button