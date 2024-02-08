import CartWidget from "../CartWidget.jsx/CartWidget"
import { Link } from "react-router-dom"

import "./NavBar.css"

import { useEffect, useState } from "react"
import { QuerySnapshot, collection, getDocs } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const NavBar = () => {

    const [categories, setCategories] = useState([]); // Corregido: inicializar el estado con un array vacío
    useEffect(() => {
        const categoriesCollection = collection(db, "categories");

        getDocs(categoriesCollection)
            .then(QuerySnapshot => {
                const categoriesAdapted = QuerySnapshot.docs.map(doc => {
                    const fields = doc.data();
                    return { id: doc.id, ...fields };
                });
                setCategories(categoriesAdapted);
            });
    }, []);

    return (
        <>
            <nav>
                <div className="navContainer">
                    <Link to="/">
                        <h3 className="logo">Lens Decides</h3>
                    </Link>
                    <div className="buttons">
                        {
                            categories.map(cat => (
                                <Link className="link" key={cat.id} to={`category/${cat.slug}`}>{cat.name}</Link>
                            ))
                        }
                    </div>
                </div>
                <CartWidget />
            </nav>
        </>
    );
};

export default NavBar;
