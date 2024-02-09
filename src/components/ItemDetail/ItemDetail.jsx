import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ id, name, img, category, price, description, stock }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);

  const handleOnAdd = (quantity) => {
    const newTotalQuantity = totalQuantity + quantity;
    setTotalQuantity(newTotalQuantity);

    console.log("Se agregó correctamente:", {
      id,
      name,
      quantity: newTotalQuantity, 
      price,
    });
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
        <p>Total en el carrito: {totalQuantity}</p>
      </div>
    </article>
  );
};

export default ItemDetail;
