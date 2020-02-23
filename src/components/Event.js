import React from 'react'

import { DELETE_EVENT } from '../actions'

const Event = ({ event, dispatch }) => {
  const id = event.id
  const handleClickDelete = () => {
    const result = window.confirm(`Is it really good to delete the event with id = ${id} ?`)
    if (result) dispatch({ type: DELETE_EVENT, id })
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button className="btn btn-danger" onClick={handleClickDelete}>
          Delete event
        </button>
      </td>
    </tr>
  )
}

export default Event
