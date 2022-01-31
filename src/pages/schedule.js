//Import React
import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

/*
Schema for an event
Datetime start/end (+time zone)
Location
Name of performance
Description (txt)
*/
const SchedulePage = ({data}) => {

  // let events = data.allGoogleFormResponses1Sheet.nodes;
  let events = [];
  if (data) {
    events = data.allGoogleFormResponses1Sheet.nodes;
    const timeFormat = {timeStyle: 'short', hour12: true}; // 3:30 AM
    const dateFormat = {month: 'short', day: 'numeric'}; //Jan 30

    events.forEach(event => {
      // Created a formatted time for cal
      // Documentation here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat

      let start = new Date(event.date + ' ' + event.start);
      event.startFormatted = start.toLocaleTimeString([], timeFormat);

      if (event.end) {
        let end = new Date(event.date + ' ' + event.end);
        event.endFormatted = end.toLocaleTimeString([], timeFormat)
      } else {
        // TODO: Let it end in 1 hr
      }

      event.dateFormatted = start.toLocaleDateString([], dateFormat);
    });
  }

  return (
    <Layout>
      <SEO title="Upcoming concerts schedule" />
      <h1>Schedule</h1>

      { events.map( (event) => (
        <div>
          {event.location}, {event.dateFormatted}, {event.startFormatted}, {event.endFormatted}, {event.title}, {event.description}
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql` 
  query {
    allGoogleFormResponses1Sheet {
      nodes {
        end
        start
        date
        location
        title
        description
      }
    }
  }
`
export default SchedulePage
