import { useState, useEffect } from "react"
// import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ITemList"
import "./itemListContainer.css"
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase/firebaseConfig"
import { getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {


        // const asyncFunction = categoryId ? getProductsByCategory : getProducts

        // asyncFunction(categoryId)
        //     .then(products => {
        //         setProducts(products)
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })

        const productsCollection = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)) : collection(db, "products");
        getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                })
                setProducts(productsAdapted)
            })
    }, [categoryId])

    return (
        <div>
            <h3 className="greeting">{greeting + (categoryId ? ` ${categoryId}` : '')}</h3>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer