import { useState } from 'react'

function Card(props) {
    const [count, setCount] = useState(0)
    return (
      <div className="card">
        <p>{props.name}</p>
        <h1 className="count">{count}</h1>
      <div> 
        <button className="increase" onClick={() => setCount(count + 1)}>+</button>
        <button className="decrease" onClick={() => count > 0 && setCount(count - 1)}>-</button>
      </div>
      </div>
    )   
   }

   export default Card;