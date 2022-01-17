//Import React
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Define your component
const SchedulePage = () => (
  <Layout>
    <SEO title="Upcoming concerts schedule" />
    {/* <StaticImage
      src="../images/steinway-portrait.jpg"
      alt="Portrait of Henry Kramer in front of a piano"
    /> */}

    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
    <h1>Schedule</h1>
  </Layout>
)

// Export component
export default SchedulePage
