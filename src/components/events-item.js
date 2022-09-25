import React from "react"
import * as eventStyles from "./events.module.sass"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import { HiOutlineExternalLink } from "react-icons/hi"
import { HiOutlineLink } from "react-icons/hi"

const EventItem = ({event, i}) => {
    return (
        <motion.div 
        key={`${event.title}+${event.dateFormatted}`}
        custom={i}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        >
            <div className={eventStyles.row}>
                <div className={eventStyles.date}>
                    <span className='nowrap'>{event.dateFormatted}</span> {event.endDateFormatted && <>&nbsp;— <span className='nowrap'>{event.endDateFormatted}</span></>}
                </div>
                <div className={eventStyles.location}>
                    {event.location}
                </div>
                <div className={eventStyles.description}>
                    <div className={eventStyles.title}>{event.title}</div>
                    {event.description}
                </div>
                <div className={eventStyles.actions}>
                    {event.link && <Link target="_blank" to={event.link} alt="Details">
                        <HiOutlineExternalLink />
                    </Link>}
                </div>
            </div>
        </motion.div>
    )
}

const variants = {
    enter: i => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i*0.05,
            duration: .3
        }
    }),
    exit: {
      opacity: 0,
      backgroundColor: "red",
    },
    hidden: {
        opacity: 0,
        y: 30
    }
  }
  

export default EventItem