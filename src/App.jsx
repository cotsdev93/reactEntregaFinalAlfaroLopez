import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import CartView from "./components/CartView/CartView"

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>

          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={"fotos de"} />} />
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />
          </Routes>

        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
