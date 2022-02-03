import React from "react"
import * as eventStyles from "./events.module.sass"
import { Link } from "gatsby"
import Button from "./button.js"
import { motion, AnimatePresence } from "framer-motion"


const EventItem = ({event}) => {
    return (
        <div className={eventStyles.row}>
            <div className={eventStyles.date}>
                <span className='nowrap'>{event.dateFormatted}</span> {event.endDateFormatted && <>&nbsp;— <span className='nowrap'>{event.endDateFormatted}</span></>}
            </div>
            <div className={eventStyles.location}>
                {event.location}
            </div>
            <div className={eventStyles.description}>
                {event.description}
            </div>
            <div className={eventStyles.actions}>
                {event.link && <Button link={event.link}>Details</Button>}
            </div>
        </div>
    )
}

export default EventItem