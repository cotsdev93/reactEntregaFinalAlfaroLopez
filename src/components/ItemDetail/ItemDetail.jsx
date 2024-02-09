import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({
  id,
  name,
  img,
  category,
  price,
  description,
  stock,
}) => {
  const [showCartButton, setShowCartButton] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const [cartSummary, setCartSummary] = useState([]);
  const { addItem } = useCart();

  const handleOnAdd = (quantity) => {
    const objProductToAdd = {
      id,
      name,
      quantity,
      price,
    };

    addItem(objProductToAdd);
    setQuantity(quantity);

    
    const newCartItem = { ...objProductToAdd };
    setCartSummary([...cartSummary, newCartItem]);

 
    setShowCartButton(false);
  };

  const handleFinishPurchase = () => {

    console.log("terminado!");
  };

  return (
    <article>
      <div className="container">
        <div className="title">
          <h3>{name}</h3>
        </div>
        <img src={import.meta.env.BASE_URL + img} style={{ width: 200 }} />
        <div className="cat">
          <p>Categoría: {category}</p>
          <h4>${price}</h4>
        </div>
        <p>Descripción:</p>
        <p>{description}</p>
        {showCartButton ? (
          <ItemCount stock={stock} onAdd={handleOnAdd} />
        ) : (
          <div>
            {cartSummary.length > 0 && (
              <div>
                <h3>Resumen del Carrito:</h3>
                <ul>
                  {cartSummary.map((item, index) => (
                    <li key={index}>
                      {item.name} - Cantidad: {item.quantity}
                    </li>
                  ))}
                </ul>
                <Link to="/cart">
                  <button>Terminar Compra</button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ItemDetail;
