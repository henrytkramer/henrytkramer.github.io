//Import React
import React, {useState, useEffect} from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { motion, AnimatePresence } from "framer-motion"

import Layout from "../components/layout"
import EventsItem from "../components/events-item"
import SEO from "../components/seo"
import BigSwitch from "../components/big-switch"
import EventsTable from "../components/events-table"

/*
  Schema for an event
  Datetime start/end (+time zone)
  Location
  Name of performance
  Description (txt)
*/
const SchedulePage = ({data}) => {
  // State variable fo upcoming/past
  const [showing, setShowing] = useState(0);

  return (
    <Layout>
      <SEO title="Upcoming concerts schedule" />

      <BigSwitch 
        options={["Upcoming", "Past"]}
        activeIndex={showing}
        setActiveIndex={setShowing}
      />
      
      <EventsTable showing={showing} />

    </Layout>
  )
}

export default SchedulePage