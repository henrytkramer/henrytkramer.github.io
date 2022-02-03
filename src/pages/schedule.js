//Import React
import React, {useState} from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import EventsItem from "../components/events-item"
import SEO from "../components/seo"
import BigSwitch from "../components/big-switch"

/*
  Schema for an event
  Datetime start/end (+time zone)
  Location
  Name of performance
  Description (txt)
*/
const SchedulePage = ({data}) => {
  // Arrays of events
  let allEvents = [];
  let upcomingEvents = [];
  let pastEvents = [];

  // State variable fo upcoming/past
  const [showing, setShowing] = useState(0);
  const events = (showing === 0) ? upcomingEvents : pastEvents;

  if (data) {
    allEvents = data.allGoogleFormResponses1Sheet.nodes;
    const timeFormat = {timeStyle: 'short', hour12: true}; // 3:30 AM
    const dateFormat = {month: 'short', day: 'numeric'}; // Jan 30
    const dateFormatWithYear = {month: 'short', day: 'numeric', year: 'numeric'}; // Jan 30 2012

    // Comparisons
    const currentYear = new Date().getFullYear();
    const now = Date.now()

    allEvents.forEach(event => {
      // Created a formatted time for cal
      // Documentation here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
      const date = new Date(event.date);
      event.date = date; //event.date is an object so we can compare

      const dateFormatStr = (date.getFullYear() == currentYear) ? dateFormat : dateFormatWithYear;
      event.dateFormatted = date.toLocaleDateString([], dateFormatStr);

      if (event.start) {
        const start = new Date(event.date + ' ' + event.start);
        event.startFormatted = start.toLocaleTimeString([], timeFormat);
      }

      if (event.endDate) {
        const endDate = new Date(event.endDate);
        event.endDateFormatted = endDate.toLocaleDateString([], dateFormatStr);
      }

      if (date.getTime() >= now) 
        upcomingEvents.push(event);
      else 
        pastEvents.push(event);
    });
  }

  //sort by date
  upcomingEvents.sort((a, b) => a.date - b.date); // Ascending
  pastEvents.sort((a, b) => b.date - a.date); // Descending

  return (
    <Layout>
      <SEO title="Upcoming concerts schedule" />

      <BigSwitch 
        options={["Upcoming", "Past"]}
        activeIndex={showing}
        setActiveIndex={setShowing}
      />
      
      <div>
        { events.map((event) => (
          <EventsItem event={event} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql` 
  query {
    allGoogleFormResponses1Sheet {
      nodes {
        date
        location
        title
        description
        start
        endDate
      }
    }
  }
`
//TODO: Add "link" to graphql

export default SchedulePage
