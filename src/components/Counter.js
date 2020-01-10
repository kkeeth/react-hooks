import React, { useState } from 'react'
import '../App.css'

const Counter = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const incrementWithFunction = () => setCount(previousCount => previousCount + 1)
  const decrementWithFunction = () => setCount(previousCount => previousCount - 1)

  const reset = () => setCount(0)
  const double = () => setCount(count * 2)
  const mod3 = () => setCount(previousCount => {
    if (previousCount % 3 !== 0) return previousCount
    return previousCount / 3
  })

  return (
    <>
      <div className="App">
        count: {count}
      </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={incrementWithFunction}>+1</button>
        <button onClick={decrementWithFunction}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={double}>x2</button>
      </div>
      <div>
	<button onClick={mod3}>Divide by 3 only if it is a multiple of 3</button>
      </div>
    </>
  )
}

export default Counter
