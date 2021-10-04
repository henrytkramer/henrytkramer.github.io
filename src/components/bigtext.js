import React from "react"
import * as bigTextStyles from "./bigtext.module.css"

const BigText = (props) => (
    <h1 className={bigTextStyles.bigtext}>{props.text}</h1>
)

export default BigText