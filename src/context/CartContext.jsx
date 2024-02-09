
import { createContext, useContext, } from "react"
export const CartContext = createContext()
import { useState } from "react"

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    console.log(cart)
    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            console.error("ya esta agregado el producto")
        }

    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id === id)
        setCart(cartUpdated)
    }

    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })
        return accu
    }

    const totalQuantity = getTotalQuantity()
    
    const getTotal = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })

        return accu
    }

    const total = getTotal()


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}

