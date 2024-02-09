import { useCart } from "../../context/CartContext"
import "./CartView.css"
const CartView = () => {

    const { cart, total } = useCart()
    return (
        <><section>
            <h3>Cart</h3>
            {
                cart.map(prod => {
                    return (
                        <div className="cartItem"key={prod.id}>
                            <h3>Product: {prod.name}</h3>
                            <h3>cantidad: {prod.quantity}</h3>
                            <h3>precio por unidad: ${prod.price}</h3>
                            <h2>subtotal: ${prod.quantity * prod.price} </h2>
                        </div>
                    )
                })
            }
        </section>
        <section>
            <h2>total de la compra:${total}</h2>
        </section>
        </>
    )
}

export default CartView