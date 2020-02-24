import React from 'react'

const Event = ({ log }) => {
  return (
    <tr>
      <td>{log.description}</td>
      <td>{log.operatedAt}</td>
    </tr>
  )
}

export default Event
