import React, { useState, useEffect } from 'react'
import '../App.css'

const UniteStates = props => {
  const [state, setState] = useState(props)
  const { name, price } = state

  useEffect(() => {
    console.log('use effect is invoked')
  })

  const renderPeriod = () => {
    console.log('renderPeriod renders period')
    return '.'
  }

  return (
    <>
      <div className="App">
        <p>Now {state.name} is ￥{price}{renderPeriod()}</p>
        <button onClick={() => setState({...state, price: price + 1})}>+1</button>
        <button onClick={() => setState({...state, price: price - 1})}>-1</button>
        <button onClick={() => setState(props)}>reset</button>
        <input value={name} onChange={e => setState({...state, name: e.target.value})} />
      </div>
    </>
  )
}

UniteStates.defaultProps = {
  name: 'kkeeth',
  price: 1000
}

export default UniteStates
