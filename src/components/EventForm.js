import React, { useState, useContext } from 'react'

import { CREATE_EVENT, DELETE_ALL_EVENTS, ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from '../actions'
import AppContext from '../contexts/AppContext'
import { timeCurrentISO8601 } from '../utils'

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()

    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    })
    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'created event',
      operatedAt: timeCurrentISO8601(),
    })
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('Is it really OK to delete all events?')
    if (result) {
      dispatch({ type: DELETE_ALL_EVENTS })
      dispatch({
        type: ADD_OPERATION_LOG,
        description: 'deleted all events',
        operatedAt: timeCurrentISO8601(),
      })
    }
  }

  const deleteAllOperationLogs = e => {
    e.preventDefault()
    const result = window.confirm('Is it really OK to delete all operation logs?')
    if (result) {
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS,
        description: 'completed deleting all logs',
        operatedAt: timeCurrentISO8601(),
      })
    }
  }

  const unCreatable = title === '' || body === ''

  return (
    <>
      <h4>The form of creating events</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">Title</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">Body</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>
          Create events
        </button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length === 0}>
          Delate all events
        </button>
        <button className="btn btn-danger" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length === 0}>
          Delate all operation logs
        </button>
      </form>
    </>
  )
}

export default EventForm
