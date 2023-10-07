
import { useState } from 'react';
import './App.css';
import Home from './pages/Home';

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
      <span onClick={decrement}>-</span>
      {/* <span>{counter}</span> */}
      <Home counter={counter}/>
      <span onClick={icrement}>+</span>
    </div>
  );
}

export default App;
