import React from "react"
import { Link } from "gatsby"
import * as mediaStyles from "./media-list.module.sass"

const MediaList = (props) => (
    <div>
        <h4>Play next</h4>
        {
            props.videos.map( (video) => (
                <div className={mediaStyles.container}>
                    <div className={mediaStyles.composer}>{video.composer}</div>
                    <div className={mediaStyles.work}>{video.work}</div>
                    <div className={mediaStyles.info}>{video.info}</div>
                </div>
            ))
        }
    </div>
)

export default MediaList