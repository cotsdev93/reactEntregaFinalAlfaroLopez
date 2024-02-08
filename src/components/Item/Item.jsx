import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({ id, name, img, category, price }) => {
    return (
        <article>
            <h3>{name}</h3>
            <img src={import.meta.env.BASE_URL + img} style={{ width: 120 }} />
            <p>Cat: {category}</p>
            <div className="precio">
                <h4>${price}</h4>
                <Link className="detalle"to={`/detail/${id}`}>detalle</Link>
            </div>
        </article>
    )
}

export default Item