import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

import Event from './Event'
import EventForm from './EventForm'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className="App conntainer-fluid">
      <EventForm state={state} dispatch={dispatch} />

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
    </div>
  )
}

export default App
