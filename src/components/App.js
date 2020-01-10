import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

const App = () => {
  return (
    <div className="App conntainer-fluid">
      <h4>The form of creating events</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">Title</label>
          <input className="form-control" id="formEventTitle" />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">Body</label>
          <textarea className="form-control" id="formEventBody" />
        </div>

        <button className="btn btn-primary">Create events</button>
        <button className="btn btn-danger">Delate events</button>
      </form>

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
        </tbody>
      </table>
    </div>
  )
}

export default App
