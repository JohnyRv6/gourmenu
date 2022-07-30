import { useState } from "react";
import './Counter.scss';

const Counter = ({ stock, onAdd }) => {

    const [count, setCount] = useState(1);

    const handleCount = (operator) => {
        setCount(count + (operator));
    }

    return (
        <div className="counter-container">
                <button className="countButton" disabled={count === 1} onClick={() => handleCount(-1)}>-</button>
                <h2>{count}</h2>
                <button className="countButton" disabled={count === stock} onClick={() => handleCount(+1)}>+</button>
                <button className="addButton" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default Counter;