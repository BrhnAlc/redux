
import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const decrement=()=>{
    setCounter(counter - 1)
  }
  const icrement =()=>{
    setCounter(counter + 1)
  }
  return (
    <div className="App">
      <span onClick={()=>setCounter(decrement)}>-</span>
      <span>{counter}</span>
      <span onClick={()=>setCounter(icrement)}>+</span>
    </div>
  );
}

export default App;
