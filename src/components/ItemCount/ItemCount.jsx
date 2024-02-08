import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({ initial = 1, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            setCount(prev => prev + 1)
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(prev => prev - 1)
        }
    }

    return (
        <div className="counter">
            <div>
                <button className="botonNumero" onClick={decrement}>-</button>
                <button className="agregar"onClick={() => onAdd(count)}>Agregar al carrito</button>
                <button className="botonNumero" onClick={increment}>+</button>
            </div>
            <h3 className="count">{count}</h3>
        </div>
    )
}

export default ItemCount