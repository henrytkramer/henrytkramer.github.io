//Import React
import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { MotionConfig } from "framer-motion"

import Button from "../components/button"
import Layout from "../components/layout"
import AniText from "../components/ani-text"
import AniBlock from "../components/ani-block"
import SEO from "../components/seo"
import EventsTable from "../components/events-table"
import LinkWrap from "../components/link-wrap"

// Define your component
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    {/* <div className="hero">
      <StaticImage src="../images/big-title.svg" alt="Henry Kramer"/>
    </div> */}

    <div style={ {fontSize: `10em`, lineHeight: 0.8, overflow: `hidden`} }>
      <AniText text="HENRY" />
      <AniText text="KRAMER" delay={0.2}/>
    </div>

    <div className="hero">
      <StaticImage
        src="../images/steinway-portrait.jpg"
        alt="Portrait of Henry Kramer in front of a piano"
        style={{maxHeight: "85vh"}}
      />
    </div>

    <AniBlock>
      <h2 className="index-heading">
        <Link>Award-winning musician</Link> who combines stylish programming with insightful and exuberant interpretations.
      </h2>
    </AniBlock>

    <AniBlock>
      <section>
        <h2>Albums</h2>
        <div className="two-flex">
          <div>
            <StaticImage 
              src="../images/voyage_album.jpeg"
              alt="Voyage album cover"
            />
          </div>
          <div>
            <h3>Voyage—</h3>
            <p>Taking you somewhere elegeic and temporal. A collaboration with cellist Christine Lee featuring works by Elliot Carter, Barber, and Ysaÿe.</p>
            <div>
              <Button primary target="_blank" link="https://open.spotify.com/album/3j3gbtGL6ZVHhATLk91nVD?si=2TUjW6n_TOu-6ttE3UZb1g">Stream it on Spotify</Button>
              <Button target="_blank" link="https://open.spotify.com/artist/4xdZ9fYujKkuzxnNBfm8KW?si=Hz6ZRG_1RCqAfNtCZYEoMg">See all albums</Button>
            </div>
          </div>
        </div>
      </section>
    </AniBlock>

    <AniBlock>
      <section>
        <h2>Videos</h2>
        <div className="two-flex">
          <div></div> {/* Video preview */}
          <div>
            <h3>Prokofiev Concerto No. 2—</h3>
            <p>Performed with the Belgian National Orchestra</p>
            <div>
              <Button primary link="/media">Watch</Button>
            </div>
          </div>
        </div>
      </section>
    </AniBlock>

    <section>
      <div className="two-flex">
        <h2>Upcoming Performances</h2>
        <Button link="/schedule">See all</Button>
      </div>
      <EventsTable data={data} limit={3}/>
    </section>

  </Layout>
)

export const query = graphql`
  query {
    allGoogleScheduleSheet {
      nodes {
        date
        description
        endDate
        location
        start
        timestamp
        title
      }
    }
  }
`

// Export component
export default IndexPage
