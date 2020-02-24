import React, { useContext } from 'react'

import OperationLog from './OperationLog'
import AppContext from '../contexts/AppContext'

const OperationLogs = () => {
  const { state } = useContext(AppContext)
  return (
    <>
      <h4>Operation Log List</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Log</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map((log, index) => (
            <OperationLog key={index} log={log} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default OperationLogs
