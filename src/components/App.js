import React, { useReducer, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

import AppContext from '../contexts/AppContext'
import EventForm from './EventForm'
import EventList from './EventList'
import OperationLogs from './OperationLogs'
import reducer from '../reducers'

const APP_KEY = 'appWithRedux'

const App = () => {
  const appState = localStorage.getItem(APP_KEY)

  const initialState = appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: [],
      }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])

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
