import React, {useState, useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import EventsItem from "./events-item"

// var showing
// 0 = upcoming events, 1 = past events
const EventsTable = ({ data={}, showing=0, limit=99 }) => {
  const [upcomingEvents, pastEvents] = getEventData(data);
  const events = (showing===0) ? upcomingEvents : pastEvents;

  return (
    <div>
      { events.slice(0, limit).map((event, i) => (
        <AnimatePresence exitBeforeEnter>
            <EventsItem event={event} i={i}/>
        </AnimatePresence>
      ))}
    </div>
  )

}

const getEventData = function (data) {
  //TODO: Add "link" to graphql

  // Arrays of events
  let allEvents = [];
  let upcomingEvents = [];
  let pastEvents = [];

  if (data) {
    allEvents = data.allGoogleScheduleSheet.nodes;
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
      event.date = date; //event.date is an object so we can use in compare functions

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

  return [upcomingEvents, pastEvents];
}

export default EventsTable