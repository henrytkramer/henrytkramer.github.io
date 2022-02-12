import React from "react"
import { Link } from "gatsby"
import AniText from "./ani-text"
import AniBlock from "./ani-block"
import { motion, AnimatePresence } from "framer-motion"
import * as mediaStyles from "./media-list.module.sass"

// Send a video NODE into props
const MediaPlayer = ({video}) => (
    <>
        <AniText className={mediaStyles.playerTitle} text={video.composer} />
        <div className={mediaStyles.playerSubtitle}>
            <AniText className={mediaStyles.work} text={video.work} />
            <AniText className={mediaStyles.movement} text={video.movement} />
            <AniText className={mediaStyles.info} text={video.info} />
        </div>
        <AnimatePresence>
            <motion.div 
                className={mediaStyles.playerVideo}
                key={`${video.composer}-video`}
                initial={{ opacity: 0, scaleX: 0.8 }}
                animate={{ 
                    opacity: 1,
                    scaleX: 1,
                    transition: {
                        opacity: {duration: 1},
                        default:{duration: 0.5}
                    }
                }}
                exit={{ opacity: 0, scaleX: 1.05 }}
                transition={{ duration: 0.5, type:"easeOut"}}
            >
                <iframe id="ytplayer" type="text/html" height="100%" width="100%"
                    src={video.link} frameborder="0"></iframe>
            </motion.div>
        </AnimatePresence>
    </>
)

export default MediaPlayer