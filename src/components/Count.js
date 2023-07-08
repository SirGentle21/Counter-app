import React, { useState } from 'react';
import './Count.css';

const Count = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="main">
      <button onClick={() => setToggle(!toggle)}>{toggle ? "Dark" : "Light"}</button>

      {toggle ? 
      <div id="btn">
          <button onClick={() => setCount(count + 1)}>+</button>

          <p>{count}</p>      
 
          <button onClick={() => setCount(count - 1)}>-</button>
        </div> :
      <div id="second">
          <button onClick={() => setCount(count + 1)}>+</button>

          <p>{count}</p>      

          <button onClick={() => setCount(count - 1)}>-</button>
      </div>
        
    }

     
    </div>
  )
}

export default Count;