import React from "react"
import { Link } from "gatsby"
import * as mediaStyles from "./media-list.module.sass"

const MediaList = ({videos, setActive, activeIndex}) => {
    return (
    <>
    <h4 className={mediaStyles.videosListTitle}>Videos</h4>
    <div className={mediaStyles.videosList}>
        {
            videos.map( (video, index) => (
                <div className={`${mediaStyles.videoItem} ${ index==activeIndex ? mediaStyles.active : ""}`}
                    onClick={ () => setActive(index)}>
                    <div className={mediaStyles.composer}>{video.composer}</div>
                    <div className={mediaStyles.work}>{video.work}</div>
                    <div className={mediaStyles.movement}>{video.movement}</div>
                    <div className={mediaStyles.info}>{video.info}</div>
                </div>
            ))
        }
    </div>
    </>
)
}

export default MediaList