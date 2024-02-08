import { useState, useEffect } from "react"
// import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import { db } from "../../services/firebase/firebaseConfig"
import { getDoc, doc, QueryDocumentSnapshot } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const { productId } = useParams()

    useEffect(() => {
        getProductsById(productId)
            .then(product => {
                setProduct(product)
            })

        const productDocument = doc(db, "products", productId)

        getDoc(productDocument)
            .then(QueryDocumentSnapshot => {
                const fields = QueryDocumentSnapshot.data()
                const productAdapted = {id: QueryDocumentSnapshot.id, ...fields}
                setProduct(productAdapted)
            })
    }, [productId])

    return (
        <div>
            <h4 className="tituloDetail">detalle de producto</h4>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer