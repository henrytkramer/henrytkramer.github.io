import React from "react"
// import * as buttonStyles from "./button.module.sass"
import { Link } from "gatsby"

const EventItem = (props) => {
    return (
        <div className={}>
            {props.location}
            {props.times}
            {props.date}
        </div>
    )
}

export default EventItem