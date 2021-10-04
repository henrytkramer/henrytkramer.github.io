//Import React
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Define your component
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi folks</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage src="../images/big-title.svg" alt="Henry Kramer"/>
    <StaticImage
      src="../images/steinway-portrait.jpg"
      alt="Portrait of Henry Kramer in front of a piano"
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

const Home = () => (
  <Layout>
    <h1>Hello Gatsby!</h1>
    <p>What a world</p>
  </Layout>
)

// Export component
export default IndexPage
