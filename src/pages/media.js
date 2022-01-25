import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import MediaList from "../components/media-list"
import MediaPlayer from "../components/media-player"

const MediaPage = ({data}) => (
    <Layout>
        <h1>Media</h1>

        <div className="two-flex">
            <MediaPlayer link={data.allVideosYaml.nodes[1].link} />
            <MediaList videos={data.allVideosYaml.nodes}></MediaList>
        </div>
    </Layout>
)

// Gatsby takes one "query" export and passes it as {data} into page
export const query = graphql`
query {
    allVideosYaml {
        nodes {
            composer
            link
            work
        }
    }
}
`

export default MediaPage