import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import "./CartWidget.css"

const CartWidget = () => {
    return (
        <>
            <div className="cartContainer">
                <FontAwesomeIcon icon={faCartShopping} className="cart" />
                <div className="cartCounter"><span className='cartNumber'>0</span></div>
            </div>
        </>
    )
}

export default CartWidget