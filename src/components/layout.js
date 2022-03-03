/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./main.sass"

import Nav from "./navigation"


const Layout = ({ grid = false, children, contentStyle = null }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [mobileMenuIsOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1920,
          padding: `0 2.1vw`,
        }}
        className={ mobileMenuIsOpen ? 'no-scroll' : ''}
      >
        <Nav setMobileMenuOpen={setMobileMenuOpen}/>
        
        <main className={ grid ? `grid-container` : `content-container` } style={contentStyle}>
          {children}
        </main>
        
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()} Henry Kramer
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
