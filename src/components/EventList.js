import React, { useContext } from 'react'

import Event from './Event'
import AppContext from '../contexts/AppContext'

const EventList = ({ state, dispatch }) => {
  const value = useContext(AppContext)
  return (
    <>
      <div>{value}</div>
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
          {state.map((event, index) => (
            <Event key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default EventList
