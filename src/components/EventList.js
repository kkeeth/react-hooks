import React, { useContext } from 'react'

import Event from './Event'
import AppContext from '../contexts/AppContext'

const EventList = () => {
  const { state } = useContext(AppContext)
  return (
    <>
      <h4>Events list</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.events.map((event, index) => (
            <Event key={index} event={event} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default EventList
