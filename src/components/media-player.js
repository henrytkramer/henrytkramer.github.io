import React from "react"
import { Link } from "gatsby"
import * as mediaStyles from "./media-list.module.sass"

const MediaPlayer = (props) => {
    return (
        <div className={mediaStyles.player}>
            <iframe id="ytplayer" type="text/html" height="100%" width="100%"
  src={props.link} frameborder="0"></iframe>
        </div>
    )
}

export default MediaPlayer