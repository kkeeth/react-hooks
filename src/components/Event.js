import React, { useContext } from 'react'

import { DELETE_EVENT, ADD_OPERATION_LOG } from '../actions'
import AppContext from '../contexts/AppContext'
import { timeCurrentISO8601 } from '../utils'

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext)
  const id = event.id
  const handleClickDelete = () => {
    const result = window.confirm(`Is it really good to delete the event with id = ${id} ?`)
    if (result) {
      dispatch({ type: DELETE_EVENT, id })
      dispatch({
        type: ADD_OPERATION_LOG,
        description: 'deleted event',
        operatedAt: timeCurrentISO8601(),
      })
    }
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
