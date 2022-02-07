import React from "react"
import { Link } from "gatsby"
import AniText from "./ani-text"
import { motion, AnimatePresence } from "framer-motion"
import * as mediaStyles from "./media-list.module.sass"

// Send a video NODE into props
const MediaPlayer = ({video}) => (
    <>
        <AniText className={mediaStyles.playerTitle} text={video.composer} />
        <div className={mediaStyles.playerSubtitle}>
            <div className={mediaStyles.work}>{video.work}</div>
            <div className={mediaStyles.movement}>{video.movement}</div>
            <div className={mediaStyles.info}>{video.info}</div>
        </div>
        <AnimatePresence>
            <motion.div 
                className={mediaStyles.playerVideo}
                key={`${video.composer}-video`}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: [0.8, 1], translateX: 0}}
                exit={{ opacity: 0, scaleX: 1.05 }}
                transition={{ duration: 0.1, ease:"easeOut"}}
            >
                <iframe id="ytplayer" type="text/html" height="100%" width="100%"
        src={video.link} frameborder="0"></iframe>
            </motion.div>
        </AnimatePresence>
    </>
)

export default MediaPlayer