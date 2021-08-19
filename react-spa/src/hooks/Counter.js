import './Counter.css';
import React, { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);

  const decrementCount = () => setCount(count - 1);
  const incrementCount = () => setCount(count + 1);
  const reset = () => setCount(0);
  const times2 = () => setCount(count * 2)
  const div2 = () => setCount(count / 2)
  const squared = () => setCount(Math.pow(count, 2))
  const root = () => setCount(Math.sqrt(count))

  return (
  <div>
    <div className="countStyle">
      <button className="buttonStyle" onClick={decrementCount}>-</button>
      <span className="spacing">{count}</span>
      <button className="buttonStyle" onClick={incrementCount}>+</button>
    </div>  
    <div>
      <button className="buttonStyleLg" onClick={reset}>Reset</button> 
    </div>
    <div>
      <button className="buttonStyleLg" onClick={times2}>x2</button> 
    </div>
    <div>
      <button className="buttonStyleLg" onClick={div2}>/2</button> 
    </div>
    <div>
      <button className="buttonStyleXlg" onClick={squared}>Squared</button> 
    </div>
    <div>
      <button className="buttonStyleXlg" onClick={root}>Square Root</button> 
    </div>
  </div>
  ) 
} 
export default Counter;