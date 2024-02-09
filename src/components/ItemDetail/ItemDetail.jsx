import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import {useCart} from "../../context/CartContext"

const ItemDetail = ({
  id,
  name,
  img,
  category,
  price,
  description,
  stock,
}) => {
  const [quantity,setQuantity] = useState(0)
  const {addItem} =useCart()
  const handleOnAdd = (quantity) => {
    const objProducToAdd = {
      id,
      name,
      quantity,
      price,
    };

    addItem(objProducToAdd)
    setQuantity(quantity);

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
      </div>
    </article>
  );
};

export default ItemDetail;

