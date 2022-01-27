import React from "react"
import { Link } from "gatsby"
import * as mediaStyles from "./media-list.module.sass"

// Send a video NODE into props
const MediaPlayer = ({video}) => (
    <>
            <div className={mediaStyles.playerTitle}>{video.composer}</div>
            <div className={mediaStyles.playerSubtitle}>
                <div className={mediaStyles.work}>{video.work}</div>
                <div className={mediaStyles.movement}>{video.movement}</div>
                <div className={mediaStyles.info}>{video.info}</div>
            </div>
            <div className={mediaStyles.playerVideo}>
                <iframe id="ytplayer" type="text/html" height="100%" width="100%"
        src={video.link} frameborder="0"></iframe>
            </div>
    </>
)

export default MediaPlayer