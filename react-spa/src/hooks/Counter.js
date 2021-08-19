import './Counter.css';
import React, { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);

  const decrementCount = () => setCount(count - 1);
  const incrementCount = () => setCount(count + 1);
  const reset = () => setCount(0);
  
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
  </div>
  ) 
} 
export default Counter;