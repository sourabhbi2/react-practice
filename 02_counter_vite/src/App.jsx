import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0); //we can refer any name for setCounter.

  // let counter = 1;
  const addValue = () => {

    if (counter < 20) {
      counter = counter + 1;

      setCounter(counter)
    } else {
      return counter

    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      return counter;
    }
  }



  return (
    <>

      <h1>Vite + React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>


    </>
  )
}

export default App
