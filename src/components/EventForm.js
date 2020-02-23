import React, { useState } from 'react'

const EventForm = ({ state, dispatch }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()

    dispatch({
      type: 'CREATE_EVENT',
      title,
      body,
    })
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('Is it really OK to delete all events?')
    if (result) dispatch({ type: 'DELETE_ALL_EVENTS' })
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
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>
          Delate all events
        </button>
      </form>
    </>
  )
}

export default EventForm