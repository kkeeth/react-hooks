import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

import AppContext from '../contexts/AppContext'
import EventForm from './EventForm'
import EventList from './EventList'
import OperationLogs from './OperationLogs'
import reducer from '../reducers'

const App = () => {
  const initialState = {
    events: [],
    operationLogs: [],
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App conntainer-fluid">
        <EventForm />
        <hr />
        <EventList />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  )
}

export default App
