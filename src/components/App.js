import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

import AppContext from '../contexts/AppContext'
import EventForm from './EventForm'
import EventList from './EventList'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={'Hello, I am a Provider'}>
      <div className="App conntainer-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <EventList state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  )
}

export default App
