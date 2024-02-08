import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({ id, name, img, category, price, description, stock }) => {

    const handleOnAdd = (quantity) => {
        const objProduct = {
            id,
            name,
            quantity,
            price
        }

        console.log("se agrego correctamente: ", objProduct)
        setQuantity(quantity)
    }

    return (
        <article>
            <div className="container">
                <div className="title">
                    <h3>{name}</h3>
                </div>
                <img src={import.meta.env.BASE_URL + img} style={{ width: 200 }} />
                <div className="cat">
                    <p>cat: {category}</p>
                    <h4>${price}</h4>

                </div>
                <p>descripcion:</p>
                <p>{description}</p>
                <ItemCount stock={stock} onAdd={handleOnAdd} />
            </div>

        </article>

    )
}

export default ItemDetail