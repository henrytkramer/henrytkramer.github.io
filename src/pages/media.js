import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import MediaList from "../components/media-list"
import MediaPlayer from "../components/media-player"

const MediaPage = ({data}) => {
    // State variable for active video
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Layout grid contentStyle={{ height: `90vh`, gridTemplateRows: `15vh 1fr 5em` }}>
            <MediaPlayer video={data.allVideosYaml.nodes[activeIndex]} />
            <MediaList 
                videos={data.allVideosYaml.nodes}
                setActive={setActiveIndex}
                activeIndex={activeIndex}
            />
        </Layout>
    )
}

// Gatsby takes one "query" export and passes it as {data} into page
export const query = graphql`
    query {
        allVideosYaml {
            nodes {
                composer
                link
                work
                movement
                info
            }
        }
    }
`

export default MediaPage