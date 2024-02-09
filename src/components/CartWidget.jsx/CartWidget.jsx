import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../../context/CartContext'
import "./CartWidget.css"

const CartWidget = () => {
    const { totalQuantity } = useCart()
    return (
        <>
            <div className="cartContainer">
                <FontAwesomeIcon icon={faCartShopping} className="cart" />
                <div className="cartCounter"><span className='cartNumber'>{totalQuantity}</span></div>
            </div>
        </>
    )
}

export default CartWidget