import React, { useState } from 'react'
import './App.css'

const App = props => {
  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  return (
    <>
      <div className="App">
        <p>Now {name} is ￥{price}.</p>
	<button onClick={() => setPrice(price + 1)}>+1</button>
	<button onClick={() => setPrice(price - 1)}>-1</button>
	<button onClick={() => setPrice(props.price)}>reset</button>
	<input value={name} onChange={e => setName(e.target.value)} />
      </div>
    </>
  )
}

App.defaultProps = {
  name: 'kkeeth',
  price: 1000
}

export default App
