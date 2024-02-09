import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({
  id,
  name,
  img,
  category,
  price,
  description,
  stock,
}) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [cartSummary, setCartSummary] = useState([]);

  const handleOnAdd = (quantity) => {
    const newTotalQuantity = totalQuantity + quantity;
    if (newTotalQuantity > stock) {
      setErrorMessage(
        `¡No hay suficiente stock disponible! El stock máximo de este producto es ${stock}`
      );
    } else {
      const newItem = {
        id,
        name,
        quantity,
        price,
      };
      setCartSummary([...cartSummary, newItem]);
      setTotalQuantity(newTotalQuantity);
      setErrorMessage("");
      console.log("Se agregó correctamente:", newItem);
    }
  };

  const handleFinishPurchase = () => {
    // Aquí puedes agregar la lógica para finalizar la compra, como enviar los detalles de la compra a un servidor o mostrar un mensaje de confirmación
    console.log("Compra finalizada:", cartSummary);
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
        <ItemCount stock={stock} onAdd={handleOnAdd} />
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        {cartSummary.length > 0 && (
          <div>
            <h4>Resumen de la compra:</h4>
            <ul>
              {cartSummary.map((item) => (
                <li key={item.id}>
                  {item.name} - Cantidad: {item.quantity}
                </li>
              ))}
            </ul>
            <button onClick={handleFinishPurchase}>Terminar compra</button>
          </div>
        )}
      </div>
    </article>
  );
};

export default ItemDetail;

